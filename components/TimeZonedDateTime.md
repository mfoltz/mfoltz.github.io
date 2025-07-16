# TimeZonedDateTime

```csharp
[StructLayout(2)]
public struct TimeZonedDateTime
{
	static TimeZonedDateTime()
	{
		Il2CppClassPointerStore<TimeZonedDateTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TimeZonedDateTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TimeZonedDateTime>.NativeClassPtr);
		TimeZonedDateTime.NativeFieldInfoPtr_DayOfWeek = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TimeZonedDateTime>.NativeClassPtr, "DayOfWeek");
		TimeZonedDateTime.NativeFieldInfoPtr_Hour = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TimeZonedDateTime>.NativeClassPtr, "Hour");
		TimeZonedDateTime.NativeFieldInfoPtr_Minute = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TimeZonedDateTime>.NativeClassPtr, "Minute");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TimeZonedDateTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DayOfWeek;
	private static readonly IntPtr NativeFieldInfoPtr_Hour;
	private static readonly IntPtr NativeFieldInfoPtr_Minute;
	[FieldOffset(0)]
	public DayOfWeek DayOfWeek;
	[FieldOffset(4)]
	public int Hour;
	[FieldOffset(8)]
	public int Minute;
}
