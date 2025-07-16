# HybridDefaultEquipment

```csharp
[StructLayout(2)]
public struct HybridDefaultEquipment
{
	static HybridDefaultEquipment()
	{
		Il2CppClassPointerStore<HybridDefaultEquipment>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridDefaultEquipment");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridDefaultEquipment>.NativeClassPtr);
		HybridDefaultEquipment.NativeFieldInfoPtr_BootsEquipmentGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridDefaultEquipment>.NativeClassPtr, "BootsEquipmentGUID");
		HybridDefaultEquipment.NativeFieldInfoPtr_ChestEquipmentGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridDefaultEquipment>.NativeClassPtr, "ChestEquipmentGUID");
		HybridDefaultEquipment.NativeFieldInfoPtr_GlovesEquipmentGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridDefaultEquipment>.NativeClassPtr, "GlovesEquipmentGUID");
		HybridDefaultEquipment.NativeFieldInfoPtr_LegsEquipmentGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridDefaultEquipment>.NativeClassPtr, "LegsEquipmentGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridDefaultEquipment>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BootsEquipmentGUID;
	private static readonly IntPtr NativeFieldInfoPtr_ChestEquipmentGUID;
	private static readonly IntPtr NativeFieldInfoPtr_GlovesEquipmentGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LegsEquipmentGUID;
	[FieldOffset(0)]
	public PrefabGUID BootsEquipmentGUID;
	[FieldOffset(4)]
	public PrefabGUID ChestEquipmentGUID;
	[FieldOffset(8)]
	public PrefabGUID GlovesEquipmentGUID;
	[FieldOffset(12)]
	public PrefabGUID LegsEquipmentGUID;
}
