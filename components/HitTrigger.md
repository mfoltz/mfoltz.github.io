---
nav_exclude: true
search_exclude: true
---

# HitTrigger

```csharp
[StructLayout(2)]
public struct HitTrigger
{
	static HitTrigger()
	{
		Il2CppClassPointerStore<HitTrigger>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HitTrigger");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr);
		HitTrigger.NativeFieldInfoPtr_HitTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "HitTime");
		HitTrigger.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "Target");
		HitTrigger.NativeFieldInfoPtr_OriginPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "OriginPosition");
		HitTrigger.NativeFieldInfoPtr_CollisionPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "CollisionPosition");
		HitTrigger.NativeFieldInfoPtr_CollisionRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "CollisionRotation");
		HitTrigger.NativeFieldInfoPtr_Handled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "Handled");
		HitTrigger.NativeFieldInfoPtr_Ignore = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "Ignore");
		HitTrigger.NativeFieldInfoPtr_HitGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "HitGroup");
		HitTrigger.NativeFieldInfoPtr_CastIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, "CastIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HitTrigger>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HitTime;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_OriginPosition;
	private static readonly IntPtr NativeFieldInfoPtr_CollisionPosition;
	private static readonly IntPtr NativeFieldInfoPtr_CollisionRotation;
	private static readonly IntPtr NativeFieldInfoPtr_Handled;
	private static readonly IntPtr NativeFieldInfoPtr_Ignore;
	private static readonly IntPtr NativeFieldInfoPtr_HitGroup;
	private static readonly IntPtr NativeFieldInfoPtr_CastIndex;
	[FieldOffset(0)]
	public double HitTime;
	[FieldOffset(8)]
	public Entity Target;
	[FieldOffset(16)]
	public float3 OriginPosition;
	[FieldOffset(28)]
	public float3 CollisionPosition;
	[FieldOffset(40)]
	public quaternion CollisionRotation;
	[FieldOffset(56)]
	[MarshalAs(4)]
	public bool Handled;
	[FieldOffset(57)]
	[MarshalAs(4)]
	public bool Ignore;
	[FieldOffset(60)]
	public HitGroup HitGroup;
	[FieldOffset(64)]
	public int CastIndex;
}
