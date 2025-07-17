---
nav_exclude: true
search_exclude: true
---

# BakedEntity

```csharp
[StructLayout(2)]
public struct BakedEntity
{
	static BakedEntity()
	{
		Il2CppClassPointerStore<BakedEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Hybrid.dll", "Unity.Entities", "BakedEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedEntity>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedEntity>.NativeClassPtr, ref this));
	}
}
