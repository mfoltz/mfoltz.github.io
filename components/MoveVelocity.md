# MoveVelocity

```csharp
[StructLayout(2)]
public struct MoveVelocity
{
	static MoveVelocity()
	{
		Il2CppClassPointerStore<MoveVelocity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MoveVelocity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveVelocity>.NativeClassPtr);
		MoveVelocity.NativeFieldInfoPtr_MoveVelocityMagnitude = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveVelocity>.NativeClassPtr, "MoveVelocityMagnitude");
		MoveVelocity.NativeFieldInfoPtr_ReferenceWalkingCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveVelocity>.NativeClassPtr, "ReferenceWalkingCurve");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveVelocity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MoveVelocityMagnitude;
	private static readonly IntPtr NativeFieldInfoPtr_ReferenceWalkingCurve;
	[FieldOffset(0)]
	public float MoveVelocityMagnitude;
	[FieldOffset(4)]
	public CurveReference ReferenceWalkingCurve;
}
