---
nav_exclude: true
search_exclude: false
---

# Script_IncreaseDamageFromSource_Entry

```csharp
public struct Script_IncreaseDamageFromSource_Entry
{
	static Script_IncreaseDamageFromSource_Entry()
	{
		Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_IncreaseDamageFromSource_Entry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr);
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_SpellSourceId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "SpellSourceId");
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_DamageFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "DamageFactor");
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "DamageType");
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_BaseMultiply = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "BaseMultiply");
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_LimitToType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "LimitToType");
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_DamageListenerId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "DamageListenerId");
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_SpellSourceId2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "SpellSourceId2");
		Script_IncreaseDamageFromSource_Entry.NativeFieldInfoPtr_SpellSourceId3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, "SpellSourceId3");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_IncreaseDamageFromSource_Entry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellSourceId;
	private static readonly IntPtr NativeFieldInfoPtr_DamageFactor;
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;
	private static readonly IntPtr NativeFieldInfoPtr_BaseMultiply;
	private static readonly IntPtr NativeFieldInfoPtr_LimitToType;
	private static readonly IntPtr NativeFieldInfoPtr_DamageListenerId;
	private static readonly IntPtr NativeFieldInfoPtr_SpellSourceId2;
	private static readonly IntPtr NativeFieldInfoPtr_SpellSourceId3;

	public PrefabGUID SpellSourceId;

	public float DamageFactor;

	public MainDamageType DamageType;

	public bool BaseMultiply;

	public bool LimitToType;

	public ListenerId DamageListenerId;

	public PrefabGUID SpellSourceId2;

	public PrefabGUID SpellSourceId3;
}
```
