---
nav_exclude: true
search_exclude: true
---

# AimPreviewGeneral

```csharp
public struct AimPreviewGeneral
{
	static AimPreviewGeneral()
	{
		Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewGeneral");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr);
		AimPreviewGeneral.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "SequenceGuid");
		AimPreviewGeneral.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "SequenceState");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideRadius");
		AimPreviewGeneral.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "Radius");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideLength");
		AimPreviewGeneral.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "Length");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideConeAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideConeAngle");
		AimPreviewGeneral.NativeFieldInfoPtr_ConeAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "ConeAngle");
		AimPreviewGeneral.NativeFieldInfoPtr_OverrideQuadSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "OverrideQuadSize");
		AimPreviewGeneral.NativeFieldInfoPtr_QuadSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, "QuadSize");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewGeneral>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideRadius;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideLength;
	private static readonly IntPtr NativeFieldInfoPtr_Length;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideConeAngle;
	private static readonly IntPtr NativeFieldInfoPtr_ConeAngle;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideQuadSize;
	private static readonly IntPtr NativeFieldInfoPtr_QuadSize;

	public SequenceGUID SequenceGuid;

	public SequenceState SequenceState;

	public bool OverrideRadius;

	public float Radius;

	public bool OverrideLength;

	public float Length;

	public bool OverrideConeAngle;

	public float ConeAngle;

	public bool OverrideQuadSize;

	public float2 QuadSize;
}
```

## Client Systems

- [AimPreviewGeneralSystem]({{< relref "systems/client/AimPreviewGeneralSystem.md" >}})
