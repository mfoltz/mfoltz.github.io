---
nav_exclude: true
search_exclude: false
---

# SpawnPrefabOnGameplayEvent

```csharp
public struct SpawnPrefabOnGameplayEvent
{
	static SpawnPrefabOnGameplayEvent()
	{
		Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpawnPrefabOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr);
		SpawnPrefabOnGameplayEvent.NativeFieldInfoPtr_SpawnPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr, "SpawnPrefab");
		SpawnPrefabOnGameplayEvent.NativeFieldInfoPtr_CustomAbilitySpellModsSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr, "CustomAbilitySpellModsSource");
		SpawnPrefabOnGameplayEvent.NativeFieldInfoPtr_SpellTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr, "SpellTarget");
		SpawnPrefabOnGameplayEvent.NativeFieldInfoPtr_Owner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr, "Owner");
		SpawnPrefabOnGameplayEvent.NativeFieldInfoPtr_Creator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr, "Creator");
		SpawnPrefabOnGameplayEvent.NativeMethodInfoPtr_ApplyPrefabGUID_Public_Virtual_Final_New_Void_SpellModPrefabGuid_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr, 100668357);
	}

	public unsafe void ApplyPrefabGUID(SpellModPrefabGuid spellMod, PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnPrefabOnGameplayEvent.NativeMethodInfoPtr_ApplyPrefabGUID_Public_Virtual_Final_New_Void_SpellModPrefabGuid_PrefabGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnPrefabOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_CustomAbilitySpellModsSource;
	private static readonly IntPtr NativeFieldInfoPtr_SpellTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Owner;
	private static readonly IntPtr NativeFieldInfoPtr_Creator;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyPrefabGUID_Public_Virtual_Final_New_Void_SpellModPrefabGuid_PrefabGUID_0;

	public PrefabGUID SpawnPrefab;

	public PrefabGUID CustomAbilitySpellModsSource;

	public SetSpellTarget SpellTarget;

	public SpawnPrefabOnGameplayEventOwner Owner;

	public SpawnPrefabOnGameplayEventCreator Creator;
}
```
