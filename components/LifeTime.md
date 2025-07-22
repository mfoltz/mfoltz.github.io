---
nav_exclude: true
search_exclude: false
---

# LifeTime

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

- [BuffSystem_Spawn_Server](/systems/server/BuffSystem_Spawn_Server)
- [DisconnectSettingsSystem](/systems/server/DisconnectSettingsSystem)
- [JumpFromCliffsTravelSystem](/systems/server/JumpFromCliffsTravelSystem)
- [KnockbackSystem](/systems/server/KnockbackSystem)
- [KnockbackSystemSpawn](/systems/server/KnockbackSystemSpawn)
- [MoveSpeedBuffSystem](/systems/server/MoveSpeedBuffSystem)
- [RandomLifeTimeSystem_Spawn](/systems/server/RandomLifeTimeSystem_Spawn)
- [RespawnDelaySystem_Server](/systems/server/RespawnDelaySystem_Server)
- [Spawn_DashSystem](/systems/server/Spawn_DashSystem)
- [Spawn_TravelBuffSystem](/systems/server/Spawn_TravelBuffSystem)
- [SpellMovementSystem_Spawn](/systems/server/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/server/SpellMovementSystem_Update)
- [TargetAOESystem](/systems/server/TargetAOESystem)
- [TravelToTargetSystem](/systems/server/TravelToTargetSystem)
- [VbloodGhostBuffSystem_Server](/systems/server/VbloodGhostBuffSystem_Server)

## Client Systems

- [CharacterHudProgressBarSystem](/systems/client/CharacterHudProgressBarSystem)
- [FadeToBlackSystem_Client](/systems/client/FadeToBlackSystem_Client)
- [FeedInteractionProgressSystem](/systems/client/FeedInteractionProgressSystem)
- [HybridCameraSystem](/systems/client/HybridCameraSystem)
- [JumpFromCliffsTravelSystem](/systems/client/JumpFromCliffsTravelSystem)
- [PlayMountedSequenceSystem](/systems/client/PlayMountedSequenceSystem)
- [RespawnDelaySystem_Client](/systems/client/RespawnDelaySystem_Client)
- [SpellMovementSystem_Spawn](/systems/client/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/client/SpellMovementSystem_Update)
- [TargetAOESequenceSystem](/systems/client/TargetAOESequenceSystem)
- [TargetAoE_DestroySystem](/systems/client/TargetAoE_DestroySystem)
- [TravelBuffSequenceSpawnSystem](/systems/client/TravelBuffSequenceSpawnSystem)
- [TravelBuffSequenceSystem](/systems/client/TravelBuffSequenceSystem)
- [TravelToTargetSystem](/systems/client/TravelToTargetSystem)
