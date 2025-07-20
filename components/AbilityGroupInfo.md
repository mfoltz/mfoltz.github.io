---
nav_exclude: true
search_exclude: true
---

# AbilityGroupInfo

```csharp
public struct AbilityGroupInfo
{
	static AbilityGroupInfo()
	{
		Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityGroupInfo");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr);
		AbilityGroupInfo.NativeFieldInfoPtr_ReleaseCastQueueTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "ReleaseCastQueueTime");
		AbilityGroupInfo.NativeFieldInfoPtr_CastCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "CastCondition");
		AbilityGroupInfo.NativeFieldInfoPtr_HoverCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "HoverCondition");
		AbilityGroupInfo.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "MinRange");
		AbilityGroupInfo.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "MaxRange");
		AbilityGroupInfo.NativeFieldInfoPtr_BehaviorType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "BehaviorType");
		AbilityGroupInfo.NativeFieldInfoPtr_InputType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "InputType");
		AbilityGroupInfo.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupInfo>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ReleaseCastQueueTime;
	private static readonly IntPtr NativeFieldInfoPtr_CastCondition;
	private static readonly IntPtr NativeFieldInfoPtr_HoverCondition;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_BehaviorType;
	private static readonly IntPtr NativeFieldInfoPtr_InputType;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public double ReleaseCastQueueTime;

	public BlobAssetReference<ConditionBlob> CastCondition;

	public BlobAssetReference<ConditionBlob> HoverCondition;

	public float MinRange;

	public float MaxRange;

	public AbilityBehaviorType BehaviorType;

	public AbilityInputCastType InputType;

	public AbilitySpawnTarget Target;
}
```
