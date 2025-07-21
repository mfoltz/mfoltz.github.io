---
nav_exclude: true
search_exclude: false
---

# SpellModTierCollectionData

```csharp
public struct SpellModTierCollectionData
{
	static SpellModTierCollectionData()
	{
		Il2CppClassPointerStore<SpellModTierCollectionData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "SpellModTierCollectionData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModTierCollectionData>.NativeClassPtr);
		SpellModTierCollectionData.NativeFieldInfoPtr_GlobalTierSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModTierCollectionData>.NativeClassPtr, "GlobalTierSettings");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModTierCollectionData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GlobalTierSettings;

	public NativeParallelHashMap<int, BlobAssetReference<SpellModSetGlobalTierData>> GlobalTierSettings;
}
```
