---
nav_exclude: true
search_exclude: true
---

# RespawnDelay

```csharp
public struct RespawnDelay
{
	static RespawnDelay()
	{
		Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RespawnDelay");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr);
		RespawnDelay.NativeFieldInfoPtr_TravelBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr, "TravelBuff");
		RespawnDelay.NativeFieldInfoPtr_TravelBuffSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr, "TravelBuffSpawned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnDelay>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TravelBuff;
	private static readonly IntPtr NativeFieldInfoPtr_TravelBuffSpawned;

	public PrefabGUID TravelBuff;

	public bool TravelBuffSpawned;
}
```

## Server Systems

- [RespawnDelaySystem_Server](/systems/server/RespawnDelaySystem_Server)

## Client Systems

- [RespawnDelaySystem_Client](/systems/client/RespawnDelaySystem_Client)
