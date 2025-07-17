---
nav_exclude: true
search_exclude: true
---

# EmpowerBuff

```csharp
[StructLayout(2)]
public struct EmpowerBuff
{
	static EmpowerBuff()
	{
		Il2CppClassPointerStore<EmpowerBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EmpowerBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EmpowerBuff>.NativeClassPtr);
		EmpowerBuff.NativeFieldInfoPtr_EmpowerModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EmpowerBuff>.NativeClassPtr, "EmpowerModifier");
		EmpowerBuff.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EmpowerBuff>.NativeClassPtr, 100664147);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1056742, XrefRangeEnd = 1056743, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EmpowerBuff.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EmpowerBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EmpowerModifier;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float EmpowerModifier;
}
