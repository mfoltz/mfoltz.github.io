---
nav_exclude: true
search_exclude: true
---

# ResolvedSceneHash

```csharp
public struct ResolvedSceneHash
{
	static ResolvedSceneHash()
	{
		Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "ResolvedSceneHash");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr);
		ResolvedSceneHash.NativeFieldInfoPtr_ArtifactHash = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr, "ArtifactHash");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResolvedSceneHash>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ArtifactHash;

	public Hash128 ArtifactHash;
}
```

## Server Systems

- [ResolveSceneReferenceSystem](/systems/server/ResolveSceneReferenceSystem)

## Client Systems

- [ResolveSceneReferenceSystem](/systems/client/ResolveSceneReferenceSystem)
