---
nav_exclude: true
search_exclude: false
---

# Script_Unholy_Harvest_DataServer

```csharp
public struct Script_Unholy_Harvest_DataServer
{
	static Script_Unholy_Harvest_DataServer()
	{
		Il2CppClassPointerStore<Script_Unholy_Harvest_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Unholy_Harvest_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Unholy_Harvest_DataServer>.NativeClassPtr);
		Script_Unholy_Harvest_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_Harvest_DataServer>.NativeClassPtr, "Radius");
		Script_Unholy_Harvest_DataServer.NativeFieldInfoPtr_UnitType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_Harvest_DataServer>.NativeClassPtr, "UnitType");
		Script_Unholy_Harvest_DataServer.NativeFieldInfoPtr_PossessBuffType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_Harvest_DataServer>.NativeClassPtr, "PossessBuffType");
		Script_Unholy_Harvest_DataServer.NativeFieldInfoPtr_IgnoreBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_Harvest_DataServer>.NativeClassPtr, "IgnoreBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Unholy_Harvest_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_UnitType;
	private static readonly IntPtr NativeFieldInfoPtr_PossessBuffType;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreBuff;

	public float Radius;

	public PrefabGUID UnitType;

	public PrefabGUID PossessBuffType;

	public PrefabGUID IgnoreBuff;
}
```
