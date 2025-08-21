---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RespawnPointOwnerBuffer
{
	static RespawnPointOwnerBuffer()
	{
		Il2CppClassPointerStore<RespawnPointOwnerBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RespawnPointOwnerBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnPointOwnerBuffer>.NativeClassPtr);
		RespawnPointOwnerBuffer.NativeFieldInfoPtr_RespawnPoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPointOwnerBuffer>.NativeClassPtr, "RespawnPoint");
		RespawnPointOwnerBuffer.NativeFieldInfoPtr_RespawnPointNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPointOwnerBuffer>.NativeClassPtr, "RespawnPointNetworkId");
		RespawnPointOwnerBuffer.NativeFieldInfoPtr_IsLocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPointOwnerBuffer>.NativeClassPtr, "IsLocked");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnPointOwnerBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RespawnPoint;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnPointNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_IsLocked;

	public NetworkedEntity RespawnPoint;

	public NetworkId RespawnPointNetworkId;

	public bool IsLocked;
}
```

## Server Systems

- [VerifyRespawnPointConnectionsSystem]({{% relref "systems/server/VerifyRespawnPointConnectionsSystem.md" %}})
