---
nav_exclude: true
search_exclude: true
---

# AimPreviewBezierMeshDataComponent

```csharp
public struct AimPreviewBezierMeshDataComponent
{
	static AimPreviewBezierMeshDataComponent()
	{
		Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewBezierMeshDataComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr);
		AimPreviewBezierMeshDataComponent.NativeFieldInfoPtr_Width = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, "Width");
		AimPreviewBezierMeshDataComponent.NativeFieldInfoPtr_Resolution = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, "Resolution");
		AimPreviewBezierMeshDataComponent.NativeFieldInfoPtr_UVTileY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, "UVTileY");
		AimPreviewBezierMeshDataComponent.NativeFieldInfoPtr_HeadWidth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, "HeadWidth");
		AimPreviewBezierMeshDataComponent.NativeFieldInfoPtr_HeadLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, "HeadLength");
		AimPreviewBezierMeshDataComponent.NativeFieldInfoPtr_GenerateHead = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, "GenerateHead");
		AimPreviewBezierMeshDataComponent.NativeFieldInfoPtr_AimPreviewEventIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, "AimPreviewEventIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewBezierMeshDataComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Width;
	private static readonly IntPtr NativeFieldInfoPtr_Resolution;
	private static readonly IntPtr NativeFieldInfoPtr_UVTileY;
	private static readonly IntPtr NativeFieldInfoPtr_HeadWidth;
	private static readonly IntPtr NativeFieldInfoPtr_HeadLength;
	private static readonly IntPtr NativeFieldInfoPtr_GenerateHead;
	private static readonly IntPtr NativeFieldInfoPtr_AimPreviewEventIndex;

	public float Width;

	public int Resolution;

	public float UVTileY;

	public float HeadWidth;

	public float HeadLength;

	public bool GenerateHead;

	public int AimPreviewEventIndex;
}
```

## Client Systems

- [AimPreviewMeshGenSystem]({{< relref "systems/client/AimPreviewMeshGenSystem.md" >}})
