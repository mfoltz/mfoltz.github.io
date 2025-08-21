---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Age
{
	static Age()
	{
		Il2CppClassPointerStore<Age>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Age");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Age>.NativeClassPtr);
		Age.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Age>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Age>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float Value;
}
```

## Server Systems

- [HealingBuffSystem]({{% relref "systems/server/HealingBuffSystem.md" %}})
- [JumpFromCliffsTravelSystem]({{% relref "systems/server/JumpFromCliffsTravelSystem.md" %}})
- [KnockbackSystem]({{% relref "systems/server/KnockbackSystem.md" %}})
- [KnockbackSystemSpawn]({{% relref "systems/server/KnockbackSystemSpawn.md" %}})
- [MoveSpeedBuffSystem]({{% relref "systems/server/MoveSpeedBuffSystem.md" %}})
- [RespawnDelaySystem_Server]({{% relref "systems/server/RespawnDelaySystem_Server.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/server/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/server/SpellMovementSystem_Update.md" %}})
- [TeleportBuffSystem_Server]({{% relref "systems/server/TeleportBuffSystem_Server.md" %}})
- [TravelToTargetSystem]({{% relref "systems/server/TravelToTargetSystem.md" %}})
- [VbloodGhostBuffSystem_Server]({{% relref "systems/server/VbloodGhostBuffSystem_Server.md" %}})

## Client Systems

- [CharacterHudProgressBarSystem]({{% relref "systems/client/CharacterHudProgressBarSystem.md" %}})
- [FadeToBlackSystem_Client]({{% relref "systems/client/FadeToBlackSystem_Client.md" %}})
- [FeedInteractionProgressSystem]({{% relref "systems/client/FeedInteractionProgressSystem.md" %}})
- [HybridCameraSystem]({{% relref "systems/client/HybridCameraSystem.md" %}})
- [JumpFromCliffsTravelSystem]({{% relref "systems/client/JumpFromCliffsTravelSystem.md" %}})
- [ProfessorCoilSystem_Client]({{% relref "systems/client/ProfessorCoilSystem_Client.md" %}})
- [RespawnDelaySystem_Client]({{% relref "systems/client/RespawnDelaySystem_Client.md" %}})
- [SpellMovementSystem_Spawn]({{% relref "systems/client/SpellMovementSystem_Spawn.md" %}})
- [SpellMovementSystem_Update]({{% relref "systems/client/SpellMovementSystem_Update.md" %}})
- [StunCloth_Modify_System]({{% relref "systems/client/StunCloth_Modify_System.md" %}})
- [TargetAOESequenceSystem]({{% relref "systems/client/TargetAOESequenceSystem.md" %}})
- [TargetAoE_DestroySystem]({{% relref "systems/client/TargetAoE_DestroySystem.md" %}})
- [TeleportBuffSystem_Client]({{% relref "systems/client/TeleportBuffSystem_Client.md" %}})
- [TravelBuffSequenceSpawnSystem]({{% relref "systems/client/TravelBuffSequenceSpawnSystem.md" %}})
- [TravelBuffSequenceSystem]({{% relref "systems/client/TravelBuffSequenceSystem.md" %}})
- [TravelToTargetSystem]({{% relref "systems/client/TravelToTargetSystem.md" %}})
