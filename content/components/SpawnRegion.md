---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SpawnRegion
{
	static SpawnRegion()
	{
		Il2CppClassPointerStore<SpawnRegion>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "SpawnRegion");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnRegion>.NativeClassPtr);
		SpawnRegion.NativeFieldInfoPtr_LastRespawnAttempt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegion>.NativeClassPtr, "LastRespawnAttempt");
		SpawnRegion.NativeFieldInfoPtr_RespawnDurationMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegion>.NativeClassPtr, "RespawnDurationMin");
		SpawnRegion.NativeFieldInfoPtr_RespawnDurationMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegion>.NativeClassPtr, "RespawnDurationMax");
		SpawnRegion.NativeFieldInfoPtr_FailedSequentialRegionFillAttempts = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegion>.NativeClassPtr, "FailedSequentialRegionFillAttempts");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnRegion>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastRespawnAttempt;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnDurationMin;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnDurationMax;
	private static readonly IntPtr NativeFieldInfoPtr_FailedSequentialRegionFillAttempts;

	public double LastRespawnAttempt;

	public float RespawnDurationMin;

	public float RespawnDurationMax;

	public int FailedSequentialRegionFillAttempts;
}
```
