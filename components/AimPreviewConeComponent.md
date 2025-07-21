---
nav_exclude: true
search_exclude: false
---

# AimPreviewConeComponent

```csharp
public struct AimPreviewConeComponent
{
	static AimPreviewConeComponent()
	{
		Il2CppClassPointerStore<AimPreviewConeComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewConeComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewConeComponent>.NativeClassPtr);
		AimPreviewConeComponent.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewConeComponent>.NativeClassPtr, "Radius");
		AimPreviewConeComponent.NativeFieldInfoPtr_Angle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewConeComponent>.NativeClassPtr, "Angle");
		AimPreviewConeComponent.NativeFieldInfoPtr_Width = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewConeComponent>.NativeClassPtr, "Width");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewConeComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_Angle;
	private static readonly IntPtr NativeFieldInfoPtr_Width;

	public float Radius;

	public float Angle;

	public float Width;
}
```

## Client Systems

- [AimPreviewMeshGenSystem](/systems/client/AimPreviewMeshGenSystem)
