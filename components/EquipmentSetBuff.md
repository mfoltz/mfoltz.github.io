# EquipmentSetBuff

```csharp
[StructLayout(2)]
public struct EquipmentSetBuff
{
	static EquipmentSetBuff()
	{
		Il2CppClassPointerStore<EquipmentSetBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "EquipmentSetBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentSetBuff>.NativeClassPtr);
		EquipmentSetBuff.NativeFieldInfoPtr_BuffGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSetBuff>.NativeClassPtr, "BuffGUID");
		EquipmentSetBuff.NativeFieldInfoPtr_BuffInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentSetBuff>.NativeClassPtr, "BuffInstance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentSetBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffGUID;
	private static readonly IntPtr NativeFieldInfoPtr_BuffInstance;
	[FieldOffset(0)]
	public PrefabGUID BuffGUID;
	[FieldOffset(4)]
	public Entity BuffInstance;
}
