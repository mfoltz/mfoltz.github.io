---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ServantSpawnHandler
{
	static ServantSpawnHandler()
	{
		Il2CppClassPointerStore<ServantSpawnHandler>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServantSpawnHandler");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServantSpawnHandler>.NativeClassPtr);
		ServantSpawnHandler.NativeFieldInfoPtr_StationEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServantSpawnHandler>.NativeClassPtr, "StationEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServantSpawnHandler>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StationEntity;

	public Entity StationEntity;
}
```

## Server Systems

- [ServantSpawnSetupSystem]({{% relref "systems/server/ServantSpawnSetupSystem.md" %}})
