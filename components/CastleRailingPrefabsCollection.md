---
nav_exclude: true
search_exclude: true
---

# CastleRailingPrefabsCollection

```csharp
public struct CastleRailingPrefabsCollection
{
	static CastleRailingPrefabsCollection()
	{
		Il2CppClassPointerStore<CastleRailingPrefabsCollection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRailingPrefabsCollection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRailingPrefabsCollection>.NativeClassPtr);
		CastleRailingPrefabsCollection.NativeFieldInfoPtr_RailingPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRailingPrefabsCollection>.NativeClassPtr, "RailingPrefab");
		CastleRailingPrefabsCollection.NativeFieldInfoPtr_CornerPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRailingPrefabsCollection>.NativeClassPtr, "CornerPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRailingPrefabsCollection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RailingPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_CornerPrefab;

	public PrefabGUID RailingPrefab;

	public PrefabGUID CornerPrefab;
}
```
