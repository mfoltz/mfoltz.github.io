---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Fly_CheckLanding_DataServer
{
	static Script_Fly_CheckLanding_DataServer()
	{
		Il2CppClassPointerStore<Script_Fly_CheckLanding_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Fly_CheckLanding_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Fly_CheckLanding_DataServer>.NativeClassPtr);
		Script_Fly_CheckLanding_DataServer.NativeFieldInfoPtr_LandingBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Fly_CheckLanding_DataServer>.NativeClassPtr, "LandingBuff");
		Script_Fly_CheckLanding_DataServer.NativeFieldInfoPtr_LKey_SCT_InvalidPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Fly_CheckLanding_DataServer>.NativeClassPtr, "LKey_SCT_InvalidPosition");
		Script_Fly_CheckLanding_DataServer.NativeFieldInfoPtr_LKey_SCT_InvalidTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Fly_CheckLanding_DataServer>.NativeClassPtr, "LKey_SCT_InvalidTerritory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Fly_CheckLanding_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LandingBuff;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_SCT_InvalidPosition;
	private static readonly IntPtr NativeFieldInfoPtr_LKey_SCT_InvalidTerritory;

	public PrefabGUID LandingBuff;

	public LocalizationKey LKey_SCT_InvalidPosition;

	public LocalizationKey LKey_SCT_InvalidTerritory;
}
```
