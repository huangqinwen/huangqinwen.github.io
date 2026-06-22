/* =====================================================================
   Open Notes on Visible Aging — interactions
   - Flip-through notebook pager
   - Build-a-peptide: 3D residue model (3Dmol.js) + real 2D structure
     (RDKit.js, CoordGen). Both lazy-loaded. Verifiable.
   - Notes accordion
   ===================================================================== */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ==================================================================
     PAGE-FLIP PAGER
     ================================================================== */
  var pagesEl = document.getElementById("pages");
  var pages = pagesEl ? Array.prototype.slice.call(pagesEl.querySelectorAll(".page")).sort(function (a, b) {
    return Number(a.getAttribute("data-order")) - Number(b.getAttribute("data-order"));
  }) : [];
  var bms = Array.prototype.slice.call(document.querySelectorAll(".bm"));
  var idx = 0, animating = false, LAST = pages.length - 1;

  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function emitPage() {
    try { document.dispatchEvent(new CustomEvent("nbpage", { detail: pages[idx] ? pages[idx].id : "" })); } catch (e) {}
  }
  function chrome() {
    bms.forEach(function (b, i) { b.classList.toggle("active", i === idx); });
    var cur = document.getElementById("pg-cur");
    if (cur) cur.textContent = pad(idx);
    var prev = document.querySelector('[data-nav="prev"]');
    var next = document.querySelector('[data-nav="next"]');
    if (prev) prev.disabled = idx === 0;
    if (next) next.disabled = idx === LAST;
    emitPage();
  }
  function syncHash() {
    if (history.replaceState) { try { history.replaceState(null, "", "#" + pages[idx].id); } catch (e) {} }
  }

  function go(target) {
    target = Math.max(0, Math.min(LAST, target));
    if (animating || target === idx || !pages.length) return;
    var dir = target > idx ? 1 : -1, out = pages[idx], inc = pages[target];

    if (reduceMotion) {
      out.classList.remove("active"); inc.classList.add("active");
      inc.scrollTop = 0; idx = target; chrome(); syncHash(); return;
    }

    animating = true;
    inc.classList.add("show"); out.classList.add("show");
    if (dir === 1) {
      inc.style.zIndex = "1"; out.style.zIndex = "2";
      inc.style.transform = "rotateY(0deg)";
      void out.offsetWidth;
      out.classList.add("turning"); out.style.transform = "rotateY(-178deg)";
    } else {
      out.style.zIndex = "1"; inc.style.zIndex = "2";
      inc.style.transition = "none"; inc.style.transform = "rotateY(-178deg)";
      inc.classList.add("turning"); void inc.offsetWidth;
      inc.style.transition = ""; inc.style.transform = "rotateY(0deg)";
    }
    var turner = dir === 1 ? out : inc, done = false;
    function finalize() {
      if (done) return; done = true;
      turner.removeEventListener("transitionend", onEnd);
      pages.forEach(function (p) {
        p.classList.remove("show", "turning", "active");
        p.style.transform = ""; p.style.zIndex = ""; p.style.transition = "";
      });
      inc.classList.add("active"); inc.scrollTop = 0;
      idx = target; animating = false; chrome(); syncHash();
    }
    function onEnd(e) { if (e.target === turner && e.propertyName === "transform") finalize(); }
    turner.addEventListener("transitionend", onEnd);
    setTimeout(finalize, 820);
  }

  document.querySelectorAll("[data-go]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      if (el.tagName === "A") e.preventDefault();
      go(parseInt(el.getAttribute("data-go"), 10) || 0);
    });
  });
  document.querySelectorAll("[data-nav]").forEach(function (b) {
    b.addEventListener("click", function () { go(idx + (b.getAttribute("data-nav") === "next" ? 1 : -1)); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
    if (e.key === "ArrowRight") go(idx + 1);
    else if (e.key === "ArrowLeft") go(idx - 1);
  });

  if (pages.length && location.hash) {
    var want = -1;
    pages.forEach(function (p, i) { if ("#" + p.id === location.hash) want = i; });
    if (want > 0) { pages[0].classList.remove("active"); pages[want].classList.add("active"); idx = want; }
  }
  chrome();

  /* ==================================================================
     Lazy CDN loaders — RDKit (2D) + 3Dmol (3D)
     ================================================================== */
  var rdkitState = 0, rdkitCbs = [];
  function ensureRDKit(cb) {
    if (window.RDKit) { if (cb) cb(); return; }
    if (cb) rdkitCbs.push(cb);
    if (rdkitState === 1) return;
    rdkitState = 1;
    var s = document.createElement("script");
    s.src = "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js";
    s.onload = function () {
      window.initRDKitModule({ locateFile: function () { return "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.wasm"; } })
        .then(function (RDKit) {
          window.RDKit = RDKit;
          try { RDKit.prefer_coordgen(true); } catch (e) {}   // cleaner 2D layouts
          rdkitState = 2; rdkitCbs.forEach(function (f) { f(); }); rdkitCbs = [];
        })
        .catch(function () { rdkitState = 3; rdkitCbs.forEach(function (f) { f(); }); rdkitCbs = []; });
    };
    s.onerror = function () { rdkitState = 3; rdkitCbs.forEach(function (f) { f(); }); rdkitCbs = []; };
    document.head.appendChild(s);
  }

  var molState = 0, molCbs = [];
  function ensure3Dmol(cb) {
    if (window.$3Dmol) { if (cb) cb(); return; }
    if (cb) molCbs.push(cb);
    if (molState === 1) return;
    molState = 1;
    var s = document.createElement("script");
    s.src = "https://cdn.jsdelivr.net/npm/3dmol/build/3Dmol-min.js";
    s.onload = function () { molState = 2; molCbs.forEach(function (f) { f(); }); molCbs = []; };
    s.onerror = function () { molState = 3; molCbs.forEach(function (f) { f(); }); molCbs = []; };
    document.head.appendChild(s);
  }

  /* ==================================================================
     BUILD-A-PEPTIDE
     ================================================================== */
  var paletteEl = document.querySelector("[data-pep-palette]");
  if (paletteEl) buildPeptide();

  function buildPeptide() {
    var AA = [
      { c: "A", t: "Ala", cat: "hydrophobic", m: 71.08 }, { c: "R", t: "Arg", cat: "basic", m: 156.19 },
      { c: "N", t: "Asn", cat: "polar", m: 114.10 }, { c: "D", t: "Asp", cat: "acidic", m: 115.09 },
      { c: "C", t: "Cys", cat: "special", m: 103.14 }, { c: "E", t: "Glu", cat: "acidic", m: 129.12 },
      { c: "Q", t: "Gln", cat: "polar", m: 128.13 }, { c: "G", t: "Gly", cat: "special", m: 57.05 },
      { c: "H", t: "His", cat: "basic", m: 137.14 }, { c: "I", t: "Ile", cat: "hydrophobic", m: 113.16 },
      { c: "L", t: "Leu", cat: "hydrophobic", m: 113.16 }, { c: "K", t: "Lys", cat: "basic", m: 128.17 },
      { c: "M", t: "Met", cat: "hydrophobic", m: 131.20 }, { c: "F", t: "Phe", cat: "hydrophobic", m: 147.18 },
      { c: "P", t: "Pro", cat: "special", m: 97.12 }, { c: "S", t: "Ser", cat: "polar", m: 87.08 },
      { c: "T", t: "Thr", cat: "polar", m: 101.10 }, { c: "W", t: "Trp", cat: "hydrophobic", m: 186.21 },
      { c: "Y", t: "Tyr", cat: "polar", m: 163.18 }, { c: "V", t: "Val", cat: "hydrophobic", m: 99.13 }
    ];
    var SMI = {
      A: "C", R: "CCCNC(=N)N", N: "CC(N)=O", D: "CC(O)=O", C: "CS", E: "CCC(O)=O", Q: "CCC(N)=O",
      H: "Cc1c[nH]cn1", I: "C(C)CC", L: "CC(C)C", K: "CCCCN", M: "CCSC", F: "Cc1ccccc1", S: "CO",
      T: "C(O)C", W: "Cc1c[nH]c2ccccc12", Y: "Cc1ccc(O)cc1", V: "C(C)C"
    };
    var CAT = { hydrophobic: "var(--c-tool)", polar: "var(--c-bio)", acidic: "var(--c-coral)", basic: "var(--c-ai)", special: "var(--c-self)" };
    var HEX = { hydrophobic: 0xE0A02E, polar: 0x2FA66A, acidic: 0xF26A3D, basic: 0x2E6FE6, special: 0x7E5BD6 };
    var HYDRO = { A: 1, V: 1, L: 1, I: 1, M: 1, F: 1, W: 1 };
    var byCode = {};
    AA.forEach(function (a) { byCode[a.c] = a; });

    var PRESETS = [
      { name: "Oxytocin", seq: "CYIQNCPLG", note: "The bonding and labor hormone. Its natural form is a little disulfide-ring with an amidated tail." },
      { name: "Vasopressin", seq: "CYFQNCPRG", note: "Oxytocin’s close cousin: it helps the kidneys conserve water and can tighten blood vessels." },
      { name: "Leu-enkephalin", seq: "YGGFL", note: "A five-letter, endogenous opioid signal that helps modulate pain." },
      { name: "Substance P", seq: "RPKPQQFFGLM", note: "A neuropeptide that helps carry pain and inflammation signals." },
      { name: "Angiotensin II", seq: "DRVYIHPF", note: "A key blood-pressure signal: it raises vascular tone and helps control salt and water balance." },
      { name: "Glucagon", seq: "HSQGTFTSDYSKYLDSRRAQDFVQWLMNT", note: "Insulin’s counterpoint: it tells the liver to release stored glucose into the bloodstream." },
      { name: "GLP-1 (native)", seq: "HAEGTFTSDVSSYLEGQAAKEFIAWLVKGRG", note: "A post-meal signal that supports insulin release and appetite regulation. Semaglutide is a longer-lasting, modified cousin." },
      { name: "Insulin B-chain", seq: "FVNQHLCGSHLVEALYLVCGERGFFYTPKT", note: "One half of insulin’s two-chain architecture. Together, insulin signals cells to take up glucose." },
      { name: "α-MSH", seq: "SYSMEHFRWGKPV", note: "Part of the skin-pigment story: it signals melanocytes to make melanin. The natural peptide also has end modifications." },
      { name: "β-Endorphin", seq: "YGGFMTSEKSQTPLVTLFKNAIIKNAYKKGE", note: "A 31-amino-acid endogenous opioid peptide involved in pain modulation and reward." }
    ];
    var MAX = 50;
    var seq = [], view = "3d";

    var structEl = document.querySelector("[data-pep-struct]");
    var el3d = document.querySelector("[data-pep-3d]");
    var seqEl = document.querySelector("[data-pep-seq]");
    var readingEl = document.querySelector("[data-pep-reading]");
    var noteEl = document.querySelector("[data-pep-note]");
    var capEl = document.querySelector("[data-pep-cap]");
    var presetsEl = document.querySelector("[data-pep-presets]");
    var buildPage = document.getElementById("build");
    var m = {
      len: document.querySelector('[data-m="len"]'), mw: document.querySelector('[data-m="mw"]'),
      charge: document.querySelector('[data-m="charge"]'), hydro: document.querySelector('[data-m="hydro"]')
    };
    var challengeEl = document.querySelector("[data-pep-challenge]");
    var challengeTextEl = document.querySelector("[data-pep-challenge-text]");
    var challengeStatusEl = document.querySelector("[data-pep-challenge-status]");
    var challengeNextEl = document.querySelector("[data-pep-challenge-next]");
    var CHALLENGES = [
      { text: "Make a mini magnet: 5+ residues and a net charge of +2 or more.", done: function (n, charge) { return n >= 5 && charge >= 2; } },
      { text: "Make an oily little chain: 6+ residues and at least 60% hydrophobic.", done: function (n, charge, hyd) { return n >= 6 && hyd >= 60; } },
      { text: "Make a water-lover: 6+ residues and no more than 20% hydrophobic.", done: function (n, charge, hyd) { return n >= 6 && hyd <= 20; } },
      { text: "Make a balanced ten: exactly 10 residues with a neutral net charge.", done: function (n, charge) { return n === 10 && charge === 0; } }
    ];
    var challenge = null;
    var EMPTY3D = '<div class="pep-empty">build a peptide to fold it in 3D →</div>';
    var EMPTY2D = '<div class="pep-empty">build a peptide to see its structure →</div>';
    var viewer3d = null, spinning = false, MINFOLD = 5, FOLD_TIMEOUT = 35000, FOLD_TRIES = 3;
    var pdbCache = {}, foldReq = 0;
    var ZCTRL = '<div class="pep-zoom"><button type="button" data-zoom="out" aria-label="Zoom out">−</button><button type="button" data-zoom="reset" aria-label="Reset zoom">⤢</button><button type="button" data-zoom="in" aria-label="Zoom in">+</button></div>';
    var vb = null, vbBase = null, svgEl = null, zdrag = false, zlx = 0, zly = 0;

    function buildActive() { return !pagesEl || (buildPage && buildPage.classList.contains("active")); }

    // palette
    AA.forEach(function (a) {
      var b = document.createElement("button");
      b.className = "aa"; b.style.setProperty("--rc", CAT[a.cat]);
      b.setAttribute("aria-label", a.t + " — add to peptide");
      b.innerHTML = '<span class="aa-c">' + a.c + '</span><span class="aa-t">' + a.t + '</span>';
      b.addEventListener("click", function () { add(a); });
      paletteEl.appendChild(b);
    });

    // presets
    if (presetsEl) PRESETS.forEach(function (p) {
      var b = document.createElement("button");
      b.className = "preset"; b.textContent = p.name; b.title = p.note;
      b.setAttribute("aria-pressed", "false");
      b.addEventListener("click", function () { loadPreset(p); });
      presetsEl.appendChild(b);
    });
    function loadPreset(p) {
      seq = p.seq.split("").map(function (c) { return byCode[c]; }).filter(Boolean);
      render(); update();
      if (noteEl) noteEl.textContent = p.name + " — " + p.note;
      if (presetsEl) Array.prototype.forEach.call(presetsEl.querySelectorAll(".preset"), function (b) {
        var active = b.textContent === p.name;
        b.classList.toggle("active", active);
        b.setAttribute("aria-pressed", String(active));
      });
    }
    function clearNote() {
      if (noteEl) noteEl.textContent = "Your own sequence — add, remove, and see how its chemistry changes.";
      if (presetsEl) Array.prototype.forEach.call(presetsEl.querySelectorAll(".preset"), function (b) {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
    }
    function chooseChallenge() {
      var next = Math.floor(Math.random() * CHALLENGES.length);
      if (challenge && CHALLENGES.length > 1) while (CHALLENGES[next] === challenge) next = Math.floor(Math.random() * CHALLENGES.length);
      challenge = CHALLENGES[next];
      if (challengeTextEl) challengeTextEl.textContent = challenge.text;
      if (challengeEl) challengeEl.classList.remove("complete");
      if (challengeStatusEl) challengeStatusEl.textContent = "";
    }
    function updateChallenge(n, charge, hyd) {
      if (!challenge) return;
      var complete = challenge.done(n, charge, hyd);
      if (challengeEl) challengeEl.classList.toggle("complete", complete);
      if (challengeStatusEl) challengeStatusEl.textContent = complete ? "✓ mission complete — chemistry achieved." : (n ? "keep tuning the sequence →" : "start building →");
    }

    // view toggle
    document.querySelectorAll("[data-view]").forEach(function (b) {
      b.addEventListener("click", function () { setView(b.getAttribute("data-view")); });
    });
    function setView(v) {
      view = v;
      if (el3d) el3d.hidden = v !== "3d";
      if (structEl) structEl.hidden = v !== "struct";
      document.querySelectorAll("[data-view]").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-view") === v); });
      render();
    }

    function add(a) {
      if (seq.length >= MAX) { flash("max " + MAX + " residues"); return; }
      clearNote(); seq.push(a); render(); update();
    }
    function refresh() { clearNote(); render(); update(); }

    function render() {
      if (!buildActive()) return;        // stay lazy until the page is open
      if (view === "3d") render3D(); else renderStructure();
    }

    function peptideSmiles() {
      return seq.map(function (a) {
        if (a.c === "G") return "NCC(=O)";
        if (a.c === "P") return "N1CCCC1C(=O)";
        return "NC(" + SMI[a.c] + ")C(=O)";
      }).join("") + "O";
    }

    /* ---- 3D: real predicted fold via ESMFold ---- */
    function curSeqStr() { return seq.map(function (a) { return a.c; }).join(""); }
    function setCap(t) { if (capEl) capEl.textContent = t || ""; }
    function disposeViewer() { if (viewer3d) { try { viewer3d.spin(false); } catch (e) {} } viewer3d = null; spinning = false; }

    // ESMFold is only called when the user presses "Predict" — never while typing
    function render3D() {
      if (!el3d) return;
      var s = curSeqStr();
      if (!s) { disposeViewer(); el3d.innerHTML = EMPTY3D; setCap(""); return; }
      if (s.length < MINFOLD) { disposeViewer(); el3d.innerHTML = '<div class="pep-empty">add a few more residues, then predict →</div>'; setCap("short peptides have no fixed 3D shape"); return; }
      var cached = pdbCache[s];
      if (cached && cached !== "ERR") { drawPdb(cached, s); return; }   // already folded → instant, no call
      disposeViewer();
      el3d.innerHTML = foldPromptHTML(s.length, cached === "ERR");
      setCap(cached === "ERR" ? "ESMFold couldn't fold this one — try again" : "ready — folded live by ESMFold (a free public service)");
    }

    function foldPromptHTML(n, retry) {
      return '<div class="pep-fold"><button class="pep-foldbtn" data-fold>' + (retry ? "Try folding again" : "Predict 3D fold") + ' &rarr;</button><small>' + n + ' residues · folded live by ESMFold — a new sequence can take 10–30s, or occasionally time out</small></div>';
    }

    function foldNow() {
      var s = curSeqStr();
      if (s.length < MINFOLD) return;
      if (pdbCache[s] && pdbCache[s] !== "ERR") { drawPdb(pdbCache[s], s); return; }
      el3d.innerHTML = '<div class="pep-empty">folding live… <small>(ESMFold — a new sequence can take 10–30s)</small></div>';
      setCap("folding live with ESMFold — a new sequence can take 10–30s…");
      ensure3Dmol();
      fold(s);
    }

    function fold(s) {
      if (pdbCache[s] && pdbCache[s] !== "ERR") { if (curSeqStr() === s && view === "3d") drawPdb(pdbCache[s], s); return; }
      foldAttempt(s, ++foldReq, 1);
    }

    // Preset peptides are cached on ESMFold's servers (instant); novel custom
    // sequences need live inference and often 504 on the first try. That first
    // (slow) request warms the server cache, so an automatic retry usually
    // returns instantly — turning a "broken" custom fold into a few-second wait.
    // NOTE: ESMFold's free API returns CORS headers ONLY on 200s — its 504/error
    // responses omit Access-Control-Allow-Origin, so a server-side timeout reaches
    // the browser as a CORS error / "Failed to fetch" (logged in console, can't be
    // silenced from JS), not an HTTP status. Not our bug; only a proxy we control
    // could fix it. The retry below is the client-side mitigation.
    function foldAttempt(s, token, attempt) {
      var stale = function () { return token !== foldReq || curSeqStr() !== s || view !== "3d"; };
      var ctrl = ("AbortController" in window) ? new AbortController() : null;
      var to = ctrl ? setTimeout(function () { ctrl.abort(); }, FOLD_TIMEOUT) : null;
      fetch("https://api.esmatlas.com/foldSequence/v1/pdb/", { method: "POST", headers: { "Content-Type": "text/plain" }, body: s, signal: ctrl ? ctrl.signal : undefined })
        .then(function (r) { if (to) clearTimeout(to); if (!r.ok) throw new Error("HTTP " + r.status); return r.text(); })
        .then(function (pdb) {
          if (!/^ATOM/m.test(pdb)) throw new Error("no structure returned");
          pdbCache[s] = pdb;
          if (!stale()) drawPdb(pdb, s);
        })
        .catch(function (err) {
          if (to) clearTimeout(to);
          if (stale()) return;   // user moved on — drop silently
          var msg = err && (err.message || "");
          var is4xx = /HTTP 4/.test(msg);
          // Everything except a genuine 4xx (bad sequence) is transient and worth a retry.
          // Note: ESMFold's API Gateway drops CORS headers on its 504/error responses, so a
          // server-side timeout reaches the browser as "Failed to fetch" (net::ERR_FAILED) — a
          // TypeError, not an HTTP 5xx. The first slow request still warms the cache, so the
          // retry usually lands a clean 200.
          var transient = !is4xx;
          if (transient && attempt < FOLD_TRIES) {
            setCap("ESMFold is computing this new sequence… (retry " + attempt + " of " + (FOLD_TRIES - 1) + ")");
            setTimeout(function () { if (!stale()) foldAttempt(s, token, attempt + 1); }, 1500);
            return;
          }
          try { console.warn("[ESMFold] failed:", msg || err); } catch (_) {}
          var why = (err && err.name === "AbortError") ? ("timed out (" + Math.round(FOLD_TIMEOUT / 1000) + "s)")
            : /HTTP 429/.test(msg) ? "rate-limited — wait a moment"
            : /HTTP 5/.test(msg) ? "server busy — try again in a moment"
            : /HTTP/.test(msg) ? ("server " + msg)
            : /no structure/.test(msg) ? "no structure (sequence too hard)"
            : "didn't respond — it's a free, often-busy service (or you're offline). Try again";
          // only true 4xx poisons the cache; transient failures stay retryable
          pdbCache[s] = is4xx ? "ERR" : undefined;
          if (!stale()) {
            if (!viewer3d) el3d.innerHTML = '<div class="pep-fold"><button class="pep-foldbtn" data-fold>Try again &rarr;</button><small>ESMFold ' + why + '</small></div>';
            setCap("ESMFold " + why);
          }
        });
    }

    function drawPdb(pdb, s) {
      ensure3Dmol(function () {
        if (view !== "3d" || curSeqStr() !== s) return;
        if (!window.$3Dmol) { setCap("3D viewer failed to load"); return; }
        if (!viewer3d) {
          el3d.innerHTML = "";
          try { viewer3d = window.$3Dmol.createViewer(el3d, { backgroundColor: "white" }); spinning = false; }
          catch (e) { el3d.innerHTML = '<div class="pep-empty">3D failed to start.</div>'; return; }
        }
        viewer3d.clear();
        viewer3d.addModel(pdb, "pdb");
        // ESMFold stores pLDDT (0–1) in the B-factor column; colour low→high = red→blue
        var scheme = { colorscheme: { prop: "b", gradient: "roygb", min: 0, max: 1 } };
        viewer3d.setStyle({}, { cartoon: { colorscheme: scheme.colorscheme, thickness: 0.4 }, stick: { radius: 0.13, colorscheme: scheme.colorscheme } });
        viewer3d.zoomTo();
        viewer3d.resize();
        viewer3d.render();
        if (!spinning && !reduceMotion) { try { viewer3d.spin("y", 0.5); spinning = true; } catch (e) {} }
        setCap(confCaption(pdb, s.length));
      });
    }

    function confCaption(pdb, n) {
      var sum = 0, c = 0;
      pdb.split("\n").forEach(function (l) {
        if (l.indexOf("ATOM") === 0 && l.substr(12, 4).trim() === "CA") { var b = parseFloat(l.substr(60, 6)); if (!isNaN(b)) { sum += b; c++; } }
      });
      var avg = c ? Math.round((sum / c) * 100) : 0;   // pLDDT stored 0–1 → percent
      var lvl = avg >= 70 ? "confident" : avg >= 50 ? "low confidence" : "very low confidence";
      var warn = n < 18 ? " · short peptides barely fold, treat as illustrative" : "";
      return "ESMFold prediction · ~" + avg + "% pLDDT (" + lvl + ")" + warn;
    }

    /* ---- 2D chemical structure (RDKit, CoordGen) ---- */
    function renderStructure() {
      if (!structEl) return;
      if (!seq.length) { structEl.innerHTML = EMPTY2D; setCap(""); return; }
      if (rdkitState === 3) { structEl.innerHTML = '<div class="pep-empty">chem engine offline — try 3D.</div>'; setCap(""); return; }
      if (!window.RDKit) {
        structEl.innerHTML = '<div class="pep-empty">drawing the structure…</div>';
        setCap("exact 2D structure · RDKit");
        ensureRDKit(function () { if (view === "struct") renderStructure(); });
        return;
      }
      var mol = null;
      try { mol = window.RDKit.get_mol(peptideSmiles()); } catch (e) { mol = null; }
      if (!mol || (mol.is_valid && !mol.is_valid())) { if (mol && mol.delete) mol.delete(); structEl.innerHTML = '<div class="pep-empty">couldn\'t draw that one.</div>'; return; }
      var n = seq.length;
      var w = Math.round(Math.min(640, Math.max(330, Math.sqrt(n) * 118)));
      var h = Math.round(Math.min(460, Math.max(190, Math.sqrt(n) * 92)));
      var svg = "";
      try { svg = mol.get_svg(w, h); } catch (e) { svg = ""; }
      mol.delete();
      var cls = n <= 12 ? "pep-svg-wrap sk-soft" : "pep-svg-wrap";
      structEl.innerHTML = svg ? (ZCTRL + '<div class="' + cls + '">' + svg + "</div>") : '<div class="pep-empty">couldn\'t draw that one.</div>';
      setCap(svg ? "exact 2D structure · RDKit · scroll / +− to zoom, drag to pan" : "");
      zInit();
    }

    /* ---- 2D zoom + pan: manipulate the SVG viewBox (always crisp, vector) ---- */
    function zInit() {
      svgEl = structEl ? structEl.querySelector("svg") : null;
      vb = vbBase = null;
      if (structEl) structEl.classList.remove("zoomed", "grabbing");
      if (!svgEl) return;
      var a = (svgEl.getAttribute("viewBox") || "").split(/[\s,]+/).map(Number);
      if (a.length === 4 && a.every(function (n) { return !isNaN(n); })) {
        vbBase = { x: a[0], y: a[1], w: a[2], h: a[3] };
        vb = { x: a[0], y: a[1], w: a[2], h: a[3] };
      }
    }
    function zSet() {
      if (svgEl && vb) svgEl.setAttribute("viewBox", vb.x + " " + vb.y + " " + vb.w + " " + vb.h);
      if (structEl && vbBase) structEl.classList.toggle("zoomed", isZoomed());
    }
    function isZoomed() { return !!(vb && vbBase && vb.w < vbBase.w - 0.5); }
    function zClampPan() {
      if (!vb || !vbBase) return;
      vb.x = Math.max(vbBase.x, Math.min(vbBase.x + vbBase.w - vb.w, vb.x));
      vb.y = Math.max(vbBase.y, Math.min(vbBase.y + vbBase.h - vb.h, vb.y));
    }
    function zoomAt(factor, clientX, clientY) {
      if (!vb || !vbBase || !svgEl) return;
      var rect = svgEl.getBoundingClientRect();
      var rx = rect.width ? Math.min(1, Math.max(0, (clientX - rect.left) / rect.width)) : 0.5;
      var ry = rect.height ? Math.min(1, Math.max(0, (clientY - rect.top) / rect.height)) : 0.5;
      var px = vb.x + rx * vb.w, py = vb.y + ry * vb.h;
      var newW = Math.max(vbBase.w / 8, Math.min(vbBase.w, vb.w / factor));
      var newH = newW * (vbBase.h / vbBase.w);
      vb.w = newW; vb.h = newH; vb.x = px - rx * newW; vb.y = py - ry * newH;
      zClampPan(); zSet();
    }
    function zoomCenter(factor) { if (!svgEl) return; var r = svgEl.getBoundingClientRect(); zoomAt(factor, r.left + r.width / 2, r.top + r.height / 2); }
    function zReset() { if (vbBase) { vb = { x: vbBase.x, y: vbBase.y, w: vbBase.w, h: vbBase.h }; zSet(); } }
    function setupZoom() {
      if (!structEl) return;
      structEl.addEventListener("wheel", function (e) {
        if (structEl.hidden || !svgEl) return;
        e.preventDefault();
        zoomAt(e.deltaY < 0 ? 1.15 : 1 / 1.15, e.clientX, e.clientY);
      }, { passive: false });
      structEl.addEventListener("click", function (e) {
        var b = e.target.closest ? e.target.closest("[data-zoom]") : null;
        if (!b) return;
        var a = b.getAttribute("data-zoom");
        if (a === "in") zoomCenter(1.4); else if (a === "out") zoomCenter(1 / 1.4); else zReset();
      });
      structEl.addEventListener("dblclick", function (e) {
        if (structEl.hidden || !svgEl) return;
        if (isZoomed()) zReset(); else zoomAt(2.2, e.clientX, e.clientY);
      });
      structEl.addEventListener("pointerdown", function (e) {
        if (structEl.hidden || !isZoomed() || (e.target.closest && e.target.closest("[data-zoom]"))) return;
        zdrag = true; zlx = e.clientX; zly = e.clientY;
        try { structEl.setPointerCapture(e.pointerId); } catch (_) {}
        structEl.classList.add("grabbing");
      });
      structEl.addEventListener("pointermove", function (e) {
        if (!zdrag || !vb || !svgEl) return;
        var rect = svgEl.getBoundingClientRect();
        if (rect.width) { vb.x -= (e.clientX - zlx) * (vb.w / rect.width); vb.y -= (e.clientY - zly) * (vb.h / rect.height); }
        zlx = e.clientX; zly = e.clientY; zClampPan(); zSet();
      });
      function up(e) { if (!zdrag) return; zdrag = false; try { structEl.releasePointerCapture(e.pointerId); } catch (_) {} structEl.classList.remove("grabbing"); }
      structEl.addEventListener("pointerup", up);
      structEl.addEventListener("pointercancel", up);
    }

    function update() {
      var n = seq.length, mw = 0, k = 0, r = 0, d = 0, e = 0, hyd = 0;
      seq.forEach(function (a) {
        mw += a.m;
        if (a.c === "K") k++; if (a.c === "R") r++; if (a.c === "D") d++; if (a.c === "E") e++;
        if (HYDRO[a.c]) hyd++;
      });
      if (n) mw += 18.02;
      var charge = (k + r) - (d + e), hydPct = n ? Math.round((hyd / n) * 100) : 0;
      m.len.innerHTML = n + ' <small>aa</small>';
      m.mw.innerHTML = (n ? Math.round(mw).toLocaleString() : 0) + ' <small>Da</small>';
      m.charge.textContent = n ? (charge > 0 ? "+" : "") + charge : "0";
      m.hydro.textContent = n ? hydPct + "%" : "—";
      seqEl.innerHTML = n ? seq.map(function (a) { return a.c; }).join("") : "<em>empty — start tapping →</em>";
      readingEl.textContent = reading(n, Math.round(mw), charge, hydPct);
      updateChallenge(n, charge, hydPct);
    }
    function reading(n, mw, charge, hyd) {
      if (!n) return "a peptide is just amino acids holding hands.";
      if (n === 1) return "one residue down — keep chaining.";
      var chg = charge > 1 ? "net positive (cationic)" : charge < -1 ? "net negative (anionic)" : "roughly neutral";
      var tail = hyd >= 55 ? ", and hydrophobic-leaning" : hyd <= 25 ? ", and quite polar" : "";
      return n + " residues · ~" + mw.toLocaleString() + " Da — " + chg + tail + ".";
    }
    function flash(msg) { seqEl.innerHTML = "<em>" + msg + "</em>"; setTimeout(update, 900); }

    // tools
    document.querySelectorAll("[data-pep]").forEach(function (b) {
      b.addEventListener("click", function () {
        var act = b.getAttribute("data-pep");
        if (act === "undo") { seq.pop(); refresh(); }
        else if (act === "clear") { seq = []; refresh(); }
        else if (act === "surprise") {
          seq = []; var n = 5 + Math.floor(Math.random() * 4);
          for (var i = 0; i < n; i++) seq.push(AA[Math.floor(Math.random() * AA.length)]);
          refresh();
        } else if (act === "copy") {
          var s = seq.map(function (a) { return a.c; }).join("");
          if (!s) return;
          var label = b.textContent, ok = function () { b.textContent = "copied"; setTimeout(function () { b.textContent = label; }, 1200); };
          if (navigator.clipboard) navigator.clipboard.writeText(s).then(ok, function () { window.prompt("Sequence", s); });
          else window.prompt("Sequence", s);
        }
      });
    });
    if (challengeNextEl) challengeNextEl.addEventListener("click", function () { chooseChallenge(); update(); });

    // Predict button lives inside the (re-rendered) 3D area — delegate the click
    if (el3d) el3d.addEventListener("click", function (e) {
      var b = e.target && e.target.closest ? e.target.closest("[data-fold]") : null;
      if (b) foldNow();
    });
    setupZoom();

    // init — placeholders only; load 3D engine when the Build page is opened
    if (el3d) el3d.innerHTML = EMPTY3D;
    if (structEl) structEl.innerHTML = EMPTY2D;
    chooseChallenge();
    update();
    document.addEventListener("nbpage", function (e) { if (e.detail === "build") { ensure3Dmol(); render(); } });
    if (buildActive()) { ensure3Dmol(); render(); }
  }

  /* Writing list is now rendered natively by Jekyll from site.posts (see index.html). */

  /* field-note lightbox */
  (function () {
    var lightbox = document.querySelector("[data-lightbox]");
    if (!lightbox) return;
    var image = lightbox.querySelector("[data-lightbox-image]");
    var caption = lightbox.querySelector("[data-lightbox-caption]");
    var trigger = null;
    function openLightbox(button) {
      trigger = button;
      image.src = button.getAttribute("data-lightbox-src") || "";
      image.alt = button.getAttribute("data-lightbox-alt") || "";
      caption.textContent = button.getAttribute("data-lightbox-caption") || "";
      lightbox.hidden = false;
      var closeButton = lightbox.querySelector("[data-lightbox-close]");
      if (closeButton) closeButton.focus();
    }
    function closeLightbox() {
      lightbox.hidden = true;
      image.removeAttribute("src");
      if (trigger) { try { trigger.focus(); } catch (_) {} }
    }
    document.querySelectorAll("[data-lightbox-open]").forEach(function (button) {
      button.addEventListener("click", function () { openLightbox(button); });
    });
    lightbox.querySelectorAll("[data-lightbox-close]").forEach(function (button) {
      button.addEventListener("click", closeLightbox);
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });
  })();

  /* subscribe modal */
  (function () {
    var modal = document.querySelector("[data-modal]");
    if (!modal) return;
    function openModal(e) { if (e) e.preventDefault(); modal.hidden = false; var inp = modal.querySelector('input[type="email"]'); if (inp) { try { inp.focus(); } catch (_) {} } }
    function closeModal() { modal.hidden = true; }
    document.querySelectorAll("[data-modal-open]").forEach(function (b) { b.addEventListener("click", openModal); });
    modal.querySelectorAll("[data-modal-close]").forEach(function (b) { b.addEventListener("click", closeModal); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !modal.hidden) closeModal(); });
  })();

  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
