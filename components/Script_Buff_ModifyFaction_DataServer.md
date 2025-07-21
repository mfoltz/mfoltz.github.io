---
nav_exclude: true
search_exclude: false
---

# Script_Buff_ModifyFaction_DataServer

```csharp
public struct Script_Buff_ModifyFaction_DataServer
{
	static Script_Buff_ModifyFaction_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_ModifyFaction_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_ModifyFaction_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_ModifyFaction_DataServer>.NativeClassPtr);
		Script_Buff_ModifyFaction_DataServer.NativeFieldInfoPtr_Faction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyFaction_DataServer>.NativeClassPtr, "Faction");
		Script_Buff_ModifyFaction_DataServer.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyFaction_DataServer>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_ModifyFaction_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Faction;
	private static readonly IntPtr NativeFieldInfoPtr_ModId;

	public PrefabGUID Faction;

	public ModificationId ModId;
}
```
