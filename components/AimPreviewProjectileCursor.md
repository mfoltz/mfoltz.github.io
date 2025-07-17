---
nav_exclude: true
search_exclude: true
---

# AimPreviewProjectileCursor

```csharp
[StructLayout(2)]
public struct AimPreviewProjectileCursor
{
	static AimPreviewProjectileCursor()
	{
		Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewProjectileCursor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr);
		AimPreviewProjectileCursor.NativeFieldInfoPtr_LineSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr, "LineSequenceGUID");
		AimPreviewProjectileCursor.NativeFieldInfoPtr_LineSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr, "LineSequenceState");
		AimPreviewProjectileCursor.NativeFieldInfoPtr_CircleSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr, "CircleSequenceGUID");
		AimPreviewProjectileCursor.NativeFieldInfoPtr_CircleSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr, "CircleSequenceState");
		AimPreviewProjectileCursor.NativeFieldInfoPtr_CustomCircleRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr, "CustomCircleRadius");
		AimPreviewProjectileCursor.NativeFieldInfoPtr_ShowCircle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr, "ShowCircle");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewProjectileCursor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CustomCircleRadius;
	private static readonly IntPtr NativeFieldInfoPtr_ShowCircle;
	[FieldOffset(0)]
	public SequenceGUID LineSequenceGUID;
	[FieldOffset(4)]
	public SequenceState LineSequenceState;
	[FieldOffset(12)]
	public SequenceGUID CircleSequenceGUID;
	[FieldOffset(16)]
	public SequenceState CircleSequenceState;
	[FieldOffset(24)]
	public float CustomCircleRadius;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool ShowCircle;
}
