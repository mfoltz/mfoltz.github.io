---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventsOnAbilityTrigger

```csharp
public struct CreateGameplayEventsOnAbilityTrigger
{
	static CreateGameplayEventsOnAbilityTrigger()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnAbilityTrigger");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr);
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "Type");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "Target");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "Condition");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_AbilityTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "AbilityTypes");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_AbilityButton = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "AbilityButton");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_AbilityTypeEnum = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "AbilityTypeEnum");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_NumOfPrefabTargets = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "NumOfPrefabTargets");
		CreateGameplayEventsOnAbilityTrigger.NativeFieldInfoPtr_PrefabTargetStartIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, "PrefabTargetStartIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnAbilityTrigger>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityTypes;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityButton;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityTypeEnum;
	private static readonly IntPtr NativeFieldInfoPtr_NumOfPrefabTargets;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabTargetStartIndex;

	public GameplayEventId EventId;

	public AbilityTriggerEventType Type;

	public GameplayEventTarget Target;

	public BlobAssetReference<ConditionBlob> Condition;

	public AbilityTypeFlag AbilityTypes;

	public AbilityButtonInputAction AbilityButton;

	public AbilityTypeEnum AbilityTypeEnum;

	public int NumOfPrefabTargets;

	public int PrefabTargetStartIndex;
}
```
