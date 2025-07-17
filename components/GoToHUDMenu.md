---
nav_exclude: true
search_exclude: true
---

# GoToHUDMenu

```csharp
public struct GoToHUDMenu
{
	static GoToHUDMenu()
	{
		Il2CppClassPointerStore<GoToHUDMenu>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.UI", "GoToHUDMenu");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GoToHUDMenu>.NativeClassPtr);
		GoToHUDMenu.NativeFieldInfoPtr_Delay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GoToHUDMenu>.NativeClassPtr, "Delay");
		GoToHUDMenu.NativeFieldInfoPtr_IsHandled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GoToHUDMenu>.NativeClassPtr, "IsHandled");
		GoToHUDMenu.NativeFieldInfoPtr_MenuType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GoToHUDMenu>.NativeClassPtr, "MenuType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GoToHUDMenu>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Delay;
	private static readonly IntPtr NativeFieldInfoPtr_IsHandled;
	private static readonly IntPtr NativeFieldInfoPtr_MenuType;

	public float Delay;

	public bool IsHandled;

	public HUDMenuType MenuType;
}
```
