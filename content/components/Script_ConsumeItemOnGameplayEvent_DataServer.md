---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_ConsumeItemOnGameplayEvent_DataServer
{
	static Script_ConsumeItemOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_ConsumeItemOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_ConsumeItemOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_ConsumeItemOnGameplayEvent_DataServer>.NativeClassPtr);
		Script_ConsumeItemOnGameplayEvent_DataServer.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ConsumeItemOnGameplayEvent_DataServer>.NativeClassPtr, "Item");
		Script_ConsumeItemOnGameplayEvent_DataServer.NativeFieldInfoPtr_Stacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_ConsumeItemOnGameplayEvent_DataServer>.NativeClassPtr, "Stacks");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_ConsumeItemOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Item;
	private static readonly IntPtr NativeFieldInfoPtr_Stacks;

	public PrefabGUID Item;

	public int Stacks;
}
```
