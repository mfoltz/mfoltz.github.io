---
nav_exclude: true
search_exclude: true
---

# BuildPhysicsWorldData

```csharp
[StructLayout(2)]
public struct BuildPhysicsWorldData
{
	static BuildPhysicsWorldData()
	{
		Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics.Systems", "BuildPhysicsWorldData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr);
		BuildPhysicsWorldData.NativeFieldInfoPtr_m_InputDependencyToComplete = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, "m_InputDependencyToComplete");
		BuildPhysicsWorldData.NativeFieldInfoPtr_PhysicsData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, "PhysicsData");
		BuildPhysicsWorldData.NativeFieldInfoPtr_WorldFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, "WorldFilter");
		BuildPhysicsWorldData.NativeMethodInfoPtr_get_DynamicEntityGroup_Public_get_EntityQuery_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, 100666324);
		BuildPhysicsWorldData.NativeMethodInfoPtr_get_StaticEntityGroup_Public_get_EntityQuery_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, 100666325);
		BuildPhysicsWorldData.NativeMethodInfoPtr_get_JointEntityGroup_Public_get_EntityQuery_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, 100666326);
		BuildPhysicsWorldData.NativeMethodInfoPtr_get_HaveStaticBodiesChanged_Public_get_NativeReference_1_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, 100666327);
		BuildPhysicsWorldData.NativeMethodInfoPtr_AddInputDependencyToComplete_Internal_Void_JobHandle_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, 100666328);
	}
	public unsafe EntityQuery DynamicEntityGroup
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildPhysicsWorldData.NativeMethodInfoPtr_get_DynamicEntityGroup_Public_get_EntityQuery_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe EntityQuery StaticEntityGroup
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildPhysicsWorldData.NativeMethodInfoPtr_get_StaticEntityGroup_Public_get_EntityQuery_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe EntityQuery JointEntityGroup
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildPhysicsWorldData.NativeMethodInfoPtr_get_JointEntityGroup_Public_get_EntityQuery_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeReference<int> HaveStaticBodiesChanged
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildPhysicsWorldData.NativeMethodInfoPtr_get_HaveStaticBodiesChanged_Public_get_NativeReference_1_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1827800, XrefRangeEnd = 1827802, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void AddInputDependencyToComplete(JobHandle dependencyToComplete)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dependencyToComplete;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(BuildPhysicsWorldData.NativeMethodInfoPtr_AddInputDependencyToComplete_Internal_Void_JobHandle_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildPhysicsWorldData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_m_InputDependencyToComplete;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicsData;
	private static readonly IntPtr NativeFieldInfoPtr_WorldFilter;
	private static readonly IntPtr NativeMethodInfoPtr_get_DynamicEntityGroup_Public_get_EntityQuery_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_StaticEntityGroup_Public_get_EntityQuery_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_JointEntityGroup_Public_get_EntityQuery_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_HaveStaticBodiesChanged_Public_get_NativeReference_1_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_AddInputDependencyToComplete_Internal_Void_JobHandle_0;
	[FieldOffset(0)]
	public JobHandle m_InputDependencyToComplete;
	[FieldOffset(16)]
	public PhysicsWorldData PhysicsData;
	[FieldOffset(1088)]
	public PhysicsWorldIndex WorldFilter;
}
