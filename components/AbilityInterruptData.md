# AbilityInterruptData

```csharp
[StructLayout(2)]
public struct AbilityInterruptData
{
	static AbilityInterruptData()
	{
		Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityInterruptData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr);
		AbilityInterruptData.NativeFieldInfoPtr_CooldownOnInterrupt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr, "CooldownOnInterrupt");
		AbilityInterruptData.NativeFieldInfoPtr_InterruptTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr, "InterruptTypes");
		AbilityInterruptData.NativeFieldInfoPtr_FullCooldownOnInterrupt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr, "FullCooldownOnInterrupt");
		AbilityInterruptData.NativeFieldInfoPtr_FullCooldownModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr, "FullCooldownModifier");
		AbilityInterruptData.NativeMethodInfoPtr__ctor_Public_Void_Single_InterruptTypes_Boolean_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr, 100663698);
	}
	[CallerCount(0)]
	public unsafe AbilityInterruptData(float cooldownOnInterrupt, InterruptTypes interruptTypes, bool fullCooldownOnInterrupt, float fullCooldownModifier)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref cooldownOnInterrupt;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref interruptTypes;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref fullCooldownOnInterrupt;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref fullCooldownModifier;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(AbilityInterruptData.NativeMethodInfoPtr__ctor_Public_Void_Single_InterruptTypes_Boolean_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityInterruptData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CooldownOnInterrupt;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptTypes;
	private static readonly IntPtr NativeFieldInfoPtr_FullCooldownOnInterrupt;
	private static readonly IntPtr NativeFieldInfoPtr_FullCooldownModifier;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Single_InterruptTypes_Boolean_Single_0;
	[FieldOffset(0)]
	public readonly float CooldownOnInterrupt;
	[FieldOffset(4)]
	public readonly InterruptTypes InterruptTypes;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public readonly bool FullCooldownOnInterrupt;
	[FieldOffset(12)]
	public readonly float FullCooldownModifier;
}
