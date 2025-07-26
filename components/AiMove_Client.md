---
nav_exclude: true
search_exclude: true
---

# AiMove_Client

```csharp
public struct AiMove_Client
{
	static AiMove_Client()
	{
		Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AiMove_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr);
		AiMove_Client.NativeFieldInfoPtr_SimulatedServerPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr, "SimulatedServerPosition");
		AiMove_Client.NativeFieldInfoPtr_PreviousSimulatedServerPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr, "PreviousSimulatedServerPosition");
		AiMove_Client.NativeFieldInfoPtr_SimulatedPathFinishTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr, "SimulatedPathFinishTime");
		AiMove_Client.NativeFieldInfoPtr_SpeedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr, "SpeedModId");
		AiMove_Client.NativeFieldInfoPtr_ServerStuck = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr, "ServerStuck");
		AiMove_Client.NativeFieldInfoPtr_HardSeekServerPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr, "HardSeekServerPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AiMove_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SimulatedServerPosition;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousSimulatedServerPosition;
	private static readonly IntPtr NativeFieldInfoPtr_SimulatedPathFinishTime;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedModId;
	private static readonly IntPtr NativeFieldInfoPtr_ServerStuck;
	private static readonly IntPtr NativeFieldInfoPtr_HardSeekServerPosition;

	public float2 SimulatedServerPosition;

	public float2 PreviousSimulatedServerPosition;

	public double SimulatedPathFinishTime;

	public ModificationId SpeedModId;

	public bool ServerStuck;

	public bool HardSeekServerPosition;
}
```

## Client Systems

- [AiMoveSystem_Client_Spawn](/systems/client/AiMoveSystem_Client_Spawn)
