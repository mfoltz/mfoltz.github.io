---
nav_exclude: true
search_exclude: false
---

# Script_SetFlyingHeightVision_Buff_DataShared

```csharp
public struct Script_SetFlyingHeightVision_Buff_DataShared
{
	static Script_SetFlyingHeightVision_Buff_DataShared()
	{
		Il2CppClassPointerStore<Script_SetFlyingHeightVision_Buff_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SetFlyingHeightVision_Buff_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SetFlyingHeightVision_Buff_DataShared>.NativeClassPtr);
		Script_SetFlyingHeightVision_Buff_DataShared.NativeFieldInfoPtr_VisionModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetFlyingHeightVision_Buff_DataShared>.NativeClassPtr, "VisionModificationId");
		Script_SetFlyingHeightVision_Buff_DataShared.NativeFieldInfoPtr_Delay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetFlyingHeightVision_Buff_DataShared>.NativeClassPtr, "Delay");
		Script_SetFlyingHeightVision_Buff_DataShared.NativeFieldInfoPtr_BuffActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetFlyingHeightVision_Buff_DataShared>.NativeClassPtr, "BuffActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SetFlyingHeightVision_Buff_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VisionModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_Delay;
	private static readonly IntPtr NativeFieldInfoPtr_BuffActive;

	public ModificationId VisionModificationId;

	public float Delay;

	public bool BuffActive;
}
```
