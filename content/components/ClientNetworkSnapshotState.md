---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ClientNetworkSnapshotState
{
	static ClientNetworkSnapshotState()
	{
		Il2CppClassPointerStore<ClientNetworkSnapshotState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "ClientNetworkSnapshotState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClientNetworkSnapshotState>.NativeClassPtr);
		ClientNetworkSnapshotState.NativeFieldInfoPtr_LastFrameReceived = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClientNetworkSnapshotState>.NativeClassPtr, "LastFrameReceived");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClientNetworkSnapshotState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastFrameReceived;

	public int LastFrameReceived;
}
```

## Client Systems

- [SyncAbilityGroupSlotBufferSystem]({{% relref "systems/client/SyncAbilityGroupSlotBufferSystem.md" %}})
