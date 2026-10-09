---
layout: note
title: "What Are We Actually Modeling?"
date: 2026-10-08
q: q2
summary: "The promise of acceleration depends on both what we can predict and how we can verify it."
---

I keep returning to a question beneath much of the excitement about AI in drug discovery: do we know how to represent the biological system we want to change? And how will we know whether the model’s predictions are right?

Much of the promise of biological foundation models draws on the success of language models. Train on enormous amounts of data, learn useful patterns, and gain capabilities with scale. It is tempting to imagine a similar path from biological data to curing disease.

But what, exactly, would the model be learning?

Language offers an established medium: text. We don’t understand every aspect of language, but the training data contain examples of the kind of output we want to produce. Formal mathematics makes the distinction clearer. In a system such as Lean, definitions, assumptions, and rules of inference are explicit. Finding a proof can be extraordinarily difficult, but we can mechanically check whether a proposed proof establishes the formal statement.

Biology presents additional uncertainties. We are still discovering which observations and relationships are sufficient to answer the treatment question. And verifying an answer can require observing a person over months or years.

If the goal is to treat cancer, what should represent the patient? DNA sequences? RNA expression? Protein activity? Tissue organization? Immune interactions? Treatment history? Each captures something important. Combining them does not automatically establish that we have captured what determines a person’s response to a new intervention.

Single-cell biology and perturbation experiments make this challenge concrete. They provide ways to represent cellular states and investigate what happens when we alter a gene or introduce a drug. Perturbation data can give us evidence about cause and effect within an experimental system.

But predicting a cellular response and predicting a therapeutic benefit are different achievements.

Suppose a model accurately predicts how a drug changes gene expression in cancer cells. What does that establish about whether it will produce durable remission in a patient? We still need to understand whether the drug reaches the relevant cells, how surrounding tissues respond, whether other organs are harmed, and whether the disease adapts over time.

Those connections across biological scales are part of the problem we need to solve. A cellular response is one part of what happens to a person.

More single-cell and perturbation data may improve our predictions at that level. That is valuable. But the relationship between better cellular predictions and better clinical outcomes must be demonstrated. Increasing the scale of a model does not automatically establish that connection.

This is why the representation problem deserves more attention. Data collection already contains assumptions about what matters. We choose which tissues to sample, which molecules to measure, and when to measure them. Those choices determine what the model can observe. Scaling cannot recover information that is absent and cannot be inferred from what we provide.

The gap also creates a constraint on acceleration. Laboratory experiments can answer some questions relatively quickly. Establishing durable benefit in humans requires observing people over time. A model can generate another prediction immediately; we cannot obtain years of clinical follow-up on the same schedule.

If our models cannot reliably connect early measurements to later outcomes, much of the consequential uncertainty remains unresolved until those outcomes occur. We may generate candidates faster while the process of learning which ones actually help patients remains slow.

A sufficiently informative representation could move more of that learning earlier. It could help us identify failures before clinical testing, design more informative experiments, and predict how patients will respond. Establishing when those predictions are reliable is part of finding the right representation.

That doesn’t mean we need a complete digital twin before AI can help. Nor must humans design every useful representation in advance. Models can discover patterns and abstractions we have missed. The question is whether those abstractions capture what matters when we intervene.

For me, a different paradigm would develop representations, experiments, and treatments together, starting from the desired change in disease. What sustains it? What prevents recovery? Which intervention could produce a durable improvement? New-drug design would be shaped by evidence about those questions, including where and when biological changes need to occur.

Clinical validation would remain essential. Better models could make the path to it more informative and productive, even though they cannot eliminate the time required to observe some outcomes.

The promise of acceleration depends on both what we can predict and how we can verify it. Before asking how large a biological model should be, we should ask what it would have to represent to help a person get better, and what evidence would justify believing it.
