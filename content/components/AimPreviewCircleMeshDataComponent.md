---
nav_exclude: true
search_exclude: true
---

# AimPreviewCircleMeshDataComponent

```csharp
public struct AimPreviewCircleMeshDataComponent
{
	static AimPreviewCircleMeshDataComponent()
	{
		Il2CppClassPointerStore<AimPreviewCircleMeshDataComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewCircleMeshDataComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewCircleMeshDataComponent>.NativeClassPtr);
		AimPreviewCircleMeshDataComponent.NativeFieldInfoPtr_PrimaryDecor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewCircleMeshDataComponent>.NativeClassPtr, "PrimaryDecor");
		AimPreviewCircleMeshDataComponent.NativeFieldInfoPtr_SecondaryDecor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewCircleMeshDataComponent>.NativeClassPtr, "SecondaryDecor");
		AimPreviewCircleMeshDataComponent.NativeFieldInfoPtr_Resolution = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewCircleMeshDataComponent>.NativeClassPtr, "Resolution");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewCircleMeshDataComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryDecor;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryDecor;
	private static readonly IntPtr NativeFieldInfoPtr_Resolution;

	public CircleDecoration PrimaryDecor;

	public CircleDecoration SecondaryDecor;

	public int Resolution;
}
```

## Client Systems

- [AimPreviewMeshGenSystem]({{< relref "systems/client/AimPreviewMeshGenSystem.md" >}})
