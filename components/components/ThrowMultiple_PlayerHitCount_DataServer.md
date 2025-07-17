---
nav_exclude: true
search_exclude: true
---

# ThrowMultiple_PlayerHitCount_DataServer

```csharp
[StructLayout(2)]
public struct ThrowMultiple_PlayerHitCount_DataServer
{
	static ThrowMultiple_PlayerHitCount_DataServer()
	{
		Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "ThrowMultiple_PlayerHitCount_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr);
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_TargetHitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "TargetHitFilter");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "TargetFilterCondition");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_CountVampire_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "CountVampire_Min");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_CountVampire_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "CountVampire_Max");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_MaxVampireCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "MaxVampireCount");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_CountCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "CountCurve");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "MaxRange");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_RandomAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "RandomAngle");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_OffsetAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "OffsetAngle");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_IndividualRandom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "IndividualRandom");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_AlwaysMaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "AlwaysMaxRange");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "NewThrowEntity");
		ThrowMultiple_PlayerHitCount_DataServer.NativeFieldInfoPtr_HitCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, "HitCounter");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ThrowMultiple_PlayerHitCount_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetHitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_CountVampire_Min;
	private static readonly IntPtr NativeFieldInfoPtr_CountVampire_Max;
	private static readonly IntPtr NativeFieldInfoPtr_MaxVampireCount;
	private static readonly IntPtr NativeFieldInfoPtr_CountCurve;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_RandomAngle;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetAngle;
	private static readonly IntPtr NativeFieldInfoPtr_IndividualRandom;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysMaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	private static readonly IntPtr NativeFieldInfoPtr_HitCounter;
	[FieldOffset(0)]
	public HitFilter TargetHitFilter;
	[FieldOffset(8)]
	public BlobAssetReference<ConditionBlob> TargetFilterCondition;
	[FieldOffset(16)]
	public int CountVampire_Min;
	[FieldOffset(20)]
	public int CountVampire_Max;
	[FieldOffset(24)]
	public int MaxVampireCount;
	[FieldOffset(28)]
	public CurveReference CountCurve;
	[FieldOffset(36)]
	public float MaxRange;
	[FieldOffset(40)]
	public float RandomAngle;
	[FieldOffset(44)]
	public float OffsetAngle;
	[FieldOffset(48)]
	[MarshalAs(4)]
	public bool IndividualRandom;
	[FieldOffset(49)]
	[MarshalAs(4)]
	public bool AlwaysMaxRange;
	[FieldOffset(52)]
	public PrefabGUID NewThrowEntity;
	[FieldOffset(56)]
	public int HitCounter;
}
