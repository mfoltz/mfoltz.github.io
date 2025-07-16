# Mount_Travel_DataShared

```csharp
[StructLayout(2)]
public struct Mount_Travel_DataShared
{
	static Mount_Travel_DataShared()
	{
		Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Mount_Travel_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr);
		Mount_Travel_DataShared.NativeFieldInfoPtr_EndDistanceSides = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr, "EndDistanceSides");
		Mount_Travel_DataShared.NativeFieldInfoPtr_EndDistanceBehind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr, "EndDistanceBehind");
		Mount_Travel_DataShared.NativeFieldInfoPtr_StartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr, "StartTime");
		Mount_Travel_DataShared.NativeFieldInfoPtr_StartPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr, "StartPos");
		Mount_Travel_DataShared.NativeFieldInfoPtr_EndPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr, "EndPos");
		Mount_Travel_DataShared.NativeFieldInfoPtr_MountPos = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr, "MountPos");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Mount_Travel_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EndDistanceSides;
	private static readonly IntPtr NativeFieldInfoPtr_EndDistanceBehind;
	private static readonly IntPtr NativeFieldInfoPtr_StartTime;
	private static readonly IntPtr NativeFieldInfoPtr_StartPos;
	private static readonly IntPtr NativeFieldInfoPtr_EndPos;
	private static readonly IntPtr NativeFieldInfoPtr_MountPos;
	[FieldOffset(0)]
	public float EndDistanceSides;
	[FieldOffset(4)]
	public float EndDistanceBehind;
	[FieldOffset(8)]
	public double StartTime;
	[FieldOffset(16)]
	public float3 StartPos;
	[FieldOffset(28)]
	public float3 EndPos;
	[FieldOffset(40)]
	public float3 MountPos;
}
