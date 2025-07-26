---
nav_exclude: true
search_exclude: true
---

# GallopBuff

```csharp
public struct GallopBuff
{
	static GallopBuff()
	{
		Il2CppClassPointerStore<GallopBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GallopBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GallopBuff>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GallopBuff>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [GallopBuffSystem_Destroy](/systems/server/GallopBuffSystem_Destroy)
- [GallopBuffSystem_Server](/systems/server/GallopBuffSystem_Server)
- [GallopBuffSystem_Spawn](/systems/server/GallopBuffSystem_Spawn)

## Client Systems

- [GallopBuffSystem_Destroy](/systems/client/GallopBuffSystem_Destroy)
- [GallopBuffSystem_Spawn](/systems/client/GallopBuffSystem_Spawn)
