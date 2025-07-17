---
nav_exclude: true
search_exclude: true
---

# DisconnectedTimer

```csharp
public struct DisconnectedTimer
{
	static DisconnectedTimer()
	{
		Il2CppClassPointerStore<DisconnectedTimer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "DisconnectedTimer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisconnectedTimer>.NativeClassPtr);
		DisconnectedTimer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisconnectedTimer>.NativeClassPtr, "Value");
		DisconnectedTimer.NativeFieldInfoPtr_IsDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisconnectedTimer>.NativeClassPtr, "IsDisabled");
		DisconnectedTimer.NativeFieldInfoPtr_IsInSafeSpace = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisconnectedTimer>.NativeClassPtr, "IsInSafeSpace");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisconnectedTimer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_IsDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_IsInSafeSpace;

	public float Value;

	public bool IsDisabled;

	public bool IsInSafeSpace;
}
```

## Server Systems

- [ProjectM.Gameplay.Systems.KillAndDisableInactivePlayerAfterDuration](/systems/ProjectM.Gameplay.Systems.KillAndDisableInactivePlayerAfterDuration)
