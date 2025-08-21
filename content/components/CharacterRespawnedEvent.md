---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CharacterRespawnedEvent
{
	static CharacterRespawnedEvent()
	{
		Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CharacterRespawnedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr);
		CharacterRespawnedEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CharacterRespawnedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```

## Server Systems

- [RemoveReactToCharacterSpawnTag]({{% relref "systems/server/RemoveReactToCharacterSpawnTag.md" %}})
- [ResetBloodOnRespawnSystem]({{% relref "systems/server/ResetBloodOnRespawnSystem.md" %}})
