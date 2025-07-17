---
nav_exclude: true
search_exclude: true
---

# AbilityInterruptedEvent

```csharp
[StructLayout(2)]
public struct AbilityInterruptedEvent
{
	static AbilityInterruptedEvent()
	{
		Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityInterruptedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr);
		AbilityInterruptedEvent.NativeFieldInfoPtr_Character = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, "Character");
		AbilityInterruptedEvent.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, "AbilityGroup");
		AbilityInterruptedEvent.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, "Ability");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityInterruptedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Character;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	[FieldOffset(0)]
	public Entity Character;
	[FieldOffset(8)]
	public Entity AbilityGroup;
	[FieldOffset(16)]
	public Entity Ability;
}
