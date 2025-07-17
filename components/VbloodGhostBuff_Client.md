---
nav_exclude: true
search_exclude: true
---

# VbloodGhostBuff_Client

```csharp
public struct VbloodGhostBuff_Client
{
	static VbloodGhostBuff_Client()
	{
		Il2CppClassPointerStore<VbloodGhostBuff_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "VbloodGhostBuff_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<VbloodGhostBuff_Client>.NativeClassPtr);
		VbloodGhostBuff_Client.NativeFieldInfoPtr_TrackedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VbloodGhostBuff_Client>.NativeClassPtr, "TrackedSequence");
		VbloodGhostBuff_Client.NativeFieldInfoPtr_NotTrackedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VbloodGhostBuff_Client>.NativeClassPtr, "NotTrackedSequence");
		VbloodGhostBuff_Client.NativeFieldInfoPtr_SequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<VbloodGhostBuff_Client>.NativeClassPtr, "SequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<VbloodGhostBuff_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TrackedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_NotTrackedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceState;

	public SequenceGUID TrackedSequence;

	public SequenceGUID NotTrackedSequence;

	public SequenceState SequenceState;
}
```
