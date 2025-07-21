---
nav_exclude: true
search_exclude: false
---

# ScriptUpdate

```csharp
public struct ScriptUpdate
{
	static ScriptUpdate()
	{
		Il2CppClassPointerStore<ScriptUpdate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "ScriptUpdate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ScriptUpdate>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ScriptUpdate>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [ScriptUpdateServer](/systems/server/ScriptUpdateServer)

## Client Systems

- [ScriptUpdateClient](/systems/client/ScriptUpdateClient)
