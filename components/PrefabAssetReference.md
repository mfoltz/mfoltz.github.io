---
nav_exclude: true
search_exclude: false
---

# PrefabAssetReference

```csharp
public struct PrefabAssetReference
{
	static PrefabAssetReference()
	{
		Il2CppClassPointerStore<PrefabAssetReference>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "PrefabAssetReference");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabAssetReference>.NativeClassPtr);
		PrefabAssetReference.NativeFieldInfoPtr__ReferenceId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabAssetReference>.NativeClassPtr, "_ReferenceId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabAssetReference>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__ReferenceId;

	public EntityPrefabReference _ReferenceId;
}
```
