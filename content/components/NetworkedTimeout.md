---
nav_exclude: true
search_exclude: true
---

# NetworkedTimeout

```csharp
public struct NetworkedTimeout
{
	static NetworkedTimeout()
	{
		Il2CppClassPointerStore<NetworkedTimeout>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "NetworkedTimeout");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkedTimeout>.NativeClassPtr);
		NetworkedTimeout.NativeFieldInfoPtr_LastTimeSynced = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkedTimeout>.NativeClassPtr, "LastTimeSynced");
		NetworkedTimeout.NativeFieldInfoPtr_TimeoutAfter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkedTimeout>.NativeClassPtr, "TimeoutAfter");
		NetworkedTimeout.NativeFieldInfoPtr_Enabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkedTimeout>.NativeClassPtr, "Enabled");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkedTimeout>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastTimeSynced;
	private static readonly IntPtr NativeFieldInfoPtr_TimeoutAfter;
	private static readonly IntPtr NativeFieldInfoPtr_Enabled;

	public double LastTimeSynced;

	public float TimeoutAfter;

	public bool Enabled;
}
```
