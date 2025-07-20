---
nav_exclude: true
search_exclude: true
---

# RespawnPoint

```csharp
public struct RespawnPoint
{
	static RespawnPoint()
	{
		Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RespawnPoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr);
		RespawnPoint.NativeFieldInfoPtr_SpawnExitOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "SpawnExitOffset");
		RespawnPoint.NativeFieldInfoPtr_SpawnDelayBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "SpawnDelayBuff");
		RespawnPoint.NativeFieldInfoPtr_SpawnSleepingBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "SpawnSleepingBuff");
		RespawnPoint.NativeFieldInfoPtr_RespawnPointType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "RespawnPointType");
		RespawnPoint.NativeFieldInfoPtr_HasRespawnPointOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "HasRespawnPointOwner");
		RespawnPoint.NativeFieldInfoPtr_RespawnPointOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "RespawnPointOwner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnExitOffset;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnDelayBuff;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnSleepingBuff;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnPointType;
	private static readonly IntPtr NativeFieldInfoPtr_HasRespawnPointOwner;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnPointOwner;

	public float3 SpawnExitOffset;

	public PrefabGUID SpawnDelayBuff;

	public PrefabGUID SpawnSleepingBuff;

	public RespawnPointType RespawnPointType;

	public bool HasRespawnPointOwner;

	public NetworkedEntity RespawnPointOwner;
}
```

## Server Systems

- [RespawnPointSpawnSystem](/systems/server/RespawnPointSpawnSystem)
- [VerifyRespawnPointConnectionsSystem](/systems/server/VerifyRespawnPointConnectionsSystem)
