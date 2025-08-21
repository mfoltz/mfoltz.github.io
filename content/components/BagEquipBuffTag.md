---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BagEquipBuffTag
{
	static BagEquipBuffTag()
	{
		Il2CppClassPointerStore<BagEquipBuffTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BagEquipBuffTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BagEquipBuffTag>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BagEquipBuffTag>.NativeClassPtr, ref this));
	}
}
```

## Server Systems

- [BagEquipTagSystem_Destroy]({{% relref "systems/server/BagEquipTagSystem_Destroy.md" %}})
- [BagEquipTagSystem_Spawn]({{% relref "systems/server/BagEquipTagSystem_Spawn.md" %}})
