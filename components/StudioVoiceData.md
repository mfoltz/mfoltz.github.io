---
nav_exclude: true
search_exclude: false
---

# StudioVoiceData

```csharp
public struct StudioVoiceData
{
	static StudioVoiceData()
	{
		Il2CppClassPointerStore<StudioVoiceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "StudioVoiceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StudioVoiceData>.NativeClassPtr);
		StudioVoiceData.NativeFieldInfoPtr_VoicePriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioVoiceData>.NativeClassPtr, "VoicePriority");
		StudioVoiceData.NativeFieldInfoPtr_FmodEventGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioVoiceData>.NativeClassPtr, "FmodEventGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StudioVoiceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VoicePriority;
	private static readonly IntPtr NativeFieldInfoPtr_FmodEventGuid;

	public int VoicePriority;

	public FmodEventGuid FmodEventGuid;
}
```
