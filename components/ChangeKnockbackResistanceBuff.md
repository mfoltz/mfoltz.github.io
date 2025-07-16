# ChangeKnockbackResistanceBuff

```csharp
[StructLayout(2)]
public struct ChangeKnockbackResistanceBuff
{
	static ChangeKnockbackResistanceBuff()
	{
		Il2CppClassPointerStore<ChangeKnockbackResistanceBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChangeKnockbackResistanceBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChangeKnockbackResistanceBuff>.NativeClassPtr);
		ChangeKnockbackResistanceBuff.NativeFieldInfoPtr_KnockbackResistanceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChangeKnockbackResistanceBuff>.NativeClassPtr, "KnockbackResistanceIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChangeKnockbackResistanceBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackResistanceIndex;
	[FieldOffset(0)]
	public int KnockbackResistanceIndex;
}
