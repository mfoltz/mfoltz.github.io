# ChangeKnockbackResistanceBuffModification

```csharp
[StructLayout(2)]
public struct ChangeKnockbackResistanceBuffModification
{
	static ChangeKnockbackResistanceBuffModification()
	{
		Il2CppClassPointerStore<ChangeKnockbackResistanceBuffModification>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChangeKnockbackResistanceBuffModification");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeKnockbackResistanceBuffModification>.NativeClassPtr);
		ChangeKnockbackResistanceBuffModification.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeKnockbackResistanceBuffModification>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeKnockbackResistanceBuffModification>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	[FieldOffset(0)]
	public ModificationId ModificationId;
}
