# Equipment

```csharp
[StructLayout(2)]
public struct Equipment
{
	static Equipment()
	{
		Il2CppClassPointerStore<Equipment>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Equipment");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Equipment>.NativeClassPtr);
		Equipment.NativeFieldInfoPtr_WeaponLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "WeaponLevel");
		Equipment.NativeFieldInfoPtr_ArmorLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "ArmorLevel");
		Equipment.NativeFieldInfoPtr_SpellLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "SpellLevel");
		Equipment.NativeFieldInfoPtr_WeaponRunCycle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "WeaponRunCycle");
		Equipment.NativeFieldInfoPtr_ArmorHeadgearSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "ArmorHeadgearSlot");
		Equipment.NativeFieldInfoPtr_ArmorChestSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "ArmorChestSlot");
		Equipment.NativeFieldInfoPtr_WeaponSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "WeaponSlot");
		Equipment.NativeFieldInfoPtr_GrimoireSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "GrimoireSlot");
		Equipment.NativeFieldInfoPtr_ArmorFootgearSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "ArmorFootgearSlot");
		Equipment.NativeFieldInfoPtr_ArmorLegsSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "ArmorLegsSlot");
		Equipment.NativeFieldInfoPtr_CloakSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "CloakSlot");
		Equipment.NativeFieldInfoPtr_ArmorGlovesSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "ArmorGlovesSlot");
		Equipment.NativeFieldInfoPtr_BagSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "BagSlot");
		Equipment.NativeFieldInfoPtr_ChestCosmeticSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "ChestCosmeticSlot");
		Equipment.NativeFieldInfoPtr_FootgearCosmeticSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "FootgearCosmeticSlot");
		Equipment.NativeFieldInfoPtr_LegsCosmeticSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "LegsCosmeticSlot");
		Equipment.NativeFieldInfoPtr_CloakCosmeticSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "CloakCosmeticSlot");
		Equipment.NativeFieldInfoPtr_GlovesCosmeticSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "GlovesCosmeticSlot");
		Equipment.NativeFieldInfoPtr_LevelDamageSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "LevelDamageSettings");
		Equipment.NativeFieldInfoPtr_PlayerLevelDamageSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "PlayerLevelDamageSettings");
		Equipment.NativeFieldInfoPtr_EquippedItemDestroyedSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "EquippedItemDestroyedSequenceGuid");
		Equipment.NativeFieldInfoPtr_EquippedItemBrokenSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "EquippedItemBrokenSequenceGuid");
		Equipment.NativeFieldInfoPtr_UnarmedBuffPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "UnarmedBuffPrefab");
		Equipment.NativeFieldInfoPtr_UnarmedBuffInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Equipment>.NativeClassPtr, "UnarmedBuffInstance");
		Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664157);
		Equipment.NativeMethodInfoPtr_SetHideEquipmentModel_Public_Void_EquipmentType_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664158);
		Equipment.NativeMethodInfoPtr_CreateItemEquippedEvent_Private_Static_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_EquipmentSlot_Nullable_Unboxed_1_EntityCommandBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664159);
		Equipment.NativeMethodInfoPtr_CreateItemEquippedEvent_Public_Static_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664160);
		Equipment.NativeMethodInfoPtr_SetEquipped_Public_Void_EntityManager_Entity_EquipmentType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664161);
		Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_byref_EquipmentType_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664162);
		Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_PrefabGUID_byref_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664163);
		Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664164);
		Equipment.NativeMethodInfoPtr_GetEquipmentEntity_Public_NetworkedEntity_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664165);
		Equipment.NativeMethodInfoPtr_IsValidEquipmentType_Public_Static_Boolean_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664166);
		Equipment.NativeMethodInfoPtr_IsValidCosmeticParentEquipmentType_Public_Static_Boolean_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664167);
		Equipment.NativeMethodInfoPtr_IsCosmeticEquipmentType_Public_Static_Boolean_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664168);
		Equipment.NativeMethodInfoPtr_TryGetCosmeticFromStat_Public_Static_EquipmentType_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664169);
		Equipment.NativeMethodInfoPtr_TryGetCosmeticTypeFromStatType_Public_Static_Boolean_EquipmentType_byref_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664170);
		Equipment.NativeMethodInfoPtr_GetEquipmentItemId_Public_PrefabGUID_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664171);
		Equipment.NativeMethodInfoPtr_GetAllEquipmentEntities_Public_Void_NativeList_1_Entity_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664172);
		Equipment.NativeMethodInfoPtr_AddEquipmentEntityIfNotNull_Private_Void_Entity_NativeList_1_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664173);
		Equipment.NativeMethodInfoPtr_HasAnyEquippedItem_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664174);
		Equipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityManager_Entity_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664175);
		Equipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityCommandBuffer_Entity_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664176);
		Equipment.NativeMethodInfoPtr_GetEquipmentSlot_Public_EquipmentSlot_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664177);
		Equipment.NativeMethodInfoPtr_SetEquipmentSlot_Public_Void_EquipmentType_EquipmentSlot_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664178);
		Equipment.NativeMethodInfoPtr_UnequipItem_Private_Void_Entity_EquipmentType_Nullable_Unboxed_1_EntityCommandBuffer_Nullable_Unboxed_1_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664179);
		Equipment.NativeMethodInfoPtr_TryMoveBetweenSlots_Public_Boolean_EntityManager_Entity_EquipmentType_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664180);
		Equipment.NativeMethodInfoPtr_TryMoveBetweenSlots_Public_Boolean_EntityManager_EntityCommandBuffer_Entity_EquipmentType_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664181);
		Equipment.NativeMethodInfoPtr_TypesAreEquipmentCompatible_Public_Static_Boolean_EquipmentType_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664182);
		Equipment.NativeMethodInfoPtr_GetFullLevel_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664183);
		Equipment.NativeMethodInfoPtr_ConvertEquipmentLevel_Public_Static_Single_Single_GearType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664184);
		Equipment.NativeMethodInfoPtr_ReverseConvertEquipmentLevel_Public_Static_Single_Single_GearType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664185);
		Equipment.NativeMethodInfoPtr_HasEquippedItemOfCategory_Public_Boolean_TManager_ItemCategory_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664186);
		Equipment.NativeMethodInfoPtr_TryGetVisualModelAndSlotFromEquipment_Public_Static_Boolean_byref_Equipment_EquipmentType_ComponentLookup_1_Durability_byref_PrefabGUID_byref_EquipmentSlot_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664187);
		Equipment.NativeMethodInfoPtr_GetActiveCosmeticOrArmorSlot_Public_Static_Void_byref_EquipmentSlot_byref_EquipmentSlot_byref_EquipmentSlot_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664188);
		Equipment.NativeMethodInfoPtr_TryGetVisualModelFromCosmeticsSlot_Public_Static_Boolean_byref_EquipmentSlot_byref_EquipmentSlot_byref_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664189);
		Equipment.NativeMethodInfoPtr_TryGetVisualModelFromArmorSlot_Public_Static_Boolean_byref_EquipmentSlot_byref_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Equipment>.NativeClassPtr, 100664190);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1056760, RefRangeEnd = 1056762, XrefRangeStart = 1056759, XrefRangeEnd = 1056760, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEquipped(Entity itemEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref itemEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1056764, RefRangeEnd = 1056765, XrefRangeStart = 1056762, XrefRangeEnd = 1056764, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetHideEquipmentModel(EquipmentType equipmentType, bool hide)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref hide;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_SetHideEquipmentModel_Public_Void_EquipmentType_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1056765, XrefRangeEnd = 1056769, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void CreateItemEquippedEvent(Nullable_Unboxed<EntityManager> entityManager, Entity target, EquipmentType equipmentType, EquipmentChangedEventType eventType, EquipmentSlot data, Nullable_Unboxed<EntityCommandBuffer> commandBuffer = default(Nullable_Unboxed<EntityCommandBuffer>))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref data;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_CreateItemEquippedEvent_Private_Static_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_EquipmentSlot_Nullable_Unboxed_1_EntityCommandBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1056782, RefRangeEnd = 1056787, XrefRangeStart = 1056769, XrefRangeEnd = 1056782, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void CreateItemEquippedEvent(Nullable_Unboxed<EntityManager> entityManager, Entity target, EquipmentType equipmentType, EquipmentChangedEventType eventType, Entity itemEntity, PrefabGUID itemGuid, Nullable_Unboxed<EntityCommandBuffer> commandBuffer = default(Nullable_Unboxed<EntityCommandBuffer>))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemEntity;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemGuid;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_CreateItemEquippedEvent_Public_Static_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(8)]
	[CachedScanResults(RefRangeStart = 1056819, RefRangeEnd = 1056827, XrefRangeStart = 1056787, XrefRangeEnd = 1056819, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetEquipped(EntityManager entityManager, Entity target, EquipmentType equipmentType, Entity itemEntity, PrefabGUID statItemId, Nullable_Unboxed<EntityCommandBuffer> commandBuffer = default(Nullable_Unboxed<EntityCommandBuffer>))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemEntity;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statItemId;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_SetEquipped_Public_Void_EntityManager_Entity_EquipmentType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(8)]
	[CachedScanResults(RefRangeStart = 1056856, RefRangeEnd = 1056864, XrefRangeStart = 1056827, XrefRangeEnd = 1056856, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEquipped(Entity itemEntity, out EquipmentType equipmentType, bool checkCosmeticHax = false)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref itemEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &equipmentType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref checkCosmeticHax;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_byref_EquipmentType_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool IsEquipped(PrefabGUID itemType, out EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref itemType;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_PrefabGUID_byref_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 1056868, RefRangeEnd = 1056874, XrefRangeStart = 1056864, XrefRangeEnd = 1056868, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEquipped(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1056874, XrefRangeEnd = 1056875, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NetworkedEntity GetEquipmentEntity(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_GetEquipmentEntity_Public_NetworkedEntity_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool IsValidEquipmentType(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_IsValidEquipmentType_Public_Static_Boolean_EquipmentType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1056875, RefRangeEnd = 1056876, XrefRangeStart = 1056875, XrefRangeEnd = 1056875, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool IsValidCosmeticParentEquipmentType(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_IsValidCosmeticParentEquipmentType_Public_Static_Boolean_EquipmentType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool IsCosmeticEquipmentType(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_IsCosmeticEquipmentType_Public_Static_Boolean_EquipmentType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1056876, RefRangeEnd = 1056879, XrefRangeStart = 1056876, XrefRangeEnd = 1056876, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static EquipmentType TryGetCosmeticFromStat(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TryGetCosmeticFromStat_Public_Static_EquipmentType_EquipmentType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool TryGetCosmeticTypeFromStatType(EquipmentType equipmentType, out EquipmentType cosmeticEquipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &cosmeticEquipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TryGetCosmeticTypeFromStatType_Public_Static_Boolean_EquipmentType_byref_EquipmentType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1056879, XrefRangeEnd = 1056880, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe PrefabGUID GetEquipmentItemId(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_GetEquipmentItemId_Public_PrefabGUID_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(14)]
	[CachedScanResults(RefRangeStart = 1056941, RefRangeEnd = 1056955, XrefRangeStart = 1056880, XrefRangeEnd = 1056941, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void GetAllEquipmentEntities(NativeList<Entity> equipment, bool includeCosmetics = false)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipment;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref includeCosmetics;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_GetAllEquipmentEntities_Public_Void_NativeList_1_Entity_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1056955, XrefRangeEnd = 1056959, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddEquipmentEntityIfNotNull(Entity equipmentEntity, NativeList<Entity> equipment)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipment;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_AddEquipmentEntityIfNotNull_Private_Void_Entity_NativeList_1_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1056976, RefRangeEnd = 1056977, XrefRangeStart = 1056959, XrefRangeEnd = 1056976, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool HasAnyEquippedItem()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_HasAnyEquippedItem_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(7)]
	[CachedScanResults(RefRangeStart = 1056979, RefRangeEnd = 1056986, XrefRangeStart = 1056977, XrefRangeEnd = 1056979, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UnequipItem(EntityManager entityManager, Entity target, EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityManager_Entity_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1056988, RefRangeEnd = 1056991, XrefRangeStart = 1056986, XrefRangeEnd = 1056988, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UnequipItem(EntityCommandBuffer commandBuffer, Entity target, EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityCommandBuffer_Entity_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(47)]
	[CachedScanResults(RefRangeStart = 1056991, RefRangeEnd = 1057038, XrefRangeStart = 1056991, XrefRangeEnd = 1056991, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe EquipmentSlot GetEquipmentSlot(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_GetEquipmentSlot_Public_EquipmentSlot_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(7)]
	[CachedScanResults(RefRangeStart = 1057038, RefRangeEnd = 1057045, XrefRangeStart = 1057038, XrefRangeEnd = 1057038, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetEquipmentSlot(EquipmentType equipmentType, EquipmentSlot equipmentSlot)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentSlot;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_SetEquipmentSlot_Public_Void_EquipmentType_EquipmentSlot_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1057058, RefRangeEnd = 1057060, XrefRangeStart = 1057045, XrefRangeEnd = 1057058, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UnequipItem(Entity target, EquipmentType equipmentType, Nullable_Unboxed<EntityCommandBuffer> commandBuffer = default(Nullable_Unboxed<EntityCommandBuffer>), Nullable_Unboxed<EntityManager> entityManager = default(Nullable_Unboxed<EntityManager>))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref target;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_UnequipItem_Private_Void_Entity_EquipmentType_Nullable_Unboxed_1_EntityCommandBuffer_Nullable_Unboxed_1_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1057060, XrefRangeEnd = 1057069, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryMoveBetweenSlots(EntityManager entityManager, Entity target, EquipmentType fromType, EquipmentType toType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref fromType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref toType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TryMoveBetweenSlots_Public_Boolean_EntityManager_Entity_EquipmentType_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1057079, RefRangeEnd = 1057080, XrefRangeStart = 1057069, XrefRangeEnd = 1057079, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool TryMoveBetweenSlots(EntityManager entityManager, EntityCommandBuffer commandBuffer, Entity target, EquipmentType fromType, EquipmentType toType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref fromType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref toType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TryMoveBetweenSlots_Public_Boolean_EntityManager_EntityCommandBuffer_Entity_EquipmentType_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1057080, RefRangeEnd = 1057082, XrefRangeStart = 1057080, XrefRangeEnd = 1057080, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TypesAreEquipmentCompatible(EquipmentType x, EquipmentType y)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref x;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref y;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TypesAreEquipmentCompatible_Public_Static_Boolean_EquipmentType_EquipmentType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float GetFullLevel()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_GetFullLevel_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static float ConvertEquipmentLevel(float equipment, Equipment.GearType gearType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipment;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gearType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_ConvertEquipmentLevel_Public_Static_Single_Single_GearType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1057082, RefRangeEnd = 1057083, XrefRangeStart = 1057082, XrefRangeEnd = 1057082, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static float ReverseConvertEquipmentLevel(float equipment, Equipment.GearType gearType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipment;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gearType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_ReverseConvertEquipmentLevel_Public_Static_Single_Single_GearType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1057100, RefRangeEnd = 1057101, XrefRangeStart = 1057083, XrefRangeEnd = 1057100, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool HasEquippedItemOfCategory<TManager>(TManager manager, ItemCategory itemCategory)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		ref IntPtr ptr2 = ref *ptr;
		IntPtr intPtr;
		if (!typeof(TManager).IsValueType)
		{
			TManager tmanager = manager;
			intPtr = ((tmanager is string) ? IL2CPP.ManagedStringToIl2Cpp(tmanager as string) : IL2CPP.Il2CppObjectBaseToPtr(tmanager as Il2CppObjectBase));
		}
		else
		{
			intPtr = ref manager;
		}
		ptr2 = intPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemCategory;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(Equipment.MethodInfoStoreGeneric_HasEquippedItemOfCategory_Public_Boolean_TManager_ItemCategory_0<TManager>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1057101, XrefRangeEnd = 1057102, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryGetVisualModelAndSlotFromEquipment([In] ref Equipment equipment, EquipmentType equipmentType, ComponentLookup<Durability> getDurability, out PrefabGUID equippedSlotItemId, out EquipmentSlot equippedSlot)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &equipment;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref getDurability;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &equippedSlotItemId;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &equippedSlot;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TryGetVisualModelAndSlotFromEquipment_Public_Static_Boolean_byref_Equipment_EquipmentType_ComponentLookup_1_Durability_byref_PrefabGUID_byref_EquipmentSlot_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1057102, RefRangeEnd = 1057103, XrefRangeStart = 1057102, XrefRangeEnd = 1057102, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void GetActiveCosmeticOrArmorSlot([In] ref EquipmentSlot equipmentSlot, [In] ref EquipmentSlot cosmeticEquipmentSlot, out EquipmentSlot activeSlot)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &equipmentSlot;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &cosmeticEquipmentSlot;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &activeSlot;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_GetActiveCosmeticOrArmorSlot_Public_Static_Void_byref_EquipmentSlot_byref_EquipmentSlot_byref_EquipmentSlot_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1057103, RefRangeEnd = 1057108, XrefRangeStart = 1057103, XrefRangeEnd = 1057103, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryGetVisualModelFromCosmeticsSlot([In] ref EquipmentSlot equipmentSlot, [In] ref EquipmentSlot cosmeticEquipmentSlot, out PrefabGUID equippedSlotItemId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &equipmentSlot;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &cosmeticEquipmentSlot;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &equippedSlotItemId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TryGetVisualModelFromCosmeticsSlot_Public_Static_Boolean_byref_EquipmentSlot_byref_EquipmentSlot_byref_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool TryGetVisualModelFromArmorSlot([In] ref EquipmentSlot equipmentSlot, out PrefabGUID equippedSlotItemId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &equipmentSlot;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &equippedSlotItemId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Equipment.NativeMethodInfoPtr_TryGetVisualModelFromArmorSlot_Public_Static_Boolean_byref_EquipmentSlot_byref_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Equipment>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WeaponLevel;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorLevel;
	private static readonly IntPtr NativeFieldInfoPtr_SpellLevel;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponRunCycle;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorHeadgearSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorChestSlot;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponSlot;
	private static readonly IntPtr NativeFieldInfoPtr_GrimoireSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorFootgearSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorLegsSlot;
	private static readonly IntPtr NativeFieldInfoPtr_CloakSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorGlovesSlot;
	private static readonly IntPtr NativeFieldInfoPtr_BagSlot;
	private static readonly IntPtr NativeFieldInfoPtr_ChestCosmeticSlot;
	private static readonly IntPtr NativeFieldInfoPtr_FootgearCosmeticSlot;
	private static readonly IntPtr NativeFieldInfoPtr_LegsCosmeticSlot;
	private static readonly IntPtr NativeFieldInfoPtr_CloakCosmeticSlot;
	private static readonly IntPtr NativeFieldInfoPtr_GlovesCosmeticSlot;
	private static readonly IntPtr NativeFieldInfoPtr_LevelDamageSettings;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerLevelDamageSettings;
	private static readonly IntPtr NativeFieldInfoPtr_EquippedItemDestroyedSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_EquippedItemBrokenSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_UnarmedBuffPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_UnarmedBuffInstance;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetHideEquipmentModel_Public_Void_EquipmentType_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateItemEquippedEvent_Private_Static_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_EquipmentSlot_Nullable_Unboxed_1_EntityCommandBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateItemEquippedEvent_Public_Static_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetEquipped_Public_Void_EntityManager_Entity_EquipmentType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_byref_EquipmentType_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_PrefabGUID_byref_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetEquipmentEntity_Public_NetworkedEntity_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsValidEquipmentType_Public_Static_Boolean_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsValidCosmeticParentEquipmentType_Public_Static_Boolean_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsCosmeticEquipmentType_Public_Static_Boolean_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetCosmeticFromStat_Public_Static_EquipmentType_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetCosmeticTypeFromStatType_Public_Static_Boolean_EquipmentType_byref_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetEquipmentItemId_Public_PrefabGUID_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetAllEquipmentEntities_Public_Void_NativeList_1_Entity_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddEquipmentEntityIfNotNull_Private_Void_Entity_NativeList_1_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasAnyEquippedItem_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_UnequipItem_Public_Void_EntityManager_Entity_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_UnequipItem_Public_Void_EntityCommandBuffer_Entity_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetEquipmentSlot_Public_EquipmentSlot_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetEquipmentSlot_Public_Void_EquipmentType_EquipmentSlot_0;
	private static readonly IntPtr NativeMethodInfoPtr_UnequipItem_Private_Void_Entity_EquipmentType_Nullable_Unboxed_1_EntityCommandBuffer_Nullable_Unboxed_1_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryMoveBetweenSlots_Public_Boolean_EntityManager_Entity_EquipmentType_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryMoveBetweenSlots_Public_Boolean_EntityManager_EntityCommandBuffer_Entity_EquipmentType_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_TypesAreEquipmentCompatible_Public_Static_Boolean_EquipmentType_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetFullLevel_Public_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_ConvertEquipmentLevel_Public_Static_Single_Single_GearType_0;
	private static readonly IntPtr NativeMethodInfoPtr_ReverseConvertEquipmentLevel_Public_Static_Single_Single_GearType_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasEquippedItemOfCategory_Public_Boolean_TManager_ItemCategory_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetVisualModelAndSlotFromEquipment_Public_Static_Boolean_byref_Equipment_EquipmentType_ComponentLookup_1_Durability_byref_PrefabGUID_byref_EquipmentSlot_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetActiveCosmeticOrArmorSlot_Public_Static_Void_byref_EquipmentSlot_byref_EquipmentSlot_byref_EquipmentSlot_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetVisualModelFromCosmeticsSlot_Public_Static_Boolean_byref_EquipmentSlot_byref_EquipmentSlot_byref_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetVisualModelFromArmorSlot_Public_Static_Boolean_byref_EquipmentSlot_byref_PrefabGUID_0;
	[FieldOffset(0)]
	public ModifiableFloat WeaponLevel;
	[FieldOffset(4)]
	public ModifiableFloat ArmorLevel;
	[FieldOffset(8)]
	public ModifiableFloat SpellLevel;
	[FieldOffset(12)]
	public ModifiableInt WeaponRunCycle;
	[FieldOffset(16)]
	public EquipmentSlot ArmorHeadgearSlot;
	[FieldOffset(44)]
	public EquipmentSlot ArmorChestSlot;
	[FieldOffset(72)]
	public EquipmentSlot WeaponSlot;
	[FieldOffset(100)]
	public EquipmentSlot GrimoireSlot;
	[FieldOffset(128)]
	public EquipmentSlot ArmorFootgearSlot;
	[FieldOffset(156)]
	public EquipmentSlot ArmorLegsSlot;
	[FieldOffset(184)]
	public EquipmentSlot CloakSlot;
	[FieldOffset(212)]
	public EquipmentSlot ArmorGlovesSlot;
	[FieldOffset(240)]
	public EquipmentSlot BagSlot;
	[FieldOffset(268)]
	public EquipmentSlot ChestCosmeticSlot;
	[FieldOffset(296)]
	public EquipmentSlot FootgearCosmeticSlot;
	[FieldOffset(324)]
	public EquipmentSlot LegsCosmeticSlot;
	[FieldOffset(352)]
	public EquipmentSlot CloakCosmeticSlot;
	[FieldOffset(380)]
	public EquipmentSlot GlovesCosmeticSlot;
	[FieldOffset(408)]
	public Entity LevelDamageSettings;
	[FieldOffset(416)]
	public Entity PlayerLevelDamageSettings;
	[FieldOffset(424)]
	public SequenceGUID EquippedItemDestroyedSequenceGuid;
	[FieldOffset(428)]
	public SequenceGUID EquippedItemBrokenSequenceGuid;
	[FieldOffset(432)]
	public PrefabGUID UnarmedBuffPrefab;
	[FieldOffset(436)]
	public Entity UnarmedBuffInstance;
	public enum GearType
	{
		Weapon,
		Armor,
		Spell
	}
	private sealed class MethodInfoStoreGeneric_HasEquippedItemOfCategory_Public_Boolean_TManager_ItemCategory_0<TManager>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(Equipment.NativeMethodInfoPtr_HasEquippedItemOfCategory_Public_Boolean_TManager_ItemCategory_0, Il2CppClassPointerStore<Equipment>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TManager>.NativeClassPtr))
		}))));
	}
}
