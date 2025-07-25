---
nav_exclude: true
search_exclude: true
---

# BehaviourTreeState

```csharp
public struct BehaviourTreeState
{
	static BehaviourTreeState()
	{
		Il2CppClassPointerStore<BehaviourTreeState>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Behaviours", "BehaviourTreeState");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BehaviourTreeState>.NativeClassPtr);
		BehaviourTreeState.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BehaviourTreeState>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BehaviourTreeState>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public GenericEnemyState Value;
}
```

## Server Systems

- [ServantSummonIfIdleOutsideTerritorySystem](/systems/server/ServantSummonIfIdleOutsideTerritorySystem)
- [SetPreCombatPositionSystem](/systems/server/SetPreCombatPositionSystem)
