---
nav_exclude: true
search_exclude: false
---

# CreateTileModelSelection

```csharp
public struct CreateTileModelSelection
{
	static CreateTileModelSelection()
	{
		Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CreateTileModelSelection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr);
		CreateTileModelSelection.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, "Prefab");
		CreateTileModelSelection.NativeFieldInfoPtr_UniqueKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, "UniqueKey");
		CreateTileModelSelection.NativeFieldInfoPtr_VariationIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, "VariationIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateTileModelSelection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;
	private static readonly IntPtr NativeFieldInfoPtr_UniqueKey;
	private static readonly IntPtr NativeFieldInfoPtr_VariationIndex;

	public PrefabGUID Prefab;

	public CastleRebuildUniqueKey UniqueKey;

	public byte VariationIndex;
}
```
