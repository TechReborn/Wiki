![Overclocker Upgrade](/media/mods/techreborn/overclocker_upgrade.png){.align-right width="200" query="?nolink&200"} \<alert type="warning"\>*This page is a work in progress and may not be fully accurate*\</alert\> =======Overclocker Upgrade======= The **Overclocker Upgrade** is a [machine upgrade](/energy/machines/upgrades) that increases the speed of a machine at the cost of increased energy usage.

Each Overclocker applies:

- \+ 1x energy storage
- \+ 1x energy input rate
- \- 25% time per recipe
- \+ 75% energy usage

  \# of Overclockers   Energy Input Rate   Energy Capacity   Time   Energy Usage   Relative Energy Use/Speed
  -------------------- ------------------- ----------------- ------ -------------- ---------------------------
  0                    1x                  1x                100%   1x             100%
  1                    2x                  2x                75%    2x             150%
  2                    3x                  3x                50%    4x             200%
  3                    4x                  4x                25%    8x             200%
  4                    5x                  5x                1.5%   16x            25%

## Recipes

\<recipe\> input air techreborn:60k_nak_coolant_cell air input techreborn:insulated_copper_cable techreborn:electronic_circuit techreborn:insulated_copper_cable input air air air output techreborn:overclocker_upgrade,2 \</recipe\>\
\<recipe\> input air techreborn:180k_helium_coolant_cell air input techreborn:insulated_copper_cable techreborn:electronic_circuit techreborn:insulated_copper_cable input air air air output techreborn:overclocker_upgrade,2 \</recipe\>\
\<recipe\> input techreborn:10k_water_coolant_cell techreborn:10k_water_coolant_cell techreborn:10k_water_coolant_cell input techreborn:insulated_copper_cable techreborn:electronic_circuit techreborn:insulated_copper_cable input air air air output techreborn:overclocker_upgrade,2 \</recipe\>
