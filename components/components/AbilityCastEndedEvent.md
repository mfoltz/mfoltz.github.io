---
nav_exclude: true
search_exclude: true
---

# AbilityCastEndedEvent

```csharp
[StructLayout(2)]
public struct AbilityCastEndedEvent
{
	static AbilityCastEndedEvent()
	{
		Il2CppClassPointerStore<AbilityCastEndedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityCastEndedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCastEndedEvent>.NativeClassPtr);
		AbilityCastEndedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastEndedEvent>.NativeClassPtr, "Character");
		AbilityCastEndedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastEndedEvent>.NativeClassPtr, "Ability");
		AbilityCastEndedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastEndedEvent>.NativeClassPtr, "AbilityGroup");
		AbilityCastEndedEvent.NativeFieldInfoPtr_WasInterrupted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastEndedEvent>.NativeClassPtr, "WasInterrupted");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCastEndedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_WasInterrupted;
	[FieldOffset(0)]
	public Entity Character;
	[FieldOffset(8)]
	public Entity Ability;
	[FieldOffset(16)]
	public Entity AbilityGroup;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool WasInterrupted;
}
