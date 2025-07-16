# ControllerVibrationData

```csharp
[StructLayout(2)]
public struct ControllerVibrationData
{
	static ControllerVibrationData()
	{
		Il2CppClassPointerStore<ControllerVibrationData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ControllerVibrationData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ControllerVibrationData>.NativeClassPtr);
		ControllerVibrationData.NativeFieldInfoPtr_studioEvent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ControllerVibrationData>.NativeClassPtr, "studioEvent");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ControllerVibrationData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_studioEvent;
	[FieldOffset(0)]
	public StudioEvent studioEvent;
}
