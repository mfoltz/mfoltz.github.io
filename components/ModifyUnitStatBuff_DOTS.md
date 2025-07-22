---
nav_exclude: true
search_exclude: false
---

# ModifyUnitStatBuff_DOTS

```csharp
public struct ModifyUnitStatBuff_DOTS
{
	static ModifyUnitStatBuff_DOTS()
	{
		Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ModifyUnitStatBuff_DOTS");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr);
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_AttributeCapType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "AttributeCapType");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_StatType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "StatType");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_ModificationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "ModificationType");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "Value");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_SoftCapValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "SoftCapValue");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_Modifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "Modifier");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_IncreaseByStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "IncreaseByStacks");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_ValueByStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "ValueByStacks");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "Priority");
		ModifyUnitStatBuff_DOTS.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, "Id");
		ModifyUnitStatBuff_DOTS.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, 100665847);
	}

	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ModifyUnitStatBuff_DOTS.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyUnitStatBuff_DOTS>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AttributeCapType;
	private static readonly IntPtr NativeFieldInfoPtr_StatType;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationType;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_SoftCapValue;
	private static readonly IntPtr NativeFieldInfoPtr_Modifier;
	private static readonly IntPtr NativeFieldInfoPtr_IncreaseByStacks;
	private static readonly IntPtr NativeFieldInfoPtr_ValueByStacks;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_Id;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;

	public AttributeCapType AttributeCapType;

	public UnitStatType StatType;

	public ModificationType ModificationType;

	public float Value;

	public float SoftCapValue;

	public float Modifier;

	public bool IncreaseByStacks;

	public float ValueByStacks;

	public int Priority;

	public ModificationId Id;
}
```
