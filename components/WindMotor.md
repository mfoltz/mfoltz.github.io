# WindMotor

```csharp
[StructLayout(2)]
public struct WindMotor
{
	static WindMotor()
	{
		Il2CppClassPointerStore<WindMotor>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Wind.Shared.dll", "ProjectM.Wind", "WindMotor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WindMotor>.NativeClassPtr);
		WindMotor.NativeFieldInfoPtr_MotorType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindMotor>.NativeClassPtr, "MotorType");
		WindMotor.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindMotor>.NativeClassPtr, "Position");
		WindMotor.NativeFieldInfoPtr_Force = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindMotor>.NativeClassPtr, "Force");
		WindMotor.NativeFieldInfoPtr_Velocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindMotor>.NativeClassPtr, "Velocity");
		WindMotor.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WindMotor>.NativeClassPtr, "Range");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WindMotor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MotorType;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Force;
	private static readonly IntPtr NativeFieldInfoPtr_Velocity;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	[FieldOffset(0)]
	public uint MotorType;
	[FieldOffset(4)]
	public float3 Position;
	[FieldOffset(16)]
	public float3 Force;
	[FieldOffset(28)]
	public float3 Velocity;
	[FieldOffset(40)]
	public float Range;
}
