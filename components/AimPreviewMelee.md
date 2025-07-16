# AimPreviewMelee

```csharp
[StructLayout(2)]
public struct AimPreviewMelee
{
	static AimPreviewMelee()
	{
		Il2CppClassPointerStore<AimPreviewMelee>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewMelee");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewMelee>.NativeClassPtr);
		AimPreviewMelee.NativeFieldInfoPtr_ConeSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewMelee>.NativeClassPtr, "ConeSequenceGUID");
		AimPreviewMelee.NativeFieldInfoPtr_ConeSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewMelee>.NativeClassPtr, "ConeSequenceState");
		AimPreviewMelee.NativeFieldInfoPtr_BoxSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewMelee>.NativeClassPtr, "BoxSequenceGUID");
		AimPreviewMelee.NativeFieldInfoPtr_BoxSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewMelee>.NativeClassPtr, "BoxSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewMelee>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConeSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_ConeSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_BoxSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_BoxSequenceState;
	[FieldOffset(0)]
	public SequenceGUID ConeSequenceGUID;
	[FieldOffset(4)]
	public SequenceState ConeSequenceState;
	[FieldOffset(12)]
	public SequenceGUID BoxSequenceGUID;
	[FieldOffset(16)]
	public SequenceState BoxSequenceState;
}
