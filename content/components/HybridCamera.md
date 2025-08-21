---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HybridCamera
{
	static HybridCamera()
	{
		Il2CppClassPointerStore<HybridCamera>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HybridCamera");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridCamera>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridCamera>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [HybridCameraSystem]({{% relref "systems/client/HybridCameraSystem.md" %}})
