---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_HealOnCriticalBuff_DataServer
{
	static Script_HealOnCriticalBuff_DataServer()
	{
		Il2CppClassPointerStore<Script_HealOnCriticalBuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_HealOnCriticalBuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_HealOnCriticalBuff_DataServer>.NativeClassPtr);
		Script_HealOnCriticalBuff_DataServer.NativeFieldInfoPtr_HealModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HealOnCriticalBuff_DataServer>.NativeClassPtr, "HealModifier");
		Script_HealOnCriticalBuff_DataServer.NativeFieldInfoPtr_ScaleByStacks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HealOnCriticalBuff_DataServer>.NativeClassPtr, "ScaleByStacks");
		Script_HealOnCriticalBuff_DataServer.NativeFieldInfoPtr_StatChangeListener_Outgoing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_HealOnCriticalBuff_DataServer>.NativeClassPtr, "StatChangeListener_Outgoing");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_HealOnCriticalBuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealModifier;
	private static readonly IntPtr NativeFieldInfoPtr_ScaleByStacks;
	private static readonly IntPtr NativeFieldInfoPtr_StatChangeListener_Outgoing;

	public float HealModifier;

	public bool ScaleByStacks;

	public ListenerId StatChangeListener_Outgoing;
}
```
