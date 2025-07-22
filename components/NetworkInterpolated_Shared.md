---
nav_exclude: true
search_exclude: false
---

# NetworkInterpolated_Shared

```csharp
public struct NetworkInterpolated_Shared
{
	static NetworkInterpolated_Shared()
	{
		Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "NetworkInterpolated_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr);
		NetworkInterpolated_Shared.NativeFieldInfoPtr_LastClientCommandTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "LastClientCommandTime");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_NextSimulationSyncTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "NextSimulationSyncTime");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_NextSendTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "NextSendTime");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_ServerRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "ServerRotation");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_ServerPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "ServerPosition");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_ServerVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "ServerVelocity");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_Movement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "Movement");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_ServerMoveVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "ServerMoveVelocity");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_Simulate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "Simulate");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_IsStopped = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "IsStopped");
		NetworkInterpolated_Shared.NativeFieldInfoPtr_WasSpellControlled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, "WasSpellControlled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkInterpolated_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastClientCommandTime;
	private static readonly IntPtr NativeFieldInfoPtr_NextSimulationSyncTime;
	private static readonly IntPtr NativeFieldInfoPtr_NextSendTime;
	private static readonly IntPtr NativeFieldInfoPtr_ServerRotation;
	private static readonly IntPtr NativeFieldInfoPtr_ServerPosition;
	private static readonly IntPtr NativeFieldInfoPtr_ServerVelocity;
	private static readonly IntPtr NativeFieldInfoPtr_Movement;
	private static readonly IntPtr NativeFieldInfoPtr_ServerMoveVelocity;
	private static readonly IntPtr NativeFieldInfoPtr_Simulate;
	private static readonly IntPtr NativeFieldInfoPtr_IsStopped;
	private static readonly IntPtr NativeFieldInfoPtr_WasSpellControlled;

	public double LastClientCommandTime;

	public double NextSimulationSyncTime;

	public double NextSendTime;

	public quaternion ServerRotation;

	public float2 ServerPosition;

	public float2 ServerVelocity;

	public float2 Movement;

	public float ServerMoveVelocity;

	public bool Simulate;

	public bool IsStopped;

	public bool WasSpellControlled;
}
```

## Server Systems

- [MountStatsSpawnSystem_Server](/systems/server/MountStatsSpawnSystem_Server)
- [NetworkInterpolationSystem_Server](/systems/server/NetworkInterpolationSystem_Server)

## Client Systems

- [NetworkInterpolationSystem_Client](/systems/client/NetworkInterpolationSystem_Client)
