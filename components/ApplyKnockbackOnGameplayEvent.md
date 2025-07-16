# ApplyKnockbackOnGameplayEvent

```csharp
[StructLayout(2)]
public struct ApplyKnockbackOnGameplayEvent
{
	static ApplyKnockbackOnGameplayEvent()
	{
		Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ApplyKnockbackOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr);
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "Duration");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "Range");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_RotationAngleOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "RotationAngleOffset");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_KnockbackPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "KnockbackPower");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_DirectionType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "DirectionType");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_TargetType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "TargetType");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_ModelDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "ModelDirection");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_CustomKnockbackBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "CustomKnockbackBuff");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_UseMinMaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "UseMinMaxRange");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_MinDistanceToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "MinDistanceToTarget");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_MaxDistanceToTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "MaxDistanceToTarget");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_CloseRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "CloseRange");
		ApplyKnockbackOnGameplayEvent.NativeFieldInfoPtr_FarRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, "FarRange");
		ApplyKnockbackOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, 100668235);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 85024, XrefRangeEnd = 85035, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ApplyKnockbackOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ApplyKnockbackOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_RotationAngleOffset;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackPower;
	private static readonly IntPtr NativeFieldInfoPtr_DirectionType;
	private static readonly IntPtr NativeFieldInfoPtr_TargetType;
	private static readonly IntPtr NativeFieldInfoPtr_ModelDirection;
	private static readonly IntPtr NativeFieldInfoPtr_CustomKnockbackBuff;
	private static readonly IntPtr NativeFieldInfoPtr_UseMinMaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_MinDistanceToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistanceToTarget;
	private static readonly IntPtr NativeFieldInfoPtr_CloseRange;
	private static readonly IntPtr NativeFieldInfoPtr_FarRange;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float Duration;
	[FieldOffset(4)]
	public float Range;
	[FieldOffset(8)]
	public float RotationAngleOffset;
	[FieldOffset(12)]
	public KnockbackPower KnockbackPower;
	[FieldOffset(192)]
	public KnockbackDirectionType DirectionType;
	[FieldOffset(196)]
	public KnockbackTargetType TargetType;
	[FieldOffset(200)]
	public MovementCurveRotationMode ModelDirection;
	[FieldOffset(204)]
	public PrefabGUID CustomKnockbackBuff;
	[FieldOffset(208)]
	[MarshalAs(4)]
	public bool UseMinMaxRange;
	[FieldOffset(212)]
	public float MinDistanceToTarget;
	[FieldOffset(216)]
	public float MaxDistanceToTarget;
	[FieldOffset(220)]
	public float CloseRange;
	[FieldOffset(224)]
	public float FarRange;
}
