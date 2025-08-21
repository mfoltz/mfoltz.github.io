---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ConditionElement
{
	static ConditionElement()
	{
		Il2CppClassPointerStore<ConditionElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "ConditionElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConditionElement>.NativeClassPtr);
		ConditionElement.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionElement>.NativeClassPtr, "Source");
		ConditionElement.NativeFieldInfoPtr_SuccessIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionElement>.NativeClassPtr, "SuccessIndex");
		ConditionElement.NativeFieldInfoPtr_FailureIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionElement>.NativeClassPtr, "FailureIndex");
		ConditionElement.NativeFieldInfoPtr_Union = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionElement>.NativeClassPtr, "Union");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConditionElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_SuccessIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FailureIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Union;

	public ConditionSource Source;

	public int SuccessIndex;

	public int FailureIndex;

	public ConditionUnion Union;
}
```
