---
nav_exclude: true
search_exclude: false
---

# AimPreviewTravelBuff

```csharp
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

	public SequenceGUID ArcSequenceGUID;

	public SequenceState ArcSequenceState;

	public SequenceGUID CircleSequenceGUID;

	public SequenceState CircleSequenceState;

	public float3 PlayerPosition;

	public float3 TargetPosition;

	public quaternion Rotation;

	public float Height;

	public float Radius;

	public bool ShowArc;
}
```

## Client Systems

- [AimPreviewTravelBuffSystem](/systems/client/AimPreviewTravelBuffSystem)
