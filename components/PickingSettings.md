---
nav_exclude: true
search_exclude: false
---

# PickingSettings

```csharp
public struct PickingSettings
{
	static PickingSettings()
	{
		Il2CppClassPointerStore<PickingSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Physics", "PickingSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PickingSettings>.NativeClassPtr);
		PickingSettings.NativeFieldInfoPtr_GamepadAimPick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PickingSettings>.NativeClassPtr, "GamepadAimPick");
		PickingSettings.NativeFieldInfoPtr_GamepadMovePick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PickingSettings>.NativeClassPtr, "GamepadMovePick");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PickingSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GamepadAimPick;
	private static readonly IntPtr NativeFieldInfoPtr_GamepadMovePick;

	public GamepadPickingParams GamepadAimPick;

	public GamepadPickingParams GamepadMovePick;
}
```
