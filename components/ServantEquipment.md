# ServantEquipment

```csharp
[StructLayout(2)]
public struct ServantEquipment
{
	static ServantEquipment()
	{
		Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantEquipment");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr);
		ServantEquipment.NativeFieldInfoPtr_ArmorChestSlotEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorChestSlotEntity");
		ServantEquipment.NativeFieldInfoPtr_ArmorChestSlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorChestSlotId");
		ServantEquipment.NativeFieldInfoPtr_WeaponSlotEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "WeaponSlotEntity");
		ServantEquipment.NativeFieldInfoPtr_WeaponSlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "WeaponSlotId");
		ServantEquipment.NativeFieldInfoPtr_GrimoireSlotEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "GrimoireSlotEntity");
		ServantEquipment.NativeFieldInfoPtr_GrimoireSlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "GrimoireSlotId");
		ServantEquipment.NativeFieldInfoPtr_ArmorFootgearSlotEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorFootgearSlotEntity");
		ServantEquipment.NativeFieldInfoPtr_ArmorFootgearSlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorFootgearSlotId");
		ServantEquipment.NativeFieldInfoPtr_ArmorLegsSlotEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorLegsSlotEntity");
		ServantEquipment.NativeFieldInfoPtr_ArmorLegsSlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorLegsSlotId");
		ServantEquipment.NativeFieldInfoPtr_ArmorGlovesSlotEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorGlovesSlotEntity");
		ServantEquipment.NativeFieldInfoPtr_ArmorGlovesSlotId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, "ArmorGlovesSlotId");
		ServantEquipment.NativeMethodInfoPtr_CanEquip_Public_Static_Boolean_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664719);
		ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664720);
		ServantEquipment.NativeMethodInfoPtr_CreateItemEquippedEvent_Private_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664721);
		ServantEquipment.NativeMethodInfoPtr_SetEquipped_Public_Void_EntityManager_Entity_EquipmentType_Entity_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664722);
		ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_byref_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664723);
		ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_PrefabGUID_byref_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664724);
		ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664725);
		ServantEquipment.NativeMethodInfoPtr_GetEquipmentEntity_Public_NetworkedEntity_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664726);
		ServantEquipment.NativeMethodInfoPtr_GetEquipmentItemId_Public_PrefabGUID_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664727);
		ServantEquipment.NativeMethodInfoPtr_GetAllEquipmentEntities_Public_Void_NativeList_1_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664728);
		ServantEquipment.NativeMethodInfoPtr_IsFullyEquipped_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664729);
		ServantEquipment.NativeMethodInfoPtr_AddEquipmentEntityIfNotNull_Private_Void_Entity_NativeList_1_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664730);
		ServantEquipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityManager_Entity_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664731);
		ServantEquipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityCommandBuffer_Entity_EquipmentType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664732);
		ServantEquipment.NativeMethodInfoPtr_UnequipItem_Private_Void_Entity_EquipmentType_Nullable_Unboxed_1_EntityCommandBuffer_Nullable_Unboxed_1_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664733);
		ServantEquipment.NativeMethodInfoPtr_ConvertEquipmentLevel_Public_Static_Single_Single_GearType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, 100664734);
	}
	[CallerCount(0)]
	public unsafe static bool CanEquip(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_CanEquip_Public_Static_Boolean_EquipmentType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1063189, XrefRangeEnd = 1063190, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEquipped(Entity itemEntity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref itemEntity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(19)]
	[CachedScanResults(RefRangeStart = 1063203, RefRangeEnd = 1063222, XrefRangeStart = 1063190, XrefRangeEnd = 1063203, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void CreateItemEquippedEvent(Nullable_Unboxed<EntityManager> entityManager, Entity target, EquipmentType equipmentType, EquipmentChangedEventType eventType, Entity itemEntity, PrefabGUID itemId, Nullable_Unboxed<EntityCommandBuffer> commandBuffer = default(Nullable_Unboxed<EntityCommandBuffer>))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref eventType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemEntity;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemId;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_CreateItemEquippedEvent_Private_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(5)]
	[CachedScanResults(RefRangeStart = 1063248, RefRangeEnd = 1063253, XrefRangeStart = 1063222, XrefRangeEnd = 1063248, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetEquipped(EntityManager entityManager, Entity target, EquipmentType equipmentType, Entity itemEntity, PrefabGUID itemId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemEntity;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref itemId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_SetEquipped_Public_Void_EntityManager_Entity_EquipmentType_Entity_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1063254, RefRangeEnd = 1063258, XrefRangeStart = 1063253, XrefRangeEnd = 1063254, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEquipped(Entity itemEntity, out EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref itemEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_byref_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
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
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_PrefabGUID_byref_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1063262, RefRangeEnd = 1063263, XrefRangeStart = 1063258, XrefRangeEnd = 1063262, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsEquipped(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_IsEquipped_Public_Boolean_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 1063272, RefRangeEnd = 1063278, XrefRangeStart = 1063263, XrefRangeEnd = 1063272, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NetworkedEntity GetEquipmentEntity(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_GetEquipmentEntity_Public_NetworkedEntity_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe PrefabGUID GetEquipmentItemId(EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_GetEquipmentItemId_Public_PrefabGUID_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1063305, RefRangeEnd = 1063309, XrefRangeStart = 1063278, XrefRangeEnd = 1063305, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void GetAllEquipmentEntities(NativeList<Entity> equipment)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipment;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_GetAllEquipmentEntities_Public_Void_NativeList_1_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 1063321, RefRangeEnd = 1063325, XrefRangeStart = 1063309, XrefRangeEnd = 1063321, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool IsFullyEquipped()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_IsFullyEquipped_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1063325, XrefRangeEnd = 1063329, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddEquipmentEntityIfNotNull(Entity equipmentEntity, NativeList<Entity> equipment)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipmentEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipment;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_AddEquipmentEntityIfNotNull_Private_Void_Entity_NativeList_1_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1063331, RefRangeEnd = 1063333, XrefRangeStart = 1063329, XrefRangeEnd = 1063331, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UnequipItem(EntityManager entityManager, Entity target, EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityManager_Entity_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1063333, XrefRangeEnd = 1063335, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UnequipItem(EntityCommandBuffer commandBuffer, Entity target, EquipmentType equipmentType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_UnequipItem_Public_Void_EntityCommandBuffer_Entity_EquipmentType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1063359, RefRangeEnd = 1063361, XrefRangeStart = 1063335, XrefRangeEnd = 1063359, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UnequipItem(Entity target, EquipmentType equipmentType, Nullable_Unboxed<EntityCommandBuffer> commandBuffer = default(Nullable_Unboxed<EntityCommandBuffer>), Nullable_Unboxed<EntityManager> entityManager = default(Nullable_Unboxed<EntityManager>))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref target;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref equipmentType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_UnequipItem_Private_Void_Entity_EquipmentType_Nullable_Unboxed_1_EntityCommandBuffer_Nullable_Unboxed_1_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe static float ConvertEquipmentLevel(float equipment, ServantEquipment.GearType gearType)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref equipment;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref gearType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantEquipment.NativeMethodInfoPtr_ConvertEquipmentLevel_Public_Static_Single_Single_GearType_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantEquipment>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ArmorChestSlotEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorChestSlotId;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponSlotEntity;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponSlotId;
	private static readonly IntPtr NativeFieldInfoPtr_GrimoireSlotEntity;
	private static readonly IntPtr NativeFieldInfoPtr_GrimoireSlotId;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorFootgearSlotEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorFootgearSlotId;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorLegsSlotEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorLegsSlotId;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorGlovesSlotEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ArmorGlovesSlotId;
	private static readonly IntPtr NativeMethodInfoPtr_CanEquip_Public_Static_Boolean_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateItemEquippedEvent_Private_Void_Nullable_Unboxed_1_EntityManager_Entity_EquipmentType_EquipmentChangedEventType_Entity_PrefabGUID_Nullable_Unboxed_1_EntityCommandBuffer_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetEquipped_Public_Void_EntityManager_Entity_EquipmentType_Entity_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_Entity_byref_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_PrefabGUID_byref_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsEquipped_Public_Boolean_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetEquipmentEntity_Public_NetworkedEntity_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetEquipmentItemId_Public_PrefabGUID_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetAllEquipmentEntities_Public_Void_NativeList_1_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsFullyEquipped_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddEquipmentEntityIfNotNull_Private_Void_Entity_NativeList_1_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_UnequipItem_Public_Void_EntityManager_Entity_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_UnequipItem_Public_Void_EntityCommandBuffer_Entity_EquipmentType_0;
	private static readonly IntPtr NativeMethodInfoPtr_UnequipItem_Private_Void_Entity_EquipmentType_Nullable_Unboxed_1_EntityCommandBuffer_Nullable_Unboxed_1_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_ConvertEquipmentLevel_Public_Static_Single_Single_GearType_0;
	[FieldOffset(0)]
	public NetworkedEntity ArmorChestSlotEntity;
	[FieldOffset(12)]
	public PrefabGUID ArmorChestSlotId;
	[FieldOffset(16)]
	public NetworkedEntity WeaponSlotEntity;
	[FieldOffset(28)]
	public PrefabGUID WeaponSlotId;
	[FieldOffset(32)]
	public NetworkedEntity GrimoireSlotEntity;
	[FieldOffset(44)]
	public PrefabGUID GrimoireSlotId;
	[FieldOffset(48)]
	public NetworkedEntity ArmorFootgearSlotEntity;
	[FieldOffset(60)]
	public PrefabGUID ArmorFootgearSlotId;
	[FieldOffset(64)]
	public NetworkedEntity ArmorLegsSlotEntity;
	[FieldOffset(76)]
	public PrefabGUID ArmorLegsSlotId;
	[FieldOffset(80)]
	public NetworkedEntity ArmorGlovesSlotEntity;
	[FieldOffset(92)]
	public PrefabGUID ArmorGlovesSlotId;
	public enum GearType
	{
		Weapon,
		Armor,
		Spell
	}
}
