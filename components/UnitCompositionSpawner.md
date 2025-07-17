---
nav_exclude: true
search_exclude: true
---

# UnitCompositionSpawner

```csharp
public struct UnitCompositionSpawner
{
	static UnitCompositionSpawner()
	{
		Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitCompositionSpawner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr);
		UnitCompositionSpawner.NativeFieldInfoPtr_UnitCompositionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "UnitCompositionId");
		UnitCompositionSpawner.NativeFieldInfoPtr_CurrentTimeRequirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "CurrentTimeRequirement");
		UnitCompositionSpawner.NativeFieldInfoPtr_RespawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "RespawnTime");
		UnitCompositionSpawner.NativeFieldInfoPtr_RespawnTimeModifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "RespawnTimeModifier");
		UnitCompositionSpawner.NativeFieldInfoPtr_MaxRespawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "MaxRespawnTime");
		UnitCompositionSpawner.NativeFieldInfoPtr_MinRespawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "MinRespawnTime");
		UnitCompositionSpawner.NativeFieldInfoPtr_PositionSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "PositionSource");
		UnitCompositionSpawner.NativeFieldInfoPtr_UptimeSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "UptimeSettings");
		UnitCompositionSpawner.NativeFieldInfoPtr_PlayerRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "PlayerRange");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnDelayMinMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnDelayMinMax");
		UnitCompositionSpawner.NativeFieldInfoPtr_DestroyWhenAllDead = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "DestroyWhenAllDead");
		UnitCompositionSpawner.NativeFieldInfoPtr_UseRandomSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "UseRandomSpawn");
		UnitCompositionSpawner.NativeFieldInfoPtr_Initialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "Initialized");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnerState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnerState");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnDelayFrom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnDelayFrom");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnDelayTo = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnDelayTo");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnDelayTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnDelayTime");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnProbability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnProbability");
		UnitCompositionSpawner.NativeFieldInfoPtr_CurrentSpawnProbability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "CurrentSpawnProbability");
		UnitCompositionSpawner.NativeFieldInfoPtr_WasDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "WasDisabled");
		UnitCompositionSpawner.NativeFieldInfoPtr_Guard = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "Guard");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnTime");
		UnitCompositionSpawner.NativeFieldInfoPtr_PatrolEndedDespawnBuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "PatrolEndedDespawnBuffPrefabGuid");
		UnitCompositionSpawner.NativeFieldInfoPtr_SpawnBuffKind = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "SpawnBuffKind");
		UnitCompositionSpawner.NativeFieldInfoPtr_ReapplySpawnBuffOnReturn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, "ReapplySpawnBuffOnReturn");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitCompositionSpawner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitCompositionId;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTimeRequirement;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnTimeModifier;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRespawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_MinRespawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_PositionSource;
	private static readonly IntPtr NativeFieldInfoPtr_UptimeSettings;
	private static readonly IntPtr NativeFieldInfoPtr_PlayerRange;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnDelayMinMax;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWhenAllDead;
	private static readonly IntPtr NativeFieldInfoPtr_UseRandomSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_Initialized;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnerState;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnDelayFrom;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnDelayTo;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnDelayTime;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnProbability;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentSpawnProbability;
	private static readonly IntPtr NativeFieldInfoPtr_WasDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_Guard;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_PatrolEndedDespawnBuffPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnBuffKind;
	private static readonly IntPtr NativeFieldInfoPtr_ReapplySpawnBuffOnReturn;

	public UnitCompositionId UnitCompositionId;

	public DayTimeSpan CurrentTimeRequirement;

	public Nullable_Unboxed<double> RespawnTime;

	public float RespawnTimeModifier;

	public float MaxRespawnTime;

	public float MinRespawnTime;

	public Entity PositionSource;

	public PrefabGUID UptimeSettings;

	public float2 PlayerRange;

	public float2 SpawnDelayMinMax;

	public bool DestroyWhenAllDead;

	public bool UseRandomSpawn;

	public bool Initialized;

	public UnitCompositionSpawner.State SpawnerState;

	public DateDuration SpawnDelayFrom;

	public DateDuration SpawnDelayTo;

	public double SpawnDelayTime;

	public float SpawnProbability;

	public float CurrentSpawnProbability;

	public bool WasDisabled;

	public bool Guard;

	public double SpawnTime;

	public PrefabGUID PatrolEndedDespawnBuffPrefabGuid;

	public SpawnBuffKind SpawnBuffKind;

	public bool ReapplySpawnBuffOnReturn;
	public enum State
	{
		Inactive,
		WaitingForSpawn,
		Active,
		WaitingForDespawn
	}
}
```
