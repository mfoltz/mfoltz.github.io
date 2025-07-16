# CustomPreviewUpdate

```csharp
[StructLayout(2)]
public struct CustomPreviewUpdate
{
	static CustomPreviewUpdate()
	{
		Il2CppClassPointerStore<CustomPreviewUpdate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CustomPreviewUpdate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CustomPreviewUpdate>.NativeClassPtr);
		CustomPreviewUpdate.NativeFieldInfoPtr_UpdateMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CustomPreviewUpdate>.NativeClassPtr, "UpdateMode");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CustomPreviewUpdate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UpdateMode;
	[FieldOffset(0)]
	public CustomPreviewUpdateMode UpdateMode;
}
