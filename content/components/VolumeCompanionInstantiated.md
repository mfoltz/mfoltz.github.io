---
nav_exclude: true
search_exclude: true
---

```csharp
public struct VolumeCompanionInstantiated
{
	static VolumeCompanionInstantiated()
	{
		Il2CppClassPointerStore<VolumeCompanionInstantiated>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VolumeCompanionInstantiated");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VolumeCompanionInstantiated>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VolumeCompanionInstantiated>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [VolumeCompanionSystem]({{% relref "systems/client/VolumeCompanionSystem.md" %}})
