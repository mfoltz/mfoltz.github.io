---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ScriptSpawn
{
	static ScriptSpawn()
	{
		Il2CppClassPointerStore<ScriptSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "ScriptSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScriptSpawn>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScriptSpawn>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [ScriptSpawnServer]({{% relref "systems/server/ScriptSpawnServer.md" %}})

## Client Systems

- [ScriptSpawnClient]({{% relref "systems/client/ScriptSpawnClient.md" %}})
