---
nav_exclude: true
search_exclude: true
---

# HideOnMenuBuffer

```csharp
public struct HideOnMenuBuffer
{
	static HideOnMenuBuffer()
	{
		Il2CppClassPointerStore<HideOnMenuBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM", "HideOnMenuBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HideOnMenuBuffer>.NativeClassPtr);
		HideOnMenuBuffer.NativeFieldInfoPtr_Menu = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideOnMenuBuffer>.NativeClassPtr, "Menu");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HideOnMenuBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Menu;

	public HUDMenuType Menu;
}
```
