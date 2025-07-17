---
nav_exclude: true
search_exclude: true
---

# RetainBlobAssetBatchPtr

```csharp
public struct RetainBlobAssetBatchPtr
{
	static RetainBlobAssetBatchPtr()
	{
		Il2CppClassPointerStore<RetainBlobAssetBatchPtr>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "RetainBlobAssetBatchPtr");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RetainBlobAssetBatchPtr>.NativeClassPtr);
		RetainBlobAssetBatchPtr.NativeFieldInfoPtr_BlobAssetBatchPtr = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RetainBlobAssetBatchPtr>.NativeClassPtr, "BlobAssetBatchPtr");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RetainBlobAssetBatchPtr>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlobAssetBatchPtr;

	public unsafe BlobAssetBatch* BlobAssetBatchPtr;
}
```

## Server Systems

- [Unity.Entities.RetainBlobAssetSystem](/systems/Unity.Entities.RetainBlobAssetSystem)
