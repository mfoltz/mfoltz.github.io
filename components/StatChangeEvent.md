---
nav_exclude: true
search_exclude: true
---

# StatChangeEvent

```csharp
public struct StatChangeEvent
{
	static StatChangeEvent()
	{
		Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StatChangeEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr);
		StatChangeEvent.NativeFieldInfoPtr_StatChangeEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "StatChangeEntity");
		StatChangeEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "Entity");
		StatChangeEvent.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "Source");
		StatChangeEvent.NativeFieldInfoPtr_StatType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "StatType");
		StatChangeEvent.NativeFieldInfoPtr_Change = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "Change");
		StatChangeEvent.NativeFieldInfoPtr_OriginalChange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "OriginalChange");
		StatChangeEvent.NativeFieldInfoPtr_StatChangeFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "StatChangeFlags");
		StatChangeEvent.NativeFieldInfoPtr_Reason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, "Reason");
		StatChangeEvent.NativeMethodInfoPtr__ctor_Public_Void_Entity_Entity_StatType_Single_Int32_StatChangeReason_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, 100664873);
		StatChangeEvent.NativeMethodInfoPtr_CreateDefaultStatChangeFlags_Public_Static_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, 100664874);
		StatChangeEvent.NativeMethodInfoPtr_HasFlag_Public_Boolean_StatChangeFlag_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, 100664875);
		StatChangeEvent.NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_EntityCommandBuffer_StatType_Entity_Single_Int32_StatChangeReason_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, 100664876);
		StatChangeEvent.NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_ParallelWriter_StatType_Int32_Entity_Single_Int32_StatChangeReason_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, 100664877);
		StatChangeEvent.NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_EntityManager_StatType_Entity_Single_Int32_StatChangeReason_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, 100664878);
	}

	public unsafe StatChangeEvent(Entity statChangeEntity, Entity entity, StatType statType, float change, int statChangeFlags, StatChangeReason reason, Entity source)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref statChangeEntity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statType;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref change;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statChangeFlags;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref reason;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StatChangeEvent.NativeMethodInfoPtr__ctor_Public_Void_Entity_Entity_StatType_Single_Int32_StatChangeReason_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static int CreateDefaultStatChangeFlags()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StatChangeEvent.NativeMethodInfoPtr_CreateDefaultStatChangeFlags_Public_Static_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool HasFlag(StatChangeFlag flag)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref flag;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StatChangeEvent.NativeMethodInfoPtr_HasFlag_Public_Boolean_StatChangeFlag_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateStatChangeEvent(EntityCommandBuffer commandBuffer, StatType statType, Entity entity, float change, int statChangeFlags, StatChangeReason reason, Entity source = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref change;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statChangeFlags;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref reason;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StatChangeEvent.NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_EntityCommandBuffer_StatType_Entity_Single_Int32_StatChangeReason_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateStatChangeEvent(EntityCommandBuffer.ParallelWriter commandBuffer, StatType statType, int jobIndex, Entity entity, float change, int statChangeFlags, StatChangeReason reason, Entity source = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref jobIndex;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref change;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statChangeFlags;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref reason;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StatChangeEvent.NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_ParallelWriter_StatType_Int32_Entity_Single_Int32_StatChangeReason_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateStatChangeEvent(EntityManager entityManager, StatType statType, Entity entity, float change, int statChangeFlags, StatChangeReason reason, Entity source = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statType;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref change;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref statChangeFlags;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref reason;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(StatChangeEvent.NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_EntityManager_StatType_Entity_Single_Int32_StatChangeReason_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StatChangeEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StatChangeEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_StatType;
	private static readonly IntPtr NativeFieldInfoPtr_Change;
	private static readonly IntPtr NativeFieldInfoPtr_OriginalChange;
	private static readonly IntPtr NativeFieldInfoPtr_StatChangeFlags;
	private static readonly IntPtr NativeFieldInfoPtr_Reason;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Entity_Entity_StatType_Single_Int32_StatChangeReason_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateDefaultStatChangeFlags_Public_Static_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasFlag_Public_Boolean_StatChangeFlag_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_EntityCommandBuffer_StatType_Entity_Single_Int32_StatChangeReason_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_ParallelWriter_StatType_Int32_Entity_Single_Int32_StatChangeReason_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateStatChangeEvent_Public_Static_Entity_EntityManager_StatType_Entity_Single_Int32_StatChangeReason_Entity_0;

	public Entity StatChangeEntity;

	public Entity Entity;

	public Entity Source;

	public StatType StatType;

	public float Change;

	public float OriginalChange;

	public int StatChangeFlags;

	public StatChangeReason Reason;
}
```

## Server Systems

- [DestroyBuffOnDamageTakenSystem](/systems/server/DestroyBuffOnDamageTakenSystem)
- [StatChangeMutationSystem](/systems/server/StatChangeMutationSystem)
- [StatChangeSystem](/systems/server/StatChangeSystem)

## Client Systems

- [DestroyHealthChangeEventSystem](/systems/client/DestroyHealthChangeEventSystem)
