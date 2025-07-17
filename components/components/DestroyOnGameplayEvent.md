---
nav_exclude: true
search_exclude: true
---

# DestroyOnGameplayEvent

```csharp
[StructLayout(2)]
public struct DestroyOnGameplayEvent
{
	static DestroyOnGameplayEvent()
	{
		Il2CppClassPointerStore<DestroyOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DestroyOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DestroyOnGameplayEvent>.NativeClassPtr);
		DestroyOnGameplayEvent.NativeFieldInfoPtr_Who = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyOnGameplayEvent>.NativeClassPtr, "Who");
		DestroyOnGameplayEvent.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyOnGameplayEvent>.NativeClassPtr, "Type");
		DestroyOnGameplayEvent.NativeFieldInfoPtr_DestroyReason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyOnGameplayEvent>.NativeClassPtr, "DestroyReason");
		DestroyOnGameplayEvent.NativeFieldInfoPtr_SetTranslationToEventTranslation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DestroyOnGameplayEvent>.NativeClassPtr, "SetTranslationToEventTranslation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DestroyOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Who;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyReason;
	private static readonly IntPtr NativeFieldInfoPtr_SetTranslationToEventTranslation;
	[FieldOffset(0)]
	public DestroyOnGameplayEventWho Who;
	[FieldOffset(4)]
	public DestroyOnGameplayEventType Type;
	[FieldOffset(8)]
	public DestroyReason DestroyReason;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool SetTranslationToEventTranslation;
}
