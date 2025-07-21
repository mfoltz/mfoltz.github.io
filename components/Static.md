---
nav_exclude: true
search_exclude: false
---

# Static

```csharp
public struct Static
{
	static Static()
	{
		Il2CppClassPointerStore<Static>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "Static");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Static>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Static>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [CheckSpawnTagWithoutPrefabGuidSystem](/systems/client/CheckSpawnTagWithoutPrefabGuidSystem)
