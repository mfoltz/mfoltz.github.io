---
nav_exclude: true
search_exclude: true
---

# AggroConsumer

```csharp
public struct AggroConsumer
{
	static AggroConsumer()
	{
		Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AggroConsumer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr);
		AggroConsumer.NativeFieldInfoPtr_ProximityRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "ProximityRadius");
		AggroConsumer.NativeFieldInfoPtr_ProximityWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "ProximityWeight");
		AggroConsumer.NativeFieldInfoPtr_DamageWeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "DamageWeight");
		AggroConsumer.NativeFieldInfoPtr_RemoveDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "RemoveDelay");
		AggroConsumer.NativeFieldInfoPtr_TargetSwitchThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "TargetSwitchThreshold");
		AggroConsumer.NativeFieldInfoPtr_AlertDecayPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "AlertDecayPerSecond");
		AggroConsumer.NativeFieldInfoPtr_PreCombatPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "PreCombatPosition");
		AggroConsumer.NativeFieldInfoPtr_MaxDistanceFromPreCombatPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "MaxDistanceFromPreCombatPosition");
		AggroConsumer.NativeFieldInfoPtr_AggroAppliesCombatBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "AggroAppliesCombatBuff");
		AggroConsumer.NativeFieldInfoPtr_CombatAreaRelocationDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "CombatAreaRelocationDistance");
		AggroConsumer.NativeFieldInfoPtr_AggroTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "AggroTarget");
		AggroConsumer.NativeFieldInfoPtr_AlertTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "AlertTarget");
		AggroConsumer.NativeFieldInfoPtr_AggroReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "AggroReason");
		AggroConsumer.NativeFieldInfoPtr_DeaggroReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "DeaggroReason");
		AggroConsumer.NativeFieldInfoPtr_Active = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "Active");
		AggroConsumer.NativeFieldInfoPtr_RecieveAlerts = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, "RecieveAlerts");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AggroConsumer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ProximityRadius;
	private static readonly IntPtr NativeFieldInfoPtr_ProximityWeight;
	private static readonly IntPtr NativeFieldInfoPtr_DamageWeight;
	private static readonly IntPtr NativeFieldInfoPtr_RemoveDelay;
	private static readonly IntPtr NativeFieldInfoPtr_TargetSwitchThreshold;
	private static readonly IntPtr NativeFieldInfoPtr_AlertDecayPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_PreCombatPosition;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistanceFromPreCombatPosition;
	private static readonly IntPtr NativeFieldInfoPtr_AggroAppliesCombatBuff;
	private static readonly IntPtr NativeFieldInfoPtr_CombatAreaRelocationDistance;
	private static readonly IntPtr NativeFieldInfoPtr_AggroTarget;
	private static readonly IntPtr NativeFieldInfoPtr_AlertTarget;
	private static readonly IntPtr NativeFieldInfoPtr_AggroReason;
	private static readonly IntPtr NativeFieldInfoPtr_DeaggroReason;
	private static readonly IntPtr NativeFieldInfoPtr_Active;
	private static readonly IntPtr NativeFieldInfoPtr_RecieveAlerts;

	public float ProximityRadius;

	public float ProximityWeight;

	public float DamageWeight;

	public float RemoveDelay;

	public float TargetSwitchThreshold;

	public float AlertDecayPerSecond;

	public float3 PreCombatPosition;

	public float MaxDistanceFromPreCombatPosition;

	public bool AggroAppliesCombatBuff;

	public float CombatAreaRelocationDistance;

	public NetworkedEntity AggroTarget;

	public NetworkedEntity AlertTarget;

	public AggroReason AggroReason;

	public DeaggroReason DeaggroReason;

	public ModifiableBool Active;

	public bool RecieveAlerts;
}
```

## Server Systems

- [MinionSpawnSystem]({{< relref "systems/server/MinionSpawnSystem.md" >}})
- [SetPreCombatPositionSystem]({{< relref "systems/server/SetPreCombatPositionSystem.md" >}})
- [SetPreCombatPositionSystem_Spawn]({{< relref "systems/server/SetPreCombatPositionSystem_Spawn.md" >}})

## Client Systems

- [IdleAISoundSystem]({{< relref "systems/client/IdleAISoundSystem.md" >}})
