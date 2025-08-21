---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Example_GameplayEvent_DataServer
{
	static Example_GameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Example_GameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Example_GameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Example_GameplayEvent_DataServer>.NativeClassPtr);
		Example_GameplayEvent_DataServer.NativeFieldInfoPtr_OnSpawnEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_GameplayEvent_DataServer>.NativeClassPtr, "OnSpawnEventId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Example_GameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnSpawnEventId;

	public GameplayEventId OnSpawnEventId;
}
```
