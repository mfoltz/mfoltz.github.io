# LocalizedStringBuilderParameter

```csharp
[StructLayout(2)]
public struct LocalizedStringBuilderParameter
{
	static LocalizedStringBuilderParameter()
	{
		Il2CppClassPointerStore<LocalizedStringBuilderParameter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.UI", "LocalizedStringBuilderParameter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LocalizedStringBuilderParameter>.NativeClassPtr);
		LocalizedStringBuilderParameter.NativeFieldInfoPtr_Key = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalizedStringBuilderParameter>.NativeClassPtr, "Key");
		LocalizedStringBuilderParameter.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalizedStringBuilderParameter>.NativeClassPtr, "Value");
		LocalizedStringBuilderParameter.NativeFieldInfoPtr_NumericFormat = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalizedStringBuilderParameter>.NativeClassPtr, "NumericFormat");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LocalizedStringBuilderParameter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Key;
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_NumericFormat;
	[FieldOffset(0)]
	public FixedString128Bytes Key;
	[FieldOffset(128)]
	public FixedString128Bytes Value;
	[FieldOffset(256)]
	public NumericFormat NumericFormat;
}
