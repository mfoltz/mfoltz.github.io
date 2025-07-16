# AnimateDitherAlpha

```csharp
[StructLayout(2)]
public struct AnimateDitherAlpha
{
	static AnimateDitherAlpha()
	{
		Il2CppClassPointerStore<AnimateDitherAlpha>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Presentation", "AnimateDitherAlpha");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AnimateDitherAlpha>.NativeClassPtr);
		AnimateDitherAlpha.NativeFieldInfoPtr_MinimumFadeValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimateDitherAlpha>.NativeClassPtr, "MinimumFadeValue");
		AnimateDitherAlpha.NativeFieldInfoPtr_FadeDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimateDitherAlpha>.NativeClassPtr, "FadeDirection");
		AnimateDitherAlpha.NativeFieldInfoPtr_FadeOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AnimateDitherAlpha>.NativeClassPtr, "FadeOut");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AnimateDitherAlpha>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinimumFadeValue;
	private static readonly IntPtr NativeFieldInfoPtr_FadeDirection;
	private static readonly IntPtr NativeFieldInfoPtr_FadeOut;
	[FieldOffset(0)]
	public float MinimumFadeValue;
	[FieldOffset(4)]
	public float FadeDirection;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool FadeOut;
}
