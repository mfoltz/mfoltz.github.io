---
nav_exclude: true
search_exclude: true
---

# BuildStaticPhysicsWorldSingleton

```csharp
[StructLayout(2)]
public struct BuildStaticPhysicsWorldSingleton
{
	static BuildStaticPhysicsWorldSingleton()
	{
		Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.Systems", "BuildStaticPhysicsWorldSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr);
		BuildStaticPhysicsWorldSingleton.NativeFieldInfoPtr_StaticRigidBodiesToUpdate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, "StaticRigidBodiesToUpdate");
		BuildStaticPhysicsWorldSingleton.NativeFieldInfoPtr_SuperStaticResetQuery = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, "SuperStaticResetQuery");
		BuildStaticPhysicsWorldSingleton.NativeFieldInfoPtr_InputDependency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, "InputDependency");
		BuildStaticPhysicsWorldSingleton.NativeFieldInfoPtr_StaticData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, "StaticData");
		BuildStaticPhysicsWorldSingleton.NativeFieldInfoPtr_SuperStaticData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, "SuperStaticData");
		BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_GetStaticRigidBodies_Public_JobHandle_byref_NativeList_1_RigidBody_byref_NativeArray_1_Boolean_byref_NativeList_1_RigidBody_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, 100666248);
		BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_GetSuperStaticRigidBodies_Public_JobHandle_byref_NativeList_1_RigidBodyWithOwner_byref_NativeList_1_Entity_byref_NativeList_1_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, 100666249);
		BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_GetSuperStaticPositions_Public_JobHandle_byref_NativeList_1_SuperStaticPosition_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, 100666250);
		BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_AddInputDependency_Public_Void_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, 100666251);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1826616, XrefRangeEnd = 1826620, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe JobHandle GetStaticRigidBodies(out NativeList<RigidBody> newRigidBodies, out NativeArray<bool> activeBodies, out NativeList<RigidBody> toUpdate)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &newRigidBodies;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &activeBodies;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &toUpdate;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_GetStaticRigidBodies_Public_JobHandle_byref_NativeList_1_RigidBody_byref_NativeArray_1_Boolean_byref_NativeList_1_RigidBody_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe JobHandle GetSuperStaticRigidBodies(out NativeList<RigidBodyWithOwner> newRigidBodies, out NativeList<Entity> newEntities, out NativeList<Entity> removedRigidBodies)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &newRigidBodies;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &newEntities;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &removedRigidBodies;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_GetSuperStaticRigidBodies_Public_JobHandle_byref_NativeList_1_RigidBodyWithOwner_byref_NativeList_1_Entity_byref_NativeList_1_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1826620, XrefRangeEnd = 1826623, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe JobHandle GetSuperStaticPositions(out NativeList<SuperStaticPosition> positions)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &positions;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_GetSuperStaticPositions_Public_JobHandle_byref_NativeList_1_SuperStaticPosition_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1826623, XrefRangeEnd = 1826625, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddInputDependency(JobHandle jobHandle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref jobHandle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildStaticPhysicsWorldSingleton.NativeMethodInfoPtr_AddInputDependency_Public_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildStaticPhysicsWorldSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StaticRigidBodiesToUpdate;
	private static readonly IntPtr NativeFieldInfoPtr_SuperStaticResetQuery;
	private static readonly IntPtr NativeFieldInfoPtr_InputDependency;
	private static readonly IntPtr NativeFieldInfoPtr_StaticData;
	private static readonly IntPtr NativeFieldInfoPtr_SuperStaticData;
	private static readonly IntPtr NativeMethodInfoPtr_GetStaticRigidBodies_Public_JobHandle_byref_NativeList_1_RigidBody_byref_NativeArray_1_Boolean_byref_NativeList_1_RigidBody_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSuperStaticRigidBodies_Public_JobHandle_byref_NativeList_1_RigidBodyWithOwner_byref_NativeList_1_Entity_byref_NativeList_1_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSuperStaticPositions_Public_JobHandle_byref_NativeList_1_SuperStaticPosition_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddInputDependency_Public_Void_JobHandle_0;
	[FieldOffset(0)]
	public NativeList<RigidBody> StaticRigidBodiesToUpdate;
	[FieldOffset(8)]
	public EntityQuery SuperStaticResetQuery;
	[FieldOffset(24)]
	public JobHandle InputDependency;
	[FieldOffset(40)]
	public RigidBodyData StaticData;
	[FieldOffset(120)]
	public SuperStaticData SuperStaticData;
}
