---
nav_exclude: true
search_exclude: true
---

# Buff_EmpowerDamageDealtByType_DataShared

```csharp
public struct Buff_EmpowerDamageDealtByType_DataShared
{
	static Buff_EmpowerDamageDealtByType_DataShared()
	{
		Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_EmpowerDamageDealtByType_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr);
		Buff_EmpowerDamageDealtByType_DataShared.NativeFieldInfoPtr_DamageFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr, "DamageFactor");
		Buff_EmpowerDamageDealtByType_DataShared.NativeFieldInfoPtr_DamageFactorPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr, "DamageFactorPerStack");
		Buff_EmpowerDamageDealtByType_DataShared.NativeFieldInfoPtr_OnDamageDealtListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr, "OnDamageDealtListener");
		Buff_EmpowerDamageDealtByType_DataShared.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr, "DamageType");
		Buff_EmpowerDamageDealtByType_DataShared.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr, 100664241);
	}

	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Buff_EmpowerDamageDealtByType_DataShared.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_EmpowerDamageDealtByType_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DamageFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DamageFactorPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageDealtListener;
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;

	public float DamageFactor;

	public float DamageFactorPerStack;

	public ListenerId OnDamageDealtListener;

	public MainDamageType DamageType;
}
```
