---
layout: note
title: "On first-principles thinking, and reasoning from biological nouns"
date: 2026-06-22
q: q2
summary: "\"First principles\" is tech's favorite phrase. It tends to break the moment it meets biology"
---

“First principles” is one of those phrases that now gets used so often that it has almost lost its meaning.

The idea goes back at least to Aristotle. In the Aristotelian sense, first principles were the starting points of knowledge: **the basic truths from which other conclusions could be demonstrated, but which were not themselves derived from anything more fundamental.**

In today’s tech world, the phrase became popular again through Elon Musk’s way of describing problem-solving. His version is simple: do not reason by analogy; **boil the problem down to its fundamental truths, then reason back up from there.** Instead of asking, “How have people built rockets before?” ask, “What are the raw materials of a rocket? What do they cost? What does physics actually require?”

Every search for truth has to begin somewhere. The real question is whether you have found the true beginning, or merely stopped at a convenient assumption. First-principles thinking forces us to distinguish what is actually true from what is merely inherited, assumed, or conventional. But that is also where the phrase is most often abused. First-principles thinking requires a real understanding of the problem’s foundations. Yet the phrase is often invoked precisely where those foundations are missing. **Instead of reaching fundamental truths, we stop at convenient assumptions and call them principles.**

#### The pattern we actually see

This is especially true in biomedicine, and even more so in the current excitement around applying AI to biomedicine.

Let me be clear: I am a strong advocate for the potential of AI in biomedicine. The field needs more ambition, not less, along with more engineering discipline, better tools, better data, and faster ways to test hypotheses. Biology is too important to leave at the status quo.

But in many conversations with people approaching biology from the tech side, I keep noticing the same pattern: **first-principles language often arrives before first-principles understanding.**

#### Reasoning from biological nouns

The argument usually begins with confidence: drug discovery is inefficient, biology produces enormous amounts of data uncaptured, AI is good at pattern discovery and high-dimensional optimization when we have sufficient data. Therefore, if we apply first-principles thinking, the problem should become much more solvable: with better engineering, more data, better models, and faster iteration.

At first glance, this sounds reasonable. It even sounds like first principles thinking.

Then I ask a simple question: **what exactly are the first principles you are reasoning from?** Suppose we want to solve a particular disease. Do we understand its cause, or only its symptoms? Do we know which mechanisms are causal, which are compensatory, and which are merely correlated? If we name a target, what do we actually know about it? What happens when we perturb it, and does that perturbation behave the same way in a cell line, an organoid, an animal model, and a human patient? These are not rhetorical questions. They are the beginning of first principles thinking in biology.

Rarely does the answer begin with actual first principles.

More often, it begins with a vocabulary cloud. DNA is the building block of life, so if we can edit DNA, we can fix disease. Epigenetics control cell state, so if we can reprogram epigenetics, we can reverse disease. Proteins execute function, so if we can design or degrade proteins, we can control biology. Each of these statements contain some truth. DNA, epigenetics, and proteins are real biological foundations.

But they do not yet answer the first-principles question. In Musk’s rocket example, the question is not simply, “What are rockets made of?” It is also, “What does physics actually require?” **The biological equivalent is not merely, “What is the building block?” It is: what does this disease actually require? What pathway is truly causal? What interaction must change? In which cell, tissue, patient, and time window?**

Without that, we are not reasoning from first principles. We are reasoning from biological nouns.

#### Why the engineering analogy breaks

This is where the engineering analogy starts to break. In biology, the object you are studying is not a machine in the simple engineering sense. **It is a dynamic, adaptive, context-dependent system**. A protein does not have one meaning. A pathway does not have one output. A gene does not “do” one thing. Function depends on cell type, developmental state, tissue environment, immune context, metabolic state, neighboring cells, timing, dosage, feedback loops, and disease history.

This is why many attempts to apply “first principles” to biology become misleading. We talk as if we are reasoning from the bottom up, but often **we are reasoning from partial maps, biased datasets, and assumptions we have forgotten are assumptions.**

A result in vitro is not the same as a result ex vivo. A result ex vivo is not the same as a result in vivo. A cell line is not a tissue. A mouse is not a human. A target that matters in one disease context may be irrelevant in another. A molecule that binds beautifully in an assay may fail in a living organism because biology is not just binding. It is distribution, toxicity, compensation, heterogeneity, stability, and time.

This is not a criticism of biology. It is the reason biology is hard.

**The deeper issue is that we often do not know what the “first principles” are.** We know the sequence of many genes, but not the full function of many gene products. We know structures for many proteins, but not all of their conformations, interactions, dynamics, or cellular roles. We know pathways, but pathways are abstractions imposed on networks. We know correlations, but not always causation. We know biomarkers, but not always mechanisms.

#### Where AI fits — and where it doesn't

This matters especially when people claim that AI will solve biology.

AI is powerful. It can find patterns humans cannot easily see. It can generate hypotheses, predict structures, prioritize molecules, and compress massive biological datasets into useful representations. But this is not the same thing as first-principles understanding.

**Most AI systems in biology are not reasoning from irreducible biological truths. They are learning from data produced by experiments that are themselves incomplete, biased, noisy, and context-bound.** If the training data come from cell lines, the model inherits the assumptions of cell lines. If the data overrepresent well-studied proteins, the model inherits the blind spots of the literature. If the labels are weak proxies for real biological function, the model becomes very good at predicting the proxy.

**A model can be useful without being first-principles, and the two are easy to confuse.** Predicting a protein structure is not the same as understanding protein function. Predicting gene expression is not the same as understanding regulation. Predicting a binding event is not the same as producing a safe and effective drug. Predicting response in a dish is not the same as predicting response in a patient.

And even when a prediction is technically correct, the frame around it can still be incomplete.

#### The Norvir lesson

Consider ritonavir, Abbott’s HIV protease inhibitor, sold as Norvir. The drug was already on the market when a new crystal form, Form II, appeared. Chemically it was the same molecule; physically it was a different material: more stable and less soluble. And it caused the existing formulation to fail dissolution, forcing a reformulation. No one had predicted Form II wrongly. Reality had simply introduced a variable that no one’s model contained.

That is the lesson for AI in biology. **A beautiful prediction can still fail when the frame it rests on is missing a variable no one knew to include.** More parameters do not fix this. They can sharpen predictions without deepening understanding, and they can hide ignorance behind outputs that look authoritative. Ritonavir was a single small molecule in a domain far more tractable than systems biology, and reality still found a dimension outside the frame. In biology, where the frame is far less complete, that exposure is only larger.

#### A genuine first-principles approach starts from acknowledgement of what is missing

So what would a genuine first-principles approach to AI in biology look like?

**It would begin with humility, with a set of questions:** What do we actually know? What was measured directly? What was inferred? What changes across levels? What assumptions are embedded in the assay? What causal mechanism is being proposed? What would falsify it? Where does the model fail, and are those failures biologically meaningful?

It would not treat AI as an oracle. **It would treat AI as a hypothesis engine inside a disciplined experimental loop.**

The goal should not be to pretend that biology already has clean first principles waiting to be computed. The goal should be to build toward them: better perturbation experiments, better causal models, better model systems, better patient-linked data, better uncertainty estimates, and tighter feedback between prediction and experiment.

**First-principles thinking in biology does not mean claiming we already know the foundation. It means being honest about where the foundation is missing.**

That honesty is not pessimism. It is the beginning of real progress.

![](/assets/img/notes/first-principles-and-biological-nouns/01.jpeg)
