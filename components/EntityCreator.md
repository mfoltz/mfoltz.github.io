---
nav_exclude: true
search_exclude: true
---

# EntityCreator

```csharp
public struct EntityCreator
{
	static EntityCreator()
	{
		Il2CppClassPointerStore<EntityCreator>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityCreator");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityCreator>.NativeClassPtr);
		EntityCreator.NativeFieldInfoPtr_Creator = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityCreator>.NativeClassPtr, "Creator");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityCreator>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Creator;

	public NetworkedEntity Creator;
}
```

## Server Systems

- [MinionSpawnSystem](/systems/server/MinionSpawnSystem)
- [MountInitSystem_Server](/systems/server/MountInitSystem_Server)

## Client Systems

- [CharacterHudProgressBarSystem](/systems/client/CharacterHudProgressBarSystem)
