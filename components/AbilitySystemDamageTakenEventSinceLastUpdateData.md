---
nav_exclude: true
search_exclude: true
---

# AbilitySystemDamageTakenEventSinceLastUpdateData

```csharp
public struct AbilitySystemDamageTakenEventSinceLastUpdateData
{
	static AbilitySystemDamageTakenEventSinceLastUpdateData()
	{
		Il2CppClassPointerStore<AbilitySystemDamageTakenEventSinceLastUpdateData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Systems.dll", "ProjectM", "AbilitySystemDamageTakenEventSinceLastUpdateData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilitySystemDamageTakenEventSinceLastUpdateData>.NativeClassPtr);
		AbilitySystemDamageTakenEventSinceLastUpdateData.NativeFieldInfoPtr_Events = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySystemDamageTakenEventSinceLastUpdateData>.NativeClassPtr, "Events");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilitySystemDamageTakenEventSinceLastUpdateData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Events;

	public NativeList<DamageTakenEvent> Events;
}
```
