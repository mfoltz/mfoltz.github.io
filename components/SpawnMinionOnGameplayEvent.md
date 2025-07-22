---
nav_exclude: true
search_exclude: false
---

# SpawnMinionOnGameplayEvent

```csharp
public struct SpawnMinionOnGameplayEvent
{
	static SpawnMinionOnGameplayEvent()
	{
		Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpawnMinionOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr);
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_Location = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "Location");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "Rotation");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_PrefabPickMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "PrefabPickMode");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_OwnerSpawnDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "OwnerSpawnDirection");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "MinDistance");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "MaxDistance");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_EventTargetAggroBoost = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "EventTargetAggroBoost");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_MaxDistanceFromPreCombatPositionOverride = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "MaxDistanceFromPreCombatPositionOverride");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "Count");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_IncludeInMinionCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "IncludeInMinionCount");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_AllowCharm = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "AllowCharm");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_CanBeConsumed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "CanBeConsumed");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_OverrideBloodQualityCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "OverrideBloodQualityCurve");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_ForceBadBloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "ForceBadBloodQuality");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_TriggerMasterDeathActionOnDowned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "TriggerMasterDeathActionOnDowned");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_InheritOwnerFaction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "InheritOwnerFaction");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_InheritOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "InheritOwner");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_AcceptSpawnInCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "AcceptSpawnInCollision");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_SetTeamToOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "SetTeamToOwner");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_DisableDropsFromMinion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "DisableDropsFromMinion");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_MasterDeathAction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "MasterDeathAction");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_MasterDeathBuffPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "MasterDeathBuffPrefabGuid");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_BlobData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "BlobData");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_SpawnSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "SpawnSequenceGuid");
		SpawnMinionOnGameplayEvent.NativeFieldInfoPtr_StatsOverrides = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, "StatsOverrides");
		SpawnMinionOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, 100668343);
	}

	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(SpawnMinionOnGameplayEvent.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnMinionOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Location;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabPickMode;
	private static readonly IntPtr NativeFieldInfoPtr_OwnerSpawnDirection;
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_EventTargetAggroBoost;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistanceFromPreCombatPositionOverride;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_IncludeInMinionCount;
	private static readonly IntPtr NativeFieldInfoPtr_AllowCharm;
	private static readonly IntPtr NativeFieldInfoPtr_CanBeConsumed;
	private static readonly IntPtr NativeFieldInfoPtr_OverrideBloodQualityCurve;
	private static readonly IntPtr NativeFieldInfoPtr_ForceBadBloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerMasterDeathActionOnDowned;
	private static readonly IntPtr NativeFieldInfoPtr_InheritOwnerFaction;
	private static readonly IntPtr NativeFieldInfoPtr_InheritOwner;
	private static readonly IntPtr NativeFieldInfoPtr_AcceptSpawnInCollision;
	private static readonly IntPtr NativeFieldInfoPtr_SetTeamToOwner;
	private static readonly IntPtr NativeFieldInfoPtr_DisableDropsFromMinion;
	private static readonly IntPtr NativeFieldInfoPtr_MasterDeathAction;
	private static readonly IntPtr NativeFieldInfoPtr_MasterDeathBuffPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_BlobData;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_StatsOverrides;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;

	public SpawnMiniononGameplayEventLocation Location;

	public SpawnMinionOnGameplayEventRotation Rotation;

	public SpawnMinionOnGameplayEventPrefabPickMode PrefabPickMode;

	public bool OwnerSpawnDirection;

	public float MinDistance;

	public float MaxDistance;

	public float EventTargetAggroBoost;

	public float MaxDistanceFromPreCombatPositionOverride;

	public int Count;

	public bool IncludeInMinionCount;

	public bool AllowCharm;

	public bool CanBeConsumed;

	public CurveReference OverrideBloodQualityCurve;

	public bool ForceBadBloodQuality;

	public bool TriggerMasterDeathActionOnDowned;

	public bool InheritOwnerFaction;

	public bool InheritOwner;

	public bool AcceptSpawnInCollision;

	public bool SetTeamToOwner;

	public bool DisableDropsFromMinion;

	public MinionMasterDeathAction MasterDeathAction;

	public PrefabGUID MasterDeathBuffPrefabGuid;

	public BlobAssetReference<SpawnMinionOnGameplayEventBlob> BlobData;

	public SequenceGUID SpawnSequenceGuid;

	public SpawnMinionOnGameplayEventStatsOverrides StatsOverrides;
}
```
