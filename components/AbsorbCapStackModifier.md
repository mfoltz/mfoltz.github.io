---
nav_exclude: true
search_exclude: false
---

# AbsorbCapStackModifier

```csharp
public struct AbsorbCapStackModifier
{
	static AbsorbCapStackModifier()
	{
		Il2CppClassPointerStore<AbsorbCapStackModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbsorbCapStackModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbsorbCapStackModifier>.NativeClassPtr);
		AbsorbCapStackModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbsorbCapStackModifier>.NativeClassPtr, "BaseValue");
		AbsorbCapStackModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbsorbCapStackModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbsorbCapStackModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public float BaseValue;

	public float Modifier;
}
```
