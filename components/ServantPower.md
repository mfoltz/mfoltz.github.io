---
nav_exclude: true
search_exclude: true
---

# ServantPower

```csharp
[StructLayout(2)]
public struct ServantPower
{
	static ServantPower()
	{
		Il2CppClassPointerStore<ServantPower>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServantPower");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantPower>.NativeClassPtr);
		ServantPower.NativeFieldInfoPtr_GearLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, "GearLevel");
		ServantPower.NativeFieldInfoPtr_Expertise = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, "Expertise");
		ServantPower.NativeFieldInfoPtr_Power = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, "Power");
		ServantPower.NativeMethodInfoPtr_GetPower_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, 100665865);
		ServantPower.NativeMethodInfoPtr_GetPower_Public_Static_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, 100665866);
		ServantPower.NativeMethodInfoPtr_GetHuntProficiency_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, 100665867);
		ServantPower.NativeMethodInfoPtr_GetHuntProficiency_Public_Static_Single_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, 100665868);
		ServantPower.NativeMethodInfoPtr_GetLootFactor_Public_Single_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, 100665869);
		ServantPower.NativeMethodInfoPtr_GetHealthBonusFactor_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, 100665870);
		ServantPower.NativeMethodInfoPtr_GetDamageBonusFactor_Public_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, 100665871);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1077169, XrefRangeEnd = 1077170, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float GetPower()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPower.NativeMethodInfoPtr_GetPower_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1077170, XrefRangeEnd = 1077171, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static float GetPower(float gearLevel)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref gearLevel;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPower.NativeMethodInfoPtr_GetPower_Public_Static_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1077171, XrefRangeEnd = 1077173, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float GetHuntProficiency()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPower.NativeMethodInfoPtr_GetHuntProficiency_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1077173, XrefRangeEnd = 1077175, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static float GetHuntProficiency(float gearLevel, float expertise)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref gearLevel;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref expertise;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPower.NativeMethodInfoPtr_GetHuntProficiency_Public_Static_Single_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float GetLootFactor(bool rawValue = false)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rawValue;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPower.NativeMethodInfoPtr_GetLootFactor_Public_Single_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float GetHealthBonusFactor()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPower.NativeMethodInfoPtr_GetHealthBonusFactor_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float GetDamageBonusFactor()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ServantPower.NativeMethodInfoPtr_GetDamageBonusFactor_Public_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantPower>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GearLevel;
	private static readonly IntPtr NativeFieldInfoPtr_Expertise;
	private static readonly IntPtr NativeFieldInfoPtr_Power;
	private static readonly IntPtr NativeMethodInfoPtr_GetPower_Public_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetPower_Public_Static_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHuntProficiency_Public_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHuntProficiency_Public_Static_Single_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetLootFactor_Public_Single_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHealthBonusFactor_Public_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetDamageBonusFactor_Public_Single_0;
	[FieldOffset(0)]
	public float GearLevel;
	[FieldOffset(4)]
	public float Expertise;
	[FieldOffset(8)]
	public float Power;
}
