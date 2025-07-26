# MultiplyAbsorbCapBySpellPower

```csharp
[StructLayout(2)]
public struct MultiplyAbsorbCapBySpellPower
{
	static MultiplyAbsorbCapBySpellPower()
	{
		Il2CppClassPointerStore<MultiplyAbsorbCapBySpellPower>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MultiplyAbsorbCapBySpellPower");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MultiplyAbsorbCapBySpellPower>.NativeClassPtr);
		MultiplyAbsorbCapBySpellPower.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MultiplyAbsorbCapBySpellPower>.NativeClassPtr, "Modifier");
		MultiplyAbsorbCapBySpellPower.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MultiplyAbsorbCapBySpellPower>.NativeClassPtr, 100667237);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 74415, XrefRangeEnd = 74416, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MultiplyAbsorbCapBySpellPower.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MultiplyAbsorbCapBySpellPower>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float Modifier;
}
