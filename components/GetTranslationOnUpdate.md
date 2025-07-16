# GetTranslationOnUpdate

```csharp
[StructLayout(2)]
public struct GetTranslationOnUpdate
{
	static GetTranslationOnUpdate()
	{
		Il2CppClassPointerStore<GetTranslationOnUpdate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GetTranslationOnUpdate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetTranslationOnUpdate>.NativeClassPtr);
		GetTranslationOnUpdate.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTranslationOnUpdate>.NativeClassPtr, "Source");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetTranslationOnUpdate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	[FieldOffset(0)]
	public GetTranslationSource Source;
}
