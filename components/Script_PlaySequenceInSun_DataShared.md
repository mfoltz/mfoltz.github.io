---
nav_exclude: true
search_exclude: false
---

# Script_PlaySequenceInSun_DataShared

```csharp
public struct Script_PlaySequenceInSun_DataShared
{
	static Script_PlaySequenceInSun_DataShared()
	{
		Il2CppClassPointerStore<Script_PlaySequenceInSun_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_PlaySequenceInSun_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_PlaySequenceInSun_DataShared>.NativeClassPtr);
		Script_PlaySequenceInSun_DataShared.NativeFieldInfoPtr_BuffSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PlaySequenceInSun_DataShared>.NativeClassPtr, "BuffSequenceState");
		Script_PlaySequenceInSun_DataShared.NativeFieldInfoPtr_BuffSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_PlaySequenceInSun_DataShared>.NativeClassPtr, "BuffSequence");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_PlaySequenceInSun_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_BuffSequence;

	public SequenceState BuffSequenceState;

	public SequenceGUID BuffSequence;
}
```
