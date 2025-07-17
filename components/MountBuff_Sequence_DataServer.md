---
nav_exclude: true
search_exclude: true
---

# MountBuff_Sequence_DataServer

```csharp
public struct MountBuff_Sequence_DataServer
{
	static MountBuff_Sequence_DataServer()
	{
		Il2CppClassPointerStore<MountBuff_Sequence_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "MountBuff_Sequence_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MountBuff_Sequence_DataServer>.NativeClassPtr);
		MountBuff_Sequence_DataServer.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff_Sequence_DataServer>.NativeClassPtr, "SequenceGuid");
		MountBuff_Sequence_DataServer.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff_Sequence_DataServer>.NativeClassPtr, "SequenceState");
		MountBuff_Sequence_DataServer.NativeFieldInfoPtr_PreviousWeaponEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MountBuff_Sequence_DataServer>.NativeClassPtr, "PreviousWeaponEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MountBuff_Sequence_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousWeaponEntity;

	public SequenceGUID SequenceGuid;

	public SequenceState SequenceState;

	public Entity PreviousWeaponEntity;
}
```
