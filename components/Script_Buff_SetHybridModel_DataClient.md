---
nav_exclude: true
search_exclude: true
---

# Script_Buff_SetHybridModel_DataClient

```csharp
public struct Script_Buff_SetHybridModel_DataClient
{
	static Script_Buff_SetHybridModel_DataClient()
	{
		Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_SetHybridModel_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr);
		Script_Buff_SetHybridModel_DataClient.NativeFieldInfoPtr_HybridModel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, "HybridModel");
		Script_Buff_SetHybridModel_DataClient.NativeFieldInfoPtr_ColorCollection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, "ColorCollection");
		Script_Buff_SetHybridModel_DataClient.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_SetHybridModel_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HybridModel;
	private static readonly IntPtr NativeFieldInfoPtr_ColorCollection;
	private static readonly IntPtr NativeFieldInfoPtr_Type;

	public UseHybridModelPrefabsBlob.PrefabData HybridModel;

	public PrefabGUID ColorCollection;

	public SetHybridModelType Type;
}
```
