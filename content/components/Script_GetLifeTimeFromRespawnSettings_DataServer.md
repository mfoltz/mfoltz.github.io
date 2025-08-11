---
nav_exclude: true
search_exclude: true
---

# Script_GetLifeTimeFromRespawnSettings_DataServer

```csharp
public struct Script_GetLifeTimeFromRespawnSettings_DataServer
{
	static Script_GetLifeTimeFromRespawnSettings_DataServer()
	{
		Il2CppClassPointerStore<Script_GetLifeTimeFromRespawnSettings_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Script_GetLifeTimeFromRespawnSettings_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_GetLifeTimeFromRespawnSettings_DataServer>.NativeClassPtr);
		Script_GetLifeTimeFromRespawnSettings_DataServer.NativeFieldInfoPtr_Min = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GetLifeTimeFromRespawnSettings_DataServer>.NativeClassPtr, "Min");
		Script_GetLifeTimeFromRespawnSettings_DataServer.NativeFieldInfoPtr_Max = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GetLifeTimeFromRespawnSettings_DataServer>.NativeClassPtr, "Max");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_GetLifeTimeFromRespawnSettings_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Min;
	private static readonly IntPtr NativeFieldInfoPtr_Max;

	public float Min;

	public float Max;
}
```
