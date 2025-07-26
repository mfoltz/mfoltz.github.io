# CheckOnScreen

```csharp
[StructLayout(2)]
public struct CheckOnScreen
{
	static CheckOnScreen()
	{
		Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CheckOnScreen");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr);
		CheckOnScreen.NativeFieldInfoPtr_ScreenPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "ScreenPosition");
		CheckOnScreen.NativeFieldInfoPtr_PixelOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "PixelOffset");
		CheckOnScreen.NativeFieldInfoPtr_MaxDistanceForHudAndFadeOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "MaxDistanceForHudAndFadeOut");
		CheckOnScreen.NativeFieldInfoPtr_IgnoreLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "IgnoreLineOfSight");
		CheckOnScreen.NativeFieldInfoPtr_IsOnScreen = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "IsOnScreen");
		CheckOnScreen.NativeFieldInfoPtr_HasLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, "HasLineOfSight");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CheckOnScreen>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ScreenPosition;
	private static readonly IntPtr NativeFieldInfoPtr_PixelOffset;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistanceForHudAndFadeOut;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreLineOfSight;
	private static readonly IntPtr NativeFieldInfoPtr_IsOnScreen;
	private static readonly IntPtr NativeFieldInfoPtr_HasLineOfSight;
	[FieldOffset(0)]
	public float3 ScreenPosition;
	[FieldOffset(12)]
	public float PixelOffset;
	[FieldOffset(16)]
	public float MaxDistanceForHudAndFadeOut;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool IgnoreLineOfSight;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool IsOnScreen;
	[FieldOffset(22)]
	[MarshalAs(4)]
	public bool HasLineOfSight;
}
