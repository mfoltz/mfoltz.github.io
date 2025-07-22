---
nav_exclude: true
search_exclude: false
---

# PrefabLoadResult

```csharp
public struct PrefabLoadResult
{
	static PrefabLoadResult()
	{
		Il2CppClassPointerStore<PrefabLoadResult>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "PrefabLoadResult");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PrefabLoadResult>.NativeClassPtr);
		PrefabLoadResult.NativeFieldInfoPtr_PrefabRoot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PrefabLoadResult>.NativeClassPtr, "PrefabRoot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PrefabLoadResult>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrefabRoot;

	public Entity PrefabRoot;
}
```
