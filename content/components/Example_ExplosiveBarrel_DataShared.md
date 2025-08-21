---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Example_ExplosiveBarrel_DataShared
{
	static Example_ExplosiveBarrel_DataShared()
	{
		Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Example_ExplosiveBarrel_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr);
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "OnDamageTakenListener");
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_FuseSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "FuseSequence");
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_FuseSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "FuseSequenceState");
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_KnockbackPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "KnockbackPower");
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_KnockbackDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "KnockbackDuration");
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_KnockbackRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "KnockbackRange");
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_FuseDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "FuseDuration");
		Example_ExplosiveBarrel_DataShared.NativeFieldInfoPtr_FuseActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, "FuseActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Example_ExplosiveBarrel_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	private static readonly IntPtr NativeFieldInfoPtr_FuseSequence;
	private static readonly IntPtr NativeFieldInfoPtr_FuseSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackPower;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackDuration;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackRange;
	private static readonly IntPtr NativeFieldInfoPtr_FuseDuration;
	private static readonly IntPtr NativeFieldInfoPtr_FuseActive;

	public ListenerId OnDamageTakenListener;

	public SequenceGUID FuseSequence;

	public SequenceState FuseSequenceState;

	public KnockbackPower KnockbackPower;

	public float KnockbackDuration;

	public float KnockbackRange;

	public float FuseDuration;

	public bool FuseActive;
}
```
