---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RegisterPrefab
{
	static RegisterPrefab()
	{
		Il2CppClassPointerStore<RegisterPrefab>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "RegisterPrefab");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterPrefab>.NativeClassPtr);
		RegisterPrefab.NativeFieldInfoPtr_Caller = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefab>.NativeClassPtr, "Caller");
		RegisterPrefab.NativeFieldInfoPtr_AssetGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefab>.NativeClassPtr, "AssetGuid");
		RegisterPrefab.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefab>.NativeClassPtr, "Name");
		RegisterPrefab.NativeFieldInfoPtr_PrefabEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefab>.NativeClassPtr, "PrefabEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterPrefab>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Caller;
	private static readonly IntPtr NativeFieldInfoPtr_AssetGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabEntity;

	public FixedString512Bytes Caller;

	public AssetGuid AssetGuid;

	public FixedString128Bytes Name;

	public Entity PrefabEntity;
}
```

## Server Systems

- [FactionLookupSystem]({{% relref "systems/server/FactionLookupSystem.md" %}})
- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})
- [GenerateCastlePrefabsCollectionSystem]({{% relref "systems/server/GenerateCastlePrefabsCollectionSystem.md" %}})
- [JewelRegisterSystem]({{% relref "systems/server/JewelRegisterSystem.md" %}})
- [ProgressionDependencySystem]({{% relref "systems/server/ProgressionDependencySystem.md" %}})
- [SetupServerSettings]({{% relref "systems/server/SetupServerSettings.md" %}})
- [SetupServerSettings_PrefabMappings]({{% relref "systems/server/SetupServerSettings_PrefabMappings.md" %}})
- [SpellSchoolMappingSystem]({{% relref "systems/server/SpellSchoolMappingSystem.md" %}})

## Client Systems

- [AdaptiveTriggerSingletonSystem]({{% relref "systems/client/AdaptiveTriggerSingletonSystem.md" %}})
- [FactionLookupSystem]({{% relref "systems/client/FactionLookupSystem.md" %}})
- [GameDataManager]({{% relref "systems/client/GameDataManager.md" %}})
- [GameDataSystem]({{% relref "systems/client/GameDataSystem.md" %}})
- [ProgressionDependencySystem]({{% relref "systems/client/ProgressionDependencySystem.md" %}})
- [SetupServerSettings]({{% relref "systems/client/SetupServerSettings.md" %}})
- [SetupServerSettings_PrefabMappings]({{% relref "systems/client/SetupServerSettings_PrefabMappings.md" %}})
