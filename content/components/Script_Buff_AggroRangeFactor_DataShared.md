---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Buff_AggroRangeFactor_DataShared
{
	static Script_Buff_AggroRangeFactor_DataShared()
	{
		Il2CppClassPointerStore<Script_Buff_AggroRangeFactor_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_AggroRangeFactor_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_AggroRangeFactor_DataShared>.NativeClassPtr);
		Script_Buff_AggroRangeFactor_DataShared.NativeFieldInfoPtr_AggroRangeFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_AggroRangeFactor_DataShared>.NativeClassPtr, "AggroRangeFactor");
		Script_Buff_AggroRangeFactor_DataShared.NativeFieldInfoPtr_AggroRangeFactorModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_AggroRangeFactor_DataShared>.NativeClassPtr, "AggroRangeFactorModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_AggroRangeFactor_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AggroRangeFactor;
	private static readonly IntPtr NativeFieldInfoPtr_AggroRangeFactorModificationId;

	public float AggroRangeFactor;

	public ModificationId AggroRangeFactorModificationId;
}
```
