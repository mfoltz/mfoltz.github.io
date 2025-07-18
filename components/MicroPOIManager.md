---
nav_exclude: true
search_exclude: true
---

# MicroPOIManager

```csharp
public struct MicroPOIManager
{
	static MicroPOIManager()
	{
		Il2CppClassPointerStore<MicroPOIManager>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MicroPOIManager");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MicroPOIManager>.NativeClassPtr);
		MicroPOIManager.NativeFieldInfoPtr_NextSpawnAttempt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIManager>.NativeClassPtr, "NextSpawnAttempt");
		MicroPOIManager.NativeFieldInfoPtr_POIToSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIManager>.NativeClassPtr, "POIToSpawn");
		MicroPOIManager.NativeFieldInfoPtr_ActivePOI = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIManager>.NativeClassPtr, "ActivePOI");
		MicroPOIManager.NativeFieldInfoPtr_ForceNextSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MicroPOIManager>.NativeClassPtr, "ForceNextSpawn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MicroPOIManager>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NextSpawnAttempt;
	private static readonly IntPtr NativeFieldInfoPtr_POIToSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_ActivePOI;
	private static readonly IntPtr NativeFieldInfoPtr_ForceNextSpawn;

	public double NextSpawnAttempt;

	public PrefabGUID POIToSpawn;

	public Entity ActivePOI;

	public bool ForceNextSpawn;
}
```

## Server Systems

- [UpdateMicroPOIManagerSystem](/systems/server/UpdateMicroPOIManagerSystem)
