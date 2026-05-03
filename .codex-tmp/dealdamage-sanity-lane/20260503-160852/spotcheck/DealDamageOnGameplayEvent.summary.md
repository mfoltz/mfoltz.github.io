# DealDamageOnGameplayEvent Server Component Spot-Check

## Source

- Artifact: C:\Users\mitch\source\Repos\VRising.DataExtractor\.codex\runs\20260502-211922\vrising-dataextractor-server-component-spotcheck\snapshots\VRising.DataExtractor\ServerComponentSpotChecksServer.json
- Snapshot root: C:\Users\mitch\source\Repos\VRising.DataExtractor\.codex\runs\20260502-211922\vrising-dataextractor-server-component-spotcheck\snapshots\VRising.DataExtractor

## Coverage

- Rows: 1683
- Captured rows: 1683
- Missing component rows: 0

## Capture Statuses

- captured: 1683

## Component Fields

- DamageModifierPerHit: present 1683, non-default 15, distinct 10 (0=1668; 1=4; 10=3; 2=2; 0.01=1)
- MultiplyMainFactorWithStacks: present 1683, non-default 9, distinct 2 (false=1674; true=9)
- Parameters: present 1683, non-default 1683, distinct 503 ({"MaterialModifiers":{"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":0.5,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":1,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1},"MainFactor":1,"ResourceModifier":1,"StaggerFactor":0,"RawDamageValue":0,"RawDamagePercent":1,"DealDamageFlags":1065353216,"MainType":"1065353216"}=205; {"MaterialModifiers":{"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":0.5,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":1,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1},"MainFactor":1,"ResourceModifier":1,"StaggerFactor":0,"RawDamageValue":0,"RawDamagePercent":0.5,"DealDamageFlags":1065353216,"MainType":"1065353216"}=85; {"MaterialModifiers":{"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":0.5,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":1,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1},"MainFactor":1,"ResourceModifier":1,"StaggerFactor":0,"RawDamageValue":0,"RawDamagePercent":1.2,"DealDamageFlags":1065353216,"MainType":"1065353216"}=52; {"MaterialModifiers":{"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":0.5,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":1,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1},"MainFactor":1,"ResourceModifier":1,"StaggerFactor":0,"RawDamageValue":0,"RawDamagePercent":0.4,"DealDamageFlags":1065353216,"MainType":"1065353216"}=49; {"MaterialModifiers":{"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":0.5,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":1,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1},"MainFactor":1,"ResourceModifier":1,"StaggerFactor":0,"RawDamageValue":0,"RawDamagePercent":0.6,"DealDamageFlags":1065353216,"MainType":"1065353216"}=45)

## Parameter Fields

- DealDamageFlags: present 1683, non-default 1345, distinct 16 (1065353216=1173; 0=338; 1077936128=48; 1084227584=31; 1073741824=25)
- MainFactor: present 1683, non-default 1353, distinct 3 (1=1350; 0=330; 4=3)
- MainType: present 1683, non-default 1683, distinct 2 (1065353216=1353; Physical=330)
- MaterialModifiers: present 1683, non-default 1683, distinct 336 ({"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":0.5,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":1,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1}=1111; {"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":0.5,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":1,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":0.25,"Magic":0.25,"Explosives":0.25,"MassiveResource":0.75,"MonsterGate":1}=163; {"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":1,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":0,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":0,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1}=67; {"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":0.75,"CastleObject":0.75,"PlayerVampire":0.75,"PvEVampire":0.75,"ShadowVBlood":0.75,"BasicStructure":1,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":4,"Wood":1,"Minerals":0,"Vegetation":1,"LightArmor":1,"VBlood":3,"Magic":3,"Explosives":3,"MassiveResource":1,"MonsterGate":0.33}=6; {"Human":0,"Undead":0,"Demon":1e-45,"Mechanical":1e-45,"Beast":1,"CastleObject":1,"PlayerVampire":1,"PvEVampire":1,"ShadowVBlood":1,"BasicStructure":1,"ReinforcedStructure":1,"FortifiedStructure":1,"StoneStructure":1,"SiegeAltar":2,"Wood":0,"Minerals":0,"Vegetation":0,"LightArmor":1,"VBlood":1,"Magic":1,"Explosives":1,"MassiveResource":1,"MonsterGate":1}=3)
- RawDamagePercent: present 1683, non-default 1288, distinct 52 (0=395; 1=261; 0.5=119; 0.7=70; 0.4=66)
- RawDamageValue: present 1683, non-default 0, distinct 1 (0=1683)
- ResourceModifier: present 1683, non-default 1353, distinct 3 (1=1350; 0=330; 60=3)
- StaggerFactor: present 1683, non-default 12, distinct 4 (0=1671; 10=6; 1.8=3; 3=3)

## Material Modifiers

- BasicStructure: present 1683, non-default 1353, distinct 4 (0.5=1274; 0=330; 1=76; 4=3)
- Beast: present 1683, non-default 1353, distinct 4 (1=1344; 0=330; 0.75=6; 4=3)
- CastleObject: present 1683, non-default 1353, distinct 4 (1=1344; 0=330; 0.75=6; 4=3)
- Demon: present 1683, non-default 1683, distinct 4 (1e-45=1353; 3e-45=266; 4e-45=59; 6e-45=5)
- Explosives: present 1683, non-default 1353, distinct 4 (1=1181; 0=330; 0.25=163; 3=9)
- FortifiedStructure: present 1683, non-default 1353, distinct 3 (1=1350; 0=330; 4=3)
- Human: present 1683, non-default 330, distinct 331 (0=1353; 1013352240000=1; 1014635700000=1; 1022294500000=1; 1022365800000=1)
- LightArmor: present 1683, non-default 1286, distinct 3 (1=1283; 0=397; 8=3)
- Magic: present 1683, non-default 1353, distinct 4 (1=1181; 0=330; 0.25=163; 3=9)
- MassiveResource: present 1683, non-default 1353, distinct 4 (1=1187; 0=330; 0.75=163; 3=3)
- Mechanical: present 1683, non-default 1683, distinct 2 (1e-45=1353; 1.1e-44=330)
- Minerals: present 1683, non-default 0, distinct 1 (0=1683)
- MonsterGate: present 1683, non-default 1353, distinct 4 (1=1344; 0=330; 0.33=6; 0.35=3)
- PlayerVampire: present 1683, non-default 1353, distinct 4 (1=1344; 0=330; 0.75=6; 4=3)
- PvEVampire: present 1683, non-default 1353, distinct 4 (1=1344; 0=330; 0.75=6; 4=3)
- ReinforcedStructure: present 1683, non-default 1353, distinct 3 (1=1350; 0=330; 4=3)
- ShadowVBlood: present 1683, non-default 1353, distinct 4 (1=1344; 0=330; 0.75=6; 4=3)
- SiegeAltar: present 1683, non-default 1286, distinct 5 (1=1274; 0=397; 4=6; 11=3; 2=3)
- StoneStructure: present 1683, non-default 1353, distinct 3 (1=1350; 0=330; 4=3)
- Undead: present 1683, non-default 330, distinct 2 (0=1353; 4.95e-43=330)

## Prefab Prefixes

- AB: 1631
- Buff: 18
- EH: 8
- Storm: 6
- Chaos: 5
- CHAR: 5
- TM: 4
- Frost: 2
- Illusion: 1
- Mutant: 1
- Spell: 1
- Unholy: 1

## Prefab Families

- AB_Vampire: 221
- AB_Blackfang: 166
- AB_Undead: 118
- AB_Militia: 100
- AB_Bandit: 67
- AB_Gloomrot: 51
- AB_ChurchOfLight: 50
- AB_Cursed: 50
- AB_Manticore: 36
- AB_CastleMan: 30
- AB_Unholy: 30
- AB_Legion: 28

## Same-Run Index Matches

- Ability groups: 0
- Items: 0
- NPCs: 7
- Unmatched: 1676

## Raw Projection Notes

- DealDamageFlags has 1345 encoded-looking numeric values; preserve raw values until enum/bitfield interpretation is verified.
- Demon material modifiers include 1683 odd raw numeric values; treat material data as raw-unverified.
- Human material modifiers include 330 odd raw numeric values; treat material data as raw-unverified.
- MainType has 1353 encoded-looking numeric values; preserve raw values until enum/bitfield interpretation is verified.
- Mechanical material modifiers include 1683 odd raw numeric values; treat material data as raw-unverified.
- Undead material modifiers include 330 odd raw numeric values; treat material data as raw-unverified.

## Downstream Shape

Keep this as an internal evidence sidecar keyed by `DealDamageOnGameplayEvent:<prefabGuid>`. Values are preserved as raw server ECS evidence with `interpretationStatus: "raw-unverified"`; no public DB fields are populated from this proof pass.
