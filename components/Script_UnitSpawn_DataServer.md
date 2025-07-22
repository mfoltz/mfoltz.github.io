---
nav_exclude: true
search_exclude: true
---

# Script_UnitSpawn_DataServer

```csharp
public struct Script_UnitSpawn_DataServer
{
	static Script_UnitSpawn_DataServer()
	{
		Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_UnitSpawn_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr);
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_UnitToSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "UnitToSpawn");
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_UnitSpawnBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "UnitSpawnBuff");
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_ProximityActivationRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "ProximityActivationRadius");
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_ProximityActivationTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "ProximityActivationTime");
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_LifetimeBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "LifetimeBuff");
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_AllyAllertRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "AllyAllertRadius");
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_AllyActivationExtraDelayTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "AllyActivationExtraDelayTime");
		Script_UnitSpawn_DataServer.NativeFieldInfoPtr_Activated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, "Activated");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_UnitSpawn_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitToSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_UnitSpawnBuff;
	private static readonly IntPtr NativeFieldInfoPtr_ProximityActivationRadius;
	private static readonly IntPtr NativeFieldInfoPtr_ProximityActivationTime;
	private static readonly IntPtr NativeFieldInfoPtr_LifetimeBuff;
	private static readonly IntPtr NativeFieldInfoPtr_AllyAllertRadius;
	private static readonly IntPtr NativeFieldInfoPtr_AllyActivationExtraDelayTime;
	private static readonly IntPtr NativeFieldInfoPtr_Activated;

	public PrefabGUID UnitToSpawn;

	public PrefabGUID UnitSpawnBuff;

	public float ProximityActivationRadius;

	public float ProximityActivationTime;

	public PrefabGUID LifetimeBuff;

	public float AllyAllertRadius;

	public float AllyActivationExtraDelayTime;

	public bool Activated;
}
```
