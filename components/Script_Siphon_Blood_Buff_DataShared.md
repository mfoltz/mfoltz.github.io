---
nav_exclude: true
search_exclude: false
---

# Script_Siphon_Blood_Buff_DataShared

```csharp
public struct Script_Siphon_Blood_Buff_DataShared
{
	static Script_Siphon_Blood_Buff_DataShared()
	{
		Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Siphon_Blood_Buff_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr);
		Script_Siphon_Blood_Buff_DataShared.NativeFieldInfoPtr_ImmaterialDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, "ImmaterialDuration");
		Script_Siphon_Blood_Buff_DataShared.NativeFieldInfoPtr_ImmaterialSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, "ImmaterialSequence");
		Script_Siphon_Blood_Buff_DataShared.NativeFieldInfoPtr_ImmaterialSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, "ImmaterialSequenceState");
		Script_Siphon_Blood_Buff_DataShared.NativeFieldInfoPtr_ImmaterialModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, "ImmaterialModificationId");
		Script_Siphon_Blood_Buff_DataShared.NativeFieldInfoPtr_IsRevive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, "IsRevive");
		Script_Siphon_Blood_Buff_DataShared.NativeFieldInfoPtr_ShowAbortText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, "ShowAbortText");
		Script_Siphon_Blood_Buff_DataShared.NativeFieldInfoPtr_ImmaterialActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, "ImmaterialActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Siphon_Blood_Buff_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ImmaterialDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ImmaterialSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ImmaterialSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_ImmaterialModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_IsRevive;
	private static readonly IntPtr NativeFieldInfoPtr_ShowAbortText;
	private static readonly IntPtr NativeFieldInfoPtr_ImmaterialActive;

	public float ImmaterialDuration;

	public SequenceGUID ImmaterialSequence;

	public SequenceState ImmaterialSequenceState;

	public ModificationId ImmaterialModificationId;

	public bool IsRevive;

	public bool ShowAbortText;

	public bool ImmaterialActive;
}
```

## Client Systems

- [FeedInteractionProgressSystem](/systems/client/FeedInteractionProgressSystem)
