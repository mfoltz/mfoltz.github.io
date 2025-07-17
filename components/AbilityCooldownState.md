---
nav_exclude: true
search_exclude: true
---

# AbilityCooldownState

```csharp
[StructLayout(2)]
public struct AbilityCooldownState
{
	static AbilityCooldownState()
	{
		Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityCooldownState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr);
		AbilityCooldownState.NativeFieldInfoPtr_CooldownEndTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr, "CooldownEndTime");
		AbilityCooldownState.NativeFieldInfoPtr_CurrentCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr, "CurrentCooldown");
		AbilityCooldownState.NativeMethodInfoPtr_GetCurrentCooldown_Public_Single_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr, 100664355);
		AbilityCooldownState.NativeMethodInfoPtr_SetCooldown_Public_Void_Single_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr, 100664356);
		AbilityCooldownState.NativeMethodInfoPtr_ModifyCooldown_Public_Void_Single_Double_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr, 100664357);
	}
	[CallerCount(0)]
	public unsafe float GetCurrentCooldown(double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownState.NativeMethodInfoPtr_GetCurrentCooldown_Public_Single_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe void SetCooldown(float cooldown, double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref cooldown;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownState.NativeMethodInfoPtr_SetCooldown_Public_Void_Single_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe void ModifyCooldown(float cooldown, double serverTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref cooldown;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref serverTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityCooldownState.NativeMethodInfoPtr_ModifyCooldown_Public_Void_Single_Double_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCooldownState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CooldownEndTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentCooldown;
	private static readonly IntPtr NativeMethodInfoPtr_GetCurrentCooldown_Public_Single_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetCooldown_Public_Void_Single_Double_0;
	private static readonly IntPtr NativeMethodInfoPtr_ModifyCooldown_Public_Void_Single_Double_0;
	[FieldOffset(0)]
	public double CooldownEndTime;
	[FieldOffset(8)]
	public float CurrentCooldown;
}
