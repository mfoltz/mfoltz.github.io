# UnitStatsSettingsElement

```csharp
[StructLayout(2)]
public struct UnitStatsSettingsElement
{
	static UnitStatsSettingsElement()
	{
		Il2CppClassPointerStore<UnitStatsSettingsElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitStatsSettingsElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitStatsSettingsElement>.NativeClassPtr);
		UnitStatsSettingsElement.NativeFieldInfoPtr_UnitBaseStatsType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStatsSettingsElement>.NativeClassPtr, "UnitBaseStatsType");
		UnitStatsSettingsElement.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStatsSettingsElement>.NativeClassPtr, "Curve");
		UnitStatsSettingsElement.NativeFieldInfoPtr_ValueMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStatsSettingsElement>.NativeClassPtr, "ValueMin");
		UnitStatsSettingsElement.NativeFieldInfoPtr_ValueMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitStatsSettingsElement>.NativeClassPtr, "ValueMax");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitStatsSettingsElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitBaseStatsType;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_ValueMin;
	private static readonly IntPtr NativeFieldInfoPtr_ValueMax;
	[FieldOffset(0)]
	public UnitBaseStatsType UnitBaseStatsType;
	[FieldOffset(4)]
	public CurveReference Curve;
	[FieldOffset(12)]
	public float ValueMin;
	[FieldOffset(16)]
	public float ValueMax;
}
