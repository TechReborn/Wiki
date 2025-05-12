![thermal_generator.png](/media/mods/techreborn/thermal_generator.png){.align-right width="200" query="?200"}

# Thermal Generator

The **Thermal Generator** produces energy from lava. It has an internal **[Tank](/media/mods/techreborn/basic_tank_unit)** that can hold 10k mB (10 **[Buckets](/mods/minecraft/bucket)** or **[Cells](/items/fluid/empty_cell)**) of lava which is consumed as it is converted to energy.

  Tier         Generation Rate   Output    Storage
  ------------ ----------------- --------- -----------------------------
  Industrial   16 E/t            128 E/t   1 mE + 600 kE worth of lava

### Fuel

  Fuel   E/1000 mB
  ------ -----------
  Lava   60,000

### Recipe

\<recipe\> input techreborn:invar_plate techreborn:invar_plate techreborn:invar_plate input techreborn:invar_plate techreborn:reinforced_glass techreborn:invar_plate input techreborn:electronic_circuit techreborn:generator techreborn:electronic_circuit output techreborn:thermal_generator \</recipe\>

### Usage

- Place a cell or bucket of lava into the input slot to fill the internal tank
- Can also be filled by an external **[Tank](/media/mods/techreborn/basic_tank_unit)**
- Outputs energy on all sides
