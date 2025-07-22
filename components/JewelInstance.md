---
nav_exclude: true
search_exclude: true
---

# JewelInstance

```csharp
public struct JewelInstance
{
	static JewelInstance()
	{
		Il2CppClassPointerStore<JewelInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "JewelInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<JewelInstance>.NativeClassPtr);
		JewelInstance.NativeFieldInfoPtr_SpellSchool = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelInstance>.NativeClassPtr, "SpellSchool");
		JewelInstance.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelInstance>.NativeClassPtr, "Ability");
		JewelInstance.NativeFieldInfoPtr_TierIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelInstance>.NativeClassPtr, "TierIndex");
		JewelInstance.NativeFieldInfoPtr_OverrideAbilityType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelInstance>.NativeClassPtr, "OverrideAbilityType");
		JewelInstance.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<JewelInstance>.NativeClassPtr, "Initialized");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<JewelInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellSchool;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_TierIndex;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideAbilityType;
	private static readonly IntPtr NativeFieldInfoPtr_Initialized;

	public PrefabGUID SpellSchool;

	public PrefabGUID Ability;

	public byte TierIndex;

	public PrefabGUID OverrideAbilityType;

	public bool Initialized;
}
```
