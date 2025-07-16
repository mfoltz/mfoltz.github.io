# FrameChanged

```csharp
[StructLayout(2)]
public struct FrameChanged
{
	static FrameChanged()
	{
		Il2CppClassPointerStore<FrameChanged>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "FrameChanged");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FrameChanged>.NativeClassPtr);
		FrameChanged.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FrameChanged>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FrameChanged>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public int Value;
}
