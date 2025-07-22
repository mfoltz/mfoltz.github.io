---
nav_exclude: true
search_exclude: true
---

# EquipmentToggleData

```csharp
public struct EquipmentToggleData
{
	static EquipmentToggleData()
	{
		Il2CppClassPointerStore<EquipmentToggleData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EquipmentToggleData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EquipmentToggleData>.NativeClassPtr);
		EquipmentToggleData.NativeFieldInfoPtr_HideCharacterHairOnEquip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentToggleData>.NativeClassPtr, "HideCharacterHairOnEquip");
		EquipmentToggleData.NativeFieldInfoPtr_HideCharacterFacialFeaturesOnEquip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentToggleData>.NativeClassPtr, "HideCharacterFacialFeaturesOnEquip");
		EquipmentToggleData.NativeFieldInfoPtr_HideCharacterHeadOnEquip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentToggleData>.NativeClassPtr, "HideCharacterHeadOnEquip");
		EquipmentToggleData.NativeFieldInfoPtr_HideCharacterLegsEquipmentOnEquip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EquipmentToggleData>.NativeClassPtr, "HideCharacterLegsEquipmentOnEquip");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EquipmentToggleData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HideCharacterHairOnEquip;
	private static readonly IntPtr NativeFieldInfoPtr_HideCharacterFacialFeaturesOnEquip;
	private static readonly IntPtr NativeFieldInfoPtr_HideCharacterHeadOnEquip;
	private static readonly IntPtr NativeFieldInfoPtr_HideCharacterLegsEquipmentOnEquip;

	public bool HideCharacterHairOnEquip;

	public bool HideCharacterFacialFeaturesOnEquip;

	public bool HideCharacterHeadOnEquip;

	public bool HideCharacterLegsEquipmentOnEquip;
}
```
