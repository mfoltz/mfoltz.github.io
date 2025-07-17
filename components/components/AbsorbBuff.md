---
nav_exclude: true
search_exclude: true
---

# AbsorbBuff

```csharp
[StructLayout(2)]
public struct AbsorbBuff
{
	static AbsorbBuff()
	{
		Il2CppClassPointerStore<AbsorbBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbsorbBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbsorbBuff>.NativeClassPtr);
		AbsorbBuff.NativeFieldInfoPtr_AbsorbModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbsorbBuff>.NativeClassPtr, "AbsorbModifier");
		AbsorbBuff.NativeFieldInfoPtr_AbsorbCap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbsorbBuff>.NativeClassPtr, "AbsorbCap");
		AbsorbBuff.NativeFieldInfoPtr_AbsorbValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbsorbBuff>.NativeClassPtr, "AbsorbValue");
		AbsorbBuff.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbsorbBuff>.NativeClassPtr, 100667236);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 74413, XrefRangeEnd = 74415, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbsorbBuff.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbsorbBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbsorbModifier;
	private static readonly IntPtr NativeFieldInfoPtr_AbsorbCap;
	private static readonly IntPtr NativeFieldInfoPtr_AbsorbValue;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;
	[FieldOffset(0)]
	public float AbsorbModifier;
	[FieldOffset(4)]
	public float AbsorbCap;
	[FieldOffset(8)]
	public float AbsorbValue;
}
