# VBloodAbilityReplaceBuff

```csharp
[StructLayout(2)]
public struct VBloodAbilityReplaceBuff
{
	static VBloodAbilityReplaceBuff()
	{
		Il2CppClassPointerStore<VBloodAbilityReplaceBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "VBloodAbilityReplaceBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VBloodAbilityReplaceBuff>.NativeClassPtr);
		VBloodAbilityReplaceBuff.NativeFieldInfoPtr_AbilityType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityReplaceBuff>.NativeClassPtr, "AbilityType");
		VBloodAbilityReplaceBuff.NativeFieldInfoPtr_AbilityGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VBloodAbilityReplaceBuff>.NativeClassPtr, "AbilityGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VBloodAbilityReplaceBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityType;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGUID;
	[FieldOffset(0)]
	public AbilityTypeEnum AbilityType;
	[FieldOffset(4)]
	public PrefabGUID AbilityGUID;
}
