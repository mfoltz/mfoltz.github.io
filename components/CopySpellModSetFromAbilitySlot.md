---
nav_exclude: true
search_exclude: false
---

# CopySpellModSetFromAbilitySlot

```csharp
public struct CopySpellModSetFromAbilitySlot
{
	static CopySpellModSetFromAbilitySlot()
	{
		Il2CppClassPointerStore<CopySpellModSetFromAbilitySlot>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CopySpellModSetFromAbilitySlot");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CopySpellModSetFromAbilitySlot>.NativeClassPtr);
		CopySpellModSetFromAbilitySlot.NativeFieldInfoPtr_AbilitySlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CopySpellModSetFromAbilitySlot>.NativeClassPtr, "AbilitySlot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CopySpellModSetFromAbilitySlot>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlot;

	public int AbilitySlot;
}
```

## Server Systems

- [CopySpellmodFromAbilitySystem](/systems/server/CopySpellmodFromAbilitySystem)

## Client Systems

- [CopySpellmodFromAbilitySystem](/systems/client/CopySpellmodFromAbilitySystem)
