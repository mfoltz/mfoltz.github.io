---
nav_exclude: true
search_exclude: false
---

# AbilitySequence

```csharp
public struct AbilitySequence
{
	static AbilitySequence()
	{
		Il2CppClassPointerStore<AbilitySequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "Stunlock.Sequencer", "AbilitySequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilitySequence>.NativeClassPtr);
		AbilitySequence.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilitySequence>.NativeClassPtr, "Ability");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilitySequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Ability;

	public Entity Ability;
}
```
