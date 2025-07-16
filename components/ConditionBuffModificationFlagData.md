# ConditionBuffModificationFlagData

```csharp
[StructLayout(2)]
public struct ConditionBuffModificationFlagData
{
	static ConditionBuffModificationFlagData()
	{
		Il2CppClassPointerStore<ConditionBuffModificationFlagData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ConditionBuffModificationFlagData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConditionBuffModificationFlagData>.NativeClassPtr);
		ConditionBuffModificationFlagData.NativeFieldInfoPtr_ModificationTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionBuffModificationFlagData>.NativeClassPtr, "ModificationTypes");
		ConditionBuffModificationFlagData.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConditionBuffModificationFlagData>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConditionBuffModificationFlagData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationTypes;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	[FieldOffset(0)]
	public long ModificationTypes;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> Condition;
}
