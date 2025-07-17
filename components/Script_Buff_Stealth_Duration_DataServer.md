---
nav_exclude: true
search_exclude: true
---

# Script_Buff_Stealth_Duration_DataServer

```csharp
public struct Script_Buff_Stealth_Duration_DataServer
{
	static Script_Buff_Stealth_Duration_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_Stealth_Duration_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_Stealth_Duration_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_Stealth_Duration_DataServer>.NativeClassPtr);
		Script_Buff_Stealth_Duration_DataServer.NativeFieldInfoPtr_StealthModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_Duration_DataServer>.NativeClassPtr, "StealthModificationId");
		Script_Buff_Stealth_Duration_DataServer.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_Duration_DataServer>.NativeClassPtr, "Duration");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_Stealth_Duration_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StealthModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;

	public ModificationId StealthModificationId;

	public float Duration;
}
```
