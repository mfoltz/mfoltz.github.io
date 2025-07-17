---
nav_exclude: true
search_exclude: true
---

# Script_Buff_ModifyFaction_DataServer

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public PrefabGUID Faction;
	[FieldOffset(4)]
	public ModificationId ModId;
}
