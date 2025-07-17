---
nav_exclude: true
search_exclude: true
---

# TimeScale

```csharp
[StructLayout(2)]
public struct TimeScale
{
	static TimeScale()
	{
		Il2CppClassPointerStore<TimeScale>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TimeScale");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TimeScale>.NativeClassPtr);
		TimeScale.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TimeScale>.NativeClassPtr, "Value");
		TimeScale.NativeFieldInfoPtr_IsPaused = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TimeScale>.NativeClassPtr, "IsPaused");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TimeScale>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_IsPaused;
	[FieldOffset(0)]
	public float Value;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IsPaused;
}
