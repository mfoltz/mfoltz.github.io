---
nav_exclude: true
search_exclude: true
---

# RebuildBlueprintMapping

```csharp
public struct RebuildBlueprintMapping
{
	static RebuildBlueprintMapping()
	{
		Il2CppClassPointerStore<RebuildBlueprintMapping>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RebuildBlueprintMapping");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RebuildBlueprintMapping>.NativeClassPtr);
		RebuildBlueprintMapping.NativeFieldInfoPtr_Prefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RebuildBlueprintMapping>.NativeClassPtr, "Prefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RebuildBlueprintMapping>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Prefab;

	public PrefabGUID Prefab;
}
```
