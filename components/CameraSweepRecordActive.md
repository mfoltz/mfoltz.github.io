# CameraSweepRecordActive

```csharp
[StructLayout(2)]
public struct CameraSweepRecordActive
{
	static CameraSweepRecordActive()
	{
		Il2CppClassPointerStore<CameraSweepRecordActive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CameraSweepRecordActive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CameraSweepRecordActive>.NativeClassPtr);
		CameraSweepRecordActive.NativeFieldInfoPtr_StartRecordElapsedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraSweepRecordActive>.NativeClassPtr, "StartRecordElapsedTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CameraSweepRecordActive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartRecordElapsedTime;
	[FieldOffset(0)]
	public double StartRecordElapsedTime;
}
