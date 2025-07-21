---
nav_exclude: true
search_exclude: false
---

# ModifyVoiceBuff

```csharp
public struct ModifyVoiceBuff
{
	static ModifyVoiceBuff()
	{
		Il2CppClassPointerStore<ModifyVoiceBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyVoiceBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyVoiceBuff>.NativeClassPtr);
		ModifyVoiceBuff.NativeFieldInfoPtr_VoiceMapping = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyVoiceBuff>.NativeClassPtr, "VoiceMapping");
		ModifyVoiceBuff.NativeFieldInfoPtr_VoiceModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyVoiceBuff>.NativeClassPtr, "VoiceModId");
		ModifyVoiceBuff.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyVoiceBuff>.NativeClassPtr, "Priority");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyVoiceBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VoiceMapping;
	private static readonly IntPtr NativeFieldInfoPtr_VoiceModId;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;

	public PrefabGUID VoiceMapping;

	public ModificationId VoiceModId;

	public int Priority;
}
```
