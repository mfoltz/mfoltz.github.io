---
title: TM_CarriageContainer_MilitiaQuartz
guid: -336079872
categories: ['All', 'TM']
nav_exclude: true
search_exclude: true
layout: default
---

# TM_CarriageContainer_MilitiaQuartz

**GUID:** `-336079872`

**Categories:** [All](/prefabs/All), [TM](/prefabs/TM)

## Components

- [ProjectM.EntityOwner](/components/EntityOwner){:target="_blank"}
  - `Owner: Entity(0:0)`

- [ProjectM.EntityCreator](/components/EntityCreator){:target="_blank"}
  - `Creator: NetworkedEntity(0:0)`

- [ProjectM.SpellTarget](/components/SpellTarget){:target="_blank"}
  - `Target: NetworkedEntity(0:0)`
  - `DestroyIfNotInteractable: True`

- [ProjectM.Sequencer.SpawnSequenceForEntity](/components/SpawnSequenceForEntity){:target="_blank"}
  - `SequenceGuid: SequenceGUID -1061689513`
  - `Target: NetworkedEntity(0:0)`
  - `SecondaryTarget: NetworkedEntity(0:0)`
  - `PlayOnSelf: False`
  - `Scale: 1`
  - `SequenceInstance: SequenceState`
  - `Id: Entity(0:0)`
  - `HandledPotentialError: False`

- [ProjectM.GetOwnerRotation](/components/GetOwnerRotation){:target="_blank"}
  - `OffsetDegreesClockwise: 0`
  - `Type: ProjectM.GetRotationType Rotation`
  - `RotationSource: ProjectM.GetOwnerRotationComponent+GetRotationSource Owner`
  - `InverseRotation: False`

- [ProjectM.GetTranslationOnSpawn](/components/GetTranslationOnSpawn){:target="_blank"}
  - `TranslationSource: ProjectM.GetTranslationSource Creator`
  - `SnapToGround: False`

- [ProjectM.Interactable](/components/Interactable){:target="_blank"}
  - `CurrentTargetSequenceGuid: SequenceGUID 0`
  - `IgnoreLineOfSight: True`
  - `IgnoreBlockInteract: False`
  - `UseInteractAbilityName: True`
  - `Disabled: False`

- [ProjectM.InteractedUpon](/components/InteractedUpon){:target="_blank"}
  - `Interacting: False`
  - `BlockBuildingMovement: False`
  - `BlockBuildingDisassemble: False`

- [ProjectM.DestroyAfterTimeOnInventoryChange](/components/DestroyAfterTimeOnInventoryChange){:target="_blank"}
  - `Duration: 60`
  - `Triggered: False`

- [ProjectM.DropInInventoryOnSpawn](/components/DropInInventoryOnSpawn){:target="_blank"}
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnSpawnDropInInventory`
  - `ReplaceInventory: False`

- [ProjectM.PlacementDestroyData](/components/PlacementDestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.CastleBuilding.Placement.TileModelDestroyReason None`

- [ProjectM.DestroyData](/components/DestroyData){:target="_blank"}
  - `DestroyReason: ProjectM.DestroyReason Default`

- [ProjectM.DestroyState](/components/DestroyState){:target="_blank"}
  - `Value: ProjectM.DestroyStateEnum NotDestroyed`

- [ProjectM.DestroyAfterDuration](/components/DestroyAfterDuration){:target="_blank"}
  - `Duration: 1200`
  - `EndTime: 0`
  - `Condition: None`

- [ProjectM.DestroyAfterDuration_ActiveUserCheck](/components/DestroyAfterDuration_ActiveUserCheck){:target="_blank"}
  - `Range: 20`
  - `DurationModifier: 0.1`

- [ProjectM.Health](/components/Health){:target="_blank"}
  - `MaxHealth: 1`
  - `TimeOfDeath: 0`
  - `Value: 1`
  - `MaxRecoveryHealth: 1`
  - `IsDead: False`

- [ProjectM.HealthConstants](/components/HealthConstants){:target="_blank"}
  - `LowHealthFactor: 0.4`
  - `DestroyOnDeath: True`
  - `DestroyAfterDuration: 0`
  - `DisableDamageSCT: False`

- [ProjectM.InventoryOwner](/components/InventoryOwner){:target="_blank"}
  - `LastUpdateVersion: 0`
  - `HasItems: False`

- [ProjectM.LastTranslation](/components/LastTranslation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.ManualFirstFrameLastTranslation](/components/ManualFirstFrameLastTranslation){:target="_blank"}
  - `Value: Il2CppSystem.Nullable_Unboxed`1[Unity.Mathematics.float3]`

- [ProjectM.CollisionRadius](/components/CollisionRadius){:target="_blank"}
  - `Radius: 1.2`

- [ProjectM.Team](/components/Team){:target="_blank"}
  - `Value: 1`
  - `FactionIndex: -1`

- [ProjectM.TileBounds](/components/TileBounds){:target="_blank"}
  - `Value: ProjectM.BoundsMinMax [Min=int2(0, 0), Max=int2(0, 0)]`

- [ProjectM.TileModelSpatialData](/components/TileModelSpatialData){:target="_blank"}
  - `LastTilePosition: ProjectM.TilePosition Tile=int2(0, 0), TileRotation=None, Height=-50`

- [ProjectM.TileData](/components/TileData){:target="_blank"}
  - `Data: Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob] Unity.Entities.BlobAssetReference`1[ProjectM.TileBlob]`

- [ProjectM.EntityCategory](/components/EntityCategory){:target="_blank"}
  - `MainCategoryInt: 2`
  - `UnitCategoryInt: 7`
  - `StructureCategoryInt: 2`
  - `MaterialCategoryInt: 0`
  - `ResourceLevel: 0`

- [ProjectM.Sequencer.ImpactMaterial](/components/ImpactMaterial){:target="_blank"}
  - `IntType: 1`
  - `Offset: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `PlayOnSelf: False`

- [ProjectM.Scripting.ScriptDestroy](/components/ScriptDestroy){:target="_blank"}
  - `Handled: False`

- [ProjectM.Network.Networked](/components/Networked){:target="_blank"}
  - `CreateFrame: 0`

- [ProjectM.Network.UpToDateUserBitMask](/components/UpToDateUserBitMask){:target="_blank"}
  - `Value: ProjectM.Network.UserBitMask128 00000000000000000000000000000000`

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- **00000000000000000000000000000000**
  - *(No fields)*

- [ProjectM.Network.FrameChanged](/components/FrameChanged){:target="_blank"}
  - `Value: -1`

- [ProjectM.Network.NetworkSnapshot](/components/NetworkSnapshot){:target="_blank"}
  - `Type: ProjectM.Network.NetworkSnapshotType Snapshot_kihkheghd`

- [ProjectM.Tiles.TileModel](/components/TileModel){:target="_blank"}
  - `DisabledTileTypesInt: 0`

- [ProjectM.Hybrid.HybridModelSeed](/components/HybridModelSeed){:target="_blank"}
  - `Seed: 0`
  - `HasSetSeed: False`

- [Unity.Transforms.Rotation](/components/Rotation){:target="_blank"}
  - `Value: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [Unity.Transforms.Translation](/components/Translation){:target="_blank"}
  - `Value: Unity.Mathematics.float3 float3(0f, 0f, 0f)`

- [ProjectM.Gameplay.Scripting.Script_CarriageCollidersData](/components/Script_CarriageCollidersData){:target="_blank"}
  - `ColliderPrefab: CarriageCollider PrefabGuid(-584529203)`

- [Unity.Physics.PhysicsCollider](/components/PhysicsCollider){:target="_blank"}
  - `Value: Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider] Unity.Entities.BlobAssetReference`1[Unity.Physics.Collider]`

- [Unity.Physics.Systems.StaticPhysicsWorldBodyIndex](/components/StaticPhysicsWorldBodyIndex){:target="_blank"}
  - `WorldBodyIndex: -1`

- [Unity.Transforms.LocalToWorld](/components/LocalToWorld){:target="_blank"}
  - `Value: Unity.Mathematics.float4x4 float4x4(1f, 0f, 0f, 0f,  0f, 1f, 0f, 0f,  0f, 0f, 1f, 0f,  0f, 0f, 0f, 1f)`

- [Unity.Transforms.LocalTransform](/components/LocalTransform){:target="_blank"}
  - `Position: Unity.Mathematics.float3 float3(0f, 0f, 0f)`
  - `Scale: 1`
  - `Rotation: Unity.Mathematics.quaternion quaternion(0f, 0f, 0f, 1f)`

- [ProjectM.TeamReference](/components/TeamReference){:target="_blank"}
  - `Value: ModifiableEntity(0:0)`

- [ProjectM.TilePosition](/components/TilePosition){:target="_blank"}
  - `Tile: Unity.Mathematics.int2 int2(0, 0)`
  - `TileRotation: ProjectM.Tiles.TileRotation None`
  - `CompressedHeight: 0`

- [ProjectM.Network.NetworkId](/components/NetworkId){:target="_blank"}
  - `Normal_Index: 0`
  - `Normal_Generation: 0`
  - `MegaStatic_StaticTransformIndex: 0`
  - `MegaStatic_TerrainChunkX: 0`
  - `MegaStatic_TerrainChunkY: 0`
  - `MegaStatic_PrefabGUID: 0`
  - `Type: ProjectM.Network.NetworkIdType None`

- [Stunlock.Core.PrefabGUID](/components/PrefabGUID){:target="_blank"}
  - `_Value: -336079872`

- [ProjectM.InventoryInstanceElement](/components/InventoryInstanceElement){:target="_blank"}

- **[0]**
  - `Category: ProjectM.InventoryInstanceElement+InstanceCategory Main`
  - `Slots: 21`
  - `MaxSlots: 21`
  - `ExternalInventoryEntityPrefabGuid: External_Inventory PrefabGuid(1183666186)`
  - `ExternalInventoryEntity: NetworkedEntity(0:0)`
  - `RestrictedType: GUID Not Found`
  - `RestrictedCategory: 0`
  - `StartItems: Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems] Unity.Entities.BlobAssetReference`1[ProjectM.ExternalInventoryStartItems]`

- [ProjectM.InteractAbilityBuffer](/components/InteractAbilityBuffer){:target="_blank"}

- **[0]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab XF߰<  ��V�<  ��r�=  ��X�<  ��`
  - `Component �<         �s
��  `
  - `ConditionalElements`
  - `Ability: AB_Interact_OpenContainer_Hold_AbilityGroup PrefabGuid(421907078)`
  - `Importance: 0`
  - `HideInteractHUDWhileCasting: False`

- **[1]**
  - `Condition: ConditionBlob`
  - `ConditionInfo`
  - `Prefab XF߰<  ��V�<  ��r�=  ��X�<  ��`
  - `Component �<         �s
��  `
  - `ConditionalElements`
  - `Ability: AB_Interact_OpenContainer_Hold_AbilityGroup PrefabGuid(421907078)`
  - `Importance: 0`
  - `HideInteractHUDWhileCasting: False`

- [ProjectM.CreateGameplayEventsOnSpawn](/components/CreateGameplayEventsOnSpawn){:target="_blank"}

- **[0]**
  - `EventId: Local - -112044381`
  - `Target: ProjectM.GameplayEventTarget Self`

- [ProjectM.GameplayEventIdMapping](/components/GameplayEventIdMapping){:target="_blank"}

- **[0]**
  - `NextTriggerTime: 0`
  - `TriggerCooldown: 0`
  - `GameplayEventId: Local - -112044381`
  - `MaxTriggers: 0`
  - `CurrentTriggers: 0`
  - `TriggerMultipleTimes: False`

- [ProjectM.PlaySequenceOnGameplayEvent](/components/PlaySequenceOnGameplayEvent){:target="_blank"}

- **[0]**
  - `SequenceGuid: SequenceGUID -476085562`
  - `SequencePositionTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`
  - `SequenceRotationTarget: ProjectM.PlaySequenceOnGameplayEventTarget Self`

- [ProjectM.Network.Snapshot_InventoryInstanceElement](/components/Snapshot_InventoryInstanceElement){:target="_blank"}

- **[0]**
  - `Value: 1`

- **[1]**
  - `Value: 0`

- **[2]**
  - `Value: 0`

- **[3]**
  - `Value: 0`

- **[4]**
  - `Value: 0`

- **[5]**
  - `Value: 0`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 21`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 21`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 0`

- **[48]**
  - `Value: 0`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **52 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.GameplayEventListeners](/components/GameplayEventListeners){:target="_blank"}

- **[0]**
  - `EventIdIndex: 0`
  - `EventIndexOfType: 0`
  - `ConditionBlob: None`
  - `GameplayEventType: ProjectM.GameplayEventTypeEnum PlaySequence`
  - `GameplayEventId: Local - -112044381`

- [ProjectM.Network.NetSnapshot](/components/NetSnapshot){:target="_blank"}

- **[0]**
  - `Value: 0`

- **[1]**
  - `Value: 212`

- **[2]**
  - `Value: 247`

- **[3]**
  - `Value: 235`

- **[4]**
  - `Value: 158`

- **[5]**
  - `Value: 1`

- **[6]**
  - `Value: 0`

- **[7]**
  - `Value: 0`

- **[8]**
  - `Value: 0`

- **[9]**
  - `Value: 0`

- **[10]**
  - `Value: 0`

- **[11]**
  - `Value: 0`

- **[12]**
  - `Value: 0`

- **[13]**
  - `Value: 0`

- **[14]**
  - `Value: 0`

- **[15]**
  - `Value: 0`

- **[16]**
  - `Value: 0`

- **[17]**
  - `Value: 0`

- **[18]**
  - `Value: 0`

- **[19]**
  - `Value: 0`

- **[20]**
  - `Value: 0`

- **[21]**
  - `Value: 0`

- **[22]**
  - `Value: 0`

- **[23]**
  - `Value: 0`

- **[24]**
  - `Value: 0`

- **[25]**
  - `Value: 0`

- **[26]**
  - `Value: 0`

- **[27]**
  - `Value: 0`

- **[28]**
  - `Value: 0`

- **[29]**
  - `Value: 0`

- **[30]**
  - `Value: 0`

- **[31]**
  - `Value: 0`

- **[32]**
  - `Value: 0`

- **[33]**
  - `Value: 0`

- **[34]**
  - `Value: 0`

- **[35]**
  - `Value: 0`

- **[36]**
  - `Value: 0`

- **[37]**
  - `Value: 0`

- **[38]**
  - `Value: 0`

- **[39]**
  - `Value: 0`

- **[40]**
  - `Value: 0`

- **[41]**
  - `Value: 0`

- **[42]**
  - `Value: 0`

- **[43]**
  - `Value: 0`

- **[44]**
  - `Value: 0`

- **[45]**
  - `Value: 0`

- **[46]**
  - `Value: 0`

- **[47]**
  - `Value: 128`

- **[48]**
  - `Value: 63`

- **[49]**
  - `Value: 0`

- **[50]**
  - `Value: 0`

- **[51]**
  - `Value: 0`

- **[52]**
  - `Value: 128`

- **[53]**
  - `Value: 63`

- **[54]**
  - `Value: 0`

- **[55]**
  - `Value: 0`

- **[56]**
  - `Value: 0`

- **[57]**
  - `Value: 0`

- **[58]**
  - `Value: 0`

- **[59]**
  - `Value: 0`

- **[60]**
  - `Value: 0`

- **[61]**
  - `Value: 0`

- **[62]**
  - `Value: 0`

- **[63]**
  - `Value: 0`

- **[64]**
  - `Value: 0`

- **[65]**
  - `Value: 0`

- **[66]**
  - `Value: 87`

- **[67]**
  - `Value: 231`

- **[68]**
  - `Value: 183`

- **[69]**
  - `Value: 192`

- **[70]**
  - `Value: 0`

- **[71]**
  - `Value: 0`

- **[72]**
  - `Value: 0`

- **[73]**
  - `Value: 0`

- **[74]**
  - `Value: 0`

- **[75]**
  - `Value: 0`

- **[76]**
  - `Value: 0`

- **[77]**
  - `Value: 0`

- **[78]**
  - `Value: 0`

- **[79]**
  - `Value: 0`

- **[80]**
  - `Value: 0`

- **[81]**
  - `Value: 0`

- **[82]**
  - `Value: 0`

- **[83]**
  - `Value: 0`

- **[84]**
  - `Value: 0`

- **[85]**
  - `Value: 0`

- **[86]**
  - `Value: 0`

- **[87]**
  - `Value: 0`

- **[88]**
  - `Value: 0`

- **[89]**
  - `Value: 0`

- **[90]**
  - `Value: 0`

- **[91]**
  - `Value: 0`

- **[92]**
  - `Value: 0`

- **[93]**
  - `Value: 0`

- **[94]**
  - `Value: 255`

- **[95]**
  - `Value: 255`

- **[96]**
  - `Value: 255`

- **[97]**
  - `Value: 255`

- **[98]**
  - `Value: 1`

- **[99]**
  - `Value: 0`

- **[100]**
  - `Value: 0`

- **[101]**
  - `Value: 0`

- **[102]**
  - `Value: 0`

- **[103]**
  - `Value: 0`

- **[104]**
  - `Value: 0`

- **[105]**
  - `Value: 0`

- **[106]**
  - `Value: 0`

- **[107]**
  - `Value: 0`

- **[108]**
  - `Value: 0`

- **[109]**
  - `Value: 0`

- **[110]**
  - `Value: 0`

- **[111]**
  - `Value: 0`

- **[112]**
  - `Value: 0`

- **[113]**
  - `Value: 0`

- **[114]**
  - `Value: 0`

- **[115]**
  - `Value: 0`

- **[116]**
  - `Value: 0`

- **[117]**
  - `Value: 0`

- **[118]**
  - `Value: 0`

- **[119]**
  - `Value: 0`

- **120 total elements but only showing the first 36**
  - *(No fields)*

- [ProjectM.Network.SnapshotFrameChangedBuffer](/components/SnapshotFrameChangedBuffer){:target="_blank"}

- **[0]**
  - `Value: -1`

- **[1]**
  - `Value: -1`

- **[2]**
  - `Value: -1`

- **[3]**
  - `Value: -1`

- **[4]**
  - `Value: -1`

- **[5]**
  - `Value: -1`

- **[6]**
  - `Value: -1`

- **[7]**
  - `Value: -1`

- **[8]**
  - `Value: -1`

- **[9]**
  - `Value: -1`

- **[10]**
  - `Value: -1`

- **[11]**
  - `Value: -1`

- **[12]**
  - `Value: -1`

- **[13]**
  - `Value: -1`

- **[14]**
  - `Value: -1`

- **[15]**
  - `Value: -1`

- **[16]**
  - `Value: -1`

- **[17]**
  - `Value: -1`

- **[18]**
  - `Value: -1`

- **[19]**
  - `Value: -1`

- **[20]**
  - `Value: -1`

- **[21]**
  - `Value: -1`

- **[22]**
  - `Value: -1`

- **[23]**
  - `Value: -1`

- **[24]**
  - `Value: -1`

- **[25]**
  - `Value: -1`

- **[26]**
  - `Value: -1`

- **[27]**
  - `Value: -1`

- **[28]**
  - `Value: -1`

- **[29]**
  - `Value: -1`

- [ProjectM.Shared.DropTableBuffer](/components/DropTableBuffer){:target="_blank"}

- **[0]**
  - `DropTableGuid: DT_Shared_Treasure_Carriage_T02_Militia PrefabGuid(-1262629267)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnSpawnDropInInventory`
  - `RelicType: ProjectM.Shared.RelicType None`

- **[1]**
  - `DropTableGuid: DT_Carriage_T02_Quartz PrefabGuid(1120449851)`
  - `DropTrigger: ProjectM.Shared.DropTriggerType OnSpawnDropInInventory`
  - `RelicType: ProjectM.Shared.RelicType None`

- [ProjectM.GetOwnerRotationOnlyOnSpawnTag](/components/GetOwnerRotationOnlyOnSpawnTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileCollisionTag](/components/TileCollisionTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TilePathfindingTag](/components/TilePathfindingTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileLineOfSightTag](/components/TileLineOfSightTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.TilePlacementTag](/components/TilePlacementTag){:target="_blank"}
  - *(No fields)*

- [ProjectM.Scripting.ScriptSpawn](/components/ScriptSpawn){:target="_blank"}
  - *(No fields)*

- [ProjectM.Shared.DropTable](/components/DropTable){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.SpawnTag](/components/SpawnTag){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Prefab](/components/Prefab){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.Simulate](/components/Simulate){:target="_blank"}
  - *(No fields)*

- [Unity.Entities.BlobAssetOwner](/components/BlobAssetOwner){:target="_blank"}
  - *(No fields)*

- [ProjectM.TileModelRegistrationState](/components/TileModelRegistrationState){:target="_blank"}
  - *(No fields)*

- [ProjectM.Network.NetworkSnapshotType](/components/NetworkSnapshotType){:target="_blank"}
  - *(No fields)*

- [ProjectM.Tiles.TileModelLayer](/components/TileModelLayer){:target="_blank"}
  - *(No fields)*

- [Unity.Physics.PhysicsWorldIndex](/components/PhysicsWorldIndex){:target="_blank"}
  - *(No fields)*
