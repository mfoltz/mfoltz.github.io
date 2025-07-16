# SpawnChainTransitionEvent

```csharp
[StructLayout(2)]
public struct SpawnChainTransitionEvent
{
	static SpawnChainTransitionEvent()
	{
		Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnChainTransitionEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr);
		SpawnChainTransitionEvent.NativeFieldInfoPtr_PrimaryTransitionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, "PrimaryTransitionId");
		SpawnChainTransitionEvent.NativeFieldInfoPtr_SecondaryTransitionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, "SecondaryTransitionId");
		SpawnChainTransitionEvent.NativeFieldInfoPtr_SpawnChain = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, "SpawnChain");
		SpawnChainTransitionEvent.NativeFieldInfoPtr_FromSpawnChainChild = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, "FromSpawnChainChild");
		SpawnChainTransitionEvent.NativeFieldInfoPtr_FromSpawnChainElementIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, "FromSpawnChainElementIndex");
		SpawnChainTransitionEvent.NativeFieldInfoPtr_MultiStepStartChainElementIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, "MultiStepStartChainElementIndex");
		SpawnChainTransitionEvent.NativeFieldInfoPtr_ForwardedAutoChainTransitionSurplus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, "ForwardedAutoChainTransitionSurplus");
		SpawnChainTransitionEvent.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, 100664795);
		SpawnChainTransitionEvent.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SpawnChainTransitionEvent_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, 100664796);
		SpawnChainTransitionEvent.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, 100664797);
		SpawnChainTransitionEvent.NativeMethodInfoPtr_CreateTransitionEvent_Public_Static_Void_EntityManager_Entity_FixedString32Bytes_FixedString32Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, 100664798);
		SpawnChainTransitionEvent.NativeMethodInfoPtr_CreateTransitionEvent_Public_Static_Void_EntityCommandBuffer_ComponentLookup_1_ActiveChildElement_ComponentLookup_1_SpawnChainChild_Entity_FixedString32Bytes_FixedString32Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, 100664799);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1064323, XrefRangeEnd = 1064330, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnChainTransitionEvent.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1064333, RefRangeEnd = 1064335, XrefRangeStart = 1064330, XrefRangeEnd = 1064333, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(SpawnChainTransitionEvent other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnChainTransitionEvent.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SpawnChainTransitionEvent_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1064335, XrefRangeEnd = 1064337, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnChainTransitionEvent.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(6)]
	[CachedScanResults(RefRangeStart = 1064373, RefRangeEnd = 1064379, XrefRangeStart = 1064337, XrefRangeEnd = 1064373, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void CreateTransitionEvent(EntityManager entityManager, Entity spawnChainEntity, FixedString32Bytes transitionId, FixedString32Bytes secondaryTransitionId = default(FixedString32Bytes))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref spawnChainEntity;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref transitionId;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref secondaryTransitionId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnChainTransitionEvent.NativeMethodInfoPtr_CreateTransitionEvent_Public_Static_Void_EntityManager_Entity_FixedString32Bytes_FixedString32Bytes_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 1064400, RefRangeEnd = 1064403, XrefRangeStart = 1064379, XrefRangeEnd = 1064400, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void CreateTransitionEvent(EntityCommandBuffer spawnBuffer, ComponentLookup<SpawnChainData.ActiveChildElement> getActiveChildElement, ComponentLookup<SpawnChainChild> getSpawnChainChild, Entity spawnChainEntity, FixedString32Bytes transitionId, FixedString32Bytes secondaryTransitionId = default(FixedString32Bytes))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spawnBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref getActiveChildElement;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref getSpawnChainChild;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref spawnChainEntity;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref transitionId;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref secondaryTransitionId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnChainTransitionEvent.NativeMethodInfoPtr_CreateTransitionEvent_Public_Static_Void_EntityCommandBuffer_ComponentLookup_1_ActiveChildElement_ComponentLookup_1_SpawnChainChild_Entity_FixedString32Bytes_FixedString32Bytes_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnChainTransitionEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryTransitionId;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryTransitionId;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnChain;
	private static readonly IntPtr NativeFieldInfoPtr_FromSpawnChainChild;
	private static readonly IntPtr NativeFieldInfoPtr_FromSpawnChainElementIndex;
	private static readonly IntPtr NativeFieldInfoPtr_MultiStepStartChainElementIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ForwardedAutoChainTransitionSurplus;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_SpawnChainTransitionEvent_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateTransitionEvent_Public_Static_Void_EntityManager_Entity_FixedString32Bytes_FixedString32Bytes_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateTransitionEvent_Public_Static_Void_EntityCommandBuffer_ComponentLookup_1_ActiveChildElement_ComponentLookup_1_SpawnChainChild_Entity_FixedString32Bytes_FixedString32Bytes_0;
	[FieldOffset(0)]
	public SpawnChainData.TransitionId PrimaryTransitionId;
	[FieldOffset(32)]
	public SpawnChainData.TransitionId SecondaryTransitionId;
	[FieldOffset(64)]
	public Entity SpawnChain;
	[FieldOffset(72)]
	public Entity FromSpawnChainChild;
	[FieldOffset(80)]
	public int FromSpawnChainElementIndex;
	[FieldOffset(84)]
	public int MultiStepStartChainElementIndex;
	[FieldOffset(88)]
	public double ForwardedAutoChainTransitionSurplus;
}
