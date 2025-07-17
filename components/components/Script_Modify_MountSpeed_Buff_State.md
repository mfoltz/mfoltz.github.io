---
nav_exclude: true
search_exclude: true
---

# Script_Modify_MountSpeed_Buff_State

```csharp
[StructLayout(2)]
public struct Script_Modify_MountSpeed_Buff_State
{
	static Script_Modify_MountSpeed_Buff_State()
	{
		Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_State>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Modify_MountSpeed_Buff_State");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_State>.NativeClassPtr);
		Script_Modify_MountSpeed_Buff_State.NativeFieldInfoPtr_MaxGallopSpeedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_State>.NativeClassPtr, "MaxGallopSpeedModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Modify_MountSpeed_Buff_State>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxGallopSpeedModId;
	[FieldOffset(0)]
	public ModificationId MaxGallopSpeedModId;
}
