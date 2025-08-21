---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AlertModifiers
{
	static AlertModifiers()
	{
		Il2CppClassPointerStore<AlertModifiers>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AlertModifiers");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AlertModifiers>.NativeClassPtr);
		AlertModifiers.NativeFieldInfoPtr_ConeRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AlertModifiers>.NativeClassPtr, "ConeRadiusFactor");
		AlertModifiers.NativeFieldInfoPtr_CircleRadiusFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AlertModifiers>.NativeClassPtr, "CircleRadiusFactor");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AlertModifiers>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConeRadiusFactor;
	private static readonly IntPtr NativeFieldInfoPtr_CircleRadiusFactor;

	public ModifiableFloat ConeRadiusFactor;

	public ModifiableFloat CircleRadiusFactor;
}
```
