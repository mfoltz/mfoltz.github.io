# WarEvent_MapNode

```csharp
[StructLayout(2)]
public struct WarEvent_MapNode
{
	static WarEvent_MapNode()
	{
		Il2CppClassPointerStore<WarEvent_MapNode>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_MapNode");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_MapNode>.NativeClassPtr);
		WarEvent_MapNode.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_MapNode>.NativeClassPtr, "ChunkCoordinate");
		WarEvent_MapNode.NativeFieldInfoPtr_NodeData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_MapNode>.NativeClassPtr, "NodeData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_MapNode>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_NodeData;
	[FieldOffset(0)]
	public TerrainChunk ChunkCoordinate;
	[FieldOffset(8)]
	public BlobAssetReference<WarEvent_MapNodeBlob> NodeData;
}
