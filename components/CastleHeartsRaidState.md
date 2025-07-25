---
nav_exclude: true
search_exclude: true
---

# CastleHeartsRaidState

```csharp
public struct CastleHeartsRaidState
{
	static CastleHeartsRaidState()
	{
		Il2CppClassPointerStore<CastleHeartsRaidState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Systems.dll", "ProjectM.Gameplay.Systems", "CastleHeartsRaidState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartsRaidState>.NativeClassPtr);
		CastleHeartsRaidState.NativeFieldInfoPtr_RaidedCastleHearts = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartsRaidState>.NativeClassPtr, "RaidedCastleHearts");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartsRaidState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RaidedCastleHearts;

	public NativeParallelHashSet<Entity> RaidedCastleHearts;
}
```

## Server Systems

- [CastleHeartClearRaidStateSystem](/systems/server/CastleHeartClearRaidStateSystem)
- [CastleHeartDetectRaidSystem](/systems/server/CastleHeartDetectRaidSystem)
- [CastleHeartUpdateRaidStateSystem](/systems/server/CastleHeartUpdateRaidStateSystem)
