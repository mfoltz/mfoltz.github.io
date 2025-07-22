---
nav_exclude: true
search_exclude: true
---

# SpellModCollectionData

```csharp
public struct SpellModCollectionData
{
	static SpellModCollectionData()
	{
		Il2CppClassPointerStore<SpellModCollectionData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModCollectionData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModCollectionData>.NativeClassPtr);
		SpellModCollectionData.NativeFieldInfoPtr_SpellModCollection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModCollectionData>.NativeClassPtr, "SpellModCollection");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModCollectionData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellModCollection;

	public SpellModCollection<BlobAssetReference<SpellModBlob>> SpellModCollection;
}
```

## Server Systems

- [OnJewelLoadSystem](/systems/server/OnJewelLoadSystem)
