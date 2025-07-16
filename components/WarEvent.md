# WarEvent

```csharp
[StructLayout(2)]
public struct WarEvent
{
	static WarEvent()
	{
		Il2CppClassPointerStore<WarEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent>.NativeClassPtr);
		WarEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "Entity");
		WarEvent.NativeFieldInfoPtr_EventType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "EventType");
		WarEvent.NativeFieldInfoPtr_TargetActiveGates = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "TargetActiveGates");
		WarEvent.NativeFieldInfoPtr_GateNodes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "GateNodes");
		WarEvent.NativeFieldInfoPtr_NextGateSpawnTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "NextGateSpawnTimeTicks");
		WarEvent.NativeFieldInfoPtr_StartTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "StartTimeTicks");
		WarEvent.NativeFieldInfoPtr_EndTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "EndTimeTicks");
		WarEvent.NativeFieldInfoPtr_DecayDurationTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "DecayDurationTicks");
		WarEvent.NativeFieldInfoPtr_BossIndices = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "BossIndices");
		WarEvent.NativeFieldInfoPtr_GateCompositionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "GateCompositionIndex");
		WarEvent.NativeFieldInfoPtr_GATE_SPAWN_DELAY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, "GATE_SPAWN_DELAY");
		WarEvent.NativeMethodInfoPtr_Update_Public_Void_byref_WarEvent_Input_byref_NativeList_1_TerrainChunk_DynamicBuffer_1_WarEvent_ChildReference_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672756);
		WarEvent.NativeMethodInfoPtr_InstantiateTargetGates_Private_Void_byref_WarEvent_Input_DynamicBuffer_1_WarEvent_ChildReference_byref_NativeList_1_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672757);
		WarEvent.NativeMethodInfoPtr_TrySpawnNewGate_Private_TrySpawnGateResult_byref_WarEvent_Input_byref_WarEvent_GateData_byref_WarEvent_MapNodeBlob_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672758);
		WarEvent.NativeMethodInfoPtr_SetupRandomBossIndices_Private_Void_byref_WarEvent_Input_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672759);
		WarEvent.NativeMethodInfoPtr_UpdateActiveGates_Private_Void_byref_WarEvent_Input_DynamicBuffer_1_WarEvent_ChildReference_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672760);
		WarEvent.NativeMethodInfoPtr_CloseGate_Public_Void_EntityManager_TerrainChunk_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672761);
		WarEvent.NativeMethodInfoPtr_ClosePortal_Public_Void_EntityManager_TerrainChunk_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672762);
		WarEvent.NativeMethodInfoPtr_StopEvent_Public_Void_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, 100672763);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1162648, XrefRangeEnd = 1162650, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Update(ref WarEvent_Input input, ref NativeList<TerrainChunk> chunksWithGates, DynamicBuffer<WarEvent_ChildReference> activeGates)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &chunksWithGates;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref activeGates;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_Update_Public_Void_byref_WarEvent_Input_byref_NativeList_1_TerrainChunk_DynamicBuffer_1_WarEvent_ChildReference_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1162690, RefRangeEnd = 1162692, XrefRangeStart = 1162650, XrefRangeEnd = 1162690, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void InstantiateTargetGates(ref WarEvent_Input input, DynamicBuffer<WarEvent_ChildReference> activeGates, ref NativeList<TerrainChunk> chunksWithGates)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref activeGates;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &chunksWithGates;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_InstantiateTargetGates_Private_Void_byref_WarEvent_Input_DynamicBuffer_1_WarEvent_ChildReference_byref_NativeList_1_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1162767, RefRangeEnd = 1162768, XrefRangeStart = 1162692, XrefRangeEnd = 1162767, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe WarEvent.TrySpawnGateResult TrySpawnNewGate(ref WarEvent_Input input, ref WarEvent_GateData warGateData, ref WarEvent_MapNodeBlob nodeData, TerrainChunk node)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &warGateData;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &nodeData;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref node;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_TrySpawnNewGate_Private_TrySpawnGateResult_byref_WarEvent_Input_byref_WarEvent_GateData_byref_WarEvent_MapNodeBlob_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1162790, RefRangeEnd = 1162791, XrefRangeStart = 1162768, XrefRangeEnd = 1162790, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetupRandomBossIndices(ref WarEvent_Input input, PrefabGUID unitComposition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref unitComposition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_SetupRandomBossIndices_Private_Void_byref_WarEvent_Input_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1162822, RefRangeEnd = 1162824, XrefRangeStart = 1162791, XrefRangeEnd = 1162822, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void UpdateActiveGates(ref WarEvent_Input input, DynamicBuffer<WarEvent_ChildReference> activeGates)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref activeGates;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_UpdateActiveGates_Private_Void_byref_WarEvent_Input_DynamicBuffer_1_WarEvent_ChildReference_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1162862, RefRangeEnd = 1162863, XrefRangeStart = 1162824, XrefRangeEnd = 1162862, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void CloseGate(EntityManager entityManager, TerrainChunk coordinate)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref coordinate;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_CloseGate_Public_Void_EntityManager_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1162887, RefRangeEnd = 1162888, XrefRangeStart = 1162863, XrefRangeEnd = 1162887, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ClosePortal(EntityManager entityManager, TerrainChunk coordinate, bool allPortals)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref coordinate;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref allPortals;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_ClosePortal_Public_Void_EntityManager_TerrainChunk_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1162929, RefRangeEnd = 1162930, XrefRangeStart = 1162888, XrefRangeEnd = 1162929, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void StopEvent(EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_StopEvent_Public_Void_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent>.NativeClassPtr, ref this));
	}
	public unsafe static double GATE_SPAWN_DELAY
	{
		get
		{
			double result;
			IL2CPP.il2cpp_field_static_get_value(WarEvent.NativeFieldInfoPtr_GATE_SPAWN_DELAY, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(WarEvent.NativeFieldInfoPtr_GATE_SPAWN_DELAY, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_EventType;
	private static readonly IntPtr NativeFieldInfoPtr_TargetActiveGates;
	private static readonly IntPtr NativeFieldInfoPtr_GateNodes;
	private static readonly IntPtr NativeFieldInfoPtr_NextGateSpawnTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_StartTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_EndTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_DecayDurationTicks;
	private static readonly IntPtr NativeFieldInfoPtr_BossIndices;
	private static readonly IntPtr NativeFieldInfoPtr_GateCompositionIndex;
	private static readonly IntPtr NativeFieldInfoPtr_GATE_SPAWN_DELAY;
	private static readonly IntPtr NativeMethodInfoPtr_Update_Public_Void_byref_WarEvent_Input_byref_NativeList_1_TerrainChunk_DynamicBuffer_1_WarEvent_ChildReference_0;
	private static readonly IntPtr NativeMethodInfoPtr_InstantiateTargetGates_Private_Void_byref_WarEvent_Input_DynamicBuffer_1_WarEvent_ChildReference_byref_NativeList_1_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_TrySpawnNewGate_Private_TrySpawnGateResult_byref_WarEvent_Input_byref_WarEvent_GateData_byref_WarEvent_MapNodeBlob_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetupRandomBossIndices_Private_Void_byref_WarEvent_Input_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_UpdateActiveGates_Private_Void_byref_WarEvent_Input_DynamicBuffer_1_WarEvent_ChildReference_0;
	private static readonly IntPtr NativeMethodInfoPtr_CloseGate_Public_Void_EntityManager_TerrainChunk_0;
	private static readonly IntPtr NativeMethodInfoPtr_ClosePortal_Public_Void_EntityManager_TerrainChunk_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_StopEvent_Public_Void_EntityManager_0;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public WarEventType EventType;
	[FieldOffset(12)]
	public byte TargetActiveGates;
	[FieldOffset(16)]
	public FixedList128Bytes<TerrainChunk> GateNodes;
	[FieldOffset(144)]
	public long NextGateSpawnTimeTicks;
	[FieldOffset(152)]
	public long StartTimeTicks;
	[FieldOffset(160)]
	public long EndTimeTicks;
	[FieldOffset(168)]
	public long DecayDurationTicks;
	[FieldOffset(176)]
	public FixedList32Bytes<byte> BossIndices;
	[FieldOffset(208)]
	public byte GateCompositionIndex;
	public enum TrySpawnGateResult
	{
		Success,
		OutsideEventTime,
		WaitingForSpawn
	}
}
