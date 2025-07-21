---
nav_exclude: true
search_exclude: false
---

# DeadSequence

```csharp
public struct DeadSequence
{
	static DeadSequence()
	{
		Il2CppClassPointerStore<DeadSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DeadSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DeadSequence>.NativeClassPtr);
		DeadSequence.NativeFieldInfoPtr_DeathSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeadSequence>.NativeClassPtr, "DeathSequenceGuid");
		DeadSequence.NativeFieldInfoPtr_DeathSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeadSequence>.NativeClassPtr, "DeathSequenceState");
		DeadSequence.NativeFieldInfoPtr_AdditionalDeathSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeadSequence>.NativeClassPtr, "AdditionalDeathSequenceGuid");
		DeadSequence.NativeFieldInfoPtr_AdditionalDeathSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DeadSequence>.NativeClassPtr, "AdditionalDeathSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DeadSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DeathSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_DeathSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_AdditionalDeathSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_AdditionalDeathSequenceState;

	public SequenceGUID DeathSequenceGuid;

	public SequenceState DeathSequenceState;

	public SequenceGUID AdditionalDeathSequenceGuid;

	public SequenceState AdditionalDeathSequenceState;
}
```
