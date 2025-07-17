---
nav_exclude: true
search_exclude: true
---

# ModifyMovementSpeedBuff

```csharp
[StructLayout(2)]
public struct ModifyMovementSpeedBuff
{
	static ModifyMovementSpeedBuff()
	{
		Il2CppClassPointerStore<ModifyMovementSpeedBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyMovementSpeedBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyMovementSpeedBuff>.NativeClassPtr);
		ModifyMovementSpeedBuff.NativeFieldInfoPtr_MoveSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementSpeedBuff>.NativeClassPtr, "MoveSpeed");
		ModifyMovementSpeedBuff.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementSpeedBuff>.NativeClassPtr, "Curve");
		ModifyMovementSpeedBuff.NativeFieldInfoPtr_MultiplyAdd = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementSpeedBuff>.NativeClassPtr, "MultiplyAdd");
		ModifyMovementSpeedBuff.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyMovementSpeedBuff>.NativeClassPtr, 100667376);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 75964, XrefRangeEnd = 75970, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyMovementSpeedBuff.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyMovementSpeedBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MoveSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_MultiplyAdd;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float MoveSpeed;
	[FieldOffset(4)]
	public CurveReference Curve;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool MultiplyAdd;
}
