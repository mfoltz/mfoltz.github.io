---
nav_exclude: true
search_exclude: false
---

# Script_Buff_Spellblock_DataServer

```csharp
public struct Script_Buff_Spellblock_DataServer
{
	static Script_Buff_Spellblock_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_Spellblock_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_Spellblock_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_Spellblock_DataServer>.NativeClassPtr);
		Script_Buff_Spellblock_DataServer.NativeFieldInfoPtr_SpellblockBuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Spellblock_DataServer>.NativeClassPtr, "SpellblockBuffType");
		Script_Buff_Spellblock_DataServer.NativeFieldInfoPtr_TriggerBuffDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Spellblock_DataServer>.NativeClassPtr, "TriggerBuffDuration");
		Script_Buff_Spellblock_DataServer.NativeFieldInfoPtr_IgnoreSpellBlockFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Spellblock_DataServer>.NativeClassPtr, "IgnoreSpellBlockFlags");
		Script_Buff_Spellblock_DataServer.NativeFieldInfoPtr_TriggerSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Spellblock_DataServer>.NativeClassPtr, "TriggerSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_Spellblock_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellblockBuffType;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerBuffDuration;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreSpellBlockFlags;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerSequence;

	public PrefabGUID SpellblockBuffType;

	public float TriggerBuffDuration;

	public AbilityTypeFlag IgnoreSpellBlockFlags;

	public SequenceGUID TriggerSequence;
}
```
