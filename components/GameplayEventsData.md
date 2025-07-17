---
nav_exclude: true
search_exclude: true
---

# GameplayEventsData

```csharp
public struct GameplayEventsData
{
	static GameplayEventsData()
	{
		Il2CppClassPointerStore<GameplayEventsData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GameplayEventsData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameplayEventsData>.NativeClassPtr);
		GameplayEventsData.NativeFieldInfoPtr_GameplayEvents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameplayEventsData>.NativeClassPtr, "GameplayEvents");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameplayEventsData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GameplayEvents;

	public NativeList<GameplayEvent> GameplayEvents;
}
```
