---
nav_exclude: true
search_exclude: true
---

# Script_PreCast_TakeFlight_DataServer

```csharp
[StructLayout(2)]
public struct Script_PreCast_TakeFlight_DataServer
{
	static Script_PreCast_TakeFlight_DataServer()
	{
		Il2CppClassPointerStore<Script_PreCast_TakeFlight_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_PreCast_TakeFlight_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_PreCast_TakeFlight_DataServer>.NativeClassPtr);
		Script_PreCast_TakeFlight_DataServer.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PreCast_TakeFlight_DataServer>.NativeClassPtr, "Ability");
		Script_PreCast_TakeFlight_DataServer.NativeFieldInfoPtr_LKey_TakeoffBlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PreCast_TakeFlight_DataServer>.NativeClassPtr, "LKey_TakeoffBlocked");
		Script_PreCast_TakeFlight_DataServer.NativeFieldInfoPtr_LKey_InContest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PreCast_TakeFlight_DataServer>.NativeClassPtr, "LKey_InContest");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_PreCast_TakeFlight_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_TakeoffBlocked;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_InContest;
	[FieldOffset(0)]
	public PrefabGUID Ability;
	[FieldOffset(4)]
	public LocalizationKey LKey_TakeoffBlocked;
	[FieldOffset(20)]
	public LocalizationKey LKey_InContest;
}
