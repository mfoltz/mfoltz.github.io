---
nav_exclude: true
search_exclude: true
---

# Script_Buff_MountSpeed_DataShared

```csharp
[StructLayout(2)]
public struct Script_Buff_MountSpeed_DataShared
{
	static Script_Buff_MountSpeed_DataShared()
	{
		Il2CppClassPointerStore<Script_Buff_MountSpeed_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_MountSpeed_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_MountSpeed_DataShared>.NativeClassPtr);
		Script_Buff_MountSpeed_DataShared.NativeFieldInfoPtr_MountSpeedFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MountSpeed_DataShared>.NativeClassPtr, "MountSpeedFactor");
		Script_Buff_MountSpeed_DataShared.NativeFieldInfoPtr_MountSpeedModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MountSpeed_DataShared>.NativeClassPtr, "MountSpeedModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_MountSpeed_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MountSpeedFactor;
	private static readonly IntPtr NativeFieldInfoPtr_MountSpeedModificationId;
	[FieldOffset(0)]
	public float MountSpeedFactor;
	[FieldOffset(4)]
	public ModificationId MountSpeedModificationId;
}
