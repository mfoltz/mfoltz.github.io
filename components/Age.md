---
nav_exclude: true
search_exclude: false
---

# Age

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

- [HealingBuffSystem](/systems/server/HealingBuffSystem)
- [JumpFromCliffsTravelSystem](/systems/server/JumpFromCliffsTravelSystem)
- [KnockbackSystem](/systems/server/KnockbackSystem)
- [KnockbackSystemSpawn](/systems/server/KnockbackSystemSpawn)
- [MoveSpeedBuffSystem](/systems/server/MoveSpeedBuffSystem)
- [RespawnDelaySystem_Server](/systems/server/RespawnDelaySystem_Server)
- [SpellMovementSystem_Spawn](/systems/server/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/server/SpellMovementSystem_Update)
- [TeleportBuffSystem_Server](/systems/server/TeleportBuffSystem_Server)
- [TravelToTargetSystem](/systems/server/TravelToTargetSystem)
- [VbloodGhostBuffSystem_Server](/systems/server/VbloodGhostBuffSystem_Server)

## Client Systems

- [CharacterHudProgressBarSystem](/systems/client/CharacterHudProgressBarSystem)
- [FadeToBlackSystem_Client](/systems/client/FadeToBlackSystem_Client)
- [FeedInteractionProgressSystem](/systems/client/FeedInteractionProgressSystem)
- [HybridCameraSystem](/systems/client/HybridCameraSystem)
- [JumpFromCliffsTravelSystem](/systems/client/JumpFromCliffsTravelSystem)
- [ProfessorCoilSystem_Client](/systems/client/ProfessorCoilSystem_Client)
- [RespawnDelaySystem_Client](/systems/client/RespawnDelaySystem_Client)
- [SpellMovementSystem_Spawn](/systems/client/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/client/SpellMovementSystem_Update)
- [StunCloth_Modify_System](/systems/client/StunCloth_Modify_System)
- [TargetAOESequenceSystem](/systems/client/TargetAOESequenceSystem)
- [TargetAoE_DestroySystem](/systems/client/TargetAoE_DestroySystem)
- [TeleportBuffSystem_Client](/systems/client/TeleportBuffSystem_Client)
- [TravelBuffSequenceSpawnSystem](/systems/client/TravelBuffSequenceSpawnSystem)
- [TravelBuffSequenceSystem](/systems/client/TravelBuffSequenceSystem)
- [TravelToTargetSystem](/systems/client/TravelToTargetSystem)
