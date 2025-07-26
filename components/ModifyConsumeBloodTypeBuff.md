# ModifyConsumeBloodTypeBuff

```csharp
[StructLayout(2)]
public struct ModifyConsumeBloodTypeBuff
{
	static ModifyConsumeBloodTypeBuff()
	{
		Il2CppClassPointerStore<ModifyConsumeBloodTypeBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyConsumeBloodTypeBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyConsumeBloodTypeBuff>.NativeClassPtr);
		ModifyConsumeBloodTypeBuff.NativeFieldInfoPtr_BloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyConsumeBloodTypeBuff>.NativeClassPtr, "BloodType");
		ModifyConsumeBloodTypeBuff.NativeFieldInfoPtr_BloodTypeModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyConsumeBloodTypeBuff>.NativeClassPtr, "BloodTypeModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyConsumeBloodTypeBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodType;
	private static readonly IntPtr NativeFieldInfoPtr_BloodTypeModificationId;
	[FieldOffset(0)]
	public PrefabGUID BloodType;
	[FieldOffset(4)]
	public ModificationId BloodTypeModificationId;
}
