---
nav_exclude: true
search_exclude: false
---

# WarEvent_MapNode

```csharp
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

	public TerrainChunk ChunkCoordinate;

	public BlobAssetReference<WarEvent_MapNodeBlob> NodeData;
}
```

## Server Systems

- [WarEventRegistrySystem](/systems/server/WarEventRegistrySystem)

## Client Systems

- [ClientAdminConsoleCommandSystem](/systems/client/ClientAdminConsoleCommandSystem)
- [WarEventRegistrySystem](/systems/client/WarEventRegistrySystem)
