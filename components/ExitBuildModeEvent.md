---
nav_exclude: true
search_exclude: false
---

# ExitBuildModeEvent

```csharp
public struct ExitBuildModeEvent
{
	static ExitBuildModeEvent()
	{
		Il2CppClassPointerStore<ExitBuildModeEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "ExitBuildModeEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ExitBuildModeEvent>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ExitBuildModeEvent>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [BuildModeCloseSystem](/systems/client/BuildModeCloseSystem)
