# MoveTowardsPositionBuff

```csharp
[StructLayout(2)]
public struct MoveTowardsPositionBuff
{
	static MoveTowardsPositionBuff()
	{
		Il2CppClassPointerStore<MoveTowardsPositionBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MoveTowardsPositionBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveTowardsPositionBuff>.NativeClassPtr);
		MoveTowardsPositionBuff.NativeFieldInfoPtr_DistanceSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTowardsPositionBuff>.NativeClassPtr, "DistanceSq");
		MoveTowardsPositionBuff.NativeFieldInfoPtr_RecalculationFrequency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTowardsPositionBuff>.NativeClassPtr, "RecalculationFrequency");
		MoveTowardsPositionBuff.NativeFieldInfoPtr_NextRecalculationTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTowardsPositionBuff>.NativeClassPtr, "NextRecalculationTime");
		MoveTowardsPositionBuff.NativeFieldInfoPtr_Waypoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTowardsPositionBuff>.NativeClassPtr, "Waypoints");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveTowardsPositionBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DistanceSq;
	private static readonly IntPtr NativeFieldInfoPtr_RecalculationFrequency;
	private static readonly IntPtr NativeFieldInfoPtr_NextRecalculationTime;
	private static readonly IntPtr NativeFieldInfoPtr_Waypoints;
	[FieldOffset(0)]
	public float DistanceSq;
	[FieldOffset(4)]
	public float RecalculationFrequency;
	[FieldOffset(8)]
	public double NextRecalculationTime;
	[FieldOffset(16)]
	public PathWaypoints Waypoints;
}
