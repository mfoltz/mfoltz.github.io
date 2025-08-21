---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Convert_Item_OnConsume_Entry
{
	static Script_Convert_Item_OnConsume_Entry()
	{
		Il2CppClassPointerStore<Script_Convert_Item_OnConsume_Entry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Convert_Item_OnConsume_Entry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_Entry>.NativeClassPtr);
		Script_Convert_Item_OnConsume_Entry.NativeFieldInfoPtr_OutputType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_Entry>.NativeClassPtr, "OutputType");
		Script_Convert_Item_OnConsume_Entry.NativeFieldInfoPtr_PlacementType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_Entry>.NativeClassPtr, "PlacementType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Convert_Item_OnConsume_Entry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OutputType;
	private static readonly IntPtr NativeFieldInfoPtr_PlacementType;

	public PrefabGUID OutputType;

	public PlacementTypeData PlacementType;
}
```
