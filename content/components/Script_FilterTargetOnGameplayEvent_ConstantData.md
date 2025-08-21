---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_FilterTargetOnGameplayEvent_ConstantData
{
	static Script_FilterTargetOnGameplayEvent_ConstantData()
	{
		Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_ConstantData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_FilterTargetOnGameplayEvent_ConstantData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_ConstantData>.NativeClassPtr);
		Script_FilterTargetOnGameplayEvent_ConstantData.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_ConstantData>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_FilterTargetOnGameplayEvent_ConstantData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public BlobAssetReference<FilterTargetConstantData> Data;
}
```
