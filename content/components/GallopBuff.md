---
nav_exclude: true
search_exclude: true
---

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

- [GallopBuffSystem_Destroy]({{% relref "systems/server/GallopBuffSystem_Destroy.md" %}})
- [GallopBuffSystem_Server]({{% relref "systems/server/GallopBuffSystem_Server.md" %}})
- [GallopBuffSystem_Spawn]({{% relref "systems/server/GallopBuffSystem_Spawn.md" %}})

## Client Systems

- [GallopBuffSystem_Destroy]({{% relref "systems/client/GallopBuffSystem_Destroy.md" %}})
- [GallopBuffSystem_Spawn]({{% relref "systems/client/GallopBuffSystem_Spawn.md" %}})
