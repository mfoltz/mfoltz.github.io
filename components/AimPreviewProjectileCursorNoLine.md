---
nav_exclude: true
search_exclude: false
---

# AimPreviewProjectileCursorNoLine

```csharp
public struct AimPreviewProjectileCursorNoLine
{
	static AimPreviewProjectileCursorNoLine()
	{
		Il2CppClassPointerStore<AimPreviewProjectileCursorNoLine>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewProjectileCursorNoLine");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewProjectileCursorNoLine>.NativeClassPtr);
		AimPreviewProjectileCursorNoLine.NativeFieldInfoPtr_CircleSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursorNoLine>.NativeClassPtr, "CircleSequenceGUID");
		AimPreviewProjectileCursorNoLine.NativeFieldInfoPtr_CircleSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursorNoLine>.NativeClassPtr, "CircleSequenceState");
		AimPreviewProjectileCursorNoLine.NativeFieldInfoPtr_CustomCircleRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursorNoLine>.NativeClassPtr, "CustomCircleRadius");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewProjectileCursorNoLine>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CustomCircleRadius;

	public SequenceGUID CircleSequenceGUID;

	public SequenceState CircleSequenceState;

	public float CustomCircleRadius;
}
```
