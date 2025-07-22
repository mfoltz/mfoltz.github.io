---
nav_exclude: true
search_exclude: false
---

# StaticHierarchyData

```csharp
public struct StaticHierarchyData
{
	static StaticHierarchyData()
	{
		Il2CppClassPointerStore<StaticHierarchyData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "StaticHierarchyData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StaticHierarchyData>.NativeClassPtr);
		StaticHierarchyData.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StaticHierarchyData>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StaticHierarchyData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public BlobAssetReference<StaticHierarchyBlobAsset> Blob;
}
```
