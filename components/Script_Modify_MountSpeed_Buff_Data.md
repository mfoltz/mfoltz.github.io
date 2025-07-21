---
nav_exclude: true
search_exclude: false
---

# Script_Modify_MountSpeed_Buff_Data

```csharp
public struct Script_Modify_MountSpeed_Buff_Data
{
	static Script_Modify_MountSpeed_Buff_Data()
	{
		Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Modify_MountSpeed_Buff_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_Data>.NativeClassPtr);
		Script_Modify_MountSpeed_Buff_Data.NativeFieldInfoPtr_GallopMaxSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_Data>.NativeClassPtr, "GallopMaxSpeed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GallopMaxSpeed;

	public float GallopMaxSpeed;
}
```
