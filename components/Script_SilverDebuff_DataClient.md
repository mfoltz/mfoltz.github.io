---
nav_exclude: true
search_exclude: false
---

# Script_SilverDebuff_DataClient

```csharp
public struct Script_SilverDebuff_DataClient
{
	static Script_SilverDebuff_DataClient()
	{
		Il2CppClassPointerStore<Script_SilverDebuff_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SilverDebuff_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SilverDebuff_DataClient>.NativeClassPtr);
		Script_SilverDebuff_DataClient.NativeFieldInfoPtr_SilverBuffSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SilverDebuff_DataClient>.NativeClassPtr, "SilverBuffSequence");
		Script_SilverDebuff_DataClient.NativeFieldInfoPtr_SilverBuffSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SilverDebuff_DataClient>.NativeClassPtr, "SilverBuffSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SilverDebuff_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SilverBuffSequence;
	private static readonly IntPtr NativeFieldInfoPtr_SilverBuffSequenceState;

	public SequenceGUID SilverBuffSequence;

	public SequenceState SilverBuffSequenceState;
}
```
