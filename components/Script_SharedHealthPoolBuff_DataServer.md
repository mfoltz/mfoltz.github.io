---
nav_exclude: true
search_exclude: false
---

# Script_SharedHealthPoolBuff_DataServer

```csharp
public struct Script_SharedHealthPoolBuff_DataServer
{
	static Script_SharedHealthPoolBuff_DataServer()
	{
		Il2CppClassPointerStore<Script_SharedHealthPoolBuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SharedHealthPoolBuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SharedHealthPoolBuff_DataServer>.NativeClassPtr);
		Script_SharedHealthPoolBuff_DataServer.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SharedHealthPoolBuff_DataServer>.NativeClassPtr, "OnDamageTakenListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SharedHealthPoolBuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;

	public ListenerId OnDamageTakenListener;
}
```
