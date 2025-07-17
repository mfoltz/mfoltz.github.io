---
nav_exclude: true
search_exclude: true
---

# AbilityGroupInfo

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public double ReleaseCastQueueTime;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> CastCondition;
	[FieldOffset(16)]
	public BlobAssetReference<ConditionBlob> HoverCondition;
	[FieldOffset(24)]
	public float MinRange;
	[FieldOffset(28)]
	public float MaxRange;
	[FieldOffset(32)]
	public AbilityBehaviorType BehaviorType;
	[FieldOffset(33)]
	public AbilityInputCastType InputType;
	[FieldOffset(34)]
	public AbilitySpawnTarget Target;
}
