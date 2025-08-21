---
title: BP_Tier02_WallpaperSet_Arena01_Pillar
guid: 133356148
categories: ['All', 'BP']
nav_exclude: true
search_exclude: true
layout: default
---

**GUID:** `133356148`

**Categories:** [All]({{% relref "prefabs/All.md" %}}), [BP]({{% relref "prefabs/BP.md" %}})

## Components

- [ProjectM.DismantleDestroyData]({{% relref "components/DismantleDestroyData.md" %}})
  - `DismantleDestroyTime: 0.75`
  - `DismantleSequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `SkipDismantleTimeIfReplaced: False`
  - `WasDismantled: False`

- [ProjectM.BlueprintData]({{% relref "components/BlueprintData.md" %}})
  - `Entity: Prefab BP_Tier02_WallpaperSet_Arena01_Pillar PrefabGuid(133356148) - Entity(30416:4)`
  - `Guid: BP_Tier02_WallpaperSet_Arena01_Pillar PrefabGuid(133356148)`
  - `PlaceSequence: SequenceGUID 0`
  - `InvalidPlaceSequence: SequenceGUID 29614748`
  - `EditSequence: SequenceGUID -450089786`
  - `InvalidEditSequence: SequenceGUID 29614748`
  - `BuildingSequence: SequenceGUID -501872957`
  - `PhasedBuildingSequence: SequenceGUID 0`
  - `DismantledSequence: SequenceGUID 189290689`
  - `DestroyedSequence: SequenceGUID 189290689`
  - `RepairedSequence: SequenceGUID 1733594134`
  - `DismantleFraction: 0.75`
  - `FullDismantleTime: 300`
  - `IsStartBlueprint: True`
  - `IsInventoryItemBuilding: False`
  - `ExitBuildModeWhenBuilt: False`
  - `RequiresLineOfSight: False`
  - `RequiresSuccessfullPathfinding: True`

- [ProjectM.CastleBuilding.CastleHeartConnection]({{% relref "components/CastleHeartConnection.md" %}})
  - `CastleHeartEntity: NetworkedEntity(0:0)`

- [ProjectM.CastleAreaRequirement]({{% relref "components/CastleAreaRequirement.md" %}})
  - `RequirementType: ProjectM.CastleBuilding.Placement.CastleAreaRequirementType AttachToOwnedArea`
  - `BlockPlacementOnRoads: True`
  - `AllowPlaceInObjectsInRepairState: False`
  - `AllowTilesStickingOutOfTerritory: False`

- **ProjectM.LastEditedBy**
  - `User: ProjectM.Network.NetworkId (None)`

- [ProjectM.DestroyData]({{% relref "components/DestroyData.md" %}})
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState]({{% relref "components/DestroyState.md" %}})
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.CastleBuilding.CastleBuildingMaxRange]({{% relref "components/CastleBuildingMaxRange.md" %}})
  - `MaxRange: 180`

- [Stunlock.Core.PrefabGUID]({{% relref "components/PrefabGUID.md" %}})
  - `_Value: 133356148`

- [ProjectM.BlueprintRequirementBuffer]({{% relref "components/BlueprintRequirementBuffer.md" %}})

- [ProjectM.WallpaperSet]({{% relref "components/WallpaperSet.md" %}})

- [ProjectM.CastleBuilding.Placement.RestrictPlacementToMapZones]({{% relref "components/RestrictPlacementToMapZones.md" %}})

- [Unity.Entities.SpawnTag]({{% relref "components/SpawnTag.md" %}})

- [Unity.Entities.Prefab]({{% relref "components/Prefab.md" %}})

- [Unity.Entities.Simulate]({{% relref "components/Simulate.md" %}})
