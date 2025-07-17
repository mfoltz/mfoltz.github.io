---
nav_exclude: true
search_exclude: true
---

# Mounter

```csharp
[StructLayout(2)]
public struct Mounter
{
	static Mounter()
	{
		Il2CppClassPointerStore<Mounter>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Mounter");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Mounter>.NativeClassPtr);
		Mounter.NativeFieldInfoPtr_MountEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "MountEntity");
		Mounter.NativeFieldInfoPtr_IsGalopping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "IsGalopping");
		Mounter.NativeFieldInfoPtr_CanDestroyOnCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "CanDestroyOnCollision");
		Mounter.NativeFieldInfoPtr_Acceleration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "Acceleration");
		Mounter.NativeFieldInfoPtr_Deceleration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "Deceleration");
		Mounter.NativeFieldInfoPtr_WalkMaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "WalkMaxSpeed");
		Mounter.NativeFieldInfoPtr_GallopMaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "GallopMaxSpeed");
		Mounter.NativeFieldInfoPtr_MaxSpeedReverse = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "MaxSpeedReverse");
		Mounter.NativeFieldInfoPtr_DegallopSpeedThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "DegallopSpeedThreshold");
		Mounter.NativeFieldInfoPtr_DestroyOnCollisionSpeedThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "DestroyOnCollisionSpeedThreshold");
		Mounter.NativeFieldInfoPtr_TurnRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "TurnRate");
		Mounter.NativeFieldInfoPtr_MaxAimAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "MaxAimAngle");
		Mounter.NativeFieldInfoPtr_JumpFromCliffsMaxDot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "JumpFromCliffsMaxDot");
		Mounter.NativeFieldInfoPtr_JumpFromCliffsMinVelocity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "JumpFromCliffsMinVelocity");
		Mounter.NativeFieldInfoPtr_TurnRatePerSpeedCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "TurnRatePerSpeedCurve");
		Mounter.NativeFieldInfoPtr_FrictionCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "FrictionCurve");
		Mounter.NativeFieldInfoPtr_ClientLastMountAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "ClientLastMountAngle");
		Mounter.NativeFieldInfoPtr_GallopMaxSpeedMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Mounter>.NativeClassPtr, "GallopMaxSpeedMultiplier");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Mounter>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MountEntity;
	private static readonly IntPtr NativeFieldInfoPtr_IsGalopping;
	private static readonly IntPtr NativeFieldInfoPtr_CanDestroyOnCollision;
	private static readonly IntPtr NativeFieldInfoPtr_Acceleration;
	private static readonly IntPtr NativeFieldInfoPtr_Deceleration;
	private static readonly IntPtr NativeFieldInfoPtr_WalkMaxSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_GallopMaxSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_MaxSpeedReverse;
	private static readonly IntPtr NativeFieldInfoPtr_DegallopSpeedThreshold;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyOnCollisionSpeedThreshold;
	private static readonly IntPtr NativeFieldInfoPtr_TurnRate;
	private static readonly IntPtr NativeFieldInfoPtr_MaxAimAngle;
	private static readonly IntPtr NativeFieldInfoPtr_JumpFromCliffsMaxDot;
	private static readonly IntPtr NativeFieldInfoPtr_JumpFromCliffsMinVelocity;
	private static readonly IntPtr NativeFieldInfoPtr_TurnRatePerSpeedCurve;
	private static readonly IntPtr NativeFieldInfoPtr_FrictionCurve;
	private static readonly IntPtr NativeFieldInfoPtr_ClientLastMountAngle;
	private static readonly IntPtr NativeFieldInfoPtr_GallopMaxSpeedMultiplier;
	[FieldOffset(0)]
	public Entity MountEntity;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool IsGalopping;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool CanDestroyOnCollision;
	[FieldOffset(12)]
	public ModifiableFloat Acceleration;
	[FieldOffset(16)]
	public float Deceleration;
	[FieldOffset(20)]
	public float WalkMaxSpeed;
	[FieldOffset(24)]
	public ModifiableFloat GallopMaxSpeed;
	[FieldOffset(28)]
	public float MaxSpeedReverse;
	[FieldOffset(32)]
	public float DegallopSpeedThreshold;
	[FieldOffset(36)]
	public float DestroyOnCollisionSpeedThreshold;
	[FieldOffset(40)]
	public ModifiableFloat TurnRate;
	[FieldOffset(44)]
	public float MaxAimAngle;
	[FieldOffset(48)]
	public float JumpFromCliffsMaxDot;
	[FieldOffset(52)]
	public float JumpFromCliffsMinVelocity;
	[FieldOffset(56)]
	public CurveReference TurnRatePerSpeedCurve;
	[FieldOffset(64)]
	public CurveReference FrictionCurve;
	[FieldOffset(72)]
	public int ClientLastMountAngle;
	[FieldOffset(76)]
	public ModifiableFloat GallopMaxSpeedMultiplier;
}
