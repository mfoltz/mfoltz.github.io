---
nav_exclude: true
search_exclude: true
---

# SpellSchoolAbility

```csharp
public struct SpellSchoolAbility
{
	static SpellSchoolAbility()
	{
		Il2CppClassPointerStore<SpellSchoolAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellSchoolAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellSchoolAbility>.NativeClassPtr);
		SpellSchoolAbility.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolAbility>.NativeClassPtr, "AbilityGroup");
		SpellSchoolAbility.NativeFieldInfoPtr_Tier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolAbility>.NativeClassPtr, "Tier");
		SpellSchoolAbility.NativeFieldInfoPtr_MinDropLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellSchoolAbility>.NativeClassPtr, "MinDropLevel");
		SpellSchoolAbility.NativeMethodInfoPtr_TryGetSchoolAbility_Public_Static_Boolean_byref_NativeArray_1_SpellSchoolAbility_PrefabIdentifier_byref_SpellSchoolAbility_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpellSchoolAbility>.NativeClassPtr, 100664847);
	}

	public unsafe static bool TryGetSchoolAbility([In] ref NativeArray<SpellSchoolAbility> spellSchoolAbilities, PrefabIdentifier abilityGroup, out SpellSchoolAbility spellSchoolAbility)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &spellSchoolAbilities;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref abilityGroup;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &spellSchoolAbility;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpellSchoolAbility.NativeMethodInfoPtr_TryGetSchoolAbility_Public_Static_Boolean_byref_NativeArray_1_SpellSchoolAbility_PrefabIdentifier_byref_SpellSchoolAbility_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellSchoolAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Tier;
	private static readonly IntPtr NativeFieldInfoPtr_MinDropLevel;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSchoolAbility_Public_Static_Boolean_byref_NativeArray_1_SpellSchoolAbility_PrefabIdentifier_byref_SpellSchoolAbility_0;

	public PrefabGUID AbilityGroup;

	public SpellSchoolProgressionTier Tier;

	public int MinDropLevel;
}
```
