---
nav_exclude: true
search_exclude: true
---

# CastOptionBuffer

```csharp
[StructLayout(2)]
public struct CastOptionBuffer
{
	static CastOptionBuffer()
	{
		Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Behaviours.dll", "ProjectM.Behaviours", "CastOptionBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr);
		CastOptionBuffer.NativeFieldInfoPtr_AbilityIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "AbilityIndex");
		CastOptionBuffer.NativeFieldInfoPtr_Probability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "Probability");
		CastOptionBuffer.NativeFieldInfoPtr_Range = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "Range");
		CastOptionBuffer.NativeFieldInfoPtr_Cooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "Cooldown");
		CastOptionBuffer.NativeFieldInfoPtr_AggroFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "AggroFilter");
		CastOptionBuffer.NativeFieldInfoPtr_AngleRequirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "AngleRequirement");
		CastOptionBuffer.NativeFieldInfoPtr_IgnoreCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "IgnoreCooldown");
		CastOptionBuffer.NativeFieldInfoPtr_InterruptOnTargetDeath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "InterruptOnTargetDeath");
		CastOptionBuffer.NativeFieldInfoPtr_LineOfSightRequirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "LineOfSightRequirement");
		CastOptionBuffer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "Condition");
		CastOptionBuffer.NativeFieldInfoPtr_GroupCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "GroupCondition");
		CastOptionBuffer.NativeFieldInfoPtr_SuccessDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "SuccessDelay");
		CastOptionBuffer.NativeFieldInfoPtr_TieBreaker = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "TieBreaker");
		CastOptionBuffer.NativeFieldInfoPtr_Collider = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "Collider");
		CastOptionBuffer.NativeFieldInfoPtr_Combo = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, "Combo");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastOptionBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Probability;
	private static readonly IntPtr NativeFieldInfoPtr_Range;
	private static readonly IntPtr NativeFieldInfoPtr_Cooldown;
	private static readonly IntPtr NativeFieldInfoPtr_AggroFilter;
	private static readonly IntPtr NativeFieldInfoPtr_AngleRequirement;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptOnTargetDeath;
	private static readonly IntPtr NativeFieldInfoPtr_LineOfSightRequirement;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_GroupCondition;
	private static readonly IntPtr NativeFieldInfoPtr_SuccessDelay;
	private static readonly IntPtr NativeFieldInfoPtr_TieBreaker;
	private static readonly IntPtr NativeFieldInfoPtr_Collider;
	private static readonly IntPtr NativeFieldInfoPtr_Combo;
	[FieldOffset(0)]
	public int AbilityIndex;
	[FieldOffset(4)]
	public int Probability;
	[FieldOffset(8)]
	public CastOptionRange Range;
	[FieldOffset(16)]
	public CastOptionCooldown Cooldown;
	[FieldOffset(24)]
	public CastOptionAggroFilter AggroFilter;
	[FieldOffset(28)]
	public CastOptionAngleRequirement AngleRequirement;
	[FieldOffset(32)]
	public CastOptionIgnoreCooldown IgnoreCooldown;
	[FieldOffset(36)]
	[MarshalAs(4)]
	public bool InterruptOnTargetDeath;
	[FieldOffset(40)]
	public CastOptionLineOfSightRequirement LineOfSightRequirement;
	[FieldOffset(48)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(56)]
	public BlobAssetReference<ConditionBlob> GroupCondition;
	[FieldOffset(64)]
	public float2 SuccessDelay;
	[FieldOffset(72)]
	public CastOptionTieBreaker TieBreaker;
	[FieldOffset(80)]
	public CastOptionCollider Collider;
	[FieldOffset(112)]
	public CastOptionCombo Combo;
}
