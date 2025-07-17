---
nav_exclude: true
search_exclude: true
---

# NetworkedSettings

```csharp
[StructLayout(2)]
public struct NetworkedSettings
{
	static NetworkedSettings()
	{
		Il2CppClassPointerStore<NetworkedSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "NetworkedSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkedSettings>.NativeClassPtr);
		NetworkedSettings.NativeFieldInfoPtr_BasePriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkedSettings>.NativeClassPtr, "BasePriority");
		NetworkedSettings.NativeFieldInfoPtr_SyncRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkedSettings>.NativeClassPtr, "SyncRate");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkedSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BasePriority;
	private static readonly IntPtr NativeFieldInfoPtr_SyncRate;
	[FieldOffset(0)]
	public float BasePriority;
	[FieldOffset(4)]
	public float SyncRate;
}
