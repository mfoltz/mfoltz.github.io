---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public float AbsorbModifier;

	public float AbsorbCap;

	public float AbsorbValue;
}
```

## Server Systems

- [MultiplyAbsorbCapByUnitStatsSystem]({{% relref "systems/server/MultiplyAbsorbCapByUnitStatsSystem.md" %}})
