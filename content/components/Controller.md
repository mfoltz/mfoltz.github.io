---
nav_exclude: true
search_exclude: true
---

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

- [KillAndDisableInactivePlayerAfterDuration]({{% relref "systems/server/KillAndDisableInactivePlayerAfterDuration.md" %}})
- [ServerBootstrapSystem]({{% relref "systems/server/ServerBootstrapSystem.md" %}})
- [UpdateEntityInput_Server]({{% relref "systems/server/UpdateEntityInput_Server.md" %}})
- [UserActivityGridSystem]({{% relref "systems/server/UserActivityGridSystem.md" %}})
- [UserControllerDataCopySystem]({{% relref "systems/server/UserControllerDataCopySystem.md" %}})
- [UserDistanceTravelledSystem]({{% relref "systems/server/UserDistanceTravelledSystem.md" %}})
- [UserTranslationCopySystem]({{% relref "systems/server/UserTranslationCopySystem.md" %}})

## Client Systems

- [AbilityInputSystem]({{% relref "systems/client/AbilityInputSystem.md" %}})
- [CritterSystem]({{% relref "systems/client/CritterSystem.md" %}})
- [CursorPositionSystem]({{% relref "systems/client/CursorPositionSystem.md" %}})
- [EntityControlSystem]({{% relref "systems/client/EntityControlSystem.md" %}})
- [GameplayInputSystem]({{% relref "systems/client/GameplayInputSystem.md" %}})
- [GlobalCritterSpawnManager]({{% relref "systems/client/GlobalCritterSpawnManager.md" %}})
- [GlobalWorldVFXInstanceSystem]({{% relref "systems/client/GlobalWorldVFXInstanceSystem.md" %}})
- [UserActivityGridSystem]({{% relref "systems/client/UserActivityGridSystem.md" %}})
- [UserTranslationCopySystem]({{% relref "systems/client/UserTranslationCopySystem.md" %}})
