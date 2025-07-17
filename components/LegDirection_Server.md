---
nav_exclude: true
search_exclude: true
---

# LegDirection_Server

```csharp
public struct LegDirection_Server
{
	static LegDirection_Server()
	{
		Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LegDirection_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr);
		LegDirection_Server.NativeFieldInfoPtr_RotationSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr, "RotationSpeed");
		LegDirection_Server.NativeFieldInfoPtr_FullSpeedAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr, "FullSpeedAngle");
		LegDirection_Server.NativeFieldInfoPtr_MinSpeedAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr, "MinSpeedAngle");
		LegDirection_Server.NativeFieldInfoPtr_MinSpeedMultiplier = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr, "MinSpeedMultiplier");
		LegDirection_Server.NativeFieldInfoPtr_SpeedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr, "SpeedModId");
		LegDirection_Server.NativeFieldInfoPtr_OnlyUserCharacterRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr, "OnlyUserCharacterRotation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LegDirection_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RotationSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_FullSpeedAngle;
	private static readonly IntPtr NativeFieldInfoPtr_MinSpeedAngle;
	private static readonly IntPtr NativeFieldInfoPtr_MinSpeedMultiplier;
	private static readonly IntPtr NativeFieldInfoPtr_SpeedModId;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyUserCharacterRotation;

	public float RotationSpeed;

	public float FullSpeedAngle;

	public float MinSpeedAngle;

	public float MinSpeedMultiplier;

	public ModificationId SpeedModId;

	public bool OnlyUserCharacterRotation;
}
```

## Server Systems

- [ProjectM.LegDirectionSystem_Spawn](/systems/ProjectM.LegDirectionSystem_Spawn)
