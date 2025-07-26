# CreateEventOnHealthChangeAmount

```csharp
[StructLayout(2)]
public struct CreateEventOnHealthChangeAmount
{
	static CreateEventOnHealthChangeAmount()
	{
		Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateEventOnHealthChangeAmount");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr);
		CreateEventOnHealthChangeAmount.NativeFieldInfoPtr_TriggerEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr, "TriggerEventId");
		CreateEventOnHealthChangeAmount.NativeFieldInfoPtr_TriggerEventThreshold = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr, "TriggerEventThreshold");
		CreateEventOnHealthChangeAmount.NativeFieldInfoPtr_IgnoreOwnerDamageSources = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr, "IgnoreOwnerDamageSources");
		CreateEventOnHealthChangeAmount.NativeFieldInfoPtr_Triggered = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr, "Triggered");
		CreateEventOnHealthChangeAmount.NativeFieldInfoPtr_DamageTaken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr, "DamageTaken");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateEventOnHealthChangeAmount>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TriggerEventId;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerEventThreshold;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreOwnerDamageSources;
	private static readonly IntPtr NativeFieldInfoPtr_Triggered;
	private static readonly IntPtr NativeFieldInfoPtr_DamageTaken;
	[FieldOffset(0)]
	public GameplayEventId TriggerEventId;
	[FieldOffset(8)]
	public float TriggerEventThreshold;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool IgnoreOwnerDamageSources;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool Triggered;
	[FieldOffset(16)]
	public float DamageTaken;
}
