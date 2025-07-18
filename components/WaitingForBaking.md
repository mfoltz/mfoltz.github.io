---
nav_exclude: true
search_exclude: true
---

# WaitingForBaking

```csharp
public struct WaitingForBaking
{
	static WaitingForBaking()
	{
		Il2CppClassPointerStore<WaitingForBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core.Authoring", "WaitingForBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WaitingForBaking>.NativeClassPtr);
		WaitingForBaking.NativeFieldInfoPtr_WaitingForPrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WaitingForBaking>.NativeClassPtr, "WaitingForPrefabGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WaitingForBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WaitingForPrefabGUID;

	public PrefabGUID WaitingForPrefabGUID;
}
```

## Server Systems

- [ProcessWaitingForBakingSystem](/systems/server/ProcessWaitingForBakingSystem)
- [RandomizedSpawnChainUpdateSystem](/systems/server/RandomizedSpawnChainUpdateSystem)
- [UpdateMicroPOIManagerSystem](/systems/server/UpdateMicroPOIManagerSystem)

## Client Systems

- [ProcessWaitingForBakingSystem](/systems/client/ProcessWaitingForBakingSystem)
