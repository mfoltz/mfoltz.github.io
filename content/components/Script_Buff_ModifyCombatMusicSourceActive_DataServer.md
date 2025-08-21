---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Buff_ModifyCombatMusicSourceActive_DataServer
{
	static Script_Buff_ModifyCombatMusicSourceActive_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_ModifyCombatMusicSourceActive_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_ModifyCombatMusicSourceActive_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_ModifyCombatMusicSourceActive_DataServer>.NativeClassPtr);
		Script_Buff_ModifyCombatMusicSourceActive_DataServer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyCombatMusicSourceActive_DataServer>.NativeClassPtr, "Value");
		Script_Buff_ModifyCombatMusicSourceActive_DataServer.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyCombatMusicSourceActive_DataServer>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_ModifyCombatMusicSourceActive_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_ModId;

	public bool Value;

	public ModificationId ModId;
}
```
