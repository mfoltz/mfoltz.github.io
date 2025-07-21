---
nav_exclude: true
search_exclude: false
---

# Script_RemoteImprison_DataServer

```csharp
public struct Script_RemoteImprison_DataServer
{
	static Script_RemoteImprison_DataServer()
	{
		Il2CppClassPointerStore<Script_RemoteImprison_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_RemoteImprison_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_RemoteImprison_DataServer>.NativeClassPtr);
		Script_RemoteImprison_DataServer.NativeFieldInfoPtr_ImprisonEvent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_RemoteImprison_DataServer>.NativeClassPtr, "ImprisonEvent");
		Script_RemoteImprison_DataServer.NativeFieldInfoPtr_ConsumeItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_RemoteImprison_DataServer>.NativeClassPtr, "ConsumeItemType");
		Script_RemoteImprison_DataServer.NativeFieldInfoPtr_RemoveCharmBuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_RemoteImprison_DataServer>.NativeClassPtr, "RemoveCharmBuffType");
		Script_RemoteImprison_DataServer.NativeFieldInfoPtr_NoEmptyPrisonInBase_LKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_RemoteImprison_DataServer>.NativeClassPtr, "NoEmptyPrisonInBase_LKey");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_RemoteImprison_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ImprisonEvent;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeItemType;
	private static readonly IntPtr NativeFieldInfoPtr_RemoveCharmBuffType;
	private static readonly IntPtr NativeFieldInfoPtr_NoEmptyPrisonInBase_LKey;

	public PrefabGUID ImprisonEvent;

	public PrefabGUID ConsumeItemType;

	public PrefabGUID RemoveCharmBuffType;

	public AssetGuid NoEmptyPrisonInBase_LKey;
}
```
