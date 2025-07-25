---
nav_exclude: true
search_exclude: true
---

# UseBossCenterPositionAsPreCombatPosition

```csharp
public struct UseBossCenterPositionAsPreCombatPosition
{
	static UseBossCenterPositionAsPreCombatPosition()
	{
		Il2CppClassPointerStore<UseBossCenterPositionAsPreCombatPosition>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UseBossCenterPositionAsPreCombatPosition");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UseBossCenterPositionAsPreCombatPosition>.NativeClassPtr);
		UseBossCenterPositionAsPreCombatPosition.NativeFieldInfoPtr_RangeSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseBossCenterPositionAsPreCombatPosition>.NativeClassPtr, "RangeSq");
		UseBossCenterPositionAsPreCombatPosition.NativeFieldInfoPtr_Found = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseBossCenterPositionAsPreCombatPosition>.NativeClassPtr, "Found");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UseBossCenterPositionAsPreCombatPosition>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RangeSq;
	private static readonly IntPtr NativeFieldInfoPtr_Found;

	public float RangeSq;

	public bool Found;
}
```

## Server Systems

- [SetPreCombatPositionSystem](/systems/server/SetPreCombatPositionSystem)
- [SetPreCombatPositionSystem_Spawn](/systems/server/SetPreCombatPositionSystem_Spawn)
