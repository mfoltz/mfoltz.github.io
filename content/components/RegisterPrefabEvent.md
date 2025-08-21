---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RegisterPrefabEvent
{
	static RegisterPrefabEvent()
	{
		Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "RegisterPrefabEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr);
		RegisterPrefabEvent.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr, "PrefabGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterPrefabEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;

	public PrefabGUID PrefabGUID;
}
```

## Server Systems

- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})
- [ProcessWaitingForBakingSystem]({{% relref "systems/server/ProcessWaitingForBakingSystem.md" %}})
- [RegisterPrefabEventsCleanupSystem]({{% relref "systems/server/RegisterPrefabEventsCleanupSystem.md" %}})
- [SpellModCollectionSystem]({{% relref "systems/server/SpellModCollectionSystem.md" %}})
- [SpellModTierCollectionSystem]({{% relref "systems/server/SpellModTierCollectionSystem.md" %}})

## Client Systems

- [AimAssistConfigurationsSystem]({{% relref "systems/client/AimAssistConfigurationsSystem.md" %}})
- [AimDirectionPreviewAssetSystem]({{% relref "systems/client/AimDirectionPreviewAssetSystem.md" %}})
- [AimWorldTargetPreviewAssetSystem]({{% relref "systems/client/AimWorldTargetPreviewAssetSystem.md" %}})
- [GameDataManager]({{% relref "systems/client/GameDataManager.md" %}})
- [GameDataSystem]({{% relref "systems/client/GameDataSystem.md" %}})
- [SpellModTierCollectionSystem]({{% relref "systems/client/SpellModTierCollectionSystem.md" %}})
