# EquipmentSetElements

```csharp
[StructLayout(2)]
public struct EquipmentSetElements
{
	static EquipmentSetElements()
	{
		Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EquipmentSetElements");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr);
		EquipmentSetElements.NativeFieldInfoPtr_RequiredItemsInSet = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr, "RequiredItemsInSet");
		EquipmentSetElements.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr, "Buff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentSetElements>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RequiredItemsInSet;
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	[FieldOffset(0)]
	public int RequiredItemsInSet;
	[FieldOffset(4)]
	public PrefabGUID Buff;
}
