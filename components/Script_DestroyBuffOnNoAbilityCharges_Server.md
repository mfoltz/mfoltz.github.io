---
nav_exclude: true
search_exclude: false
---

# Script_DestroyBuffOnNoAbilityCharges_Server

```csharp
public struct Script_DestroyBuffOnNoAbilityCharges_Server
{
	static Script_DestroyBuffOnNoAbilityCharges_Server()
	{
		Il2CppClassPointerStore<Script_DestroyBuffOnNoAbilityCharges_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_DestroyBuffOnNoAbilityCharges_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_DestroyBuffOnNoAbilityCharges_Server>.NativeClassPtr);
		Script_DestroyBuffOnNoAbilityCharges_Server.NativeFieldInfoPtr_AbilitySlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_DestroyBuffOnNoAbilityCharges_Server>.NativeClassPtr, "AbilitySlot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_DestroyBuffOnNoAbilityCharges_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlot;

	public int AbilitySlot;
}
```
