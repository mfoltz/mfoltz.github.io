---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventOnDamageTaken

```csharp
public struct CreateGameplayEventOnDamageTaken
{
	static CreateGameplayEventOnDamageTaken()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnDamageTaken");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr);
		CreateGameplayEventOnDamageTaken.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr, "EventId");
		CreateGameplayEventOnDamageTaken.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr, "Condition");
		CreateGameplayEventOnDamageTaken.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr, "Source");
		CreateGameplayEventOnDamageTaken.NativeFieldInfoPtr_IncludeDoTs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr, "IncludeDoTs");
		CreateGameplayEventOnDamageTaken.NativeFieldInfoPtr_IgnoreWhenInContest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr, "IgnoreWhenInContest");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnDamageTaken>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_IncludeDoTs;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreWhenInContest;

	public GameplayEventId EventId;

	public BlobAssetReference<ConditionBlob> Condition;

	public DamageTakenTarget Source;

	public bool IncludeDoTs;

	public bool IgnoreWhenInContest;
}
```
