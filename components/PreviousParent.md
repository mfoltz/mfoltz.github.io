---
nav_exclude: true
search_exclude: true
---

# PreviousParent

```csharp
public struct PreviousParent
{
	static PreviousParent()
	{
		Il2CppClassPointerStore<PreviousParent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Transforms.dll", "Unity.Transforms", "PreviousParent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PreviousParent>.NativeClassPtr);
		PreviousParent.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviousParent>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PreviousParent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public Entity Value;
}
```
