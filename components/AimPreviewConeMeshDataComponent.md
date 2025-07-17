---
nav_exclude: true
search_exclude: true
---

# AimPreviewConeMeshDataComponent

```csharp
public struct AimPreviewConeMeshDataComponent
{
	static AimPreviewConeMeshDataComponent()
	{
		Il2CppClassPointerStore<AimPreviewConeMeshDataComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewConeMeshDataComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewConeMeshDataComponent>.NativeClassPtr);
		AimPreviewConeMeshDataComponent.NativeFieldInfoPtr_PrimaryDecor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewConeMeshDataComponent>.NativeClassPtr, "PrimaryDecor");
		AimPreviewConeMeshDataComponent.NativeFieldInfoPtr_SecondaryDecor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewConeMeshDataComponent>.NativeClassPtr, "SecondaryDecor");
		AimPreviewConeMeshDataComponent.NativeFieldInfoPtr_Resolution = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewConeMeshDataComponent>.NativeClassPtr, "Resolution");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewConeMeshDataComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryDecor;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryDecor;
	private static readonly IntPtr NativeFieldInfoPtr_Resolution;

	public CircleDecoration PrimaryDecor;

	public CircleDecoration SecondaryDecor;

	public int Resolution;
}
```
