---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public unsafe void SetupRandomBossIndices(ref WarEvent_Input input, PrefabGUID unitComposition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref unitComposition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_SetupRandomBossIndices_Private_Void_byref_WarEvent_Input_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void UpdateActiveGates(ref WarEvent_Input input, DynamicBuffer<WarEvent_ChildReference> activeGates)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref activeGates;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_UpdateActiveGates_Private_Void_byref_WarEvent_Input_DynamicBuffer_1_WarEvent_ChildReference_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void CloseGate(EntityManager entityManager, TerrainChunk coordinate)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref coordinate;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent.NativeMethodInfoPtr_CloseGate_Public_Void_EntityManager_TerrainChunk_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

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

	public Entity Entity;

	public WarEventType EventType;

	public byte TargetActiveGates;

	public FixedList128Bytes<TerrainChunk> GateNodes;

	public long NextGateSpawnTimeTicks;

	public long StartTimeTicks;

	public long EndTimeTicks;

	public long DecayDurationTicks;

	public FixedList32Bytes<byte> BossIndices;

	public byte GateCompositionIndex;
	public enum TrySpawnGateResult
	{
		Success,
		OutsideEventTime,
		WaitingForSpawn
	}
}
```

## Server Systems

- [WarEventSystem]({{% relref "systems/server/WarEventSystem.md" %}})
