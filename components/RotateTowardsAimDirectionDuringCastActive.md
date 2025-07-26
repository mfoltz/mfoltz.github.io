# RotateTowardsAimDirectionDuringCastActive

```csharp
[StructLayout(2)]
public struct RotateTowardsAimDirectionDuringCastActive
{
	static RotateTowardsAimDirectionDuringCastActive()
	{
		Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastActive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RotateTowardsAimDirectionDuringCastActive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastActive>.NativeClassPtr);
		RotateTowardsAimDirectionDuringCastActive.NativeFieldInfoPtr_CastStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastActive>.NativeClassPtr, "CastStartTime");
		RotateTowardsAimDirectionDuringCastActive.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastActive>.NativeClassPtr, "Ability");
		RotateTowardsAimDirectionDuringCastActive.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastActive>.NativeClassPtr, "Character");
		RotateTowardsAimDirectionDuringCastActive.NativeFieldInfoPtr_InitialRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastActive>.NativeClassPtr, "InitialRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RotateTowardsAimDirectionDuringCastActive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_InitialRotation;
	[FieldOffset(0)]
	public double CastStartTime;
	[FieldOffset(8)]
	public Entity Ability;
	[FieldOffset(16)]
	public Entity Character;
	[FieldOffset(24)]
	public quaternion InitialRotation;
}
