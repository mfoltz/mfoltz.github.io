---
nav_exclude: true
search_exclude: false
---

# DismantleEvent

```csharp
public struct DismantleEvent
{
	static DismantleEvent()
	{
		Il2CppClassPointerStore<DismantleEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DismantleEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DismantleEvent>.NativeClassPtr);
		DismantleEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleEvent>.NativeClassPtr, "Character");
		DismantleEvent.NativeFieldInfoPtr_DismantleTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DismantleEvent>.NativeClassPtr, "DismantleTarget");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DismantleEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_DismantleTarget;

	public Entity Character;

	public Entity DismantleTarget;
}
```

## Server Systems

- [HandleDismantleEventSystem](/systems/server/HandleDismantleEventSystem)
