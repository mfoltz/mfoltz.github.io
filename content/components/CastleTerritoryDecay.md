---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleTerritoryDecay
{
	static CastleTerritoryDecay()
	{
		Il2CppClassPointerStore<CastleTerritoryDecay>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleTerritoryDecay");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTerritoryDecay>.NativeClassPtr);
		CastleTerritoryDecay.NativeFieldInfoPtr_Decaying = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTerritoryDecay>.NativeClassPtr, "Decaying");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTerritoryDecay>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Decaying;

	public bool Decaying;
}
```

## Server Systems

- [TerritoryManagerSpawnSystem]({{% relref "systems/server/TerritoryManagerSpawnSystem.md" %}})
