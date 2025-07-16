# DualsenseVibration

```csharp
[StructLayout(2)]
public struct DualsenseVibration
{
	static DualsenseVibration()
	{
		Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Haptics", "DualsenseVibration");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr);
		DualsenseVibration.NativeFieldInfoPtr_EventGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, "EventGUID");
		DualsenseVibration.NativeFieldInfoPtr_Volume = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, "Volume");
		DualsenseVibration.NativeFieldInfoPtr_Pitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, "Pitch");
		DualsenseVibration.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, "MinDistance");
		DualsenseVibration.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, "MaxDistance");
		DualsenseVibration.NativeFieldInfoPtr_CueOnStop = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, "CueOnStop");
		DualsenseVibration.NativeFieldInfoPtr_ForceStop = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, "ForceStop");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DualsenseVibration>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Volume;
	private static readonly IntPtr NativeFieldInfoPtr_Pitch;
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_CueOnStop;
	private static readonly IntPtr NativeFieldInfoPtr_ForceStop;
	[FieldOffset(0)]
	public FmodEventGuid EventGUID;
	[FieldOffset(16)]
	public float Volume;
	[FieldOffset(20)]
	public float Pitch;
	[FieldOffset(24)]
	public float MinDistance;
	[FieldOffset(28)]
	public float MaxDistance;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool CueOnStop;
	[FieldOffset(33)]
	[MarshalAs(4)]
	public bool ForceStop;
}
