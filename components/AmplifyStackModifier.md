---
nav_exclude: true
search_exclude: false
---

# AmplifyStackModifier

```csharp
public struct AmplifyStackModifier
{
	static AmplifyStackModifier()
	{
		Il2CppClassPointerStore<AmplifyStackModifier>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AmplifyStackModifier");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AmplifyStackModifier>.NativeClassPtr);
		AmplifyStackModifier.NativeFieldInfoPtr_BaseValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AmplifyStackModifier>.NativeClassPtr, "BaseValue");
		AmplifyStackModifier.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AmplifyStackModifier>.NativeClassPtr, "Modifier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AmplifyStackModifier>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;

	public float BaseValue;

	public float Modifier;
}
```
