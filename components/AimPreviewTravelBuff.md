---
nav_exclude: true
search_exclude: true
---

# AimPreviewTravelBuff

```csharp
[StructLayout(2)]
public struct AimPreviewTravelBuff
{
	static AimPreviewTravelBuff()
	{
		Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewTravelBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr);
		AimPreviewTravelBuff.NativeFieldInfoPtr_ArcSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "ArcSequenceGUID");
		AimPreviewTravelBuff.NativeFieldInfoPtr_ArcSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "ArcSequenceState");
		AimPreviewTravelBuff.NativeFieldInfoPtr_CircleSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "CircleSequenceGUID");
		AimPreviewTravelBuff.NativeFieldInfoPtr_CircleSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "CircleSequenceState");
		AimPreviewTravelBuff.NativeFieldInfoPtr_PlayerPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "PlayerPosition");
		AimPreviewTravelBuff.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "TargetPosition");
		AimPreviewTravelBuff.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "Rotation");
		AimPreviewTravelBuff.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "Height");
		AimPreviewTravelBuff.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "Radius");
		AimPreviewTravelBuff.NativeFieldInfoPtr_ShowArc = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, "ShowArc");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewTravelBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ArcSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_ArcSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_ShowArc;
	[FieldOffset(0)]
	public SequenceGUID ArcSequenceGUID;
	[FieldOffset(4)]
	public SequenceState ArcSequenceState;
	[FieldOffset(12)]
	public SequenceGUID CircleSequenceGUID;
	[FieldOffset(16)]
	public SequenceState CircleSequenceState;
	[FieldOffset(24)]
	public float3 PlayerPosition;
	[FieldOffset(36)]
	public float3 TargetPosition;
	[FieldOffset(48)]
	public quaternion Rotation;
	[FieldOffset(64)]
	public float Height;
	[FieldOffset(68)]
	public float Radius;
	[FieldOffset(72)]
	[MarshalAs(4)]
	public bool ShowArc;
}
