---
nav_exclude: true
search_exclude: true
---

# CustomCulling

```csharp
public struct CustomCulling
{
	static CustomCulling()
	{
		Il2CppClassPointerStore<CustomCulling>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "CustomCulling");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CustomCulling>.NativeClassPtr);
		CustomCulling.NativeFieldInfoPtr_Visible = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomCulling>.NativeClassPtr, "Visible");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CustomCulling>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Visible;

	public bool Visible;
}
```

## Client Systems

- [CustomCullingSystem](/systems/client/CustomCullingSystem)
