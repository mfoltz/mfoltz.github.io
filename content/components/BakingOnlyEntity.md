---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BakingOnlyEntity
{
	static BakingOnlyEntity()
	{
		Il2CppClassPointerStore<BakingOnlyEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Hybrid.dll", "Unity.Entities", "BakingOnlyEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakingOnlyEntity>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakingOnlyEntity>.NativeClassPtr, ref this));
	}
}
```
