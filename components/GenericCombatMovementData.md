---
nav_exclude: true
search_exclude: true
---

# GenericCombatMovementData

```csharp
public struct GenericCombatMovementData
{
	static GenericCombatMovementData()
	{
		Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "GenericCombatMovementData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr);
		GenericCombatMovementData.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "MinDistance");
		GenericCombatMovementData.NativeFieldInfoPtr_GoalDistanceInner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "GoalDistanceInner");
		GenericCombatMovementData.NativeFieldInfoPtr_GoalDistanceOuter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "GoalDistanceOuter");
		GenericCombatMovementData.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "MaxDistance");
		GenericCombatMovementData.NativeFieldInfoPtr_MovePattern = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "MovePattern");
		GenericCombatMovementData.NativeFieldInfoPtr_ForceLookAtTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "ForceLookAtTarget");
		GenericCombatMovementData.NativeFieldInfoPtr_CircleCurveInRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "CircleCurveInRange");
		GenericCombatMovementData.NativeFieldInfoPtr_CircleCurveOutOfRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, "CircleCurveOutOfRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GenericCombatMovementData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistanceInner;
	private static readonly IntPtr NativeFieldInfoPtr_GoalDistanceOuter;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MovePattern;
	private static readonly IntPtr NativeFieldInfoPtr_ForceLookAtTarget;
	private static readonly IntPtr NativeFieldInfoPtr_CircleCurveInRange;
	private static readonly IntPtr NativeFieldInfoPtr_CircleCurveOutOfRange;

	public ModifiableFloat MinDistance;

	public ModifiableFloat GoalDistanceInner;

	public ModifiableFloat GoalDistanceOuter;

	public ModifiableFloat MaxDistance;

	public ModifiableInt MovePattern;

	public ModifiableInt ForceLookAtTarget;

	public CurveReference CircleCurveInRange;

	public CurveReference CircleCurveOutOfRange;
}
```
