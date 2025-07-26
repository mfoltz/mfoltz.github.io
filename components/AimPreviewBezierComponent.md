---
nav_exclude: true
search_exclude: true
---

# AimPreviewBezierComponent

```csharp
public struct AimPreviewBezierComponent
{
	static AimPreviewBezierComponent()
	{
		Il2CppClassPointerStore<AimPreviewBezierComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.AimPreviewSplines.Component", "AimPreviewBezierComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewBezierComponent>.NativeClassPtr);
		AimPreviewBezierComponent.NativeFieldInfoPtr_Segment = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierComponent>.NativeClassPtr, "Segment");
		AimPreviewBezierComponent.NativeFieldInfoPtr_OffsetB = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierComponent>.NativeClassPtr, "OffsetB");
		AimPreviewBezierComponent.NativeFieldInfoPtr_OffsetC = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierComponent>.NativeClassPtr, "OffsetC");
		AimPreviewBezierComponent.NativeFieldInfoPtr_StickToGround = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewBezierComponent>.NativeClassPtr, "StickToGround");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewBezierComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Segment;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetB;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetC;
	private static readonly IntPtr NativeFieldInfoPtr_StickToGround;

	public PointSegment Segment;

	public float2 OffsetB;

	public float2 OffsetC;

	public bool StickToGround;
}
```

## Client Systems

- [AimPreviewMeshGenSystem](/systems/client/AimPreviewMeshGenSystem)
