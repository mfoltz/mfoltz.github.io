---
nav_exclude: true
search_exclude: true
---

# Script_Castleman_AdaptLevel_DataShared

```csharp
public struct Script_Castleman_AdaptLevel_DataShared
{
	static Script_Castleman_AdaptLevel_DataShared()
	{
		Il2CppClassPointerStore<Script_Castleman_AdaptLevel_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Castleman_AdaptLevel_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Castleman_AdaptLevel_DataShared>.NativeClassPtr);
		Script_Castleman_AdaptLevel_DataShared.NativeFieldInfoPtr_ModificationIdLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Castleman_AdaptLevel_DataShared>.NativeClassPtr, "ModificationIdLevel");
		Script_Castleman_AdaptLevel_DataShared.NativeFieldInfoPtr_ModificationIdHealth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Castleman_AdaptLevel_DataShared>.NativeClassPtr, "ModificationIdHealth");
		Script_Castleman_AdaptLevel_DataShared.NativeFieldInfoPtr_ModificationIdPhysical = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Castleman_AdaptLevel_DataShared>.NativeClassPtr, "ModificationIdPhysical");
		Script_Castleman_AdaptLevel_DataShared.NativeFieldInfoPtr_ModificationIdSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Castleman_AdaptLevel_DataShared>.NativeClassPtr, "ModificationIdSpell");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Castleman_AdaptLevel_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationIdLevel;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationIdHealth;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationIdPhysical;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationIdSpell;

	public ModificationId ModificationIdLevel;

	public ModificationId ModificationIdHealth;

	public ModificationId ModificationIdPhysical;

	public ModificationId ModificationIdSpell;
}
```
