---
nav_exclude: true
search_exclude: true
---

# Script_SpellSchoolPassive_Unholy_Feed_DataServer

```csharp
[StructLayout(2)]
public struct Script_SpellSchoolPassive_Unholy_Feed_DataServer
{
	static Script_SpellSchoolPassive_Unholy_Feed_DataServer()
	{
		Il2CppClassPointerStore<Script_SpellSchoolPassive_Unholy_Feed_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SpellSchoolPassive_Unholy_Feed_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SpellSchoolPassive_Unholy_Feed_DataServer>.NativeClassPtr);
		Script_SpellSchoolPassive_Unholy_Feed_DataServer.NativeFieldInfoPtr_PassivePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpellSchoolPassive_Unholy_Feed_DataServer>.NativeClassPtr, "PassivePrefab");
		Script_SpellSchoolPassive_Unholy_Feed_DataServer.NativeFieldInfoPtr_RandomResetChancePerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpellSchoolPassive_Unholy_Feed_DataServer>.NativeClassPtr, "RandomResetChancePerStack");
		Script_SpellSchoolPassive_Unholy_Feed_DataServer.NativeFieldInfoPtr_CooldownReduction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpellSchoolPassive_Unholy_Feed_DataServer>.NativeClassPtr, "CooldownReduction");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SpellSchoolPassive_Unholy_Feed_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PassivePrefab;
	private static readonly IntPtr NativeFieldInfoPtr_RandomResetChancePerStack;
	private static readonly IntPtr NativeFieldInfoPtr_CooldownReduction;
	[FieldOffset(0)]
	public PrefabGUID PassivePrefab;
	[FieldOffset(4)]
	public float RandomResetChancePerStack;
	[FieldOffset(8)]
	public float CooldownReduction;
}
