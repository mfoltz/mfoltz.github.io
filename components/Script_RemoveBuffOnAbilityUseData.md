---
nav_exclude: true
search_exclude: false
---

# Script_RemoveBuffOnAbilityUseData

```csharp
public struct Script_RemoveBuffOnAbilityUseData
{
	static Script_RemoveBuffOnAbilityUseData()
	{
		Il2CppClassPointerStore<Script_RemoveBuffOnAbilityUseData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_RemoveBuffOnAbilityUseData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_RemoveBuffOnAbilityUseData>.NativeClassPtr);
		Script_RemoveBuffOnAbilityUseData.NativeFieldInfoPtr_Buff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_RemoveBuffOnAbilityUseData>.NativeClassPtr, "Buff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_RemoveBuffOnAbilityUseData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Buff;

	public PrefabGUID Buff;
}
```
