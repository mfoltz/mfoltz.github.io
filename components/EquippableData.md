---
nav_exclude: true
search_exclude: false
---

# EquippableData

```csharp
public struct EquippableData
{
	static EquippableData()
	{
		Il2CppClassPointerStore<EquippableData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EquippableData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquippableData>.NativeClassPtr);
		EquippableData.NativeFieldInfoPtr_BuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquippableData>.NativeClassPtr, "BuffGuid");
		EquippableData.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquippableData>.NativeClassPtr, "EquipmentType");
		EquippableData.NativeFieldInfoPtr_WeaponType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquippableData>.NativeClassPtr, "WeaponType");
		EquippableData.NativeFieldInfoPtr_EquipmentSet = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquippableData>.NativeClassPtr, "EquipmentSet");
		EquippableData.NativeFieldInfoPtr_SCTBrokenText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquippableData>.NativeClassPtr, "SCTBrokenText");
		EquippableData.NativeFieldInfoPtr_DurabilitySettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquippableData>.NativeClassPtr, "DurabilitySettings");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquippableData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffGuid;
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponType;
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentSet;
	private static readonly IntPtr NativeFieldInfoPtr_SCTBrokenText;
	private static readonly IntPtr NativeFieldInfoPtr_DurabilitySettings;

	public PrefabGUID BuffGuid;

	public EquipmentType EquipmentType;

	public WeaponType WeaponType;

	public PrefabGUID EquipmentSet;

	public AssetGuid SCTBrokenText;

	public Item_DurabilitySettings DurabilitySettings;
}
```
