---
nav_exclude: true
search_exclude: false
---

# RoadPathfindingRequest

```csharp
public struct RoadPathfindingRequest
{
	static RoadPathfindingRequest()
	{
		Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "RoadPathfindingRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr);
		RoadPathfindingRequest.NativeFieldInfoPtr_Start = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr, "Start");
		RoadPathfindingRequest.NativeFieldInfoPtr_End = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr, "End");
		RoadPathfindingRequest.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr, "Status");
		RoadPathfindingRequest.NativeFieldInfoPtr_WeightSettingOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr, "WeightSettingOwner");
		RoadPathfindingRequest.NativeFieldInfoPtr_SolverResult = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr, "SolverResult");
		RoadPathfindingRequest.NativeMethodInfoPtr_Create_Public_Static_RoadPathfindingRequest_Entity_BusStopId_BusStopId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr, 100668880);
	}

	public unsafe static RoadPathfindingRequest Create(Entity weightSettingOwner, BusStopId start, BusStopId end)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref weightSettingOwner;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref start;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref end;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(RoadPathfindingRequest.NativeMethodInfoPtr_Create_Public_Static_RoadPathfindingRequest_Entity_BusStopId_BusStopId_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoadPathfindingRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Start;
	private static readonly IntPtr NativeFieldInfoPtr_End;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_WeightSettingOwner;
	private static readonly IntPtr NativeFieldInfoPtr_SolverResult;
	private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_RoadPathfindingRequest_Entity_BusStopId_BusStopId_0;

	public BusStopId Start;

	public BusStopId End;

	public RoadPathRequestStatus Status;

	public Entity WeightSettingOwner;

	public RoadPathfinding.SolverResult SolverResult;
}
```

## Server Systems

- [RoadPathfindingSystem](/systems/server/RoadPathfindingSystem)
