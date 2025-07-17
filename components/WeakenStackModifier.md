---
nav_exclude: true
search_exclude: true
---

# WeakenStackModifier

```csharp
public struct WeakenStackModifier
{
	static WeakenStackModifier()
	{
		Il2CppClassPointerStore<WeakenStackModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WeakenStackModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WeakenStackModifier>.NativeClassPtr);
		WeakenStackModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakenStackModifier>.NativeClassPtr, "BaseValue");
		WeakenStackModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakenStackModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WeakenStackModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public float BaseValue;

	public float Modifier;
}
```
