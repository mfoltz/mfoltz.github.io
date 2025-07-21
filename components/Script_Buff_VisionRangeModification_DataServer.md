---
nav_exclude: true
search_exclude: false
---

# Script_Buff_VisionRangeModification_DataServer

```csharp
public struct Script_Buff_VisionRangeModification_DataServer
{
	static Script_Buff_VisionRangeModification_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_VisionRangeModification_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_VisionRangeModification_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_VisionRangeModification_DataServer>.NativeClassPtr);
		Script_Buff_VisionRangeModification_DataServer.NativeFieldInfoPtr_VisionModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_VisionRangeModification_DataServer>.NativeClassPtr, "VisionModificationId");
		Script_Buff_VisionRangeModification_DataServer.NativeFieldInfoPtr_VisionCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_VisionRangeModification_DataServer>.NativeClassPtr, "VisionCurve");
		Script_Buff_VisionRangeModification_DataServer.NativeFieldInfoPtr_OldRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_VisionRangeModification_DataServer>.NativeClassPtr, "OldRange");
		Script_Buff_VisionRangeModification_DataServer.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_VisionRangeModification_DataServer>.NativeClassPtr, "MinRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_VisionRangeModification_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VisionModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_VisionCurve;
	private static readonly IntPtr NativeFieldInfoPtr_OldRange;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;

	public ModificationId VisionModificationId;

	public CurveReference VisionCurve;

	public float OldRange;

	public float MinRange;
}
```
