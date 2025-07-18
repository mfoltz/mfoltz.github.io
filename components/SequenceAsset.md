---
nav_exclude: true
search_exclude: true
---

# SequenceAsset

```csharp
public struct SequenceAsset
{
	static SequenceAsset()
	{
		Il2CppClassPointerStore<SequenceAsset>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "Stunlock.Sequencer", "SequenceAsset");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SequenceAsset>.NativeClassPtr);
		SequenceAsset.NativeFieldInfoPtr_SequenceBlobRef = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SequenceAsset>.NativeClassPtr, "SequenceBlobRef");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SequenceAsset>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceBlobRef;

	public BlobAssetReference<SequenceBlob> SequenceBlobRef;
}
```

## Client Systems

- [AimPreviewMeshGenSystem](/systems/client/AimPreviewMeshGenSystem)
- [CreateSequenceSystem](/systems/client/CreateSequenceSystem)
- [CreateSequenceSystem_Deserialize](/systems/client/CreateSequenceSystem_Deserialize)
- [UpdatePresentationPostGraphSystem](/systems/client/UpdatePresentationPostGraphSystem)
