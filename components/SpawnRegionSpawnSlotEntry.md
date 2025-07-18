---
nav_exclude: true
search_exclude: true
---

# SpawnRegionSpawnSlotEntry

```csharp
public struct SpawnRegionSpawnSlotEntry
{
	static SpawnRegionSpawnSlotEntry()
	{
		Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "SpawnRegionSpawnSlotEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr);
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_BlockRespawnUntil = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "BlockRespawnUntil");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "Entity");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_ActiveSpawnPointIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "ActiveSpawnPointIndex");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_ActiveSpawnGroupIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "ActiveSpawnGroupIndex");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_ActiveSpawnBlockingRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "ActiveSpawnBlockingRadius");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_HasSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "HasSpawned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlockRespawnUntil;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSpawnPointIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSpawnGroupIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSpawnBlockingRadius;
	private static readonly IntPtr NativeFieldInfoPtr_HasSpawned;

	public double BlockRespawnUntil;

	public Entity Entity;

	public int ActiveSpawnPointIndex;

	public int ActiveSpawnGroupIndex;

	public float ActiveSpawnBlockingRadius;

	public bool HasSpawned;
}
```

## Server Systems

- [SpawnRegionOnDestroySystem](/systems/server/SpawnRegionOnDestroySystem)
