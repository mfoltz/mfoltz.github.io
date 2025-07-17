---
nav_exclude: true
search_exclude: true
---

# SceneSectionData

```csharp
public struct SceneSectionData
{
	static SceneSectionData()
	{
		Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Entities", "SceneSectionData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr);
		SceneSectionData.NativeFieldInfoPtr_SceneGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "SceneGUID");
		SceneSectionData.NativeFieldInfoPtr_SubSectionIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "SubSectionIndex");
		SceneSectionData.NativeFieldInfoPtr_FileSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "FileSize");
		SceneSectionData.NativeFieldInfoPtr_ObjectReferenceCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "ObjectReferenceCount");
		SceneSectionData.NativeFieldInfoPtr_BoundingVolume = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "BoundingVolume");
		SceneSectionData.NativeFieldInfoPtr_Codec = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "Codec");
		SceneSectionData.NativeFieldInfoPtr_DecompressedFileSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "DecompressedFileSize");
		SceneSectionData.NativeFieldInfoPtr_BlobHeader = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, "BlobHeader");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneSectionData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SceneGUID;
	private static readonly IntPtr NativeFieldInfoPtr_SubSectionIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FileSize;
	private static readonly IntPtr NativeFieldInfoPtr_ObjectReferenceCount;
	private static readonly IntPtr NativeFieldInfoPtr_BoundingVolume;
	private static readonly IntPtr NativeFieldInfoPtr_Codec;
	private static readonly IntPtr NativeFieldInfoPtr_DecompressedFileSize;
	private static readonly IntPtr NativeFieldInfoPtr_BlobHeader;

	public Hash128 SceneGUID;

	public int SubSectionIndex;

	public int FileSize;

	public int ObjectReferenceCount;

	public MinMaxAABB BoundingVolume;

	public Codec Codec;

	public int DecompressedFileSize;

	public RuntimeBlobHeaderRef BlobHeader;
}
```

## Server Systems

- [Unity.Scenes.SceneSectionStreamingSystem](/systems/Unity.Scenes.SceneSectionStreamingSystem)
