![Pump](/media/mods/techreborn/pump.png){.align-right width="200" query="?nolink&200"}

# Pump

The **Pump** is a machine that is used to automate the gathering of fluids from an area (mostly water or lava). Any source fluid in the area defined by depth below and range around the pump is put into its internal tank (Can only hold 16 buckets worth of liquid).

Any waterlogged blocks (kelp, fences, etc) will be broken in the collecting. The pump replaces the source block with cobblestone in the Overworld, blackstone in the Nether and endstone in the End.

The pump scans and collects the farthest positions first, from the bottom and up. Collection stops when the pump finishes scanning and collecting fluids in the area. It's shown with \`Exhausted\` message in the GUI.

Mind that only a fluid that can fit into the internal tank will be pumped, so if the pump's internal tank already contains water then a lava pocket will be skipped. You can overcome this limitation, of course.

Collected fluid can then be pumped out, either by the pump itself (all sides can output) or tank units.

The pump does require an energy source as it consumes 1000 EU per bucket of fluid collected.

Collection depth and range can be changed in the machine's GUI.

This is useful for draining large water and lava lakes, collecting oil from natural oil lakes. Place a pump, an energy source and a tank next to it.

Introduced (*maybe*) in the 5.6.0 version of Tech Reborn

## Recipe

\<recipe\> input techreborn:refined_iron_plate techreborn:advanced_machine_frame techreborn:refined_iron_plate input techreborn:refined_iron_plate techreborn:basic_tank_unit techreborn:refined_iron_plate input techreborn:drain minecraft:iron_bars techreborn:drain output techreborn:pump \</recipe\>
