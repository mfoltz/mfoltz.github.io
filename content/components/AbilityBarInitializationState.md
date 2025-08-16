---
nav_exclude: true
search_exclude: true
---

# AbilityBarInitializationState

```csharp
public struct AbilityBarInitializationState
{
	static AbilityBarInitializationState()
	{
		Il2CppClassPointerStore<AbilityBarInitializationState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "AbilityBarInitializationState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityBarInitializationState>.NativeClassPtr);
		AbilityBarInitializationState.NativeFieldInfoPtr_AbilityGroupSlotsInitialized = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityBarInitializationState>.NativeClassPtr, "AbilityGroupSlotsInitialized");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityBarInitializationState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroupSlotsInitialized;

	public bool AbilityGroupSlotsInitialized;
}
```

## Server Systems

- [SpawnAbilityGroupSlotsSystem]({{< relref "systems/server/SpawnAbilityGroupSlotsSystem.md" >}})
