---
nav_exclude: true
search_exclude: true
---

# BuffSequence

```csharp
[StructLayout(2)]
public struct BuffSequence
{
	static BuffSequence()
	{
		Il2CppClassPointerStore<BuffSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BuffSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffSequence>.NativeClassPtr);
		BuffSequence.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffSequence>.NativeClassPtr, "SequenceGuid");
		BuffSequence.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffSequence>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	[FieldOffset(0)]
	public SequenceGUID SequenceGuid;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> Condition;
}
