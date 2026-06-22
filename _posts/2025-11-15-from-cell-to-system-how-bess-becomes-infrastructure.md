---
layout: note
title: "From Cell to System — How BESS Becomes Infrastructure"
date: 2025-11-15
q: q3
summary: ""
---

## **At a Glance**

1. **BESS is a vertically stacked system:** Cells provide the energy, packs manage heat and safety, PCS converts DC/AC, and EMS makes real-time economic and operational decisions. The system behaves like a power plant during outages and a market-optimized asset during normal operations
2. **Three supply-side groups build the industry:** in-house cell makers control everything from cell-manufacturing to BESS-integration; integrators engineer upper-layer systems and software; component vendors focus on parts supply. Each competes on a different layer of value
3. **Demand is diverse:** Utilities treat BESS as grid infrastructure, data centers and factories treat it as capacity and power-quality insurance, homes use it for resilience, and VPP/optimization platforms orchestrate fleets of systems into revenue-generating virtual assets

***This is Part 2 of our Energy Storage series — “How Li-ion Becomes Infrastructure.”** Here, we take a deep dive into **grid-scale battery energy storage systems (BESS)** — unpacking their architecture, performance metrics, and the engineering trade-offs that define today’s leading technologies.*

Over the past decade, energy storage went from niche home backup units to one of the fastest-growing categories of infrastructure. The shift isn’t abstract — it’s driven by real pressure on the grid: more variable solar and wind on the supply side, more EVs and AI data centers on the demand side. Storage solves the timing problem. It moves electrons from when they’re produced to when they’re needed. Storage now shows up everywhere — utility plants, factories, campuses, residential homes, and increasingly **data centers**, which are becoming one of the largest behind-the-meter storage buyers.

Before storage can be understood as a market or investment theme, it needs to be understood as infrastructure. This article explains how storage actually works  — **from the single cell to the full grid-scale system, who builds it, and who uses it.**

![](/assets/img/notes/from-cell-to-system-how-bess-becomes/01.png)

*Figure 1: The structure of BESS interaction with grid and solar PV farm.*

## Understand What are Inside a BESS During a Grid Event

Grid-scale BESS looks like a big container box on the outside. Inside, it’s a precise interplay of electrochemistry, mechanical engineering, power electronics, and software. To understand how these layers work together, imagine a simple but realistic scenario: it’s a hot and sunny afternoon, solar generation is strong, and the onsite solar array is powering part of the load while excess energy flow to charge the battery. Electricity demand is high — and suddenly a grid line trips. A region loses power. Normally this would mean immediate blackout — but a grid-scale BESS is sitting at the substation nearby, fully synchronized and ready. The entire process occurs automatically without manual intervention,

## **System Layer — Integration, Controls, and Software**

### The Grid Fails — Sensors Detect the Drop

The instant the transmission line trips, the local grid frequency and voltage collapse. Protective relays on the PCS (Power Conversion System) sense the frequency swing and voltage drop. This detection happens within **milliseconds**.

### **EMS Dispatches the Power Output**

The EMS is constantly monitoring grid conditions and battery conditions. PCS makes the system physically capable of interacting with the grid at the hardware level, and the EMS makes the system operationally intelligent at the software level. When it sees the PCS signal an abnormal grid event, it immediately recalculates how much power the BESS should deliver and how to coordinate with the grid operator’s emergency instructions.

EMS is the intelligence layer that transforms a battery from a passive storage device into an active, revenue-generating grid asset. It interprets market signals, grid conditions, and battery data in real time to decide when and how hard to charge or discharge, balancing immediate performance with long-term health. EMS communicates with upstream grid info as well as downstream BMS data, builds model to interpret market signals, grid conditions, and battery data in real time to decide when and how hard to charge or discharge. Modern EMS platforms integrate tightly with electricity market, adjusting strategies as weather and load forecasts evolve throughout the day and season cycle.

So go back to the afternoon outage, the EMS switches to resilience mode.  It determines, within seconds, the exact discharge curve the PCS should follow.

### **PCS Sends Power to the Grid — Turning DC Into AC**

Once EMS gives the command, the PCS begins pushing power from battery out onto the AC side.

The PCS is the BESS’s grid physical interface. At its core, the PCS converts DC electricity from the battery to AC for grid export during discharge and performs the reverse conversion during charging, capable of operating in both **grid-following** and increasingly **grid-forming modes**. In grid-following mode, the PCS synchronizes to external voltage and frequency signals, while in grid-forming mode it establishes those signals itself, enabling batteries to behave like virtual synchronous machines. Its performance is defined by fast **response time**, **96–98%** **round-trip efficiency**, short-term overload capability, and its contribution to system stability. As renewable penetration increases, grid-forming PCS architectures are becoming industry standard.

In the grid fail event, the PCS immediately enters grid-forming mode, starts generating a stable 50/60 Hz waveform using energy from the battery. Inside the PCS, battery DC flows into IGBTs / MOSFETs, then the inverter synthesizes a clean AC waveform and the output is synchronized across phases. This step is the electrical bridge — without the PCS, the DC energy in cells cannot do anything for the grid.

## **Inside the Battery Room — Packs, BMS, and Thermal Control Engage**

While the PCS interacts with the grid, the **BMS manages everything inside the container**, sends signal to cell immediately to release electrochemistry energy.

![](/assets/img/notes/from-cell-to-system-how-bess-becomes/02.png)

*Figure 2: The structure of BESS inside.*

### **Battery Management System**

Battery Management System continuously provides the electrical and thermal state of every cell while coordinating how the system charges, discharges. At its core, the BMS measures cell voltages, temperatures, and currents with high precision, using that data to keep the pack within safe operating limits and to prevent conditions that accelerate degradation or trigger thermal events. A well-designed BMS reduces over-charging stress and sharply reduces the frequency of unplanned downtime. If any module drifts out of tolerance, the BMS isolates that module and reroutes current around it. Increasingly, modern BMS data does not remain confined within the container; it is aggregated into cloud platforms where fleet-level analytics detect anomalies, forecast aging pathways, and guide high-level optimization. In short: **BMS keeps the battery safe while PCS keeps the grid stable.**

### **Electrochemistry Energy Comes From the Cells**

When the signal of releasing power reaches to the deepest layer, energy comes from cells releasing stored ions. Modern BESS deployments overwhelmingly use LFP cells—now roughly 85–90% of global installations—because iron-phosphate chemistry offers advantages include:

- **Low cost (iron + phosphate, no nickel/cobalt), most important, BESS use long time, very cost sensitive.**
- High thermal stability → inherently safer than NMC
- Long cycle life (6,000–12,000 cycles)
- Wide operating temperature window

Unlike EVs, BESS systems prioritize durability, safety, and scalability. Emerging chemistries such as sodium-ion and LMFP are gaining attention for their potential to reduce cost further and improve safety margins, while NMC remains relevant in space-constrained indoor or premium-energy applications.

When a grid outage triggers the BESS to discharge, lithium ions migrate from the graphite anode through the electrolyte and separator toward the cathode, releasing electrons that flow into the external circuit and ultimately feed the PCS as it forms a stable AC waveform for the grid.

### **Pack — Engineering for Scale**

Intuitively, a **battery pack is simply many cells wired and managed together**. But turning “a lot of cells” into a **high-quality, grid-grade pack** is one of the hardest engineering problems in energy storage – thousands of cells must behave like one device. At the pack level, a grid outage triggers an immediate shift from steady-state monitoring to coordinated high-power delivery, turning the pack into the structural and electrical bridge that channels cell-level electrochemistry into system-level output. The pack must smooth thousands of voltage and temperature signals into a stable DC bus for the inverter, deliver high power instantly during a grid event, and ramp thermal management to extract heat uniformly. This middle layer—packs—is often the *least* appreciated, yet it defines safety, serviceability, and lifetime cost. Building a high-quality pack isn’t just “putting a lot of cells together”; it’s the engineering that makes the entire BESS work.

## When Grid Power Returns — BESS Smoothly Hands Control Back and Receive Solar Power

After hours of repairing, now the utility power is finally restored, the battery system transitions just as smoothly back to grid-connected operation as it did into islanding. The PCS is the first to recognize the reappearance of a stable grid waveform, continuously sampling the returning voltage and frequency until it determines that conditions are within acceptable synchronization tolerances; once aligned, it gradually shifts from generating its own grid-forming waveform to following the restored grid signal.

As this electrical handoff begins, the EMS recalculates the system’s operating objectives, tapering battery discharge to avoid abrupt current changes, assessing the remaining state of charge, and determining whether the system should recharge immediately or hold in standby depending on requirements. The EMS also brings the onsite solar array back into its normal operating mode—no longer riding behind the BESS microgrid, the solar PV system now resumes exporting power into the facility and, when available, begins recharging the battery through the PCS.

Meanwhile, the BMS moderates the internal transition by reducing load on the cells, rebalancing modules that diverged during the emergency discharge, and managing thermal recovery through cooling loops to bring all cell groups back into a uniform and stable temperature range.

## **Who Build the Systems — Supply Side**

![](/assets/img/notes/from-cell-to-system-how-bess-becomes/03.png)

### **Vertical Integrated Supplier**

**Vertical Integrated Supplier** are the fully vertically integrated giants that make both the cells and the full containerized energy-storage system. Firms like CATL, BYD, LG Energy operate massive gigafactories where they control the entire chemical stack — electrode formulation, electrolyte additives, formation cycles, and pack/BMS co-design. Because cell manufacturing is capital-intensive, these companies push aggressively downstream to capture more value and lock in long-term supply.

This IDM-style ownership lets them optimize for what stationary storage cares about most. Vertical integration creates engineering and economic advantages that outsiders cannot easily replicate and their scale compounds the advantage. High-utilization gigafactories reduce cost, integrated module/pack production cuts logistics risk, and controlling cell chemistry means safety fixes and performance upgrades propagate instantly through their BESS platforms.

Key Players:

- CATL, BYD, Gotion, CALB, EVE Energy, LG Energy Solution, Samsung SDI, SK On, Panasonic Energy

### **System Integrators**

**System Integrators** design and build the upper layers of the storage stack—packs, racks, thermal&fire management, BMS/EMS logic, PCS integration—while sourcing cells from upstream suppliers. **Companies like Tesla Energy, Fluence, Powin operate more like semiconductor “fabless” firms**: they design system architecture and firmware but do not own cell production. Their differentiation comes from thermal design quality, rack layout, BMS stability, PCS/EMS integration, and fleet-level software. Tesla integrates everything but the cell using its manufacturing discipline, while Fluence differentiates through its grid-software and multi-ISO dispatch algorithms.

Because they avoid gigafactory CAPEX, these firms operate as agile platform builders: they can adopt new chemistries quickly, shift suppliers based on cost or performance, and optimize systems around whichever cells fit the project. As cells become more commoditized, value will increasingly shift toward firmware, controls, and operational intelligence—giving system integrators a path to capture more margin and customer trust. The race for value in the BESS stack remains open, and integrators are positioned to win if software continues to dominate system performance.

Key Players

- Tesla Energy (Megapack), Fluence, Powin, Wärtsilä, Sungrow, Huawei, Nidec, Schneider Electric, Siemens, EDF, Hitachi Energy, Eaton, Mitsubishi Power, GE Vernova

### Component Suppliers

The third group comprises companies that supply the power electronics, conversion hardware, and protective components that make BESS systems operable on real grids. Firms like **SMA, Delta Electronics, DYNAPOWER, Eaton** sit one layer down in the stack, providing the PCS, DC/DC converters, isolation transformers, switchgear, circuit breakers, relays, sensors, and protective subsystems that integrators depend on. This group is analogous to the **component suppliers** in the semiconductor industries—companies that provide indispensable pieces of the system but generally do not control the architecture.

PCS and power-electronics design is its own high-complexity domain. These vendors must meet strict requirements which allow storage systems to stabilize weak grids or operate as virtual synchronous machines. Although they do not control the battery chemistry or the container design, their technology anchors the electrical performance of the entire installation.

Economically, this segment remains flexible. Power-electronics vendors can move up the value chain by embedding more intelligence into inverters, integrating EMS-ready controls, or offering co-designed solutions with integrators. They can also become strategically important as grid-forming inverters become mandatory in high-renewable regions, making the PCS not just a conversion device but a stability resource.

## Who Uses the System — The Demand Side of BESS

![](/assets/img/notes/from-cell-to-system-how-bess-becomes/04.png)

On the demand side, battery storage is no longer a single market. The same containerized storage block behaves completely differently depending on who owns it and what problem it is solving.

### **Utility-Scale Users — Storage as Grid Infrastructure**

Utility operators such as **Vistra, RWE, ENGIE, Nextera Energy, Total, Shell Energy, and State Grid** deploy BESS as core grid infrastructure—hundreds of megawatts tied directly to substations, renewables, and interconnection points. For these users, storage is a capacity asset that maintains reliability during peaks or contingencies, absorbs renewable volatility, and delivers fast frequency response and reserve. They evaluate systems like transmission upgrades: reliability, availability, response speed, and long-term stability. With 4–8-hour systems becoming the norm and grid-forming inverters increasingly essential, utility-scale deployments represent the largest revenue pool in BESS today.

### Factories & Data Centers — Storage as Capacity and Insurance

A second fast-growing demand segment consists of **large industrial loads**, especially data centers and factories, represented by companies like **AWS, Microsoft Azure, Google Cloud (data centers), Tesla, BYD, and Ford (factories)**. With predictable but extremely high and sensitive power demand, factories use storage to stabilize internal power quality, protect equipment, and smooth high-power machinery loads, while AI data centers increasingly require BESS to secure grid interconnection and manage the massive load swings created by GPUs. As these loads outgrow local grid capacity, on-site batteries become essential operating infrastructure, making industrial and data-center storage one of the fastest-growing C&I demand segments through 2030.

### **Residential Storage — Distributed Backup**

Residential BESS, typically 5–20 kWh, turn homes into small-scale flexible loads. Homeowners adopt storage primarily for backup power, solar self-consumption, and time-of-use arbitrage. There are numerous residential storage across the country. But taken together, networks of home batteries evolve into **virtual power plants(VPP)** when orchestrated intelligently. A fleet of thousands of Powerwalls can collectively supply grid services normally reserved for utility-scale assets — ramping up during evening peaks or providing fast frequency response. The residential market is smaller per site but massive in aggregate, and it grows rapidly in regions with high solar penetration, wildfire risks, or expensive peak pricing.

### **Auxiliary Service - Digital Operators — Aggregation, Optimization, and Market Intelligence**

Beyond the physical owners of storage systems, a rapidly growing category of companies sits above the hardware and extracts value through software, orchestration, and real-time optimization. This group includes **VPP operators** such as *Fluence, AutoGrid, EnergyHub, GridBeyond, Enel X*, along with **analytics and optimization platforms** like *TWAICE, Accelex, GridX*.

VPP operators **aggregate thousands of BESS into a single controllable virtual resource**. Instead of each device participating separately in demand response or ancillary markets, the aggregator turns them into a fleet capable of responding to grid signals, transforms distributed hardware into a dispatchable asset class.

Optimization platforms operate at a different layer, focusing on **asset performance**, **battery health**, **degradation forecasting**, and **dispatch strategy**. They build analytics models to maximize both revenue and lifetime. Their software supervises the entire operating process and identifies the dispatch profile that creates the highest long-term value. As fleets grow, these platforms increasingly become the “brains” of storage portfolios.

## Closing thoughts

Battery systems are becoming a new layer of grid infrastructure — and nowhere is that more visible today than in data centers.

AI data centers are pushing power demand higher, faster, and in more concentrated locations than the grid was originally built to serve. These facilities need enormous amounts of electricity, but they also need that electricity to be clean, stable, and uninterrupted. For a data center, power is not just an operating cost; it is a constraint on growth and a core part of reliability.

That is where BESS becomes strategically important. A battery system can help a data center manage peak demand, smooth short-term load swings, support backup power architecture, improve power quality, and make it easier to integrate onsite solar or contracted renewable power. In some cases, storage can also help reduce the burden on local grid infrastructure by shifting when electricity is drawn from the grid.

This is why understanding the BESS stack matters. Cells dictate lifetime and cost. Packs determine safety and serviceability. PCS shapes how the system behaves electrically. EMS decides when to charge, discharge, stand by, or respond to grid and market signals. For data centers, each layer directly affects uptime, energy cost, interconnection speed, and long-term operating flexibility.

The broader takeaway is that batteries are no longer just a renewable-energy accessory. They are becoming a bridge between the digital infrastructure boom and the physical limits of the power grid. As AI workloads expand, the winners will not only be the companies that build more compute, but also the ones that secure reliable, flexible, and scalable power behind it. BESS is increasingly part of that answer.
