---
layout: note
title: "Solid State Battery — From Lab to Production"
date: 2025-10-20
q: q3
summary: "Automakers, battery manufacturers and governments are racing to capture the next wave of battery revolution. Solid-state battery seems to be a one-stop solution, but how far are we?"
---

## At a glance

- Solid-state batteries are nearing a critical inflection, moving from research labs to industrial pilots across the world
- The promise is real—but timing is uncertain, as breakthroughs in materials, supply chain, and manufacturing economics are still required
- Cost and manufacturability will decide the winners, but not chemistry alone
- Coexistence is the likely outcome: solid-state and advanced lithium-ion systems will share the market for years to come, each optimized for different applications

Solid-state batteries are entering the spotlight—featured in automaker announcements, government subsidies, and investor decks. Alongside other emerging energy-storage technologies—from advanced liquid-ion chemistries to gravity storage—they represent a broader rethinking of how energy is stored, delivered, and integrated into mobility and the grid. Yet behind every headline breakthrough are prototypes that remain difficult to scale, costly to produce, and fragile under real-world cycling. The promise of **safer, longer-range, faster-charging** electric vehicles is genuine—but the pathway from laboratory success to commercial stability is still uncertain.

Backed by billions in public and private funding, solid-state development is now a global race. [Japan’s automakers and chemical suppliers are targeting pilot production by](https://global.toyota/en/newsroom/corporate/43380876.html) **[2027](https://global.toyota/en/newsroom/corporate/43380876.html)**, while Chinese leaders such as **Qingtao and** **WeLion** have already begun deploying hybrid semi-solid packs in commercial vehicles. Western startups, including **[QuantumScape](https://www.quantumscape.com/quantumscape-and-corning-announce-agreement-for-ceramic-separator-development-commercialization/)** and **Solid Power**, continue to refine anode-free and multilayer designs.

With all these breakthroughs, the **#1 question everyone is still asking** is: *how close are we, really, to seeing solid-state batteries in the wild?*

In this piece, we dig into the heart of the question—unpacking **what “solid-state” actually means, why it matters now, and what is still standing in its way.** We will trace the story from the material science up: how replacing liquid electrolyte with solid reshapes every part of the cell; who is leading the global race to industrialize; and why the toughest challenges are no longer chemistry, but yield, interfaces, and manufacturing economics.

### What Really is Solid-State Battery?

Before diving into promise and reality, let us ground the discussion in the underlying science—how solid-state batteries function and why this material shift matters. At its core, the concept is simple: **replace the liquid electrolyte with a solid and unlock lithium-metal**. This change transforms nearly every aspect of the battery stack—ion transport, mechanical behavior, safety, and manufacturability.

**Four major electrolyte families** define today’s competitive landscape, each balancing conductivity, stability, and scalability differently.

***Sulfide Electrolytes – The High-Conductivity Frontier***  
Built on lithium–sulfur frameworks, sulfides are the fastest solid ion conductors, with room-temperature conductivities near **10⁻² S/cm**, rivaling liquid systems. Their soft structure is ideal for **fast-charging, high-power cells**. However, their extreme **moisture sensitivity and toxicity** drive up cost and complicate scale-up.  
- **Key players**: Toyota, Samsung SDI, Solid Power

***Oxide Electrolytes – The Stable Ceramics***  
Oxides trade ionic speed for unmatched **chemical and thermal stability**. Their rigid lattices support high-voltage cathodes but require high-temperature sintering and precise polishing, limiting throughput. Proven in solid oxide fuel cells, oxides represent the **safety-first segment** of the SSB market.  
- **Key players**: ProLogium, QuantumScape

***Hybrid and Semi-Solid Designs – The Bridge to Scale***  
Hybrid cells combine a solid framework (oxide or sulfide) with a **small fraction of gel or polymer**, lowering interfacial resistance while maintaining solid-state safety. These designs can be produced on modified Li-ion equipment, **reducing capital cost** and **accelerating commercialization**.  
- **Key players**: WeLion, QingTao, CATL, CALB, Gotion

***Polymer Electrolytes – The Manufacturing Veterans***  
Polymers can host dissolved lithium salts, achieving moderate conductivity (**10⁻⁶–10⁻⁴ S/cm**) at elevated temperature and excellent mechanical flexibility. While their performance lags at room temperature, their **low capex and compatibility** with existing Li-ion lines make them viable for **cost sensitive market like stationary storage**. No major EV makers pursue this route now.

![](/assets/img/notes/solid-state-battery-from-lab-to-production/01.png)

###### **Fig 1: Comparison between a conventional lithium-ion battery and all solid-state battery architecture.** [Source](https://www.biologic.net/topics/what-are-all-solid-state-batteries/)

---

### **The Solid State Battery Hype**

Solid-state batteries often appear as a ***one-stop** solution* for **ALL** energy problem— safer, lighter and longer-lasting. To investors and policymakers, they symbolize a single materials breakthrough capable of **rewriting how energy is stored and delivered** across industries. This hype is fueled by the remarkable breadth of applications that solid-state could, in theory, transform.

- **Electric Vehicles (EVs)** — EVs drive ~90% of global battery demand, with the pack representing over half of total vehicle weight and cost. Solid-state enables longer range without heavier packs, simpler cooling, and new design freedom. **SSBs can potentially bring EVs closer to parity in refuel time and range with combustion vehicles and reduce the cost of vehicles**
- **eVTOL & Humanoids —** Electric flight and advanced robotics both demand extreme energy density and stability. It usually requires a threshold on ≥400 Wh/kg to achieve viable electric flight times, while humanoids require lightweight cells integrated into moving structures. **Solid-state designs offer high energy density**
- **Stationary Storage** — For grid and backup systems, longevity and safety outweigh Wh/kg. **Oxide and polymer SSBs can withstand temperature swings and chemical stress, with projected >20-year lifetimes that may halve total storage cost**

### **The Solid State Battery Reality**

Despite progress, most solid-state batteries remain in pilot or prototype stages. Four key challenges remain before mass adoption.

![](/assets/img/notes/solid-state-battery-from-lab-to-production/02.png)

###### Fig 2: Key challenges and expected timeline. Source: Duomi industry expert interviews

#### Energy Density

**Ionic conductivity remains the fundamental bottleneck limiting energy density and fast-charging capability in solid state battery.** Most solid electrolytes still lag liquid counterparts in ion mobility: conventional liquids reach 10⁻²–10⁻¹ S/cm, while even leading sulfide systems only achieve ~10⁻² S/cm. Oxides (10⁻³–10⁻⁴ S/cm) and polymers (~10⁻⁶ S/cm at room temperature) perform substantially lower. This **mobility gap** directly affects **charge rate, low-temperature performance, and power output**—especially critical for fast-charging EVs and eVTOLs. The good news is that electrolyte layers become thinner and thinner. Hybrid and semi-solid designs can also mitigate the issue by introducing gel fractions but lose some “all-solid” advantages. With composite and doped-interface systems, this gap could narrow within **the next three years**.

#### Interface Stability

**Yet as conductivity improves with thinner layers—just a few microns—maintaining solid-solid contact has become the emerging barrier.** In solid systems, repeated lithium expansion can break contact:

- Sulfides tend to form gas and lose adhesion
- Oxides micro-crack under stress.

Sustained contact currently requires constant stack pressure between 5–20 MPa—insufficient pressure raises resistance, excessive pressure fractures ceramics. This mechanical sensitivity complicates integration in *cell-to-body* EV architectures, where structural unevenness can distort modules. New compliant interlayers, pressure-adaptive designs, and elastic coatings are in development, with practical stability expected to mature in **about four years** ¹ .

#### Throughput & Yield

**Even with stable materials,** **manufacturing remains a major bottleneck in solid-state commercialization**. Mature lithium-ion plants routinely achieve yields above 95%, yet most solid-state pilot lines struggle to reach even half that. Each microscopic crack, void, or misaligned layer can ruin a multilayer stack, turning precision engineering into an exercise in loss control. Sulfide systems demand ultra-dry, inert environments to avoid toxic hydrogen sulfide release, while oxide electrolytes require high-temperature sintering—often above 600 °C—followed by precision polishing. Both processes are slow, energy-intensive, and capital-heavy. Compared with roll-to-roll Li-ion coating lines that churn out hundreds of cells per minute, current SSB throughput is below 10 % of that rate.Automation, in-line defect inspection, and pressure-lamination optimization are starting to close the gap, but meaningful industrial throughput—comparable to modern Li-ion—is still likely **six years away** ¹ .

#### Cost Parity

**Even if performance improves, economics will determine how fast and how far solid-state batteries scale.** At present, solid-state packs cost **$250–400 /kWh**, roughly double or triple next-generation NMC or LFP systems.

- Material costs drive part of the premium—Li₂S precursors approach $1 million per ton at peak time—and oxide systems rely on energy-intensive elements like lanthanum and zirconium.
- Capital intensity compounds the gap: new solid-state plants require **$250–400 million per GWh**, nearly twice the cost of equivalent Li-ion facilities. Manufacturers must choose between fully dedicated SSB lines for long-term advantage or hybrid retrofits that reuse Li-ion tooling for faster rollout.

Over the past decade, lithium-ion battery costs have fallen from more than **$800 per kWh in 2013** (back when Tesla Model S first start to mass production) **to about $115 per kWh in 2024** (when EV captures a quarter of new vehicle sale worldwide), a >85 % reduction driven by scale, automation, and yield improvement rather than radical chemistry shifts.

> “A decade ago, lithium-ion cells were nearly **$1,000 per kWh**. Everyone said they’d never hit $100 — but scale, automation, and yield proved them wrong.” — Cost Engineer Manager in EV company

Solid-state batteries are at the lithium-ion battery’s “first Tesla Model S” moment, the beginning of commercialization. If they follow a comparable trajectory, pack costs could decline from $500–600 per kWh in 2025 to roughly **$100 per kWh by 2035–2036**—mirroring the same decade-long compression that transformed lithium-ion economics.

This projection implies: **manufacturing efficiency and yield convergence—not new materials alone—will determine when solid-state achieves true cost parity.**

<iframe title="Li-ion cost reduction in a decade" aria-label="Interactive chart" src="https://datawrapper.dwcdn.net/bZTwS/2/" scrolling="no" frameborder="0" style="width:0;min-width:100%;border:none;" height="756"></iframe>
*Li-ion cost reduction in a decade*

###### Figure 3: Projection on solid state battery cost reduction in next 12 years

---

### The Road to Mass Adoption: A Decade of Convergence

At present, solid-state packs cost **double or triple** for advanced lithium-ion systems. This economic inflection depends less on chemistry than on **throughput × yield**—the same scaling dynamic that once defined the semiconductor and solar industries.

The pathway to mainstream solid-state battery adoption can be mapped across five overlapping stages, each closing a specific technological and economic gap (see Figure 4).

#### Today — R&D / Pilot Stage

Current prototypes remain largely in pilot lines and lab-scale validation. **Real-world energy densities stay [below 200 Wh/kg](https://interestingengineering.com/transportation/semi-solid-battery-affordable-china-ev), with cycle lives under 300 and efficiencies below 70%—limiting actual usable capacity.** Most efforts are focused on stabilizing interfaces and managing defects in multilayer stacks. At this stage, production remains in pilot stage. There are essential groundwork needed before commercial scaling begins.

#### 3 Years — Hybrid Commercial Entry

The first wave of commercialization will come through **semi-solid and hybrid systems**, combining oxide–gel architectures. These cells balance manufacturability and performance by adapting existing lithium-ion tooling. **Early deployments are already visible in** **High-end EVs** such as [NIO](https://electrek.co/2024/06/17/nio-semi-solid-state-ev-battery-maker-ramps-output-621-mi-et7/), as well as **drones** and **robotics**—niches where higher cost can be offset by energy density and safety gains.

#### 5 Years — Early Automotive Integration

By the late 2020s, progress in **interface stability** and **semi-solid process control** will enable use in **premium EVs** and **aerospace prototypes** like eVTOL. Manufacturers will start integrating solid-state modules into structural battery packs, testing their compatibility with cell-to-body designs and fast-charge infrastructure. Yields and throughput will continue to improve, but most production will still be pre-automated and regional.

#### 8 Years — Cost Parity Horizon

Around the early 2030s, **optimized anode-free solid-state cells** are expected to approach near current **lithium-ion cost parity**, unlocking **mainstream EV** and **grid-storage** applications. This phase marks the inflection where yield, automation, and process standardization begin to outweigh raw material cost as the dominant factor in economics.

#### 10 Years — Mass Adoption Phase

By the mid-2030s, **mature production lines** will push pack costs below **$80 / kWh** and extend lifetimes beyond **1,000 cycles**. At this stage, solid-state batteries will widespread use across automotive, stationary, and robotic platforms, as well as open new industries that couldn’t be powered be traditional li-ion battery—realizing the long-anticipated transition from laboratory promise to industrial reality.

![](/assets/img/notes/solid-state-battery-from-lab-to-production/03.png)

###### Fig 4: Decade roadmap of SSB adoption. Source: industry expert interviews

### Strategic Moves in the Battery Ecosystem

While much of the industry focuses on chemistry breakthroughs, early areas to watch will likely concentrate in **manufacturing enablers, process IP, and hybrid integration models**—the practical bridges from lab success to scalable production.

#### **Manufacturing Enablers over Cell Makers**

Equipment firms or cell makers developing **inert-environment sintering**, **precision pressure control**, and **in-line defect inspection** systems will capture early value. These are the “**picks and shovels**” of the solid-state transition—lower risk, recurring-revenue hardware and software suppliers that underpin process reliability. As pilot lines expand, these “environmental infrastructure” suppliers could command **semiconductor-like margins**, selling to every solid-state program regardless of chemistry.

> *“Even if the chemistry is ready, you still need entirely new equipment for sintering, pressing, and surface inspection. Current Li-ion lines don’t have those capabilities. The cell maker who builds reliable tools for uniform pressure control and real-time quality monitoring will own the bottleneck.”*  
>  — Electrode Engineer

#### China Mid-Term Commercializers

Chinese **semi-solid leaders—CATL, QingTao—** already dominate pilot-scale output. Their alpha lies in supply-chain integration and early OEM qualification (2026–2028 window). These firms will likely define the cost curve and set early design standards for hybrid pack architecture across Asia and Europe.

#### Pack-Level Hybridization

The most practical solid-state implementation through 2030 may occur at the pack level, blending ~50 % solid-state modules with ~50 % advanced Li-ion cells under an intelligent battery-management system (BMS) that dynamically balances both chemistries. Such hybridization offers a **capital-efficient commercialization path**, yielding strong returns before full solid-state maturity. Investors gain exposure to near-term hybrid adoption without waiting for fundamental electrolyte breakthroughs.

> *“Some of dry-electrode developing—mixing, calendaring, and lamination—can transfer conceptually, maybe ten to twenty percent. But it’s not plug-and-play. In the near term, hybrid packs that combine solid-state and conventional Li-ion under a smart BMS might be a practical commercialization route.”*  
>  — Battery Manufacturer Engineer

### Looking Forward: The Global Race Has Begun

![](/assets/img/notes/solid-state-battery-from-lab-to-production/04.png)

###### Fig 5 : Global map of solid-state and polymer battery developers , summarizing key companies, technologies, and regional distributions between North America, Europe, and Asia. [Source](https://www.idtechex.com/en/research-report/solid-state-and-polymer-batteries-2023-2033-technology-forecasts-players/917).

The dream of a safer, longer-lasting, and instantly charging battery may still seem distant, the race to realize it has already begun. What once lived in university labs and press releases is now scaling across pilot lines, national policies, and trillion-dollar mobility plans. The question is no longer if solid-state will arrive, but where and how fast.

Each region is charting its own path. China is sprinting ahead through semi-solid deployment and vertical integration; Japan and Korea are betting on sulfide purity and manufacturing precision; the United States and Europe are cultivating aggressive process IP. Together, they form a global relay—each advancing part of the same industrial frontier. Costs will fall step by step, not by miracle, as yield and automation compound across every factory iteration.

The global race has begun—and for the first time, the finish line is not a cell, but a system.
