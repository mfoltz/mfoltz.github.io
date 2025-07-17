---
nav_exclude: true
search_exclude: true
---

# DeformedEntity

```csharp
public struct DeformedEntity
{
	static DeformedEntity()
	{
		Il2CppClassPointerStore<DeformedEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "DeformedEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeformedEntity>.NativeClassPtr);
		DeformedEntity.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeformedEntity>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeformedEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public Entity Value;
}
```
