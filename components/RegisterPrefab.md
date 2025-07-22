---
nav_exclude: true
search_exclude: false
---

# RegisterPrefab

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

- [FactionLookupSystem](/systems/server/FactionLookupSystem)
- [GameDataSystem](/systems/server/GameDataSystem)
- [GenerateCastlePrefabsCollectionSystem](/systems/server/GenerateCastlePrefabsCollectionSystem)
- [JewelRegisterSystem](/systems/server/JewelRegisterSystem)
- [ProgressionDependencySystem](/systems/server/ProgressionDependencySystem)
- [SetupServerSettings](/systems/server/SetupServerSettings)
- [SetupServerSettings_PrefabMappings](/systems/server/SetupServerSettings_PrefabMappings)
- [SpellSchoolMappingSystem](/systems/server/SpellSchoolMappingSystem)

## Client Systems

- [AdaptiveTriggerSingletonSystem](/systems/client/AdaptiveTriggerSingletonSystem)
- [FactionLookupSystem](/systems/client/FactionLookupSystem)
- [GameDataManager](/systems/client/GameDataManager)
- [GameDataSystem](/systems/client/GameDataSystem)
- [ProgressionDependencySystem](/systems/client/ProgressionDependencySystem)
- [SetupServerSettings](/systems/client/SetupServerSettings)
- [SetupServerSettings_PrefabMappings](/systems/client/SetupServerSettings_PrefabMappings)
