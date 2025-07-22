---
nav_exclude: true
search_exclude: false
---

# Script_Buff_Werewolf_AttackSpeed_DataServer

```csharp
public struct Script_Buff_Werewolf_AttackSpeed_DataServer
{
	static Script_Buff_Werewolf_AttackSpeed_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_Werewolf_AttackSpeed_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_Werewolf_AttackSpeed_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_Werewolf_AttackSpeed_DataServer>.NativeClassPtr);
		Script_Buff_Werewolf_AttackSpeed_DataServer.NativeFieldInfoPtr_AttackSpeedPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Werewolf_AttackSpeed_DataServer>.NativeClassPtr, "AttackSpeedPerStack");
		Script_Buff_Werewolf_AttackSpeed_DataServer.NativeFieldInfoPtr_AttackSpeedModification = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Werewolf_AttackSpeed_DataServer>.NativeClassPtr, "AttackSpeedModification");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_Werewolf_AttackSpeed_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AttackSpeedPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_AttackSpeedModification;

	public float AttackSpeedPerStack;

	public ModificationId AttackSpeedModification;
}
```
