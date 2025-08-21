---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AimPreviewCircleComponent
{
	static AimPreviewCircleComponent()
	{
		Il2CppClassPointerStore<AimPreviewCircleComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewCircleComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewCircleComponent>.NativeClassPtr);
		AimPreviewCircleComponent.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewCircleComponent>.NativeClassPtr, "Radius");
		AimPreviewCircleComponent.NativeFieldInfoPtr_Width = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewCircleComponent>.NativeClassPtr, "Width");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewCircleComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_Width;

	public float Radius;

	public float Width;
}
```

## Client Systems

- [AimPreviewMeshGenSystem]({{% relref "systems/client/AimPreviewMeshGenSystem.md" %}})
