---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ConsumableCondition
{
	static ConsumableCondition()
	{
		Il2CppClassPointerStore<ConsumableCondition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ConsumableCondition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConsumableCondition>.NativeClassPtr);
		ConsumableCondition.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConsumableCondition>.NativeClassPtr, "Condition");
		ConsumableCondition.NativeFieldInfoPtr_FailKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConsumableCondition>.NativeClassPtr, "FailKey");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConsumableCondition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_FailKey;

	public BlobAssetReference<ConditionBlob> Condition;

	public LocalizationKey FailKey;
}
```
