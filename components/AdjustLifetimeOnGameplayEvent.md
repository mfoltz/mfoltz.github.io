---
nav_exclude: true
search_exclude: false
---

# AdjustLifetimeOnGameplayEvent

```csharp
public struct AdjustLifetimeOnGameplayEvent
{
	static AdjustLifetimeOnGameplayEvent()
	{
		Il2CppClassPointerStore<AdjustLifetimeOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AdjustLifetimeOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdjustLifetimeOnGameplayEvent>.NativeClassPtr);
		AdjustLifetimeOnGameplayEvent.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustLifetimeOnGameplayEvent>.NativeClassPtr, "Type");
		AdjustLifetimeOnGameplayEvent.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdjustLifetimeOnGameplayEvent>.NativeClassPtr, "Time");
		AdjustLifetimeOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AdjustLifetimeOnGameplayEvent>.NativeClassPtr, 100668218);
	}

	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AdjustLifetimeOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdjustLifetimeOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;

	public AdjustType Type;

	public float Time;
}
```
