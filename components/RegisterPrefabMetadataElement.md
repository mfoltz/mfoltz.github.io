---
nav_exclude: true
search_exclude: false
---

# RegisterPrefabMetadataElement

```csharp
public struct RegisterPrefabMetadataElement
{
	static RegisterPrefabMetadataElement()
	{
		Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "RegisterPrefabMetadataElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr);
		RegisterPrefabMetadataElement.NativeFieldInfoPtr_PrefabIdentifier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr, "PrefabIdentifier");
		RegisterPrefabMetadataElement.NativeFieldInfoPtr_AssetGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr, "AssetGuid");
		RegisterPrefabMetadataElement.NativeFieldInfoPtr_AssetName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr, "AssetName");
		RegisterPrefabMetadataElement.NativeFieldInfoPtr_LabelFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr, "LabelFlags");
		RegisterPrefabMetadataElement.NativeFieldInfoPtr_IsScriptableObject = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr, "IsScriptableObject");
		RegisterPrefabMetadataElement.NativeFieldInfoPtr_IsNotConvertable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr, "IsNotConvertable");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RegisterPrefabMetadataElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabIdentifier;
	private static readonly IntPtr NativeFieldInfoPtr_AssetGuid;
	private static readonly IntPtr NativeFieldInfoPtr_AssetName;
	private static readonly IntPtr NativeFieldInfoPtr_LabelFlags;
	private static readonly IntPtr NativeFieldInfoPtr_IsScriptableObject;
	private static readonly IntPtr NativeFieldInfoPtr_IsNotConvertable;

	public PrefabIdentifier PrefabIdentifier;

	public AssetGuid AssetGuid;

	public FixedString128Bytes AssetName;

	public ConvertedLabelFlags LabelFlags;

	public bool IsScriptableObject;

	public bool IsNotConvertable;
}
```

## Client Systems

- [PrefabCollectionSystem](/systems/client/PrefabCollectionSystem)
