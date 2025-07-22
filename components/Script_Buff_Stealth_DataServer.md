---
nav_exclude: true
search_exclude: false
---

# Script_Buff_Stealth_DataServer

```csharp
public struct Script_Buff_Stealth_DataServer
{
	static Script_Buff_Stealth_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_Stealth_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr);
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_StealthModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "StealthModificationId");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_InvisibleModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "InvisibleModificationId");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_AlwaysShowVFXModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "AlwaysShowVFXModificationId");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_ModelInvisible = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "ModelInvisible");
		Script_Buff_Stealth_DataServer.NativeFieldInfoPtr_AlwaysShowVFX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, "AlwaysShowVFX");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_Stealth_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StealthModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_InvisibleModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysShowVFXModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_ModelInvisible;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysShowVFX;

	public ModificationId StealthModificationId;

	public ModificationId InvisibleModificationId;

	public ModificationId AlwaysShowVFXModificationId;

	public bool ModelInvisible;

	public bool AlwaysShowVFX;
}
```
