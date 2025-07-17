---
nav_exclude: true
search_exclude: true
---

# Projectile

```csharp
[StructLayout(2)]
public struct Projectile
{
	static Projectile()
	{
		Il2CppClassPointerStore<Projectile>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Projectile");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Projectile>.NativeClassPtr);
		Projectile.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "StartPosition");
		Projectile.NativeFieldInfoPtr_EndPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "EndPosition");
		Projectile.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "Range");
		Projectile.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "Speed");
		Projectile.NativeFieldInfoPtr_TravelToMouseCursorLengthOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "TravelToMouseCursorLengthOffset");
		Projectile.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "MinRange");
		Projectile.NativeFieldInfoPtr_TravelToMouseCursor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "TravelToMouseCursor");
		Projectile.NativeFieldInfoPtr_RecalculateLifetimeBasedOnTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "RecalculateLifetimeBasedOnTarget");
		Projectile.NativeFieldInfoPtr_OverrideLifeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "OverrideLifeTime");
		Projectile.NativeFieldInfoPtr_DelayLifeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Projectile>.NativeClassPtr, "DelayLifeTime");
		Projectile.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Projectile>.NativeClassPtr, 100664465);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1061274, XrefRangeEnd = 1061276, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Projectile.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Projectile>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_EndPosition;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_Speed;
	private static readonly IntPtr NativeFieldInfoPtr_TravelToMouseCursorLengthOffset;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_TravelToMouseCursor;
	private static readonly IntPtr NativeFieldInfoPtr_RecalculateLifetimeBasedOnTarget;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideLifeTime;
	private static readonly IntPtr NativeFieldInfoPtr_DelayLifeTime;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float3 StartPosition;
	[FieldOffset(12)]
	public float3 EndPosition;
	[FieldOffset(24)]
	public float Range;
	[FieldOffset(28)]
	public float Speed;
	[FieldOffset(32)]
	public float TravelToMouseCursorLengthOffset;
	[FieldOffset(36)]
	public float MinRange;
	[FieldOffset(40)]
	[MarshalAs(4)]
	public bool TravelToMouseCursor;
	[FieldOffset(41)]
	[MarshalAs(4)]
	public bool RecalculateLifetimeBasedOnTarget;
	[FieldOffset(44)]
	public float OverrideLifeTime;
	[FieldOffset(48)]
	public float DelayLifeTime;
}
