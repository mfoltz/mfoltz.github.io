---
nav_exclude: true
search_exclude: true
---

# CommonGamepadVibration

```csharp
[StructLayout(2)]
public struct CommonGamepadVibration
{
	static CommonGamepadVibration()
	{
		Il2CppClassPointerStore<CommonGamepadVibration>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Haptics", "CommonGamepadVibration");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CommonGamepadVibration>.NativeClassPtr);
		CommonGamepadVibration.NativeFieldInfoPtr_Amplitude = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonGamepadVibration>.NativeClassPtr, "Amplitude");
		CommonGamepadVibration.NativeFieldInfoPtr_Frequency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CommonGamepadVibration>.NativeClassPtr, "Frequency");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CommonGamepadVibration>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Amplitude;
	private static readonly IntPtr NativeFieldInfoPtr_Frequency;
	[FieldOffset(0)]
	public CurveReference Amplitude;
	[FieldOffset(8)]
	public CurveReference Frequency;
}
