---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AbilityChargeUpData
{
	static AbilityChargeUpData()
	{
		Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AbilityChargeUpData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr);
		AbilityChargeUpData.NativeFieldInfoPtr_MinChargeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr, "MinChargeTime");
		AbilityChargeUpData.NativeFieldInfoPtr_MaxChargeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr, "MaxChargeTime");
		AbilityChargeUpData.NativeFieldInfoPtr_AllowReleaseBeforeMinTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr, "AllowReleaseBeforeMinTime");
		AbilityChargeUpData.NativeFieldInfoPtr_CastOnMaxTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr, "CastOnMaxTime");
		AbilityChargeUpData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Boolean_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr, 100666735);
	}

	public unsafe AbilityChargeUpData(float minChargeTime, float maxChargeTime, bool allowReleaseBeforeMinTime, bool castOnMaxTime)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref minChargeTime;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxChargeTime;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref allowReleaseBeforeMinTime;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref castOnMaxTime;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityChargeUpData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Boolean_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityChargeUpData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinChargeTime;
	private static readonly IntPtr NativeFieldInfoPtr_MaxChargeTime;
	private static readonly IntPtr NativeFieldInfoPtr_AllowReleaseBeforeMinTime;
	private static readonly IntPtr NativeFieldInfoPtr_CastOnMaxTime;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Single_Single_Boolean_Boolean_0;

	public ModifiableFloat MinChargeTime;

	public ModifiableFloat MaxChargeTime;

	public readonly bool AllowReleaseBeforeMinTime;

	public readonly bool CastOnMaxTime;
}
```
