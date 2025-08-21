---
nav_exclude: true
search_exclude: true
---

```csharp
public struct FromCharacter
{
	static FromCharacter()
	{
		Il2CppClassPointerStore<FromCharacter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "FromCharacter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr);
		FromCharacter.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr, "User");
		FromCharacter.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr, "Character");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FromCharacter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_User;
	private static readonly IntPtr NativeFieldInfoPtr_Character;

	public Entity User;

	public Entity Character;
}
```

## Server Systems

- [ActivateVBloodAbilitySystem]({{% relref "systems/server/ActivateVBloodAbilitySystem.md" %}})
- [AdminAuthSystem]({{% relref "systems/server/AdminAuthSystem.md" %}})
- [BecomeObserverSystem]({{% relref "systems/server/BecomeObserverSystem.md" %}})
- [BloodAltarSystem_StartTrackVBloodUnit_System_V2]({{% relref "systems/server/BloodAltarSystem_StartTrackVBloodUnit_System_V2.md" %}})
- [BloodAltarSystem_StopTrackVBloodUnit_System]({{% relref "systems/server/BloodAltarSystem_StopTrackVBloodUnit_System.md" %}})
- [BuildModeOpenedSystem_Server]({{% relref "systems/server/BuildModeOpenedSystem_Server.md" %}})
- [CharacterMenuOpenedSystem_Server]({{% relref "systems/server/CharacterMenuOpenedSystem_Server.md" %}})
- [ChatMessageSystem]({{% relref "systems/server/ChatMessageSystem.md" %}})
- [ClaimAchievementSystem]({{% relref "systems/server/ClaimAchievementSystem.md" %}})
- [ClanSystem_Server]({{% relref "systems/server/ClanSystem_Server.md" %}})
- [CollectChargedItemsSystem]({{% relref "systems/server/CollectChargedItemsSystem.md" %}})
- [DebugEventsSystem]({{% relref "systems/server/DebugEventsSystem.md" %}})
- [DefaultActionsSystem]({{% relref "systems/server/DefaultActionsSystem.md" %}})
- [DeleteMapMarkerSystem]({{% relref "systems/server/DeleteMapMarkerSystem.md" %}})
- [DiscoverResearchSystem]({{% relref "systems/server/DiscoverResearchSystem.md" %}})
- [DropItemSystem]({{% relref "systems/server/DropItemSystem.md" %}})
- [ElevateUserSystem]({{% relref "systems/server/ElevateUserSystem.md" %}})
- [EmoteSystem]({{% relref "systems/server/EmoteSystem.md" %}})
- [EquipItemFromInventorySystem]({{% relref "systems/server/EquipItemFromInventorySystem.md" %}})
- [EquipItemSystem]({{% relref "systems/server/EquipItemSystem.md" %}})
- [EquipServantItemFromInventorySystem]({{% relref "systems/server/EquipServantItemFromInventorySystem.md" %}})
- [EquipServantItemSystem]({{% relref "systems/server/EquipServantItemSystem.md" %}})
- [EquipmentTransferSystem]({{% relref "systems/server/EquipmentTransferSystem.md" %}})
- [GetServerTimeInfoEventSystem]({{% relref "systems/server/GetServerTimeInfoEventSystem.md" %}})
- [GetTerritoryOwnerRequestSystem]({{% relref "systems/server/GetTerritoryOwnerRequestSystem.md" %}})
- [GetUserStatsEventSystem]({{% relref "systems/server/GetUserStatsEventSystem.md" %}})
- [GetVBloodPositionsSystem]({{% relref "systems/server/GetVBloodPositionsSystem.md" %}})
- [GiveCombatPresetSystem]({{% relref "systems/server/GiveCombatPresetSystem.md" %}})
- [HandleCreateCharacterEventSystem]({{% relref "systems/server/HandleCreateCharacterEventSystem.md" %}})
- [HandleOpenVBloodMenuSystem]({{% relref "systems/server/HandleOpenVBloodMenuSystem.md" %}})
- [InteractValidateAndStopSystemServer]({{% relref "systems/server/InteractValidateAndStopSystemServer.md" %}})
- [InteractWithPrisonerSystem]({{% relref "systems/server/InteractWithPrisonerSystem.md" %}})
- [InventoryRouteTransferEventSystem]({{% relref "systems/server/InventoryRouteTransferEventSystem.md" %}})
- [JewelCraftingCompleteSystem]({{% relref "systems/server/JewelCraftingCompleteSystem.md" %}})
- [JewelCraftingStartSystem]({{% relref "systems/server/JewelCraftingStartSystem.md" %}})
- [JewelCraftingStopSystem]({{% relref "systems/server/JewelCraftingStopSystem.md" %}})
- [JewelNetworkEventsSystem]({{% relref "systems/server/JewelNetworkEventsSystem.md" %}})
- [KickBanSystem_Server]({{% relref "systems/server/KickBanSystem_Server.md" %}})
- [KillEventSystem]({{% relref "systems/server/KillEventSystem.md" %}})
- [MapOpenedSystem_Server]({{% relref "systems/server/MapOpenedSystem_Server.md" %}})
- [MoveAllItemsBetweenInventoriesSystem]({{% relref "systems/server/MoveAllItemsBetweenInventoriesSystem.md" %}})
- [MoveAllItemsBetweenInventoriesV2System]({{% relref "systems/server/MoveAllItemsBetweenInventoriesV2System.md" %}})
- [MoveItemBetweenInventoriesSystem]({{% relref "systems/server/MoveItemBetweenInventoriesSystem.md" %}})
- [MusicPlayerStationSystem_Events]({{% relref "systems/server/MusicPlayerStationSystem_Events.md" %}})
- [NameableInteractableSystem]({{% relref "systems/server/NameableInteractableSystem.md" %}})
- [NoAdminSystem]({{% relref "systems/server/NoAdminSystem.md" %}})
- [PlaceTileModelSystem]({{% relref "systems/server/PlaceTileModelSystem.md" %}})
- [PlayerTeleportSystem]({{% relref "systems/server/PlayerTeleportSystem.md" %}})
- [RemoveUserRemovableBuffEventSystem]({{% relref "systems/server/RemoveUserRemovableBuffEventSystem.md" %}})
- [RespecStationSystem]({{% relref "systems/server/RespecStationSystem.md" %}})
- [ReviveCancelEventSystem]({{% relref "systems/server/ReviveCancelEventSystem.md" %}})
- [ServantCoffinstationActionSystem]({{% relref "systems/server/ServantCoffinstationActionSystem.md" %}})
- [ServantCoffinstationUpdateSystem]({{% relref "systems/server/ServantCoffinstationUpdateSystem.md" %}})
- [ServantDepositInventoryEventSystem]({{% relref "systems/server/ServantDepositInventoryEventSystem.md" %}})
- [ServantInfoEventSystem_Server]({{% relref "systems/server/ServantInfoEventSystem_Server.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [ServerFeaturesSystem]({{% relref "systems/server/ServerFeaturesSystem.md" %}})
- [SetAdminOnlyDebugEventsSystem]({{% relref "systems/server/SetAdminOnlyDebugEventsSystem.md" %}})
- [SetMapMarkerSystem]({{% relref "systems/server/SetMapMarkerSystem.md" %}})
- [ShapeshiftSystem]({{% relref "systems/server/ShapeshiftSystem.md" %}})
- [ShareRefinementSystem]({{% relref "systems/server/ShareRefinementSystem.md" %}})
- [ShareUnitRecipeSystem]({{% relref "systems/server/ShareUnitRecipeSystem.md" %}})
- [SmartMergeItemsBetweenInventoriesSystem]({{% relref "systems/server/SmartMergeItemsBetweenInventoriesSystem.md" %}})
- [SortAllInventoriesSystem]({{% relref "systems/server/SortAllInventoriesSystem.md" %}})
- [SortSingleInventorySystem]({{% relref "systems/server/SortSingleInventorySystem.md" %}})
- [SpellModSyncSystem_Server]({{% relref "systems/server/SpellModSyncSystem_Server.md" %}})
- [SplitItemSystem]({{% relref "systems/server/SplitItemSystem.md" %}})
- [SplitItemV2System]({{% relref "systems/server/SplitItemV2System.md" %}})
- [StartCharacterCraftingSystem]({{% relref "systems/server/StartCharacterCraftingSystem.md" %}})
- [StartChargingSystem]({{% relref "systems/server/StartChargingSystem.md" %}})
- [StartCraftingSystem]({{% relref "systems/server/StartCraftingSystem.md" %}})
- [StopCharacterCraftingSystem]({{% relref "systems/server/StopCharacterCraftingSystem.md" %}})
- [StopCraftingSystem]({{% relref "systems/server/StopCraftingSystem.md" %}})
- [StopEndGameCreditsSystem]({{% relref "systems/server/StopEndGameCreditsSystem.md" %}})
- [TeleportPlayerLocationSystem]({{% relref "systems/server/TeleportPlayerLocationSystem.md" %}})
- [TeleportPlayerToUnitSystem]({{% relref "systems/server/TeleportPlayerToUnitSystem.md" %}})
- [TeleportSystem]({{% relref "systems/server/TeleportSystem.md" %}})
- [TeleportToPlayerLocationSystem]({{% relref "systems/server/TeleportToPlayerLocationSystem.md" %}})
- [ToggleInvulnerableAdminEventSystem]({{% relref "systems/server/ToggleInvulnerableAdminEventSystem.md" %}})
- [ToggleRefiningRecipeSystem]({{% relref "systems/server/ToggleRefiningRecipeSystem.md" %}})
- [ToggleRefiningSystem]({{% relref "systems/server/ToggleRefiningSystem.md" %}})
- [ToggleSalvagestationSystem]({{% relref "systems/server/ToggleSalvagestationSystem.md" %}})
- [ToggleUserPermissionsSystem]({{% relref "systems/server/ToggleUserPermissionsSystem.md" %}})
- [TraderPurchaseSystem]({{% relref "systems/server/TraderPurchaseSystem.md" %}})
- [TransmogModeEventSystem_Server]({{% relref "systems/server/TransmogModeEventSystem_Server.md" %}})
- [TriggerPersistenceSaveSystem]({{% relref "systems/server/TriggerPersistenceSaveSystem.md" %}})
- [UnEquipItemSystem]({{% relref "systems/server/UnEquipItemSystem.md" %}})
- [UnEquipServantItemSystem]({{% relref "systems/server/UnEquipServantItemSystem.md" %}})
- [UnlockResearchSystem]({{% relref "systems/server/UnlockResearchSystem.md" %}})
- [UseConsumableSystem]({{% relref "systems/server/UseConsumableSystem.md" %}})
- [VariousMigratedDebugEventsSystem]({{% relref "systems/server/VariousMigratedDebugEventsSystem.md" %}})
- [VivoxConnectionSystem]({{% relref "systems/server/VivoxConnectionSystem.md" %}})
