---
nav_exclude: true
search_exclude: false
---

# EntityAbilityInput

```csharp
public struct EntityAbilityInput
{
	static EntityAbilityInput()
	{
		Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EntityAbilityInput");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr);
		EntityAbilityInput.NativeFieldInfoPtr_QueueAbilityUntil = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "QueueAbilityUntil");
		EntityAbilityInput.NativeFieldInfoPtr_PrepareCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "PrepareCastGroup");
		EntityAbilityInput.NativeFieldInfoPtr_ActiveCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "ActiveCastGroup");
		EntityAbilityInput.NativeFieldInfoPtr_QueuedCastGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "QueuedCastGroup");
		EntityAbilityInput.NativeFieldInfoPtr_CastInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "CastInput");
		EntityAbilityInput.NativeFieldInfoPtr_AbilityState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "AbilityState");
		EntityAbilityInput.NativeFieldInfoPtr_HasMoveInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "HasMoveInput");
		EntityAbilityInput.NativeFieldInfoPtr_Interrupt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "Interrupt");
		EntityAbilityInput.NativeFieldInfoPtr_InterruptByPrepare = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, "InterruptByPrepare");
		EntityAbilityInput.NativeMethodInfoPtr_GetMostRelevantCastGroup_Public_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, 100666018);
	}

	public unsafe Entity GetMostRelevantCastGroup()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EntityAbilityInput.NativeMethodInfoPtr_GetMostRelevantCastGroup_Public_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EntityAbilityInput>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_QueueAbilityUntil;
	private static readonly IntPtr NativeFieldInfoPtr_PrepareCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_QueuedCastGroup;
	private static readonly IntPtr NativeFieldInfoPtr_CastInput;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityState;
	private static readonly IntPtr NativeFieldInfoPtr_HasMoveInput;
	private static readonly IntPtr NativeFieldInfoPtr_Interrupt;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptByPrepare;
	private static readonly IntPtr NativeMethodInfoPtr_GetMostRelevantCastGroup_Public_Entity_0;

	public double QueueAbilityUntil;

	public Entity PrepareCastGroup;

	public Entity ActiveCastGroup;

	public Entity QueuedCastGroup;

	public ButtonInputAction CastInput;

	public AbilityStateMachine AbilityState;

	public bool HasMoveInput;

	public bool Interrupt;

	public bool InterruptByPrepare;
}
```

## Client Systems

- [AbilityInputSystem](/systems/client/AbilityInputSystem)
- [GameplayInputSystem](/systems/client/GameplayInputSystem)
