# CreateGameplayEventsOnTimePassed

```csharp
[StructLayout(2)]
public struct CreateGameplayEventsOnTimePassed
{
	static CreateGameplayEventsOnTimePassed()
	{
		Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventsOnTimePassed");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr);
		CreateGameplayEventsOnTimePassed.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr, "EventId");
		CreateGameplayEventsOnTimePassed.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr, "Target");
		CreateGameplayEventsOnTimePassed.NativeFieldInfoPtr_Duration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr, "Duration");
		CreateGameplayEventsOnTimePassed.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr, "Time");
		CreateGameplayEventsOnTimePassed.NativeFieldInfoPtr_DurationFactorBasedOnLifetime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr, "DurationFactorBasedOnLifetime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventsOnTimePassed>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Duration;
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_DurationFactorBasedOnLifetime;
	[FieldOffset(0)]
	public GameplayEventId EventId;
	[FieldOffset(8)]
	public GameplayEventTarget Target;
	[FieldOffset(12)]
	public float Duration;
	[FieldOffset(16)]
	public float Time;
	[FieldOffset(20)]
	public float DurationFactorBasedOnLifetime;
}
