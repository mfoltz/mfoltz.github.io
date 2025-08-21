---
nav_exclude: true
search_exclude: true
---

```csharp
public struct OutdatedPrefab
{
	static OutdatedPrefab()
	{
		Il2CppClassPointerStore<OutdatedPrefab>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "OutdatedPrefab");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OutdatedPrefab>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OutdatedPrefab>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [SetupServerSettings]({{% relref "systems/server/SetupServerSettings.md" %}})

## Client Systems

- [SetupServerSettings]({{% relref "systems/client/SetupServerSettings.md" %}})
