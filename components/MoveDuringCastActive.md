# MoveDuringCastActive

```csharp
[StructLayout(2)]
public struct MoveDuringCastActive
{
	static MoveDuringCastActive()
	{
		Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MoveDuringCastActive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr);
		MoveDuringCastActive.NativeFieldInfoPtr_CastStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "CastStartTime");
		MoveDuringCastActive.NativeFieldInfoPtr_InitialRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "InitialRotation");
		MoveDuringCastActive.NativeFieldInfoPtr_InitialMoveRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "InitialMoveRotation");
		MoveDuringCastActive.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "Ability");
		MoveDuringCastActive.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "Character");
		MoveDuringCastActive.NativeFieldInfoPtr_CanMoveModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "CanMoveModificationId");
		MoveDuringCastActive.NativeFieldInfoPtr_InterruptCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, "InterruptCounter");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveDuringCastActive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CastStartTime;
	private static readonly IntPtr NativeFieldInfoPtr_InitialRotation;
	private static readonly IntPtr NativeFieldInfoPtr_InitialMoveRotation;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_CanMoveModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptCounter;
	[FieldOffset(0)]
	public double CastStartTime;
	[FieldOffset(8)]
	public quaternion InitialRotation;
	[FieldOffset(24)]
	public quaternion InitialMoveRotation;
	[FieldOffset(40)]
	public Entity Ability;
	[FieldOffset(48)]
	public Entity Character;
	[FieldOffset(56)]
	public ModificationId CanMoveModificationId;
	[FieldOffset(60)]
	public int InterruptCounter;
}
