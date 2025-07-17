---
nav_exclude: true
search_exclude: true
---

# AbilityCastStartedEvent

```csharp
[StructLayout(2)]
public struct AbilityCastStartedEvent
{
	static AbilityCastStartedEvent()
	{
		Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityCastStartedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr);
		AbilityCastStartedEvent.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "Time");
		AbilityCastStartedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "Character");
		AbilityCastStartedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "Ability");
		AbilityCastStartedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, "AbilityGroup");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityCastStartedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	[FieldOffset(0)]
	public double Time;
	[FieldOffset(8)]
	public Entity Character;
	[FieldOffset(16)]
	public Entity Ability;
	[FieldOffset(24)]
	public Entity AbilityGroup;
}
