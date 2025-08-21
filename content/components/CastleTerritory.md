---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleTerritory
{
	static CastleTerritory()
	{
		Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleTerritory");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr);
		CastleTerritory.NativeFieldInfoPtr_ZoneId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, "ZoneId");
		CastleTerritory.NativeFieldInfoPtr_CastleHeart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, "CastleHeart");
		CastleTerritory.NativeFieldInfoPtr_WorldBounds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, "WorldBounds");
		CastleTerritory.NativeFieldInfoPtr_IsGlobalDebugTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, "IsGlobalDebugTerritory");
		CastleTerritory.NativeFieldInfoPtr_MinHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, "MinHeightLevel");
		CastleTerritory.NativeFieldInfoPtr_MaxHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, "MaxHeightLevel");
		CastleTerritory.NativeFieldInfoPtr_CastleTerritoryIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, "CastleTerritoryIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTerritory>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ZoneId;
	private static readonly IntPtr NativeFieldInfoPtr_CastleHeart;
	private static readonly IntPtr NativeFieldInfoPtr_WorldBounds;
	private static readonly IntPtr NativeFieldInfoPtr_IsGlobalDebugTerritory;
	private static readonly IntPtr NativeFieldInfoPtr_MinHeightLevel;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHeightLevel;
	private static readonly IntPtr NativeFieldInfoPtr_CastleTerritoryIndex;

	public MapZoneId ZoneId;

	public Entity CastleHeart;

	public BoundsMinMax WorldBounds;

	public bool IsGlobalDebugTerritory;

	public byte MinHeightLevel;

	public byte MaxHeightLevel;

	public int CastleTerritoryIndex;
}
```

## Server Systems

- [CastleTerritoryHeightsSystem]({{% relref "systems/server/CastleTerritoryHeightsSystem.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [SetTerritoryWorldRegionSystem]({{% relref "systems/server/SetTerritoryWorldRegionSystem.md" %}})
- [TerritorySpawnSystem]({{% relref "systems/server/TerritorySpawnSystem.md" %}})

## Client Systems

- [SetTerritoryWorldRegionSystem]({{% relref "systems/client/SetTerritoryWorldRegionSystem.md" %}})
- [TerritorySpawnSystem]({{% relref "systems/client/TerritorySpawnSystem.md" %}})
