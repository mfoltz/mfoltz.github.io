---
nav_exclude: true
search_exclude: false
---

# RequestEntityPrefabLoaded

```csharp
public struct RequestEntityPrefabLoaded
{
	static RequestEntityPrefabLoaded()
	{
		Il2CppClassPointerStore<RequestEntityPrefabLoaded>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "RequestEntityPrefabLoaded");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RequestEntityPrefabLoaded>.NativeClassPtr);
		RequestEntityPrefabLoaded.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RequestEntityPrefabLoaded>.NativeClassPtr, "Prefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RequestEntityPrefabLoaded>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;

	public EntityPrefabReference Prefab;
}
```
