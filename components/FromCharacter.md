---
nav_exclude: true
search_exclude: false
---

# FromCharacter

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

- [ActivateVBloodAbilitySystem](/systems/server/ActivateVBloodAbilitySystem)
- [AdminAuthSystem](/systems/server/AdminAuthSystem)
- [BecomeObserverSystem](/systems/server/BecomeObserverSystem)
- [BloodAltarSystem_StartTrackVBloodUnit_System_V2](/systems/server/BloodAltarSystem_StartTrackVBloodUnit_System_V2)
- [BloodAltarSystem_StopTrackVBloodUnit_System](/systems/server/BloodAltarSystem_StopTrackVBloodUnit_System)
- [BuildModeOpenedSystem_Server](/systems/server/BuildModeOpenedSystem_Server)
- [CharacterMenuOpenedSystem_Server](/systems/server/CharacterMenuOpenedSystem_Server)
- [ChatMessageSystem](/systems/server/ChatMessageSystem)
- [ClaimAchievementSystem](/systems/server/ClaimAchievementSystem)
- [ClanSystem_Server](/systems/server/ClanSystem_Server)
- [CollectChargedItemsSystem](/systems/server/CollectChargedItemsSystem)
- [DebugEventsSystem](/systems/server/DebugEventsSystem)
- [DefaultActionsSystem](/systems/server/DefaultActionsSystem)
- [DeleteMapMarkerSystem](/systems/server/DeleteMapMarkerSystem)
- [DiscoverResearchSystem](/systems/server/DiscoverResearchSystem)
- [DropItemSystem](/systems/server/DropItemSystem)
- [ElevateUserSystem](/systems/server/ElevateUserSystem)
- [EmoteSystem](/systems/server/EmoteSystem)
- [EquipItemFromInventorySystem](/systems/server/EquipItemFromInventorySystem)
- [EquipItemSystem](/systems/server/EquipItemSystem)
- [EquipServantItemFromInventorySystem](/systems/server/EquipServantItemFromInventorySystem)
- [EquipServantItemSystem](/systems/server/EquipServantItemSystem)
- [EquipmentTransferSystem](/systems/server/EquipmentTransferSystem)
- [GetServerTimeInfoEventSystem](/systems/server/GetServerTimeInfoEventSystem)
- [GetTerritoryOwnerRequestSystem](/systems/server/GetTerritoryOwnerRequestSystem)
- [GetUserStatsEventSystem](/systems/server/GetUserStatsEventSystem)
- [GetVBloodPositionsSystem](/systems/server/GetVBloodPositionsSystem)
- [GiveCombatPresetSystem](/systems/server/GiveCombatPresetSystem)
- [HandleCreateCharacterEventSystem](/systems/server/HandleCreateCharacterEventSystem)
- [HandleOpenVBloodMenuSystem](/systems/server/HandleOpenVBloodMenuSystem)
- [InteractValidateAndStopSystemServer](/systems/server/InteractValidateAndStopSystemServer)
- [InteractWithPrisonerSystem](/systems/server/InteractWithPrisonerSystem)
- [InventoryRouteTransferEventSystem](/systems/server/InventoryRouteTransferEventSystem)
- [JewelCraftingCompleteSystem](/systems/server/JewelCraftingCompleteSystem)
- [JewelCraftingStartSystem](/systems/server/JewelCraftingStartSystem)
- [JewelCraftingStopSystem](/systems/server/JewelCraftingStopSystem)
- [JewelNetworkEventsSystem](/systems/server/JewelNetworkEventsSystem)
- [KickBanSystem_Server](/systems/server/KickBanSystem_Server)
- [KillEventSystem](/systems/server/KillEventSystem)
- [MapOpenedSystem_Server](/systems/server/MapOpenedSystem_Server)
- [MoveAllItemsBetweenInventoriesSystem](/systems/server/MoveAllItemsBetweenInventoriesSystem)
- [MoveAllItemsBetweenInventoriesV2System](/systems/server/MoveAllItemsBetweenInventoriesV2System)
- [MoveItemBetweenInventoriesSystem](/systems/server/MoveItemBetweenInventoriesSystem)
- [MusicPlayerStationSystem_Events](/systems/server/MusicPlayerStationSystem_Events)
- [NameableInteractableSystem](/systems/server/NameableInteractableSystem)
- [NoAdminSystem](/systems/server/NoAdminSystem)
- [PlaceTileModelSystem](/systems/server/PlaceTileModelSystem)
- [PlayerTeleportSystem](/systems/server/PlayerTeleportSystem)
- [RemoveUserRemovableBuffEventSystem](/systems/server/RemoveUserRemovableBuffEventSystem)
- [RespecStationSystem](/systems/server/RespecStationSystem)
- [ReviveCancelEventSystem](/systems/server/ReviveCancelEventSystem)
- [ServantCoffinstationActionSystem](/systems/server/ServantCoffinstationActionSystem)
- [ServantCoffinstationUpdateSystem](/systems/server/ServantCoffinstationUpdateSystem)
- [ServantDepositInventoryEventSystem](/systems/server/ServantDepositInventoryEventSystem)
- [ServantInfoEventSystem_Server](/systems/server/ServantInfoEventSystem_Server)
- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
- [ServerFeaturesSystem](/systems/server/ServerFeaturesSystem)
- [SetAdminOnlyDebugEventsSystem](/systems/server/SetAdminOnlyDebugEventsSystem)
- [SetMapMarkerSystem](/systems/server/SetMapMarkerSystem)
- [ShapeshiftSystem](/systems/server/ShapeshiftSystem)
- [ShareRefinementSystem](/systems/server/ShareRefinementSystem)
- [ShareUnitRecipeSystem](/systems/server/ShareUnitRecipeSystem)
- [SmartMergeItemsBetweenInventoriesSystem](/systems/server/SmartMergeItemsBetweenInventoriesSystem)
- [SortAllInventoriesSystem](/systems/server/SortAllInventoriesSystem)
- [SortSingleInventorySystem](/systems/server/SortSingleInventorySystem)
- [SpellModSyncSystem_Server](/systems/server/SpellModSyncSystem_Server)
- [SplitItemSystem](/systems/server/SplitItemSystem)
- [SplitItemV2System](/systems/server/SplitItemV2System)
- [StartCharacterCraftingSystem](/systems/server/StartCharacterCraftingSystem)
- [StartChargingSystem](/systems/server/StartChargingSystem)
- [StartCraftingSystem](/systems/server/StartCraftingSystem)
- [StopCharacterCraftingSystem](/systems/server/StopCharacterCraftingSystem)
- [StopCraftingSystem](/systems/server/StopCraftingSystem)
- [StopEndGameCreditsSystem](/systems/server/StopEndGameCreditsSystem)
- [TeleportPlayerLocationSystem](/systems/server/TeleportPlayerLocationSystem)
- [TeleportPlayerToUnitSystem](/systems/server/TeleportPlayerToUnitSystem)
- [TeleportSystem](/systems/server/TeleportSystem)
- [TeleportToPlayerLocationSystem](/systems/server/TeleportToPlayerLocationSystem)
- [ToggleInvulnerableAdminEventSystem](/systems/server/ToggleInvulnerableAdminEventSystem)
- [ToggleRefiningRecipeSystem](/systems/server/ToggleRefiningRecipeSystem)
- [ToggleRefiningSystem](/systems/server/ToggleRefiningSystem)
- [ToggleSalvagestationSystem](/systems/server/ToggleSalvagestationSystem)
- [ToggleUserPermissionsSystem](/systems/server/ToggleUserPermissionsSystem)
- [TraderPurchaseSystem](/systems/server/TraderPurchaseSystem)
- [TransmogModeEventSystem_Server](/systems/server/TransmogModeEventSystem_Server)
- [TriggerPersistenceSaveSystem](/systems/server/TriggerPersistenceSaveSystem)
- [UnEquipItemSystem](/systems/server/UnEquipItemSystem)
- [UnEquipServantItemSystem](/systems/server/UnEquipServantItemSystem)
- [UnlockResearchSystem](/systems/server/UnlockResearchSystem)
- [UseConsumableSystem](/systems/server/UseConsumableSystem)
- [VariousMigratedDebugEventsSystem](/systems/server/VariousMigratedDebugEventsSystem)
- [VivoxConnectionSystem](/systems/server/VivoxConnectionSystem)
