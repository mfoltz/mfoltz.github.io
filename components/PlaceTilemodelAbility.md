---
nav_exclude: true
search_exclude: false
---

# PlaceTilemodelAbility

```csharp
public struct PlaceTilemodelAbility
{
	static PlaceTilemodelAbility()
	{
		Il2CppClassPointerStore<PlaceTilemodelAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlaceTilemodelAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlaceTilemodelAbility>.NativeClassPtr);
		PlaceTilemodelAbility.NativeFieldInfoPtr_SpawnTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaceTilemodelAbility>.NativeClassPtr, "SpawnTranslation");
		PlaceTilemodelAbility.NativeFieldInfoPtr_PrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaceTilemodelAbility>.NativeClassPtr, "PrefabGuid");
		PlaceTilemodelAbility.NativeFieldInfoPtr_SpawnTileRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaceTilemodelAbility>.NativeClassPtr, "SpawnTileRotation");
		PlaceTilemodelAbility.NativeFieldInfoPtr_ConsumeType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlaceTilemodelAbility>.NativeClassPtr, "ConsumeType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlaceTilemodelAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTranslation;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnTileRotation;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeType;

	public float3 SpawnTranslation;

	public PrefabGUID PrefabGuid;

	public TileRotation SpawnTileRotation;

	public BuildResourceConsumeType ConsumeType;
}
```
