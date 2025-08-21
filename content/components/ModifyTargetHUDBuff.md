---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ModifyTargetHUDBuff
{
	static ModifyTargetHUDBuff()
	{
		Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ModifyTargetHUDBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr);
		ModifyTargetHUDBuff.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "Priority");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "Height");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_CharacterHUDHeightModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "CharacterHUDHeightModId");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_HeightModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "HeightModId");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_PrefabType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "PrefabType");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_PrefabTypeModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "PrefabTypeModId");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_BloodPrefabType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "BloodPrefabType");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_BloodPrefabTypeModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "BloodPrefabTypeModId");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_LocalizedName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "LocalizedName");
		ModifyTargetHUDBuff.NativeFieldInfoPtr_PreviousLocalizedName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, "PreviousLocalizedName");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyTargetHUDBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	private static readonly IntPtr NativeFieldInfoPtr_CharacterHUDHeightModId;
	private static readonly IntPtr NativeFieldInfoPtr_HeightModId;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabType;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabTypeModId;
	private static readonly IntPtr NativeFieldInfoPtr_BloodPrefabType;
	private static readonly IntPtr NativeFieldInfoPtr_BloodPrefabTypeModId;
	private static readonly IntPtr NativeFieldInfoPtr_LocalizedName;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousLocalizedName;

	public int Priority;

	public float Height;

	public ModificationId CharacterHUDHeightModId;

	public ModificationId HeightModId;

	public CharacterHUDEntryType PrefabType;

	public ModificationId PrefabTypeModId;

	public CharacterHUDEntryType BloodPrefabType;

	public ModificationId BloodPrefabTypeModId;

	public AssetGuid LocalizedName;

	public AssetGuid PreviousLocalizedName;
}
```
