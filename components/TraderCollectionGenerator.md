---
nav_exclude: true
search_exclude: false
---

# TraderCollectionGenerator

```csharp
public struct TraderCollectionGenerator
{
	static TraderCollectionGenerator()
	{
		Il2CppClassPointerStore<TraderCollectionGenerator>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TraderCollectionGenerator");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TraderCollectionGenerator>.NativeClassPtr);
		TraderCollectionGenerator.NativeFieldInfoPtr_GeneratorBlob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TraderCollectionGenerator>.NativeClassPtr, "GeneratorBlob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TraderCollectionGenerator>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GeneratorBlob;

	public BlobAssetReference<TraderCollectionGeneratorBlob> GeneratorBlob;
}
```

## Server Systems

- [TraderSpawnSystem](/systems/server/TraderSpawnSystem)
