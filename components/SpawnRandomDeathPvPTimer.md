---
nav_exclude: true
search_exclude: false
---

# SpawnRandomDeathPvPTimer

```csharp
public struct SpawnRandomDeathPvPTimer
{
	static SpawnRandomDeathPvPTimer()
	{
		Il2CppClassPointerStore<SpawnRandomDeathPvPTimer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpawnRandomDeathPvPTimer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnRandomDeathPvPTimer>.NativeClassPtr);
		SpawnRandomDeathPvPTimer.NativeFieldInfoPtr_ExtraTime_FirstStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRandomDeathPvPTimer>.NativeClassPtr, "ExtraTime_FirstStack");
		SpawnRandomDeathPvPTimer.NativeFieldInfoPtr_ExtraTime_AdditionalStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRandomDeathPvPTimer>.NativeClassPtr, "ExtraTime_AdditionalStacks");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnRandomDeathPvPTimer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ExtraTime_FirstStack;
	private static readonly IntPtr NativeFieldInfoPtr_ExtraTime_AdditionalStacks;

	public float ExtraTime_FirstStack;

	public float ExtraTime_AdditionalStacks;
}
```
