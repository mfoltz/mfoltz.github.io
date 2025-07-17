---
nav_exclude: true
search_exclude: true
---

# UnlockedSpellBookAbility

```csharp
[StructLayout(2)]
public struct UnlockedSpellBookAbility
{
	static UnlockedSpellBookAbility()
	{
		Il2CppClassPointerStore<UnlockedSpellBookAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnlockedSpellBookAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedSpellBookAbility>.NativeClassPtr);
		UnlockedSpellBookAbility.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedSpellBookAbility>.NativeClassPtr, "Ability");
		UnlockedSpellBookAbility.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedSpellBookAbility>.NativeClassPtr, "Tier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedSpellBookAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	[FieldOffset(0)]
	public PrefabGUID Ability;
	[FieldOffset(4)]
	public SpellSchoolProgressionTier Tier;
}
