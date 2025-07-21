---
nav_exclude: true
search_exclude: false
---

# TerritoryBuildTriggerComponent

```csharp
public struct TerritoryBuildTriggerComponent
{
	static TerritoryBuildTriggerComponent()
	{
		Il2CppClassPointerStore<TerritoryBuildTriggerComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.HUD", "TerritoryBuildTriggerComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerritoryBuildTriggerComponent>.NativeClassPtr);
		TerritoryBuildTriggerComponent.NativeFieldInfoPtr_PlayerIsInSuitableTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerritoryBuildTriggerComponent>.NativeClassPtr, "PlayerIsInSuitableTerritory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerritoryBuildTriggerComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PlayerIsInSuitableTerritory;

	public bool PlayerIsInSuitableTerritory;
}
```

## Client Systems

- [AchievementsSystem](/systems/client/AchievementsSystem)
- [TutorialSystem](/systems/client/TutorialSystem)
- [UpdateRecommendedTerritoryMarkerSystems](/systems/client/UpdateRecommendedTerritoryMarkerSystems)
