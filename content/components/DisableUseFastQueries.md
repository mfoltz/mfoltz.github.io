---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DisableUseFastQueries
{
	static DisableUseFastQueries()
	{
		Il2CppClassPointerStore<DisableUseFastQueries>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DisableUseFastQueries");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableUseFastQueries>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableUseFastQueries>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [GarbageCollectArchetypeSystem]({{% relref "systems/server/GarbageCollectArchetypeSystem.md" %}})

## Client Systems

- [GarbageCollectArchetypeSystem]({{% relref "systems/client/GarbageCollectArchetypeSystem.md" %}})
