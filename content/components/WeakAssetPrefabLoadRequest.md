---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WeakAssetPrefabLoadRequest
{
	static WeakAssetPrefabLoadRequest()
	{
		Il2CppClassPointerStore<WeakAssetPrefabLoadRequest>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "WeakAssetPrefabLoadRequest");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WeakAssetPrefabLoadRequest>.NativeClassPtr);
		WeakAssetPrefabLoadRequest.NativeFieldInfoPtr_WeakReferenceId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeakAssetPrefabLoadRequest>.NativeClassPtr, "WeakReferenceId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WeakAssetPrefabLoadRequest>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WeakReferenceId;

	public EntityPrefabReference WeakReferenceId;
}
```
