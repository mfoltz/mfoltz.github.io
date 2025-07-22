---
nav_exclude: true
search_exclude: false
---

# CreateGameplayEventOnBehaviourStateChanged

```csharp
public struct CreateGameplayEventOnBehaviourStateChanged
{
	static CreateGameplayEventOnBehaviourStateChanged()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnBehaviourStateChanged");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr);
		CreateGameplayEventOnBehaviourStateChanged.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr, "EventId");
		CreateGameplayEventOnBehaviourStateChanged.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr, "Condition");
		CreateGameplayEventOnBehaviourStateChanged.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr, "Source");
		CreateGameplayEventOnBehaviourStateChanged.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr, "Target");
		CreateGameplayEventOnBehaviourStateChanged.NativeFieldInfoPtr_EnteredState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr, "EnteredState");
		CreateGameplayEventOnBehaviourStateChanged.NativeFieldInfoPtr_ExitedState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr, "ExitedState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnBehaviourStateChanged>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_EnteredState;
	private static readonly IntPtr NativeFieldInfoPtr_ExitedState;

	public GameplayEventId EventId;

	public BlobAssetReference<ConditionBlob> Condition;

	public GameplayEventTarget Source;

	public GameplayEventTarget Target;

	public GenericEnemyState EnteredState;

	public GenericEnemyState ExitedState;
}
```

## Server Systems

- [CreateGameplayEventOnBehaviourStateChangedSystem](/systems/server/CreateGameplayEventOnBehaviourStateChangedSystem)
