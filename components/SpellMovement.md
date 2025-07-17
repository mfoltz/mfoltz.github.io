---
nav_exclude: true
search_exclude: true
---

# SpellMovement

```csharp
[StructLayout(2)]
public struct SpellMovement
{
	static SpellMovement()
	{
		Il2CppClassPointerStore<SpellMovement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellMovement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr);
		SpellMovement.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "StartPosition");
		SpellMovement.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "TargetPosition");
		SpellMovement.NativeFieldInfoPtr_CurveXLoops = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveXLoops");
		SpellMovement.NativeFieldInfoPtr_XScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "XScale");
		SpellMovement.NativeFieldInfoPtr_YScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "YScale");
		SpellMovement.NativeFieldInfoPtr_CurrentY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurrentY");
		SpellMovement.NativeFieldInfoPtr_CurveY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveY");
		SpellMovement.NativeFieldInfoPtr_CurveX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveX");
		SpellMovement.NativeFieldInfoPtr_CurveZ = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveZ");
		SpellMovement.NativeFieldInfoPtr_SetRotationEveryFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "SetRotationEveryFrame");
		SpellMovement.NativeFieldInfoPtr_Disabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "Disabled");
		SpellMovement.NativeFieldInfoPtr_DisabledPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "DisabledPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_CurveXLoops;
	private static readonly IntPtr NativeFieldInfoPtr_XScale;
	private static readonly IntPtr NativeFieldInfoPtr_YScale;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentY;
	private static readonly IntPtr NativeFieldInfoPtr_CurveY;
	private static readonly IntPtr NativeFieldInfoPtr_CurveX;
	private static readonly IntPtr NativeFieldInfoPtr_CurveZ;
	private static readonly IntPtr NativeFieldInfoPtr_SetRotationEveryFrame;
	private static readonly IntPtr NativeFieldInfoPtr_Disabled;
	private static readonly IntPtr NativeFieldInfoPtr_DisabledPosition;
	[FieldOffset(0)]
	public float3 StartPosition;
	[FieldOffset(12)]
	public float3 TargetPosition;
	[FieldOffset(24)]
	public float CurveXLoops;
	[FieldOffset(28)]
	public float XScale;
	[FieldOffset(32)]
	public float YScale;
	[FieldOffset(36)]
	public float CurrentY;
	[FieldOffset(40)]
	public CurveReference CurveY;
	[FieldOffset(48)]
	public CurveReference CurveX;
	[FieldOffset(56)]
	public CurveReference CurveZ;
	[FieldOffset(64)]
	[MarshalAs(4)]
	public bool SetRotationEveryFrame;
	[FieldOffset(65)]
	[MarshalAs(4)]
	public bool Disabled;
	[FieldOffset(68)]
	public float3 DisabledPosition;
}
