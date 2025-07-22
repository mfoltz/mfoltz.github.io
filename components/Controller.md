---
nav_exclude: true
search_exclude: false
---

# Controller

```csharp
public struct Controller
{
	static Controller()
	{
		Il2CppClassPointerStore<Controller>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Controller");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Controller>.NativeClassPtr);
		Controller.NativeFieldInfoPtr_Controlled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Controller>.NativeClassPtr, "Controlled");
		Controller.NativeFieldInfoPtr_PreviouslyControlled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Controller>.NativeClassPtr, "PreviouslyControlled");
		Controller.NativeFieldInfoPtr_InputType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Controller>.NativeClassPtr, "InputType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Controller>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Controlled;
	private static readonly IntPtr NativeFieldInfoPtr_PreviouslyControlled;
	private static readonly IntPtr NativeFieldInfoPtr_InputType;

	public NetworkedEntity Controlled;

	public Entity PreviouslyControlled;

	public ControllerType InputType;
}
```

## Server Systems

- [KillAndDisableInactivePlayerAfterDuration](/systems/server/KillAndDisableInactivePlayerAfterDuration)
- [ServerBootstrapSystem](/systems/server/ServerBootstrapSystem)
- [UpdateEntityInput_Server](/systems/server/UpdateEntityInput_Server)
- [UserActivityGridSystem](/systems/server/UserActivityGridSystem)
- [UserControllerDataCopySystem](/systems/server/UserControllerDataCopySystem)
- [UserDistanceTravelledSystem](/systems/server/UserDistanceTravelledSystem)
- [UserTranslationCopySystem](/systems/server/UserTranslationCopySystem)

## Client Systems

- [AbilityInputSystem](/systems/client/AbilityInputSystem)
- [CritterSystem](/systems/client/CritterSystem)
- [CursorPositionSystem](/systems/client/CursorPositionSystem)
- [EntityControlSystem](/systems/client/EntityControlSystem)
- [GameplayInputSystem](/systems/client/GameplayInputSystem)
- [GlobalCritterSpawnManager](/systems/client/GlobalCritterSpawnManager)
- [GlobalWorldVFXInstanceSystem](/systems/client/GlobalWorldVFXInstanceSystem)
- [UserActivityGridSystem](/systems/client/UserActivityGridSystem)
- [UserTranslationCopySystem](/systems/client/UserTranslationCopySystem)
