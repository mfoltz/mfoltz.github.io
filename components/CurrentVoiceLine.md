---
nav_exclude: true
search_exclude: true
---

# CurrentVoiceLine

```csharp
public struct CurrentVoiceLine
{
	static CurrentVoiceLine()
	{
		Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "CurrentVoiceLine");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr);
		CurrentVoiceLine.NativeFieldInfoPtr_VoiceLineEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr, "VoiceLineEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurrentVoiceLine>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VoiceLineEntity;

	public Entity VoiceLineEntity;
}
```
