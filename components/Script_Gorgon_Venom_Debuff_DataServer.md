---
nav_exclude: true
search_exclude: false
---

# Script_Gorgon_Venom_Debuff_DataServer

```csharp
public struct Script_Gorgon_Venom_Debuff_DataServer
{
	static Script_Gorgon_Venom_Debuff_DataServer()
	{
		Il2CppClassPointerStore<Script_Gorgon_Venom_Debuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Gorgon_Venom_Debuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Gorgon_Venom_Debuff_DataServer>.NativeClassPtr);
		Script_Gorgon_Venom_Debuff_DataServer.NativeFieldInfoPtr_TickDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Gorgon_Venom_Debuff_DataServer>.NativeClassPtr, "TickDamage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Gorgon_Venom_Debuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TickDamage;

	public DealDamageParameters TickDamage;
}
```
