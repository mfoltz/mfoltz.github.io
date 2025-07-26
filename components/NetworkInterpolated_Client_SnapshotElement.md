# NetworkInterpolated_Client_SnapshotElement

```csharp
[StructLayout(2)]
public struct NetworkInterpolated_Client_SnapshotElement
{
	static NetworkInterpolated_Client_SnapshotElement()
	{
		Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "NetworkInterpolated_Client_SnapshotElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr);
		NetworkInterpolated_Client_SnapshotElement.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr, "Time");
		NetworkInterpolated_Client_SnapshotElement.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr, "Position");
		NetworkInterpolated_Client_SnapshotElement.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr, "Rotation");
		NetworkInterpolated_Client_SnapshotElement.NativeFieldInfoPtr_Velocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr, "Velocity");
		NetworkInterpolated_Client_SnapshotElement.NativeFieldInfoPtr_MoveVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr, "MoveVelocity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkInterpolated_Client_SnapshotElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_Velocity;
	private static readonly IntPtr NativeFieldInfoPtr_MoveVelocity;
	[FieldOffset(0)]
	public double Time;
	[FieldOffset(8)]
	public float2 Position;
	[FieldOffset(16)]
	public quaternion Rotation;
	[FieldOffset(32)]
	public float2 Velocity;
	[FieldOffset(40)]
	public float MoveVelocity;
}
