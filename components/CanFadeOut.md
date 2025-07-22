---
nav_exclude: true
search_exclude: false
---

# CanFadeOut

```csharp
public struct CanFadeOut
{
	static CanFadeOut()
	{
		Il2CppClassPointerStore<CanFadeOut>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "CanFadeOut");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CanFadeOut>.NativeClassPtr);
		CanFadeOut.NativeFieldInfoPtr_MinimumFadeValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFadeOut>.NativeClassPtr, "MinimumFadeValue");
		CanFadeOut.NativeFieldInfoPtr_FadeOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CanFadeOut>.NativeClassPtr, "FadeOut");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CanFadeOut>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinimumFadeValue;
	private static readonly IntPtr NativeFieldInfoPtr_FadeOut;

	public float MinimumFadeValue;

	public bool FadeOut;
}
```
