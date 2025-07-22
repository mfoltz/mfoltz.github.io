---
nav_exclude: true
search_exclude: false
---

# Script_StormPolarityShift_DataServer

```csharp
public struct Script_StormPolarityShift_DataServer
{
	static Script_StormPolarityShift_DataServer()
	{
		Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_StormPolarityShift_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr);
		Script_StormPolarityShift_DataServer.NativeFieldInfoPtr_SelfTravelSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, "SelfTravelSpell");
		Script_StormPolarityShift_DataServer.NativeFieldInfoPtr_EnemyTravelSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, "EnemyTravelSpell");
		Script_StormPolarityShift_DataServer.NativeFieldInfoPtr_AllyTravelSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, "AllyTravelSpell");
		Script_StormPolarityShift_DataServer.NativeFieldInfoPtr_MinDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, "MinDuration");
		Script_StormPolarityShift_DataServer.NativeFieldInfoPtr_MaxDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, "MaxDuration");
		Script_StormPolarityShift_DataServer.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, "MaxRange");
		Script_StormPolarityShift_DataServer.NativeFieldInfoPtr_HasHit = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, "HasHit");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_StormPolarityShift_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SelfTravelSpell;
	private static readonly IntPtr NativeFieldInfoPtr_EnemyTravelSpell;
	private static readonly IntPtr NativeFieldInfoPtr_AllyTravelSpell;
	private static readonly IntPtr NativeFieldInfoPtr_MinDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_HasHit;

	public PrefabGUID SelfTravelSpell;

	public PrefabGUID EnemyTravelSpell;

	public PrefabGUID AllyTravelSpell;

	public float MinDuration;

	public float MaxDuration;

	public float MaxRange;

	public bool HasHit;
}
```
