---
nav_exclude: true
search_exclude: true
---

# TravelBuffSpawn

```csharp
[StructLayout(2)]
public struct TravelBuffSpawn
{
	static TravelBuffSpawn()
	{
		Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TravelBuffSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr);
		TravelBuffSpawn.NativeFieldInfoPtr_TargetRangeOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "TargetRangeOffset");
		TravelBuffSpawn.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MinRange");
		TravelBuffSpawn.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MaxRange");
		TravelBuffSpawn.NativeFieldInfoPtr_RandomOffsetRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "RandomOffsetRadius");
		TravelBuffSpawn.NativeFieldInfoPtr_MinDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MinDuration");
		TravelBuffSpawn.NativeFieldInfoPtr_MaxDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MaxDuration");
		TravelBuffSpawn.NativeFieldInfoPtr_TravelTargetMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "TravelTargetMode");
		TravelBuffSpawn.NativeFieldInfoPtr_GetStartPositionFromBuffTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "GetStartPositionFromBuffTarget");
		TravelBuffSpawn.NativeFieldInfoPtr_ScaleDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "ScaleDuration");
		TravelBuffSpawn.NativeFieldInfoPtr_IgnoreAllCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "IgnoreAllCollision");
		TravelBuffSpawn.NativeFieldInfoPtr_AimYOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "AimYOffset");
		TravelBuffSpawn.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, 100664547);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1062164, XrefRangeEnd = 1062168, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffSpawn.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetRangeOffset;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_RandomOffsetRadius;
	private static readonly IntPtr NativeFieldInfoPtr_MinDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDuration;
	private static readonly IntPtr NativeFieldInfoPtr_TravelTargetMode;
	private static readonly IntPtr NativeFieldInfoPtr_GetStartPositionFromBuffTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ScaleDuration;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreAllCollision;
	private static readonly IntPtr NativeFieldInfoPtr_AimYOffset;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float TargetRangeOffset;
	[FieldOffset(4)]
	public float MinRange;
	[FieldOffset(8)]
	public float MaxRange;
	[FieldOffset(12)]
	public float RandomOffsetRadius;
	[FieldOffset(16)]
	public float MinDuration;
	[FieldOffset(20)]
	public float MaxDuration;
	[FieldOffset(24)]
	public TravelTargetMode TravelTargetMode;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool GetStartPositionFromBuffTarget;
	[FieldOffset(29)]
	[MarshalAs(4)]
	public bool ScaleDuration;
	[FieldOffset(30)]
	[MarshalAs(4)]
	public bool IgnoreAllCollision;
	[FieldOffset(32)]
	public float AimYOffset;
}
