---
nav_exclude: true
search_exclude: true
---

# LastAbilitySpellModItem

```csharp
public struct LastAbilitySpellModItem
{
	static LastAbilitySpellModItem()
	{
		Il2CppClassPointerStore<LastAbilitySpellModItem>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "LastAbilitySpellModItem");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LastAbilitySpellModItem>.NativeClassPtr);
		LastAbilitySpellModItem.NativeFieldInfoPtr_SpellModItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LastAbilitySpellModItem>.NativeClassPtr, "SpellModItem");
		LastAbilitySpellModItem.NativeFieldInfoPtr_SpellModSetSyncId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LastAbilitySpellModItem>.NativeClassPtr, "SpellModSetSyncId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LastAbilitySpellModItem>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellModItem;
	private static readonly IntPtr NativeFieldInfoPtr_SpellModSetSyncId;

	public Entity SpellModItem;

	public int SpellModSetSyncId;
}
```
