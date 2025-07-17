---
nav_exclude: true
search_exclude: true
---

# ConversionSettings

```csharp
[StructLayout(2)]
public struct ConversionSettings
{
	static ConversionSettings()
	{
		Il2CppClassPointerStore<ConversionSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ConversionSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ConversionSettings>.NativeClassPtr);
		ConversionSettings.NativeFieldInfoPtr_ValidConversionTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConversionSettings>.NativeClassPtr, "ValidConversionTarget");
		ConversionSettings.NativeFieldInfoPtr_ConversionTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ConversionSettings>.NativeClassPtr, "ConversionTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ConversionSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ValidConversionTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ConversionTarget;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool ValidConversionTarget;
	[FieldOffset(4)]
	public ApplicationConversionTarget ConversionTarget;
}
