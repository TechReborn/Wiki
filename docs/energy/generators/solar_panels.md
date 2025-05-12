![Basic Solar Panel](/media/mods/techreborn/basic_solar_panel.png){.align-right width="200" query="?200"}

# Solar Panels

**Solar Panels** are **[passive generators](/energy/generators/passive_generators)** that produce energy from sunlight.

It is a tiered system, progressing as follows:

  Name                                                       Tier       Day Energy Generation per Tick   Night Energy Generation per Tick   Energy Storage
  ---------------------------------------------------------- ---------- -------------------------------- ---------------------------------- ---------------------------------------------
  \<mcitem\>techreborn:basic_solar_panel\</mcitem\>          Micro      3                                \-                                 \<tooltip title="6,000"\>6k\</tooltip\>
  \<mcitem\>techreborn:advanced_solar_panel\</mcitem\>       Low        12                               \-                                 \<tooltip title="24,000"\>24k\</tooltip\>
  \<mcitem\>techreborn:industrial_solar_panel\</mcitem\>     Medium     24                               4                                  \<tooltip title="48,000"\>48k\</tooltip\>
  \<mcitem\>techreborn:ultimate_solar_panel\</mcitem\>       High       48                               8                                  \<tooltip title="96,000"\>96k\</tooltip\>
  \<mcitem\>techreborn:quantum_solar_panel\</mcitem\>        Insane     512                              32                                 \<tooltip title="1,000,000"\>1m\</tooltip\>
  \<mcitem\>techreborn:creative_solar_panel\</mcitem\>[^1]   Infinite   ∞                                ∞                                  ∞

### Panel States

A solar panel has three possible states:

- **Direct Sunlight:** The panel is producing at its maximum rate --- *Sky access, day time, and Clear weather.*
- **Reduced Sunlight:** The panel is producing its night-time generation rate --- *Night time, Rain, or Thunder weather.*
- **Obstructed Sunlight:** The panel doesn't have a direct view of the sky --- *A solid block is directly above it (the distance away from the top of the solar panel doesn't matter).*

\<callout type="info" title="Day & Night"\> Solar Panels do not generate energy based on the light level of sunlight like the \<mcitem\>minecraft:Daylight_Detector\</mcitem\>, but are rather based on the [Daylight Cycle](https://minecraft.fandom.com/wiki/Daylight_cycle) and occur at times 12542 and 23460.

These times are the same as when the player can and cannot sleep in a bed.\</callout\>

### Usage Notes

- Right click a solar panel to open its GUI and view the specifications and current status (this works on all tiers except Infinite).
- Solar panels output energy from all sides, and putting a wire on the top does not interfere with energy generation.
- Energy output can be turned on and off using \<mcitem\>minecraft:redstone\</mcitem\>.
- Solar panels all output at \<tooltip title="2,048"\>2.0k\</tooltip\> Energy per Tick, and will likely be limited by the attached cable.[^2]

[^1]: This panel is Tech Reborn's version of an infinite energy source. There is no recipe for this tier; it can only be acquired in Creative mode or via commands.

[^2]: The only exception to this is the \<mcitem\>techreborn:Creative_Solar_Panel\</mcitem\>, whose Energy output is only limited by the cable or device connected to it.
