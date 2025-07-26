# SequenceInstance

```csharp
[StructLayout(2)]
public struct SequenceInstance
{
	static SequenceInstance()
	{
		Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr = IL2CPP.GetIl2CppClass("Sequencer.dll", "Stunlock.Sequencer", "SequenceInstance");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr);
		SequenceInstance.NativeFieldInfoPtr_StartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "StartTime");
		SequenceInstance.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "Target");
		SequenceInstance.NativeFieldInfoPtr_SecondaryTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "SecondaryTarget");
		SequenceInstance.NativeFieldInfoPtr_LastFrameRun = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "LastFrameRun");
		SequenceInstance.NativeFieldInfoPtr_ShouldDestroy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "ShouldDestroy");
		SequenceInstance.NativeFieldInfoPtr_DestroyThisFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "DestroyThisFrame");
		SequenceInstance.NativeFieldInfoPtr_Disabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "Disabled");
		SequenceInstance.NativeFieldInfoPtr_HiddenInFly = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "HiddenInFly");
		SequenceInstance.NativeFieldInfoPtr_HiddenVFX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "HiddenVFX");
		SequenceInstance.NativeFieldInfoPtr_Occluded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, "Occluded");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequenceInstance>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartTime;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryTarget;
	private static readonly IntPtr NativeFieldInfoPtr_LastFrameRun;
	private static readonly IntPtr NativeFieldInfoPtr_ShouldDestroy;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyThisFrame;
	private static readonly IntPtr NativeFieldInfoPtr_Disabled;
	private static readonly IntPtr NativeFieldInfoPtr_HiddenInFly;
	private static readonly IntPtr NativeFieldInfoPtr_HiddenVFX;
	private static readonly IntPtr NativeFieldInfoPtr_Occluded;
	[FieldOffset(0)]
	public double StartTime;
	[FieldOffset(8)]
	public Entity Target;
	[FieldOffset(16)]
	public Entity SecondaryTarget;
	[FieldOffset(24)]
	public int LastFrameRun;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool ShouldDestroy;
	[FieldOffset(29)]
	[MarshalAs(4)]
	public bool DestroyThisFrame;
	[FieldOffset(30)]
	[MarshalAs(4)]
	public bool Disabled;
	[FieldOffset(31)]
	[MarshalAs(4)]
	public bool HiddenInFly;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool HiddenVFX;
	[FieldOffset(33)]
	[MarshalAs(4)]
	public bool Occluded;
}
