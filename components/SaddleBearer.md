---
nav_exclude: true
search_exclude: true
---

# SaddleBearer

```csharp
public struct SaddleBearer
{
	static SaddleBearer()
	{
		Il2CppClassPointerStore<SaddleBearer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SaddleBearer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SaddleBearer>.NativeClassPtr);
		SaddleBearer.NativeFieldInfoPtr_SaddleId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SaddleBearer>.NativeClassPtr, "SaddleId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SaddleBearer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SaddleId;

	public PrefabGUID SaddleId;
}
```

## Server Systems

- [MountStatsSpawnSystem_Server](/systems/server/MountStatsSpawnSystem_Server)
- [MountSystem_Shared](/systems/server/MountSystem_Shared)

## Client Systems

- [MountSystem_Shared](/systems/client/MountSystem_Shared)
