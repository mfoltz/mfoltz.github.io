---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventOnDistanceReached

```csharp
public struct CreateGameplayEventOnDistanceReached
{
	static CreateGameplayEventOnDistanceReached()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnDistanceReached");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr);
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_DistanceSqThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "DistanceSqThreshold");
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_TriggerWhen = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "TriggerWhen");
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_TriggerContinously = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "TriggerContinously");
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_PreviousDistanceSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "PreviousDistanceSq");
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_Continous = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "Continous");
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "EventId");
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_Entity0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "Entity0");
		CreateGameplayEventOnDistanceReached.NativeFieldInfoPtr_Entity1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "Entity1");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DistanceSqThreshold;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerWhen;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerContinously;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousDistanceSq;
	private static readonly IntPtr NativeFieldInfoPtr_Continous;
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Entity0;
	private static readonly IntPtr NativeFieldInfoPtr_Entity1;

	public float DistanceSqThreshold;

	public CreateGameplayEventOnDistanceReachedTriggerWhen TriggerWhen;

	public bool TriggerContinously;

	public float PreviousDistanceSq;

	public CreateGameplayEventOnDistanceReached.ContinousData Continous;

	public GameplayEventId EventId;

	public GameplayEventTarget Entity0;

	public GameplayEventTarget Entity1;

	public struct ContinousData
	{
		static ContinousData()
		{
			Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached.ContinousData>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached>.NativeClassPtr, "ContinousData");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached.ContinousData>.NativeClassPtr);
			CreateGameplayEventOnDistanceReached.ContinousData.NativeFieldInfoPtr_TriggerFrequency = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached.ContinousData>.NativeClassPtr, "TriggerFrequency");
			CreateGameplayEventOnDistanceReached.ContinousData.NativeFieldInfoPtr_NextTriggerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached.ContinousData>.NativeClassPtr, "NextTriggerTime");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnDistanceReached.ContinousData>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_TriggerFrequency;
		private static readonly IntPtr NativeFieldInfoPtr_NextTriggerTime;

		public float TriggerFrequency;

		public double NextTriggerTime;
	}
}
```
