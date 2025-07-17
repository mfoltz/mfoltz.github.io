---
nav_exclude: true
search_exclude: true
---

# Script_Convert_Item_OnConsume_DataServer

```csharp
public struct Script_Convert_Item_OnConsume_DataServer
{
	static Script_Convert_Item_OnConsume_DataServer()
	{
		Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Convert_Item_OnConsume_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr);
		Script_Convert_Item_OnConsume_DataServer.NativeFieldInfoPtr_PlacementCheckPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr, "PlacementCheckPrefab");
		Script_Convert_Item_OnConsume_DataServer.NativeFieldInfoPtr_InputType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr, "InputType");
		Script_Convert_Item_OnConsume_DataServer.NativeFieldInfoPtr_ConvertSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr, "ConvertSequence");
		Script_Convert_Item_OnConsume_DataServer.NativeFieldInfoPtr_FailedConvertSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr, "FailedConvertSequence");
		Script_Convert_Item_OnConsume_DataServer.NativeFieldInfoPtr_HandleConsumableStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr, "HandleConsumableStack");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlacementCheckPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_InputType;
	private static readonly IntPtr NativeFieldInfoPtr_ConvertSequence;
	private static readonly IntPtr NativeFieldInfoPtr_FailedConvertSequence;
	private static readonly IntPtr NativeFieldInfoPtr_HandleConsumableStack;

	public PrefabGUID PlacementCheckPrefab;

	public PrefabGUID InputType;

	public SequenceGUID ConvertSequence;

	public SequenceGUID FailedConvertSequence;

	public bool HandleConsumableStack;
}
```
