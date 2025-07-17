---
nav_exclude: true
search_exclude: true
---

# PathRequest

```csharp
[StructLayout(2)]
public struct PathRequest
{
	static PathRequest()
	{
		Il2CppClassPointerStore<PathRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Pathfinding.dll", "ProjectM.Pathfinding", "PathRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PathRequest>.NativeClassPtr);
		PathRequest.NativeFieldInfoPtr_Start = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "Start");
		PathRequest.NativeFieldInfoPtr_AgentMapCollisionRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "AgentMapCollisionRadius");
		PathRequest.NativeFieldInfoPtr_SearchBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "SearchBounds");
		PathRequest.NativeFieldInfoPtr_AgentTerrainPreferences = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "AgentTerrainPreferences");
		PathRequest.NativeFieldInfoPtr_Solver = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "Solver");
		PathRequest.NativeFieldInfoPtr_AgentEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "AgentEntity");
		PathRequest.NativeFieldInfoPtr_MaxExpansions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "MaxExpansions");
		PathRequest.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "Status");
		PathRequest.NativeFieldInfoPtr_HandledFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "HandledFrame");
		PathRequest.NativeFieldInfoPtr_Destroy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "Destroy");
		PathRequest.NativeFieldInfoPtr_UseSmoothing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, "UseSmoothing");
		PathRequest.NativeMethodInfoPtr_Create_Public_Static_PathRequest_float3_Single_PathfindingTerrainData_Int32_Boolean_PathfindingSolver_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, 100663420);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2378510, XrefRangeEnd = 2378511, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static PathRequest Create(float3 start, float agentMapCollisionRadius, PathfindingTerrainData agentTerrainPreferences, int maxExpansions, bool useSmoothing, PathfindingSolver solver, Entity entity = default(Entity))
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref start;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref agentMapCollisionRadius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref agentTerrainPreferences;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxExpansions;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref useSmoothing;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref solver;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PathRequest.NativeMethodInfoPtr_Create_Public_Static_PathRequest_float3_Single_PathfindingTerrainData_Int32_Boolean_PathfindingSolver_Entity_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PathRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Start;
	private static readonly IntPtr NativeFieldInfoPtr_AgentMapCollisionRadius;
	private static readonly IntPtr NativeFieldInfoPtr_SearchBounds;
	private static readonly IntPtr NativeFieldInfoPtr_AgentTerrainPreferences;
	private static readonly IntPtr NativeFieldInfoPtr_Solver;
	private static readonly IntPtr NativeFieldInfoPtr_AgentEntity;
	private static readonly IntPtr NativeFieldInfoPtr_MaxExpansions;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_HandledFrame;
	private static readonly IntPtr NativeFieldInfoPtr_Destroy;
	private static readonly IntPtr NativeFieldInfoPtr_UseSmoothing;
	private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_PathRequest_float3_Single_PathfindingTerrainData_Int32_Boolean_PathfindingSolver_Entity_0;
	[FieldOffset(0)]
	public float3 Start;
	[FieldOffset(12)]
	public float AgentMapCollisionRadius;
	[FieldOffset(16)]
	public BoundsMinMax SearchBounds;
	[FieldOffset(32)]
	public PathfindingTerrainData AgentTerrainPreferences;
	[FieldOffset(40)]
	public PathfindingSolver Solver;
	[FieldOffset(60)]
	public Entity AgentEntity;
	[FieldOffset(68)]
	public int MaxExpansions;
	[FieldOffset(72)]
	public PathRequestStatus Status;
	[FieldOffset(76)]
	public int HandledFrame;
	[FieldOffset(80)]
	[MarshalAs(4)]
	public bool Destroy;
	[FieldOffset(81)]
	[MarshalAs(4)]
	public bool UseSmoothing;
}
