---
nav_exclude: true
search_exclude: false
---

# AbilityChargesState

```csharp
public struct AbilityChargesState
{
	static AbilityChargesState()
	{
		Il2CppClassPointerStore<AbilityChargesState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityChargesState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityChargesState>.NativeClassPtr);
		AbilityChargesState.NativeFieldInfoPtr_ChargeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargesState>.NativeClassPtr, "ChargeTime");
		AbilityChargesState.NativeFieldInfoPtr_CurrentCharges = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargesState>.NativeClassPtr, "CurrentCharges");
		AbilityChargesState.NativeMethodInfoPtr_GetCurrentChargeTime_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityChargesState>.NativeClassPtr, 100664218);
	}

	public unsafe float GetCurrentChargeTime()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityChargesState.NativeMethodInfoPtr_GetCurrentChargeTime_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityChargesState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChargeTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentCharges;
	private static readonly IntPtr NativeMethodInfoPtr_GetCurrentChargeTime_Public_Single_0;

	public float ChargeTime;

	public int CurrentCharges;
}
```

## Server Systems

- [OnJewelEquippedSystemBase](/systems/server/OnJewelEquippedSystemBase)
- [OnJewelEquippedSystem_Server](/systems/server/OnJewelEquippedSystem_Server)

## Client Systems

- [OnJewelEquippedSystemBase](/systems/client/OnJewelEquippedSystemBase)
- [OnJewelEquippedSystem_Client](/systems/client/OnJewelEquippedSystem_Client)
