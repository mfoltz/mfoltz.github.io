---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RetainBlobAssetPtr
{
	static RetainBlobAssetPtr()
	{
		Il2CppClassPointerStore<RetainBlobAssetPtr>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "RetainBlobAssetPtr");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RetainBlobAssetPtr>.NativeClassPtr);
		RetainBlobAssetPtr.NativeFieldInfoPtr_BlobAsset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RetainBlobAssetPtr>.NativeClassPtr, "BlobAsset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RetainBlobAssetPtr>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlobAsset;

	public unsafe BlobAssetHeader* BlobAsset;
}
```

## Server Systems

- [RetainBlobAssetSystem]({{% relref "systems/server/RetainBlobAssetSystem.md" %}})

## Client Systems

- [RetainBlobAssetSystem]({{% relref "systems/client/RetainBlobAssetSystem.md" %}})
