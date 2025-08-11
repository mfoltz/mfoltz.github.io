---
nav_exclude: true
search_exclude: true
---

# AbsorbStackModifier

```csharp
public struct AbsorbStackModifier
{
	static AbsorbStackModifier()
	{
		Il2CppClassPointerStore<AbsorbStackModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbsorbStackModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbsorbStackModifier>.NativeClassPtr);
		AbsorbStackModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbsorbStackModifier>.NativeClassPtr, "BaseValue");
		AbsorbStackModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbsorbStackModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbsorbStackModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public float BaseValue;

	public float Modifier;
}
```
