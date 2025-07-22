---
nav_exclude: true
search_exclude: false
---

# Script_Unholy_RaiseDead_DataServer

```csharp
public struct Script_Unholy_RaiseDead_DataServer
{
	static Script_Unholy_RaiseDead_DataServer()
	{
		Il2CppClassPointerStore<Script_Unholy_RaiseDead_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Unholy_RaiseDead_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Unholy_RaiseDead_DataServer>.NativeClassPtr);
		Script_Unholy_RaiseDead_DataServer.NativeFieldInfoPtr_HealthPerSpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_RaiseDead_DataServer>.NativeClassPtr, "HealthPerSpellPower");
		Script_Unholy_RaiseDead_DataServer.NativeFieldInfoPtr_PhysicalPowerPerSpellPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_RaiseDead_DataServer>.NativeClassPtr, "PhysicalPowerPerSpellPower");
		Script_Unholy_RaiseDead_DataServer.NativeFieldInfoPtr_UnitType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_RaiseDead_DataServer>.NativeClassPtr, "UnitType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Unholy_RaiseDead_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthPerSpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalPowerPerSpellPower;
	private static readonly IntPtr NativeFieldInfoPtr_UnitType;

	public float HealthPerSpellPower;

	public float PhysicalPowerPerSpellPower;

	public PrefabGUID UnitType;
}
```
