---
nav_exclude: true
search_exclude: false
---

# LogEntitySpawnDestroy

```csharp
public struct LogEntitySpawnDestroy
{
	static LogEntitySpawnDestroy()
	{
		Il2CppClassPointerStore<LogEntitySpawnDestroy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LogEntitySpawnDestroy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LogEntitySpawnDestroy>.NativeClassPtr);
		LogEntitySpawnDestroy.NativeFieldInfoPtr_OnlyNetworkedEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LogEntitySpawnDestroy>.NativeClassPtr, "OnlyNetworkedEntities");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LogEntitySpawnDestroy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnlyNetworkedEntities;

	public bool OnlyNetworkedEntities;
}
```

## Client Systems

- [LogEntityDestroySystem](/systems/client/LogEntityDestroySystem)
- [LogEntitySpawnNetworkSystem](/systems/client/LogEntitySpawnNetworkSystem)
- [LogEntitySpawnSystem](/systems/client/LogEntitySpawnSystem)
