---
nav_exclude: true
search_exclude: true
---

# AbilityCastAimPreview

```csharp
[StructLayout(2)]
public struct AbilityCastAimPreview
{
	static AbilityCastAimPreview()
	{
		Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityCastAimPreview");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr);
		AbilityCastAimPreview.NativeFieldInfoPtr_AimPreviewPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "AimPreviewPrefab");
		AbilityCastAimPreview.NativeFieldInfoPtr_SpecificAimPreviewTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "SpecificAimPreviewTarget");
		AbilityCastAimPreview.NativeFieldInfoPtr_ShowForNonLocal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "ShowForNonLocal");
		AbilityCastAimPreview.NativeFieldInfoPtr_HideOnKeyboardMouse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "HideOnKeyboardMouse");
		AbilityCastAimPreview.NativeFieldInfoPtr_KillOnCast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "KillOnCast");
		AbilityCastAimPreview.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "Radius");
		AbilityCastAimPreview.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "Length");
		AbilityCastAimPreview.NativeFieldInfoPtr_ConeAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "ConeAngle");
		AbilityCastAimPreview.NativeFieldInfoPtr_QuadSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, "QuadSize");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCastAimPreview>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AimPreviewPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_SpecificAimPreviewTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ShowForNonLocal;
	private static readonly IntPtr NativeFieldInfoPtr_HideOnKeyboardMouse;
	private static readonly IntPtr NativeFieldInfoPtr_KillOnCast;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_Length;
	private static readonly IntPtr NativeFieldInfoPtr_ConeAngle;
	private static readonly IntPtr NativeFieldInfoPtr_QuadSize;
	[FieldOffset(0)]
	public PrefabGUID AimPreviewPrefab;
	[FieldOffset(4)]
	public PrefabGUID SpecificAimPreviewTarget;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool ShowForNonLocal;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool HideOnKeyboardMouse;
	[FieldOffset(10)]
	[MarshalAs(4)]
	public bool KillOnCast;
	[FieldOffset(12)]
	public float Radius;
	[FieldOffset(16)]
	public float Length;
	[FieldOffset(20)]
	public float ConeAngle;
	[FieldOffset(24)]
	public float2 QuadSize;
}
