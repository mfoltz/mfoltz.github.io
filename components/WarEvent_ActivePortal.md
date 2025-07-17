---
nav_exclude: true
search_exclude: true
---

# WarEvent_ActivePortal

```csharp
public struct WarEvent_ActivePortal
{
	static WarEvent_ActivePortal()
	{
		Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_ActivePortal");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr);
		WarEvent_ActivePortal.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "Entity");
		WarEvent_ActivePortal.NativeFieldInfoPtr_UnitComposition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "UnitComposition");
		WarEvent_ActivePortal.NativeFieldInfoPtr_SpawnRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "SpawnRadius");
		WarEvent_ActivePortal.NativeFieldInfoPtr_Points = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "Points");
		WarEvent_ActivePortal.NativeFieldInfoPtr_SpawnedPoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "SpawnedPoints");
		WarEvent_ActivePortal.NativeFieldInfoPtr_ActivePoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "ActivePoints");
		WarEvent_ActivePortal.NativeFieldInfoPtr_MaxPoints_Base = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "MaxPoints_Base");
		WarEvent_ActivePortal.NativeFieldInfoPtr_MaxPoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "MaxPoints");
		WarEvent_ActivePortal.NativeFieldInfoPtr_TargetPoints_Base = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "TargetPoints_Base");
		WarEvent_ActivePortal.NativeFieldInfoPtr_TargetActivePoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "TargetActivePoints");
		WarEvent_ActivePortal.NativeFieldInfoPtr_MinPointsForRefill_Base = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "MinPointsForRefill_Base");
		WarEvent_ActivePortal.NativeFieldInfoPtr_MinPointsForRefill = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "MinPointsForRefill");
		WarEvent_ActivePortal.NativeFieldInfoPtr_RefillPointModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "RefillPointModifier");
		WarEvent_ActivePortal.NativeFieldInfoPtr_StackableDropModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "StackableDropModifier");
		WarEvent_ActivePortal.NativeFieldInfoPtr_ChunkCoordinate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "ChunkCoordinate");
		WarEvent_ActivePortal.NativeFieldInfoPtr_VariantType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "VariantType");
		WarEvent_ActivePortal.NativeFieldInfoPtr_CurrentSpawnDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "CurrentSpawnDelay");
		WarEvent_ActivePortal.NativeFieldInfoPtr_NextUnitSpawnTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "NextUnitSpawnTicks");
		WarEvent_ActivePortal.NativeFieldInfoPtr_NextUnitSpawnWaveTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "NextUnitSpawnWaveTicks");
		WarEvent_ActivePortal.NativeFieldInfoPtr_ThrashPerNormal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "ThrashPerNormal");
		WarEvent_ActivePortal.NativeFieldInfoPtr_MinNormalUnits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "MinNormalUnits");
		WarEvent_ActivePortal.NativeFieldInfoPtr_InitialTargetPoints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "InitialTargetPoints");
		WarEvent_ActivePortal.NativeFieldInfoPtr_KillingBlowPoints_Normal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "KillingBlowPoints_Normal");
		WarEvent_ActivePortal.NativeFieldInfoPtr_UnitSpawnWaveDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "UnitSpawnWaveDelay");
		WarEvent_ActivePortal.NativeFieldInfoPtr_WaveSpawnDelayCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "WaveSpawnDelayCurve");
		WarEvent_ActivePortal.NativeFieldInfoPtr_UnitSpawnDelayCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "UnitSpawnDelayCurve");
		WarEvent_ActivePortal.NativeFieldInfoPtr_UnitSpawnDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "UnitSpawnDelay");
		WarEvent_ActivePortal.NativeFieldInfoPtr_KillingBlowPoints_Thrash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, "KillingBlowPoints_Thrash");
		WarEvent_ActivePortal.NativeMethodInfoPtr_get_RemainingPoints_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, 100672806);
	}
	public unsafe int RemainingPoints
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WarEvent_ActivePortal.NativeMethodInfoPtr_get_RemainingPoints_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_ActivePortal>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_UnitComposition;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnRadius;
	private static readonly IntPtr NativeFieldInfoPtr_Points;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnedPoints;
	private static readonly IntPtr NativeFieldInfoPtr_ActivePoints;
	private static readonly IntPtr NativeFieldInfoPtr_MaxPoints_Base;
	private static readonly IntPtr NativeFieldInfoPtr_MaxPoints;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPoints_Base;
	private static readonly IntPtr NativeFieldInfoPtr_TargetActivePoints;
	private static readonly IntPtr NativeFieldInfoPtr_MinPointsForRefill_Base;
	private static readonly IntPtr NativeFieldInfoPtr_MinPointsForRefill;
	private static readonly IntPtr NativeFieldInfoPtr_RefillPointModifier;
	private static readonly IntPtr NativeFieldInfoPtr_StackableDropModifier;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkCoordinate;
	private static readonly IntPtr NativeFieldInfoPtr_VariantType;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentSpawnDelay;
	private static readonly IntPtr NativeFieldInfoPtr_NextUnitSpawnTicks;
	private static readonly IntPtr NativeFieldInfoPtr_NextUnitSpawnWaveTicks;
	private static readonly IntPtr NativeFieldInfoPtr_ThrashPerNormal;
	private static readonly IntPtr NativeFieldInfoPtr_MinNormalUnits;
	private static readonly IntPtr NativeFieldInfoPtr_InitialTargetPoints;
	private static readonly IntPtr NativeFieldInfoPtr_KillingBlowPoints_Normal;
	private static readonly IntPtr NativeFieldInfoPtr_UnitSpawnWaveDelay;
	private static readonly IntPtr NativeFieldInfoPtr_WaveSpawnDelayCurve;
	private static readonly IntPtr NativeFieldInfoPtr_UnitSpawnDelayCurve;
	private static readonly IntPtr NativeFieldInfoPtr_UnitSpawnDelay;
	private static readonly IntPtr NativeFieldInfoPtr_KillingBlowPoints_Thrash;
	private static readonly IntPtr NativeMethodInfoPtr_get_RemainingPoints_Public_get_Int32_0;

	public Entity Entity;

	public PrefabGUID UnitComposition;

	public float SpawnRadius;

	public int Points;

	public int SpawnedPoints;

	public int ActivePoints;

	public int MaxPoints_Base;

	public int MaxPoints;

	public int TargetPoints_Base;

	public int TargetActivePoints;

	public int MinPointsForRefill_Base;

	public int MinPointsForRefill;

	public float RefillPointModifier;

	public float StackableDropModifier;

	public TerrainChunk ChunkCoordinate;

	public byte VariantType;

	public float CurrentSpawnDelay;

	public long NextUnitSpawnTicks;

	public long NextUnitSpawnWaveTicks;

	public int ThrashPerNormal;

	public int MinNormalUnits;

	public int InitialTargetPoints;

	public int KillingBlowPoints_Normal;

	public float UnitSpawnWaveDelay;

	public CurveReference WaveSpawnDelayCurve;

	public CurveReference UnitSpawnDelayCurve;

	public float UnitSpawnDelay;

	public int KillingBlowPoints_Thrash;
}
```
