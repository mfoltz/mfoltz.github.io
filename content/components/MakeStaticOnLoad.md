---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MakeStaticOnLoad
{
	static MakeStaticOnLoad()
	{
		Il2CppClassPointerStore<MakeStaticOnLoad>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "MakeStaticOnLoad");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MakeStaticOnLoad>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MakeStaticOnLoad>.NativeClassPtr, ref this));
	}
}
```
