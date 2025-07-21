---
nav_exclude: true
search_exclude: false
---

# Buff_Reduce_SpellCooldown_DataShared

```csharp
public struct Buff_Reduce_SpellCooldown_DataShared
{
	static Buff_Reduce_SpellCooldown_DataShared()
	{
		Il2CppClassPointerStore<Buff_Reduce_SpellCooldown_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Buff_Reduce_SpellCooldown_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Buff_Reduce_SpellCooldown_DataShared>.NativeClassPtr);
		Buff_Reduce_SpellCooldown_DataShared.NativeFieldInfoPtr_CooldownReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_SpellCooldown_DataShared>.NativeClassPtr, "CooldownReduction");
		Buff_Reduce_SpellCooldown_DataShared.NativeFieldInfoPtr_CooldownReductionPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_SpellCooldown_DataShared>.NativeClassPtr, "CooldownReductionPerStack");
		Buff_Reduce_SpellCooldown_DataShared.NativeFieldInfoPtr_SpellCooldownModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Buff_Reduce_SpellCooldown_DataShared>.NativeClassPtr, "SpellCooldownModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Buff_Reduce_SpellCooldown_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CooldownReduction;
	private static readonly IntPtr NativeFieldInfoPtr_CooldownReductionPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_SpellCooldownModificationId;

	public float CooldownReduction;

	public float CooldownReductionPerStack;

	public ModificationId SpellCooldownModificationId;
}
```
