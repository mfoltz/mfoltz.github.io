---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CombatMusicListener_Client
{
	static CombatMusicListener_Client()
	{
		Il2CppClassPointerStore<CombatMusicListener_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CombatMusicListener_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CombatMusicListener_Client>.NativeClassPtr);
		CombatMusicListener_Client.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CombatMusicListener_Client>.NativeClassPtr, "ActiveSequenceState");
		CombatMusicListener_Client.NativeFieldInfoPtr_PreviousSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CombatMusicListener_Client>.NativeClassPtr, "PreviousSequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CombatMusicListener_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousSequenceGuid;

	public SequenceState ActiveSequenceState;

	public SequenceGUID PreviousSequenceGuid;
}
```

## Client Systems

- [CombatMusicSystem_Client]({{% relref "systems/client/CombatMusicSystem_Client.md" %}})
