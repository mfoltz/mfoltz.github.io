---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WorldVFXSpawnManagerIndex
{
	static WorldVFXSpawnManagerIndex()
	{
		Il2CppClassPointerStore<WorldVFXSpawnManagerIndex>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "WorldVFXSpawnManagerIndex");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WorldVFXSpawnManagerIndex>.NativeClassPtr);
		WorldVFXSpawnManagerIndex.NativeFieldInfoPtr_FinalSpawnCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldVFXSpawnManagerIndex>.NativeClassPtr, "FinalSpawnCooldown");
		WorldVFXSpawnManagerIndex.NativeFieldInfoPtr_NextSpawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldVFXSpawnManagerIndex>.NativeClassPtr, "NextSpawnTime");
		WorldVFXSpawnManagerIndex.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WorldVFXSpawnManagerIndex>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WorldVFXSpawnManagerIndex>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FinalSpawnCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_NextSpawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_Index;

	public float FinalSpawnCooldown;

	public float NextSpawnTime;

	public int Index;
}
```

## Client Systems

- [GlobalWorldVFXInstanceSystem]({{% relref "systems/client/GlobalWorldVFXInstanceSystem.md" %}})
