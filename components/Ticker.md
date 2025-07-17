---
nav_exclude: true
search_exclude: true
---

# Ticker

```csharp
[StructLayout(2)]
public struct Ticker
{
	static Ticker()
	{
		Il2CppClassPointerStore<Ticker>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Ticker");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Ticker>.NativeClassPtr);
		Ticker.NativeFieldInfoPtr_TimeBetweenTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Ticker>.NativeClassPtr, "TimeBetweenTicks");
		Ticker.NativeFieldInfoPtr_TimeToNextTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Ticker>.NativeClassPtr, "TimeToNextTick");
		Ticker.NativeFieldInfoPtr_MaxTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Ticker>.NativeClassPtr, "MaxTicks");
		Ticker.NativeFieldInfoPtr_TicksMade = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Ticker>.NativeClassPtr, "TicksMade");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Ticker>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TimeBetweenTicks;
	private static readonly IntPtr NativeFieldInfoPtr_TimeToNextTick;
	private static readonly IntPtr NativeFieldInfoPtr_MaxTicks;
	private static readonly IntPtr NativeFieldInfoPtr_TicksMade;
	[FieldOffset(0)]
	public float TimeBetweenTicks;
	[FieldOffset(4)]
	public float TimeToNextTick;
	[FieldOffset(8)]
	public int MaxTicks;
	[FieldOffset(12)]
	public int TicksMade;
}
