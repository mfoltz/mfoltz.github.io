---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DisableWhenNoPlayersInRangeOfChunk
{
	static DisableWhenNoPlayersInRangeOfChunk()
	{
		Il2CppClassPointerStore<DisableWhenNoPlayersInRangeOfChunk>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DisableWhenNoPlayersInRangeOfChunk");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableWhenNoPlayersInRangeOfChunk>.NativeClassPtr);
		DisableWhenNoPlayersInRangeOfChunk.NativeFieldInfoPtr_Chunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableWhenNoPlayersInRangeOfChunk>.NativeClassPtr, "Chunk");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableWhenNoPlayersInRangeOfChunk>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Chunk;

	public TerrainChunk Chunk;
}
```

## Server Systems

- [SpawnChainTransitionSystem_PreDestroy]({{% relref "systems/server/SpawnChainTransitionSystem_PreDestroy.md" %}})
