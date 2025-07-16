# CritterData

```csharp
[StructLayout(2)]
public struct CritterData
{
	static CritterData()
	{
		Il2CppClassPointerStore<CritterData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CritterData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CritterData>.NativeClassPtr);
		CritterData.NativeFieldInfoPtr_EscapePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "EscapePosition");
		CritterData.NativeFieldInfoPtr_EscapeSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "EscapeSequenceGuid");
		CritterData.NativeFieldInfoPtr_SteppedOnSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "SteppedOnSequenceGuid");
		CritterData.NativeFieldInfoPtr_Lifetime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "Lifetime");
		CritterData.NativeFieldInfoPtr_EscapeSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "EscapeSpeed");
		CritterData.NativeFieldInfoPtr_RotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "RotationSpeed");
		CritterData.NativeFieldInfoPtr_IdleAnimationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "IdleAnimationSpeed");
		CritterData.NativeFieldInfoPtr_OnAggroAnimationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "OnAggroAnimationSpeed");
		CritterData.NativeFieldInfoPtr_EscapeAnimationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "EscapeAnimationSpeed");
		CritterData.NativeFieldInfoPtr_OnAggroDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "OnAggroDuration");
		CritterData.NativeFieldInfoPtr_TurnToEscapeDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "TurnToEscapeDuration");
		CritterData.NativeFieldInfoPtr_AdditiveTurnFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "AdditiveTurnFactor");
		CritterData.NativeFieldInfoPtr_FadeOutTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "FadeOutTime");
		CritterData.NativeFieldInfoPtr_CurrentAggroTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "CurrentAggroTime");
		CritterData.NativeFieldInfoPtr_CurrentAliveTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "CurrentAliveTime");
		CritterData.NativeFieldInfoPtr_CurrentUpAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "CurrentUpAngle");
		CritterData.NativeFieldInfoPtr_SteppedOnSequenceDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "SteppedOnSequenceDuration");
		CritterData.NativeFieldInfoPtr_StepCollisionSphereRadiusSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "StepCollisionSphereRadiusSq");
		CritterData.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "State");
		CritterData.NativeFieldInfoPtr_CanBeSteppedOn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "CanBeSteppedOn");
		CritterData.NativeFieldInfoPtr_EscapesByFlying = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "EscapesByFlying");
		CritterData.NativeFieldInfoPtr_IsTame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CritterData>.NativeClassPtr, "IsTame");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CritterData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EscapePosition;
	private static readonly IntPtr NativeFieldInfoPtr_EscapeSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SteppedOnSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Lifetime;
	private static readonly IntPtr NativeFieldInfoPtr_EscapeSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_RotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_IdleAnimationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_OnAggroAnimationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_EscapeAnimationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_OnAggroDuration;
	private static readonly IntPtr NativeFieldInfoPtr_TurnToEscapeDuration;
	private static readonly IntPtr NativeFieldInfoPtr_AdditiveTurnFactor;
	private static readonly IntPtr NativeFieldInfoPtr_FadeOutTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentAggroTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentAliveTime;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentUpAngle;
	private static readonly IntPtr NativeFieldInfoPtr_SteppedOnSequenceDuration;
	private static readonly IntPtr NativeFieldInfoPtr_StepCollisionSphereRadiusSq;
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_CanBeSteppedOn;
	private static readonly IntPtr NativeFieldInfoPtr_EscapesByFlying;
	private static readonly IntPtr NativeFieldInfoPtr_IsTame;
	[FieldOffset(0)]
	public float3 EscapePosition;
	[FieldOffset(12)]
	public SequenceGUID EscapeSequenceGuid;
	[FieldOffset(16)]
	public SequenceGUID SteppedOnSequenceGuid;
	[FieldOffset(20)]
	public float Lifetime;
	[FieldOffset(24)]
	public float EscapeSpeed;
	[FieldOffset(28)]
	public float RotationSpeed;
	[FieldOffset(32)]
	public float IdleAnimationSpeed;
	[FieldOffset(36)]
	public float OnAggroAnimationSpeed;
	[FieldOffset(40)]
	public float EscapeAnimationSpeed;
	[FieldOffset(44)]
	public float OnAggroDuration;
	[FieldOffset(48)]
	public float TurnToEscapeDuration;
	[FieldOffset(52)]
	public float AdditiveTurnFactor;
	[FieldOffset(56)]
	public float FadeOutTime;
	[FieldOffset(60)]
	public float CurrentAggroTime;
	[FieldOffset(64)]
	public float CurrentAliveTime;
	[FieldOffset(68)]
	public float CurrentUpAngle;
	[FieldOffset(72)]
	public float SteppedOnSequenceDuration;
	[FieldOffset(76)]
	public float StepCollisionSphereRadiusSq;
	[FieldOffset(80)]
	public CritterState State;
	[FieldOffset(84)]
	[MarshalAs(4)]
	public bool CanBeSteppedOn;
	[FieldOffset(85)]
	[MarshalAs(4)]
	public bool EscapesByFlying;
	[FieldOffset(86)]
	[MarshalAs(4)]
	public bool IsTame;
}
