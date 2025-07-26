# AbilityCastCondition

```csharp
[StructLayout(2)]
public struct AbilityCastCondition
{
	static AbilityCastCondition()
	{
		Il2CppClassPointerStore<AbilityCastCondition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityCastCondition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCastCondition>.NativeClassPtr);
		AbilityCastCondition.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastCondition>.NativeClassPtr, "Condition");
		AbilityCastCondition.NativeFieldInfoPtr_FailKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastCondition>.NativeClassPtr, "FailKey");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCastCondition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_FailKey;
	[FieldOffset(0)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(8)]
	public LocalizationKey FailKey;
}
