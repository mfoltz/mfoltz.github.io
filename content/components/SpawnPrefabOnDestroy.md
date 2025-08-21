---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SpawnPrefabOnDestroy
{
	static SpawnPrefabOnDestroy()
	{
		Il2CppClassPointerStore<SpawnPrefabOnDestroy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SpawnPrefabOnDestroy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnPrefabOnDestroy>.NativeClassPtr);
		SpawnPrefabOnDestroy.NativeFieldInfoPtr_SpawnPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnPrefabOnDestroy>.NativeClassPtr, "SpawnPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnPrefabOnDestroy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPrefab;

	public PrefabGUID SpawnPrefab;
}
```

## Server Systems

- [SpawnPrefabOnDestroySystem]({{% relref "systems/server/SpawnPrefabOnDestroySystem.md" %}})
