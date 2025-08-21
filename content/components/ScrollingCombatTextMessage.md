---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ScrollingCombatTextMessage
{
	static ScrollingCombatTextMessage()
	{
		Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ScrollingCombatTextMessage");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr);
		ScrollingCombatTextMessage.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "Position");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_OverrideColor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "OverrideColor");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "Value");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_OverrideLocalizedText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "OverrideLocalizedText");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "Type");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "Source");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_SourceObjectType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "SourceObjectType");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "BloodQuality");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "Target");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_OverrideText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "OverrideText");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_CreateTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "CreateTime");
		ScrollingCombatTextMessage.NativeFieldInfoPtr_ShowForAll = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, "ShowForAll");
		ScrollingCombatTextMessage.NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityManager_byref_RootPrefabCollection_byref_FixedString512Bytes_float3_float3_Entity_Single_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, 100668062);
		ScrollingCombatTextMessage.NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityCommandBuffer_byref_RootPrefabCollection_byref_FixedString512Bytes_float3_float3_Entity_Single_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, 100668063);
		ScrollingCombatTextMessage.NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityCommandBuffer_byref_RootPrefabCollection_AssetGuid_float3_Entity_float3_Single_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, 100668064);
		ScrollingCombatTextMessage.NativeMethodInfoPtr_Create_Public_Static_Entity_EntityManager_EntityCommandBuffer_AssetGuid_float3_float3_Entity_Single_PrefabGUID_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, 100668065);
		ScrollingCombatTextMessage.NativeMethodInfoPtr_Create_Public_Static_Entity_EntityManager_EntityCommandBuffer_Single_PrefabGUID_float3_Entity_Entity_PrefabGUID_Single_Entity_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, 100668066);
		ScrollingCombatTextMessage.NativeMethodInfoPtr_Create_Public_Static_Entity_EntityCommandBuffer_ComponentLookup_1_ControlledBy_byref_RootPrefabCollection_Single_PrefabGUID_float3_Entity_Entity_PrefabGUID_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, 100668067);
	}

	public unsafe static Entity CreateLocal(EntityManager entityManager, [In] ref RootPrefabCollection rootPrefabCollection, [In] ref FixedString512Bytes text, float3 position, float3 color, Entity entity, float value = 0f, PrefabGUID sctType = default(PrefabGUID))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rootPrefabCollection;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &text;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref position;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref color;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sctType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ScrollingCombatTextMessage.NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityManager_byref_RootPrefabCollection_byref_FixedString512Bytes_float3_float3_Entity_Single_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateLocal(EntityCommandBuffer commandBuffer, [In] ref RootPrefabCollection rootPrefabCollection, [In] ref FixedString512Bytes text, float3 position, float3 color, Entity entity, float value = 0f, PrefabGUID sctType = default(PrefabGUID))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rootPrefabCollection;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &text;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref position;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref color;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sctType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ScrollingCombatTextMessage.NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityCommandBuffer_byref_RootPrefabCollection_byref_FixedString512Bytes_float3_float3_Entity_Single_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity CreateLocal(EntityCommandBuffer commandBuffer, [In] ref RootPrefabCollection rootPrefabCollection, AssetGuid text, float3 position, Entity entity, float3 color = default(float3), float value = 0f, PrefabGUID sctType = default(PrefabGUID))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rootPrefabCollection;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref text;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref position;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref color;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sctType;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ScrollingCombatTextMessage.NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityCommandBuffer_byref_RootPrefabCollection_AssetGuid_float3_Entity_float3_Single_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity Create(EntityManager entityManager, EntityCommandBuffer commandBuffer, AssetGuid text, float3 position, float3 color, Entity entity, float value = 0f, PrefabGUID sctType = default(PrefabGUID), Entity user = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)9) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref text;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref position;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref color;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sctType;
		ptr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref user;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ScrollingCombatTextMessage.NativeMethodInfoPtr_Create_Public_Static_Entity_EntityManager_EntityCommandBuffer_AssetGuid_float3_float3_Entity_Single_PrefabGUID_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity Create(EntityManager entityManager, EntityCommandBuffer commandBuffer, float value, PrefabGUID sctType, float3 position, Entity target, Entity source, PrefabGUID sourceObjectType = default(PrefabGUID), float bloodQuality = -1f, Entity targetUser = default(Entity), Entity sourceUser = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)11) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sctType;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref position;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sourceObjectType;
		ptr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bloodQuality;
		ptr[checked(unchecked((UIntPtr)9) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref targetUser;
		ptr[checked(unchecked((UIntPtr)10) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sourceUser;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ScrollingCombatTextMessage.NativeMethodInfoPtr_Create_Public_Static_Entity_EntityManager_EntityCommandBuffer_Single_PrefabGUID_float3_Entity_Entity_PrefabGUID_Single_Entity_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Entity Create(EntityCommandBuffer commandBuffer, ComponentLookup<ControlledBy> getControlledBy, [In] ref RootPrefabCollection rootPrefabCollection, float value, PrefabGUID sctType, float3 position, Entity target, Entity source, PrefabGUID sourceObjectType = default(PrefabGUID), float bloodQuality = -1f)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)10) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref commandBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref getControlledBy;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rootPrefabCollection;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sctType;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref position;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref source;
		ptr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref sourceObjectType;
		ptr[checked(unchecked((UIntPtr)9) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bloodQuality;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ScrollingCombatTextMessage.NativeMethodInfoPtr_Create_Public_Static_Entity_EntityCommandBuffer_ComponentLookup_1_ControlledBy_byref_RootPrefabCollection_Single_PrefabGUID_float3_Entity_Entity_PrefabGUID_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScrollingCombatTextMessage>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideColor;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideLocalizedText;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_SourceObjectType;
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideText;
	private static readonly IntPtr NativeFieldInfoPtr_CreateTime;
	private static readonly IntPtr NativeFieldInfoPtr_ShowForAll;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityManager_byref_RootPrefabCollection_byref_FixedString512Bytes_float3_float3_Entity_Single_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityCommandBuffer_byref_RootPrefabCollection_byref_FixedString512Bytes_float3_float3_Entity_Single_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLocal_Public_Static_Entity_EntityCommandBuffer_byref_RootPrefabCollection_AssetGuid_float3_Entity_float3_Single_PrefabGUID_0;
	private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_Entity_EntityManager_EntityCommandBuffer_AssetGuid_float3_float3_Entity_Single_PrefabGUID_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_Entity_EntityManager_EntityCommandBuffer_Single_PrefabGUID_float3_Entity_Entity_PrefabGUID_Single_Entity_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_Entity_EntityCommandBuffer_ComponentLookup_1_ControlledBy_byref_RootPrefabCollection_Single_PrefabGUID_float3_Entity_Entity_PrefabGUID_Single_0;

	public float3 Position;

	public float3 OverrideColor;

	public float Value;

	public Guid OverrideLocalizedText;

	public PrefabGUID Type;

	public NetworkedEntity Source;

	public PrefabGUID SourceObjectType;

	public float BloodQuality;

	public NetworkedEntity Target;

	public FixedString512Bytes OverrideText;

	public float CreateTime;

	public bool ShowForAll;
}
```
