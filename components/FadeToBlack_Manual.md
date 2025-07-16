# FadeToBlack_Manual

```csharp
[StructLayout(2)]
public struct FadeToBlack_Manual
{
	static FadeToBlack_Manual()
	{
		Il2CppClassPointerStore<FadeToBlack_Manual>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "FadeToBlack_Manual");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FadeToBlack_Manual>.NativeClassPtr);
		FadeToBlack_Manual.NativeFieldInfoPtr_FadeState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeToBlack_Manual>.NativeClassPtr, "FadeState");
		FadeToBlack_Manual.NativeFieldInfoPtr_NormalizedValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeToBlack_Manual>.NativeClassPtr, "NormalizedValue");
		FadeToBlack_Manual.NativeFieldInfoPtr_ManualFadeDurationIn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeToBlack_Manual>.NativeClassPtr, "ManualFadeDurationIn");
		FadeToBlack_Manual.NativeFieldInfoPtr_ManualFadeDurationOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FadeToBlack_Manual>.NativeClassPtr, "ManualFadeDurationOut");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FadeToBlack_Manual>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FadeState;
	private static readonly IntPtr NativeFieldInfoPtr_NormalizedValue;
	private static readonly IntPtr NativeFieldInfoPtr_ManualFadeDurationIn;
	private static readonly IntPtr NativeFieldInfoPtr_ManualFadeDurationOut;
	[FieldOffset(0)]
	public FadeToBlack_Manual.State FadeState;
	[FieldOffset(4)]
	public float NormalizedValue;
	[FieldOffset(8)]
	public float ManualFadeDurationIn;
	[FieldOffset(12)]
	public float ManualFadeDurationOut;
	public enum State
	{
		FadeIn,
		Faded,
		FadeOut
	}
}
