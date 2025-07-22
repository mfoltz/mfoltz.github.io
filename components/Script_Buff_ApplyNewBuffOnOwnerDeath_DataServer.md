---
nav_exclude: true
search_exclude: true
---

# Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer

```csharp
public struct Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer
{
	static Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer>.NativeClassPtr);
		Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer>.NativeClassPtr, "Buff");
		Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer.NativeFieldInfoPtr_OnTargetDeathListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer>.NativeClassPtr, "OnTargetDeathListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_ApplyNewBuffOnOwnerDeath_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Buff;
	private static readonly IntPtr NativeFieldInfoPtr_OnTargetDeathListener;

	public PrefabGUID Buff;

	public ListenerId OnTargetDeathListener;
}
```
