---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_SilverDebuff_DataServer
{
	static Script_SilverDebuff_DataServer()
	{
		Il2CppClassPointerStore<Script_SilverDebuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Gameplay.Scripting", "Script_SilverDebuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SilverDebuff_DataServer>.NativeClassPtr);
		Script_SilverDebuff_DataServer.NativeFieldInfoPtr_DamageParameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SilverDebuff_DataServer>.NativeClassPtr, "DamageParameters");
		Script_SilverDebuff_DataServer.NativeFieldInfoPtr_LethalTicksBeforeDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SilverDebuff_DataServer>.NativeClassPtr, "LethalTicksBeforeDeath");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SilverDebuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DamageParameters;
	private static readonly IntPtr NativeFieldInfoPtr_LethalTicksBeforeDeath;

	public DealDamageParameters DamageParameters;

	public int LethalTicksBeforeDeath;
}
```
