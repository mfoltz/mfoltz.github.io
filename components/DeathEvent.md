---
nav_exclude: true
search_exclude: false
---

# DeathEvent

```csharp
public struct DeathEvent
{
	static DeathEvent()
	{
		Il2CppClassPointerStore<DeathEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DeathEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr);
		DeathEvent.NativeFieldInfoPtr_Died = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "Died");
		DeathEvent.NativeFieldInfoPtr_Killer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "Killer");
		DeathEvent.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "Source");
		DeathEvent.NativeFieldInfoPtr_StatChangeReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, "StatChangeReason");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeathEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Died;
	private static readonly IntPtr NativeFieldInfoPtr_Killer;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_StatChangeReason;

	public Entity Died;

	public Entity Killer;

	public Entity Source;

	public StatChangeReason StatChangeReason;
}
```

## Server Systems

- [AlertAlliesOnDeathSystem](/systems/server/AlertAlliesOnDeathSystem)
- [CastleBuildingDeadCleanup](/systems/server/CastleBuildingDeadCleanup)
- [Cleanup_BuffModificationsSystem_Server](/systems/server/Cleanup_BuffModificationsSystem_Server)
- [CreateGameplayEventsOnDeathSystem](/systems/server/CreateGameplayEventsOnDeathSystem)
- [DeathEventListenerSystem](/systems/server/DeathEventListenerSystem)
- [DestroyBuffsWithDeadTargetsOrOwnersSystem](/systems/server/DestroyBuffsWithDeadTargetsOrOwnersSystem)
- [DestroyDeathEventSystem](/systems/server/DestroyDeathEventSystem)
- [KillMinionsOnMasterDeathSystem](/systems/server/KillMinionsOnMasterDeathSystem)
- [OnDeathSystem](/systems/server/OnDeathSystem)
- [OnKillSystem](/systems/server/OnKillSystem)
- [UntrackVbloodOnDeathSystem](/systems/server/UntrackVbloodOnDeathSystem)
- [UserKillServerEventSystem](/systems/server/UserKillServerEventSystem)
