---
nav_exclude: true
search_exclude: true
---

# WorldRoadGraph

```csharp
public struct WorldRoadGraph
{
	static WorldRoadGraph()
	{
		Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "WorldRoadGraph");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr);
		WorldRoadGraph.NativeFieldInfoPtr_IsCreated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, "IsCreated");
		WorldRoadGraph.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, "Blob");
		WorldRoadGraph.NativeFieldInfoPtr_BusStops = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, "BusStops");
		WorldRoadGraph.NativeFieldInfoPtr_BusStopNameToNode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, "BusStopNameToNode");
		WorldRoadGraph.NativeFieldInfoPtr_ChunkToNodes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, "ChunkToNodes");
		WorldRoadGraph.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, 100668885);
		WorldRoadGraph.NativeMethodInfoPtr_TryGetBusStopPosition_Public_Boolean_BusStopId_byref_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, 100668886);
		WorldRoadGraph.NativeMethodInfoPtr_TryGetBusStop_Public_Boolean_BusStopId_byref_BusStopData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, 100668887);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WorldRoadGraph.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool TryGetBusStopPosition(BusStopId busStopId, out float3 worldPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref busStopId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &worldPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WorldRoadGraph.NativeMethodInfoPtr_TryGetBusStopPosition_Public_Boolean_BusStopId_byref_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetBusStop(BusStopId busStopId, out WorldRoadGraph.BusStopData busStopData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref busStopId;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &busStopData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WorldRoadGraph.NativeMethodInfoPtr_TryGetBusStop_Public_Boolean_BusStopId_byref_BusStopData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_IsCreated;
	private static readonly IntPtr NativeFieldInfoPtr_Blob;
	private static readonly IntPtr NativeFieldInfoPtr_BusStops;
	private static readonly IntPtr NativeFieldInfoPtr_BusStopNameToNode;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkToNodes;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetBusStopPosition_Public_Boolean_BusStopId_byref_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetBusStop_Public_Boolean_BusStopId_byref_BusStopData_0;

	public bool IsCreated;

	public BlobAssetReference<WorldRoadGraphBlob> Blob;

	public NativeParallelHashMap<BusStopId, int> BusStops;

	public NativeParallelHashMap<FixedString32Bytes, int> BusStopNameToNode;

	public NativeParallelMultiHashMap<TerrainChunk, int> ChunkToNodes;

	public struct BusStopData
	{
		static BusStopData()
		{
			Il2CppClassPointerStore<WorldRoadGraph.BusStopData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<WorldRoadGraph>.NativeClassPtr, "BusStopData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldRoadGraph.BusStopData>.NativeClassPtr);
			WorldRoadGraph.BusStopData.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph.BusStopData>.NativeClassPtr, "Position");
			WorldRoadGraph.BusStopData.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph.BusStopData>.NativeClassPtr, "Rotation");
			WorldRoadGraph.BusStopData.NativeFieldInfoPtr_WaitDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldRoadGraph.BusStopData>.NativeClassPtr, "WaitDuration");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldRoadGraph.BusStopData>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_Position;
		private static readonly IntPtr NativeFieldInfoPtr_Rotation;
		private static readonly IntPtr NativeFieldInfoPtr_WaitDuration;

		public float3 Position;

		public quaternion Rotation;

		public float WaitDuration;
	}
}
```

## Server Systems

- [RoadPathfindingSystem](/systems/server/RoadPathfindingSystem)
