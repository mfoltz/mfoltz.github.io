# Movement

```csharp
[StructLayout(2)]
public struct Movement
{
	static Movement()
	{
		Il2CppClassPointerStore<Movement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Movement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Movement>.NativeClassPtr);
		Movement.NativeFieldInfoPtr_ForcePositionData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "ForcePositionData");
		Movement.NativeFieldInfoPtr_MoveStopAbilityData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "MoveStopAbilityData");
		Movement.NativeFieldInfoPtr_MoveInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "MoveInput");
		Movement.NativeFieldInfoPtr_LastNonZeroMoveInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "LastNonZeroMoveInput");
		Movement.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "Speed");
		Movement.NativeFieldInfoPtr_AbilityCastSpeedMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "AbilityCastSpeedMultiplier");
		Movement.NativeFieldInfoPtr_HasMoveStopData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "HasMoveStopData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Movement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ForcePositionData;
	private static readonly IntPtr NativeFieldInfoPtr_MoveStopAbilityData;
	private static readonly IntPtr NativeFieldInfoPtr_MoveInput;
	private static readonly IntPtr NativeFieldInfoPtr_LastNonZeroMoveInput;
	private static readonly IntPtr NativeFieldInfoPtr_Speed;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityCastSpeedMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_HasMoveStopData;
	[FieldOffset(0)]
	public ForcePositionData ForcePositionData;
	[FieldOffset(64)]
	public MoveStopAbilityData MoveStopAbilityData;
	[FieldOffset(76)]
	public float2 MoveInput;
	[FieldOffset(84)]
	public float2 LastNonZeroMoveInput;
	[FieldOffset(92)]
	public ModifiableFloat Speed;
	[FieldOffset(96)]
	public float AbilityCastSpeedMultiplier;
	[FieldOffset(100)]
	[MarshalAs(4)]
	public bool HasMoveStopData;
}
