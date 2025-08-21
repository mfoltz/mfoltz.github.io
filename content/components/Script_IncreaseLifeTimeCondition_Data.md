---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_IncreaseLifeTimeCondition_Data
{
	static Script_IncreaseLifeTimeCondition_Data()
	{
		Il2CppClassPointerStore<Script_IncreaseLifeTimeCondition_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_IncreaseLifeTimeCondition_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_IncreaseLifeTimeCondition_Data>.NativeClassPtr);
		Script_IncreaseLifeTimeCondition_Data.NativeFieldInfoPtr_LifeTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseLifeTimeCondition_Data>.NativeClassPtr, "LifeTime");
		Script_IncreaseLifeTimeCondition_Data.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IncreaseLifeTimeCondition_Data>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_IncreaseLifeTimeCondition_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LifeTime;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;

	public float LifeTime;

	public BlobAssetReference<ConditionBlob> Condition;
}
```
