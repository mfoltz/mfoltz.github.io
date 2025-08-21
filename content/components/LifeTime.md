---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LifeTime
{
	static LifeTime()
	{
		Il2CppClassPointerStore<LifeTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LifeTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LifeTime>.NativeClassPtr);
		LifeTime.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeTime>.NativeClassPtr, "Duration");
		LifeTime.NativeFieldInfoPtr_EndAction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LifeTime>.NativeClassPtr, "EndAction");
		LifeTime.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LifeTime>.NativeClassPtr, 100664424);
	}

	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LifeTime.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LifeTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_EndAction;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;

	public float Duration;

	public LifeTimeEndAction EndAction;
}
```

## Server Systems

- [BuffSystem_Spawn_Server]({{% relref "systems/server/BuffSystem_Spawn_Server.md" %}})
- [DisconnectSettingsSystem]({{% relref "systems/server/DisconnectSettingsSystem.md" %}})
- [JumpFromCliffsTravelSystem]({{% relref "systems/server/JumpFromCliffsTravelSystem.md" %}})
- [KnockbackSystem]({{% relref "systems/server/KnockbackSystem.md" %}})
- [KnockbackSystemSpawn]({{% relref "systems/server/KnockbackSystemSpawn.md" %}})
- [MoveSpeedBuffSystem]({{% relref "systems/server/MoveSpeedBuffSystem.md" %}})
- [RandomLifeTimeSystem_Spawn]({{% relref "systems/server/RandomLifeTimeSystem_Spawn.md" %}})
- [RespawnDelaySystem_Server]({{% relref "systems/server/RespawnDelaySystem_Server.md" %}})
- [Spawn_DashSystem]({{% relref "systems/server/Spawn_DashSystem.md" %}})
- [Spawn_TravelBuffSystem]({{% relref "systems/server/Spawn_TravelBuffSystem.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/server/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/server/SpellMovementSystem_Update.md" %}})
- [TargetAOESystem]({{% relref "systems/server/TargetAOESystem.md" %}})
- [TravelToTargetSystem]({{% relref "systems/server/TravelToTargetSystem.md" %}})
- [VbloodGhostBuffSystem_Server]({{% relref "systems/server/VbloodGhostBuffSystem_Server.md" %}})

## Client Systems

- [CharacterHudProgressBarSystem]({{% relref "systems/client/CharacterHudProgressBarSystem.md" %}})
- [FadeToBlackSystem_Client]({{% relref "systems/client/FadeToBlackSystem_Client.md" %}})
- [FeedInteractionProgressSystem]({{% relref "systems/client/FeedInteractionProgressSystem.md" %}})
- [HybridCameraSystem]({{% relref "systems/client/HybridCameraSystem.md" %}})
- [JumpFromCliffsTravelSystem]({{% relref "systems/client/JumpFromCliffsTravelSystem.md" %}})
- [PlayMountedSequenceSystem]({{% relref "systems/client/PlayMountedSequenceSystem.md" %}})
- [RespawnDelaySystem_Client]({{% relref "systems/client/RespawnDelaySystem_Client.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/client/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/client/SpellMovementSystem_Update.md" %}})
- [TargetAOESequenceSystem]({{% relref "systems/client/TargetAOESequenceSystem.md" %}})
- [TargetAoE_DestroySystem]({{% relref "systems/client/TargetAoE_DestroySystem.md" %}})
- [TravelBuffSequenceSpawnSystem]({{% relref "systems/client/TravelBuffSequenceSpawnSystem.md" %}})
- [TravelBuffSequenceSystem]({{% relref "systems/client/TravelBuffSequenceSystem.md" %}})
- [TravelToTargetSystem]({{% relref "systems/client/TravelToTargetSystem.md" %}})
