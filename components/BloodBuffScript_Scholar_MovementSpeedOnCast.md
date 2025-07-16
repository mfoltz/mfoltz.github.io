# BloodBuffScript_Scholar_MovementSpeedOnCast

```csharp
[StructLayout(2)]
public struct BloodBuffScript_Scholar_MovementSpeedOnCast
{
	static BloodBuffScript_Scholar_MovementSpeedOnCast()
	{
		Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_Scholar_MovementSpeedOnCast");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr);
		BloodBuffScript_Scholar_MovementSpeedOnCast.NativeFieldInfoPtr_SCT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr, "SCT");
		BloodBuffScript_Scholar_MovementSpeedOnCast.NativeFieldInfoPtr_ChanceToGainMovementOnCast_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr, "ChanceToGainMovementOnCast_Min");
		BloodBuffScript_Scholar_MovementSpeedOnCast.NativeFieldInfoPtr_ChanceToGainMovementOnCast_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr, "ChanceToGainMovementOnCast_Max");
		BloodBuffScript_Scholar_MovementSpeedOnCast.NativeFieldInfoPtr_MovementBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr, "MovementBuff");
		BloodBuffScript_Scholar_MovementSpeedOnCast.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr, "RequiredBloodPercentage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_Scholar_MovementSpeedOnCast>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SCT;
	private static readonly IntPtr NativeFieldInfoPtr_ChanceToGainMovementOnCast_Min;
	private static readonly IntPtr NativeFieldInfoPtr_ChanceToGainMovementOnCast_Max;
	private static readonly IntPtr NativeFieldInfoPtr_MovementBuff;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	[FieldOffset(0)]
	public AssetGuid SCT;
	[FieldOffset(16)]
	public float ChanceToGainMovementOnCast_Min;
	[FieldOffset(20)]
	public float ChanceToGainMovementOnCast_Max;
	[FieldOffset(24)]
	public PrefabGUID MovementBuff;
	[FieldOffset(28)]
	public float RequiredBloodPercentage;
}
