---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HybridModelPlayerTransformData
{
	static HybridModelPlayerTransformData()
	{
		Il2CppClassPointerStore<HybridModelPlayerTransformData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "HybridModelPlayerTransformData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelPlayerTransformData>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelPlayerTransformData>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [ChestAimTargetWeightAnimationSystem]({{% relref "systems/client/ChestAimTargetWeightAnimationSystem.md" %}})
- [GetAndSetHybridModelTransformSystem]({{% relref "systems/client/GetAndSetHybridModelTransformSystem.md" %}})
