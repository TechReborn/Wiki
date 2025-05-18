---
title: Energy
---

# Energy

Energy is the cornerstone of Tech Reborn. Machines require energy to run, the same as any electric machines used IRL.

### How it Works

At its core, Tech Reborn's energy is very simple. Energy is created by <McItem slug="techreborn:generator" inline={true}/> **[generators](/energy/generators)**; passed through <McItem slug="techreborn:insulated_copper_cable" inline={true}/> **[cables](/energy/cables)**; stored in <McItem slug="techreborn:mfe" inline={true}/> **[batteries](/energy/batteries)**; and consumed by <McItem slug="techreborn:grinder" inline={true}/> **[machines](/energy/machines)**. Advanced networks may also make use of <McItem slug="techreborn:mv_transformer" inline={true}/> **[transformers](/energy/transformers)**.

1. <McItem slug="techreborn:generator" inline={true}/> **[generators](/energy/generators)** produce energy each tick — then they:
   1. output energy into any directly connected machines or cable — or if those are full;
   2. store the energy in their own storage.
2. <McItem slug="techreborn:insulated_copper_cable" inline={true}/> **[cables](/energy/cables)** have an internal buffer (which depends on their tier) — Cables will:
   1. empty their buffer into any connected machines (at random) — or if those are full;
   2. average out any leftover energy across all connected cables.

   - *The result of this implementation is that **energy transfer is inefficient over long distances**. To mitigate this, it is best to place buffers (batteries) every 10–15 blocks to direct the flow of energy.*
3. <McItem slug="techreborn:mfe" inline={true}/> **[batteries](/energy/batteries)** input energy from up to 5 sources; then they:
   - output energy into any directly connected machine or cable — or if that is full;
   - store the energy in their own storage.
   - <McItem slug="techreborn:grinder" inline={true}/> **[machines](/energy/machines)**
     - <McItem slug="techreborn:overclocker_upgrade" inline={true}/> **[upgrades](/energy/machines/upgrades)**
   - <McItem slug="techreborn:mv_transformer" inline={true}/> **[transformers](/energy/transformers)** input energy at one rate — then they:
     - output at the rate a tier below, bridging two networks with different tiers.

### Energy Tiers

Unlike other tech-based mods, there is no concept of voltage in Tech Reborn. Instead, energy is divided into categories based on the I/O capabilities, which translate into the tiers of machinery the player should be able to construct by that point:

| Energy Tier | I/O Rate (E/t) | Machine Tier | Min. Cable Requirement      |
|-------------|----------------|---------------|------------------------------|
| Micro       | 8              | Basic         | Tin                          |
| Low         | 32             | Advanced      | Tin                          |
| Medium      | 128            | Industrial    | Copper / Insulated Copper    |
| High        | 512            | Ultimate      | Gold                         |
| Extreme     | 2,048          | Quantum       | HV / Insulated HV            |
| Insane      | 8,192          | —             | Glass Fiber                  |
| Infinite    | 2,147,483,647  | Creative       | —                           |

### GUIs

#### Main Interface

<img src="/img/energy/machines/grinder_interface.png" width="512" />

1. Input Slot  
2. Progress Indicator  
3. Output Slot  
4. Power Indicator  
5. Battery Slot (Can also be used as an item pipe between machines)  
6. Upgrade Slots  
7. Input/Output Config (See below)  
8. Redstone Config (See below)  

#### I/O Interface

<img src="/img/energy/machines/grinder_io_interface.png" width="580" />

1. Selected Slot  
2. Blue indicates input – In this case input will be the top  
3. Orange indicates output – In this case output will be on the right side  
4. Auto Input/Output Options – In this case input will be "powered" (Pulled), in output case items will be Pushed  

- Some machines will have a *Filter Input* option which only pulls compatible items for that slot (i.e. do not pull planks into an Industrial Grinder).

#### Redstone Interface

<img src="/img/energy/machines/grinder_redstone_interface.png" width="512" />

1. I/O Option – Will redstone control I/O config on/off  
2. Power I/O Option – Will redstone control machine power input (or generator output, or battery I/O)  
3. Crafting Option – Will redstone control machine crafting on/off  

- In this case a redstone signal will turn on item crafting and redstone off will turn off crafting.

#### Slot priority and pencil UI

<img src="/img/energy/machines/389956634-4523abef-e0c6-45f3-a9db-d6d06ba58471.gif" width="512" />

1. Choose a pencil  
2. Click on the machine face  
3. One direction can be set to priority or last, and different items will be able to be routed by configuration filtering.

### Compatibility

- 1.14 and above use [Energy](https://github.com/TechReborn/Energy)  
- 1.12.2 and below is compatible with Forge Energy, EU, and RF
