---
nav_exclude: true
search_exclude: true
---

# StationBonusData

```csharp
public struct StationBonusData
{
	static StationBonusData()
	{
		Il2CppClassPointerStore<StationBonusData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StationBonusData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StationBonusData>.NativeClassPtr);
		StationBonusData.NativeFieldInfoPtr_ModificationValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationBonusData>.NativeClassPtr, "ModificationValue");
		StationBonusData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationBonusData>.NativeClassPtr, "Guid");
		StationBonusData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationBonusData>.NativeClassPtr, "Entity");
		StationBonusData.NativeFieldInfoPtr_BonusType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationBonusData>.NativeClassPtr, "BonusType");
		StationBonusData.NativeFieldInfoPtr_Requirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationBonusData>.NativeClassPtr, "Requirement");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StationBonusData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationValue;
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_BonusType;
	private static readonly IntPtr NativeFieldInfoPtr_Requirement;

	public float ModificationValue;

	public PrefabGUID Guid;

	public Entity Entity;

	public StationBonusType BonusType;

	public StationBonusRequirement Requirement;
}
```

## Server Systems

- [GameDataSystem](/systems/server/GameDataSystem)

## Client Systems

- [GameDataSystem](/systems/client/GameDataSystem)
