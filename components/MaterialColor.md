---
nav_exclude: true
search_exclude: false
---

# MaterialColor

```csharp
public struct MaterialColor
{
	static MaterialColor()
	{
		Il2CppClassPointerStore<MaterialColor>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "MaterialColor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MaterialColor>.NativeClassPtr);
		MaterialColor.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MaterialColor>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MaterialColor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float4 Value;
}
```
