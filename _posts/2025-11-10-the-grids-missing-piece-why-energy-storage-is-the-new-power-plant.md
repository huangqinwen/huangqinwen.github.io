---
layout: note
title: "The Grid's Missing Piece — Why Energy Storage Is the New Power Plant"
date: 2025-11-10
q: q3
summary: ""
---

### **At a Glance**

- **Why It Matters:** Renewables and electrification create volatility in both supply and demand — storage restores flexibility
- **Core Function:** Storage shifts energy across **time** (charging and discharging) and **space** (relieving congestion, acting as virtual transmission)
- **Technology Shift:** From fixed, geography-bound systems like pumped hydro to fast, modular Battery Energy Storage Systems (BESS), energy storage has evolved rapidly—**BESS now stands as the fastest-growing segment of the entire industry**

***This is Part 1 of our Energy Storage series — “Energy Storage Fundamentals.”** Here, we build a foundation for why energy storage matters, and how it has evolved from a supporting function to a central pillar of modern power systems.*

***Part 2** takes a deep dive into **grid-scale battery energy storage systems (BESS)** — unpacking their architecture, performance metrics, and the engineering trade-offs that define today’s leading technologies.*

### **Why Everyone Is Talking About Energy Storage**

Energy storage has become one of the hottest topics in energy today - especially with the rise of AI data centers. While many forms of energy can be stored—thermal, mechanical—the majority of storage efforts now focus on **electricity**, because it underpins nearly everything in modern life. Unlike fuels, electricity cannot be stockpiled; it has to be used the moment it is generated or converted into another form. This fundamental transience is what makes storage indispensable - it provides the bridge between generation and use, turning a fleeting current into a reliable source.

![](/assets/img/notes/the-grids-missing-piece-why-energy/01.png)

Energy storage installations globally will keep gaining momentum over the next decade as other markets pick up pace, driven first by the US and China and then rapidly by Europe and the rest of Asia-Pacific. This is not a niche experiment — it’s a foundational shift in how the world plans to run power systems.

---

#### How Electricity Reaches You — and Where It Breaks Down

Before we talk about why storage is essential, it helps to understand how electricity actually gets to you today. Nearly everything you plug in is supplied by a vast, continent-scale machine—the electric grid—that must keep supply and demand in perfect balance 24/7. Power plants feed electricity onto high-voltage transmission lines; substations step that voltage down and route it through distribution feeders to homes, businesses, and data centers. Regional operators constantly monitor this system, matching generation and consumption to maintain a steady frequency. If supply lags, frequency drops; if it exceeds demand, frequency rises—either way, reliability suffers.

Because electricity can’t be “parked” on the wires, historically, grid balance was maintained by dispatching controllable power plants — scheduling base load coal and nuclear for steady output and ramping up gas plants to cover short-term spikes. Demand rose and fell in predictable daily and seasonal cycles, and since most generation was controllable, grid operators - guided by real-time monitoring and dispatch systems - could plan, schedule, and fine-tune supply in real time.

That balance has become far harder to maintain today. The rise of wind, solar, and distributed generation — combined with electrified transport and data-hungry AI industries consumption — has made both supply and demand far more volatile.

**So why not just build more wires or more power plants to handle the volatility?** Intuitively, it seems like expanding transmission and adding generation should solve the problem—more ways to move power, more power to move. But that’s not really the case. Transmission can only shift electricity across space, not time. More generation helps only when supply is scarce, not when it’s misaligned. The **core challenge** isn’t a shortage of generation capacity, but a **mismatch in when and where electricity is available**—**a problem of both time and space**.

#### **The Time Mismatch - When power arrives vs. when it’s needed**

As renewables make up a growing share of global electricity generation, keeping the grid balanced has become far more complex. The shift toward wind and solar is driven by the race to cut carbon emissions and reach net-zero goals, not merely to meet incremental demand. **But unlike thermal plants, renewables cannot be dispatched on command** — **they only produce power when the sun shines or the wind blows.** At low penetration, this intermittency is manageable. [Yet the scale is changing rapidly: global renewable additions reached roughly](https://www.irena.org/News/pressreleases/2025/Mar/Record-Breaking-Annual-Growth-in-Renewable-Power-Capacity) **[4500 GW in 2024](https://www.irena.org/News/pressreleases/2025/Mar/Record-Breaking-Annual-Growth-in-Renewable-Power-Capacity)**. Many regions are already installing renewables faster than the grid can absorb their output during periods of high generation and low demand.

This temporal imbalance plays out daily and seasonally. Solar generation peaks at midday, when consumption is moderate, while evening hours — when people return home and EVs begin charging — bring steep demand spikes known as the “duck curve.” [In California, over 20 % of solar generation was curtailed during certain spring 2024 afternoons due to oversupply,](https://www.eia.gov/todayinenergy/detail.php?id=65364) [while batteries supplied roughly 8–9 % of evening-peak demand](https://www.caiso.com/documents/2024-special-report-on-battery-storage-may-29-2025.pdf). Similarly, wind often peaks overnight, when load is lowest. [Northern China recorded curtailment rates above 15 % in winter nights, forcing turbines offline despite available wind](https://www.reuters.com/world/china/chinas-wind-solar-curtailment-rising-2025-08-01).

Storage directly addresses this timing gap. **It captures surplus generation when demand is low and releases it when power is most needed - turning temporal volatility into usable reliability.**

![](/assets/img/notes/the-grids-missing-piece-why-energy/02.png)

*Figure 2: The evolution of California’s grid system/net load in a typical summer day (total demand minus solar generation) between 2022 and 2025. The shaded “duck” shape visualizes how midday solar generation increasingly depresses net demand. Over time, the belly of the “duck” deepens — representing oversupply and curtailment risks during sunny hours — while the neck steepens, reflecting sharper evening ramps that stress grid flexibility. This highlights why energy storage and demand shifting have become essential to grid stability.*

#### **Geographic mismatch — where the power is made vs. where it’s used**

Even if timing were perfect, the locations of generation and consumption often don’t match. Renewable resources are often concentrated far from where electricity is consumed. Large-scale renewables are often sited where land and wind or solar resources are abundant - for example, the U.S. Southwest, China’s northwest, Australia’s interior, the North Sea - while demand clusters in urban and industrial corridors along coasts and population centers.

Building new transmission infrastructure (e.g., Ultra high-voltage lines) can help move energy across space, but it is expensive, slow to permit, and limited in flexibility. **Energy storage offers a complementary solution: [acting as a virtual transmission asset](https://www.mdpi.com/1996-1073/18/4/902?).** By storing energy near generation sites or load centers, **storage can ease congestion and reduce curtailment without new power lines**. Studies show that deploying storage equivalent to roughly 15% of transmission capacity can provide comparable balancing benefits. Projects in Hebei (China), California’s Central Valley, and Texas’ ERCOT interconnection points already demonstrate measurable reductions in congestion and stranded power.

#### Downstream Demand Surge

While electricity supply grows more variable, the demand side is not moving towards auto-balancing, instead becoming heavier and less flexible. Electrification is accelerating across sectors - EVs, large AI data centers, and electrified manufacturing are driving rapid load growth that nearly doubled global electricity demand in 2024 compared to its decade-long average. These loads are often stiff, rapid-ramping, and concentrated in already stressed regions. In the U.S., [data centers alone are projected to consume 6–8% of total electricity by 2030](https://www.reuters.com/technology/us-data-centers-electricity-demand-2030-2025-05-15), [while EV superchargers can draw up to 1 MW per vehicle](https://www.byd.com/mea/news-list/byd-unveils-super-e-platform-with-megawatt-flash-charging). Meanwhile, new electrified manufacturing hubs and hydrogen projects are adding continuous high loads, often in already constrained areas.

This surge compounds the renewable mismatch: the grid must now deliver more total energy while also compensating for more volatility. The result is a system that requires both capacity and flexibility — the ability to store, shift, and dispatch power dynamically across time and geography.

Energy storage sits precisely at this intersection. **It absorbs surplus power when it is cheap or stranded, then releases it exactly where and when it is valuable.** It tames volatility from variable renewables upstream and stabilizes the inflexible demands downstream. In doing so, it restores control to a system that is otherwise losing it.

This marks a turning point - storage is no longer mere “backup”. It is **flexibility infrastructure** - the connective tissue that lets the modern grid handle both the clean energy transition and the electrification surge at the same time.

---

### **So How Do We Store Energy?**

The modern grid faces many kinds of imbalances — but not all imbalances look the same. Some last seconds, others stretch across seasons; some occur on remote wind farms, others in dense city substations. These different challenges have inspired an equally diverse set of storage technologies. Today’s landscape spans a spectrum — **pumped hydro, compressed air, thermal, hydrogen, and electrochemical systems** — each trading off cost, duration, and flexibility.

But this variety didn’t appear overnight. It reflects a long progression: from fixed, geography-bound systems to fast, modular ones — each generation of storage engineered to meet the grid’s changing demands. Understanding these trade-offs reveals why certain technologies dominate specific niches today — and why **batteries, in particular, have risen fastest.**

<iframe title="Main Energy Storage Methods" aria-label="Interactive chart" src="https://datawrapper.dwcdn.net/HoAkj/2/" scrolling="no" frameborder="0" style="width:0;min-width:100%;border:none;" height="444"></iframe>
*Main Energy Storage Methods*

Early large-scale solutions didn’t involve chemistry at all, but gravity. Pumped-hydro systems, which send water uphill when power is abundant and release it later to spin turbines, became the backbone of grid storage in the 20th century — [and they still account for more than 40% of global capacity today](https://www.irena.org/publications/2023/Jun/Changing-role-of-hydropower). It has lowest $/kWh at scale, multi-hour to multi-day durations. [China has been dominating PSH, added](https://www.reuters.com/sustainability/climate-energy/china-track-exceed-2030-pumped-storage-hydro-target-by-8-industry-body-says-2025-06-24/) **[7.75 GW](https://www.reuters.com/sustainability/climate-energy/china-track-exceed-2030-pumped-storage-hydro-target-by-8-industry-body-says-2025-06-24/)** [in 2024 and is on track for](https://www.reuters.com/sustainability/climate-energy/china-track-exceed-2030-pumped-storage-hydro-target-by-8-industry-body-says-2025-06-24/) **[~130 GW by 2030](https://www.reuters.com/sustainability/climate-energy/china-track-exceed-2030-pumped-storage-hydro-target-by-8-industry-body-says-2025-06-24/)**[.](https://www.reuters.com/sustainability/climate-energy/china-track-exceed-2030-pumped-storage-hydro-target-by-8-industry-body-says-2025-06-24/)

![](/assets/img/notes/the-grids-missing-piece-why-energy/03.png)

*Figure 3 : Schematic of four energy storage system.*

But gravity has intrinsic limits. It can only solve imbalance in a longer timeframe but fail to handle demand peaks like five minutes EV supercharging. Pumped storage requires highly specific geography, and building new sites takes years permitting and environmental review. It’s active in balancing the grid, but not agile — suitable for large, predictable imbalances, not for the fast, local fluctuations of a renewable-heavy system. These constraints pushed engineers to look for something **more agile and deployable anywhere**, not just in mountain valleys.

That flexibility came from electrochemistry. There are some solutions like **flow batteries** and **hydrogen**, but both come with practical and economic constraints that have kept them from wide deployment so far.

**Flow batteries** store energy in liquid electrolytes contained in external tanks, allowing their power and capacity to scale independently. However, their **low energy density**, **complex fluid systems**, and **high capital cost** have limited them mostly to pilot projects and niche applications. While research continues, widespread commercialization remains years behind.

**Hydrogen**, on the other hand, offers the promise of multi-day or even seasonal storage. It can absorb massive amounts of surplus renewable power through electrolysis, store it as gas, and later reconvert it to electricity via fuel cells. Yet the entire green-hydrogen generation process chain requires **costly infrastructure for compression, transport, and safety management.**

![](/assets/img/notes/the-grids-missing-piece-why-energy/04.png)

*Figure 4: Schematic of battery energy storage system.*

From the 1990s to 2010s, **lithium-ion technology** matured for consumer electronics and electric vehicles, setting the stage for grid-scale storage. As costs fell and performance improved, batteries began migrating from handheld devices to power systems. Today it has evolved into an active and flexible grid infrastructure. **Grid-scale battery energy storage systems (BESS) are being built as core assets that stabilize, optimize, and monetize grid operations.**

**[BESS can respond within milliseconds, far faster than conventional power plants and storage like pumped hydro](https://www.caiso.com/documents/2024-special-report-on-battery-storage-may-29-2025.pdf)**[.](https://www.caiso.com/documents/2024-special-report-on-battery-storage-may-29-2025.pdf) This agility allows them to perform frequency regulation, instantly absorbing or injecting power to maintain the grid’s 50/60 Hz balance. They also provide peak shaving and load shifting, charging during low-cost or low-demand periods and discharging during evening peaks. On the system side, the small and modular design enabled the smoothing of the micro imbalance happened in the capillaries of the grid system. Utility providers deploy them as virtual power plants or “non-wires alternatives,” using storage to relieve local congestion and defer expensive grid upgrades.

#### **Onwards**

The story of energy storage is ultimately a story of flexibility. Legacy systems like **pumped hydro** remain invaluable for large-scale, long-duration balancing — but they are fixed, slow to build, and geographically constrained. In contrast, **BESS** represents a new class of infrastructure: modular, fast, and deployable almost anywhere. This feature makes BESS the fastest-growing segment in the entire energy storage landscape. As manufacturing scale drives costs down and performance continues to improve, BESS is rapidly moving from pilot projects to mainstream infrastructure, reshaping how power systems are designed and operated.

In the next part of this series, we’ll focus entirely on BESS: how cells become grid assets, what drives cost curves, who are the key players and how do they participate in the fusing market of grid and energy storage.
