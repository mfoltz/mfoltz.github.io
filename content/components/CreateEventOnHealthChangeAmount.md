---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public GameplayEventId TriggerEventId;

	public float TriggerEventThreshold;

	public bool IgnoreOwnerDamageSources;

	public bool Triggered;

	public float DamageTaken;
}
```
