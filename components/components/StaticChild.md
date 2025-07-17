---
nav_exclude: true
search_exclude: true
---

# StaticChild

```csharp
[StructLayout(2)]
public struct StaticChild
{
	static StaticChild()
	{
		Il2CppClassPointerStore<StaticChild>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Transforms.dll", "Unity.Transforms", "StaticChild");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticChild>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticChild>.NativeClassPtr, ref this));
	}
}
