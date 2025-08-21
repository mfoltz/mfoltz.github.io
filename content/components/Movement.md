---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Movement
{
	static Movement()
	{
		Il2CppClassPointerStore<Movement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Movement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Movement>.NativeClassPtr);
		Movement.NativeFieldInfoPtr_ForcePositionData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "ForcePositionData");
		Movement.NativeFieldInfoPtr_MoveStopAbilityData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "MoveStopAbilityData");
		Movement.NativeFieldInfoPtr_MoveInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "MoveInput");
		Movement.NativeFieldInfoPtr_LastNonZeroMoveInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "LastNonZeroMoveInput");
		Movement.NativeFieldInfoPtr_Speed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "Speed");
		Movement.NativeFieldInfoPtr_AbilityCastSpeedMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "AbilityCastSpeedMultiplier");
		Movement.NativeFieldInfoPtr_HasMoveStopData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Movement>.NativeClassPtr, "HasMoveStopData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Movement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ForcePositionData;
	private static readonly IntPtr NativeFieldInfoPtr_MoveStopAbilityData;
	private static readonly IntPtr NativeFieldInfoPtr_MoveInput;
	private static readonly IntPtr NativeFieldInfoPtr_LastNonZeroMoveInput;
	private static readonly IntPtr NativeFieldInfoPtr_Speed;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityCastSpeedMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_HasMoveStopData;

	public ForcePositionData ForcePositionData;

	public MoveStopAbilityData MoveStopAbilityData;

	public float2 MoveInput;

	public float2 LastNonZeroMoveInput;

	public ModifiableFloat Speed;

	public float AbilityCastSpeedMultiplier;

	public bool HasMoveStopData;
}
```

## Server Systems

- [LegDirectionSystem_Spawn]({{% relref "systems/server/LegDirectionSystem_Spawn.md" %}})

## Client Systems

- [AiMoveSystem_Client_Spawn]({{% relref "systems/client/AiMoveSystem_Client_Spawn.md" %}})
