---
nav_exclude: true
search_exclude: true
---

# MoveTowardsRotationBuff

```csharp
[Serializable]
[StructLayout(2)]
public struct MoveTowardsRotationBuff
{
	static MoveTowardsRotationBuff()
	{
		Il2CppClassPointerStore<MoveTowardsRotationBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MoveTowardsRotationBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveTowardsRotationBuff>.NativeClassPtr);
		MoveTowardsRotationBuff.NativeFieldInfoPtr_ResetMovementSpeedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTowardsRotationBuff>.NativeClassPtr, "ResetMovementSpeedModId");
		MoveTowardsRotationBuff.NativeFieldInfoPtr_IgnoreOriginalMoveSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveTowardsRotationBuff>.NativeClassPtr, "IgnoreOriginalMoveSpeed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveTowardsRotationBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ResetMovementSpeedModId;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreOriginalMoveSpeed;
	[FieldOffset(0)]
	public ModificationId ResetMovementSpeedModId;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool IgnoreOriginalMoveSpeed;
}
