---
nav_exclude: true
search_exclude: false
---

# BranchThroughGameplayEvent

```csharp
public struct BranchThroughGameplayEvent
{
	static BranchThroughGameplayEvent()
	{
		Il2CppClassPointerStore<BranchThroughGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Shared", "BranchThroughGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BranchThroughGameplayEvent>.NativeClassPtr);
		BranchThroughGameplayEvent.NativeFieldInfoPtr_OnTrue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BranchThroughGameplayEvent>.NativeClassPtr, "OnTrue");
		BranchThroughGameplayEvent.NativeFieldInfoPtr_OnFalse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BranchThroughGameplayEvent>.NativeClassPtr, "OnFalse");
		BranchThroughGameplayEvent.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BranchThroughGameplayEvent>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BranchThroughGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnTrue;
	private static readonly IntPtr NativeFieldInfoPtr_OnFalse;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;

	public GameplayEventId OnTrue;

	public GameplayEventId OnFalse;

	public BlobAssetReference<ConditionBlob> Condition;
}
```
