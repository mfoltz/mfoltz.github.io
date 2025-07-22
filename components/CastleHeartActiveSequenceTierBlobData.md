---
nav_exclude: true
search_exclude: true
---

# CastleHeartActiveSequenceTierBlobData

```csharp
public struct CastleHeartActiveSequenceTierBlobData
{
	static CastleHeartActiveSequenceTierBlobData()
	{
		Il2CppClassPointerStore<CastleHeartActiveSequenceTierBlobData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleHeartActiveSequenceTierBlobData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartActiveSequenceTierBlobData>.NativeClassPtr);
		CastleHeartActiveSequenceTierBlobData.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartActiveSequenceTierBlobData>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartActiveSequenceTierBlobData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public BlobAssetReference<CastleHeartActiveSequenceTierBlob> Blob;
}
```
