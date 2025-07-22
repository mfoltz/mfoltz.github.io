---
nav_exclude: true
search_exclude: false
---

# SpellModAbilityGroupCharges

```csharp
public struct SpellModAbilityGroupCharges
{
	static SpellModAbilityGroupCharges()
	{
		Il2CppClassPointerStore<SpellModAbilityGroupCharges>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpellModAbilityGroupCharges");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModAbilityGroupCharges>.NativeClassPtr);
		SpellModAbilityGroupCharges.NativeFieldInfoPtr_SpellMod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModAbilityGroupCharges>.NativeClassPtr, "SpellMod");
		SpellModAbilityGroupCharges.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModAbilityGroupCharges>.NativeClassPtr, "Count");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModAbilityGroupCharges>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellMod;
	private static readonly IntPtr NativeFieldInfoPtr_Count;

	public PrefabGUID SpellMod;

	public int Count;
}
```

## Server Systems

- [OnJewelEquippedSystemBase](/systems/server/OnJewelEquippedSystemBase)
- [OnJewelEquippedSystem_Server](/systems/server/OnJewelEquippedSystem_Server)

## Client Systems

- [OnJewelEquippedSystemBase](/systems/client/OnJewelEquippedSystemBase)
- [OnJewelEquippedSystem_Client](/systems/client/OnJewelEquippedSystem_Client)
