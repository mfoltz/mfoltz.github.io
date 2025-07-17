---
nav_exclude: true
search_exclude: true
---

# WorldRoadGraph

```csharp
[StructLayout(2)]
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
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1112754, RefRangeEnd = 1112756, XrefRangeStart = 1112743, XrefRangeEnd = 1112754, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WorldRoadGraph.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1112769, RefRangeEnd = 1112770, XrefRangeStart = 1112756, XrefRangeEnd = 1112769, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
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
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1112783, RefRangeEnd = 1112785, XrefRangeStart = 1112770, XrefRangeEnd = 1112783, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
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
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool IsCreated;
	[FieldOffset(8)]
	public BlobAssetReference<WorldRoadGraphBlob> Blob;
	[FieldOffset(16)]
	public NativeParallelHashMap<BusStopId, int> BusStops;
	[FieldOffset(32)]
	public NativeParallelHashMap<FixedString32Bytes, int> BusStopNameToNode;
	[FieldOffset(48)]
	public NativeParallelMultiHashMap<TerrainChunk, int> ChunkToNodes;
	[StructLayout(2)]
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
		[FieldOffset(0)]
		public float3 Position;
		[FieldOffset(12)]
		public quaternion Rotation;
		[FieldOffset(28)]
		public float WaitDuration;
	}
}
