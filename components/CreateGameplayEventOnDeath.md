# CreateGameplayEventOnDeath

```csharp
[StructLayout(2)]
public struct CreateGameplayEventOnDeath
{
	static CreateGameplayEventOnDeath()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnDeath");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr);
		CreateGameplayEventOnDeath.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr, "EventId");
		CreateGameplayEventOnDeath.NativeFieldInfoPtr_DeathTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr, "DeathTarget");
		CreateGameplayEventOnDeath.NativeFieldInfoPtr_EventTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr, "EventTarget");
		CreateGameplayEventOnDeath.NativeFieldInfoPtr_SpellTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr, "SpellTarget");
		CreateGameplayEventOnDeath.NativeFieldInfoPtr_Reason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr, "Reason");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnDeath>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_DeathTarget;
	private static readonly IntPtr NativeFieldInfoPtr_EventTarget;
	private static readonly IntPtr NativeFieldInfoPtr_SpellTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Reason;
	[FieldOffset(0)]
	public GameplayEventId EventId;
	[FieldOffset(8)]
	public EventOnDeathTarget DeathTarget;
	[FieldOffset(12)]
	public GameplayEventTarget EventTarget;
	[FieldOffset(16)]
	public GameplayEventTarget SpellTarget;
	[FieldOffset(20)]
	public StatChangeReason Reason;
}
