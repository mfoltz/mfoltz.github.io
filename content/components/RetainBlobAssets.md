---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RetainBlobAssets
{
	static RetainBlobAssets()
	{
		Il2CppClassPointerStore<RetainBlobAssets>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "RetainBlobAssets");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RetainBlobAssets>.NativeClassPtr);
		RetainBlobAssets.NativeFieldInfoPtr_DummyBlobAssetReference = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RetainBlobAssets>.NativeClassPtr, "DummyBlobAssetReference");
		RetainBlobAssets.NativeFieldInfoPtr_FramesToRetainBlobAssets = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RetainBlobAssets>.NativeClassPtr, "FramesToRetainBlobAssets");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RetainBlobAssets>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DummyBlobAssetReference;
	private static readonly IntPtr NativeFieldInfoPtr_FramesToRetainBlobAssets;

	public BlobAssetReference<byte> DummyBlobAssetReference;

	public int FramesToRetainBlobAssets;
}
```

## Server Systems

- [RetainBlobAssetSystem]({{% relref "systems/server/RetainBlobAssetSystem.md" %}})
- [SetupRetainBlobAssetsSystem]({{% relref "systems/server/SetupRetainBlobAssetsSystem.md" %}})

## Client Systems

- [RetainBlobAssetSystem]({{% relref "systems/client/RetainBlobAssetSystem.md" %}})
- [SetupRetainBlobAssetsSystem]({{% relref "systems/client/SetupRetainBlobAssetsSystem.md" %}})
