---
nav_exclude: true
search_exclude: true
---

# DetachEntityFromSpawnerEvent

```csharp
public struct DetachEntityFromSpawnerEvent
{
	static DetachEntityFromSpawnerEvent()
	{
		Il2CppClassPointerStore<DetachEntityFromSpawnerEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DetachEntityFromSpawnerEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DetachEntityFromSpawnerEvent>.NativeClassPtr);
		DetachEntityFromSpawnerEvent.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DetachEntityFromSpawnerEvent>.NativeClassPtr, "Entity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DetachEntityFromSpawnerEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;

	public Entity Entity;
}
```
