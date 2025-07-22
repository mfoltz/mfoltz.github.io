---
nav_exclude: true
search_exclude: false
---

# RemoveEntityFromSpawnerEvent

```csharp
public struct RemoveEntityFromSpawnerEvent
{
	static RemoveEntityFromSpawnerEvent()
	{
		Il2CppClassPointerStore<RemoveEntityFromSpawnerEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RemoveEntityFromSpawnerEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RemoveEntityFromSpawnerEvent>.NativeClassPtr);
		RemoveEntityFromSpawnerEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemoveEntityFromSpawnerEvent>.NativeClassPtr, "Entity");
		RemoveEntityFromSpawnerEvent.NativeFieldInfoPtr_OldSpawner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RemoveEntityFromSpawnerEvent>.NativeClassPtr, "OldSpawner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RemoveEntityFromSpawnerEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_OldSpawner;

	public Entity Entity;

	public Entity OldSpawner;
}
```
