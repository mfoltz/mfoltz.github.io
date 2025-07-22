---
nav_exclude: true
search_exclude: false
---

# Script_Buff_ModifyBuffResistances_DataServer

```csharp
public struct Script_Buff_ModifyBuffResistances_DataServer
{
	static Script_Buff_ModifyBuffResistances_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_ModifyBuffResistances_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_ModifyBuffResistances_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_ModifyBuffResistances_DataServer>.NativeClassPtr);
		Script_Buff_ModifyBuffResistances_DataServer.NativeFieldInfoPtr_AssetPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyBuffResistances_DataServer>.NativeClassPtr, "AssetPrefabGuid");
		Script_Buff_ModifyBuffResistances_DataServer.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyBuffResistances_DataServer>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_ModifyBuffResistances_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AssetPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ModId;

	public PrefabGUID AssetPrefabGuid;

	public ModificationId ModId;
}
```
