---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WoundedConstants
{
	static WoundedConstants()
	{
		Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WoundedConstants");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr);
		WoundedConstants.NativeFieldInfoPtr_HealthFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "HealthFactor");
		WoundedConstants.NativeFieldInfoPtr_WoundedTriggerSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "WoundedTriggerSequenceGuid");
		WoundedConstants.NativeFieldInfoPtr_WoundedSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "WoundedSequenceGuid");
		WoundedConstants.NativeFieldInfoPtr_TriggerKnockbackOnWounded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "TriggerKnockbackOnWounded");
		WoundedConstants.NativeFieldInfoPtr_KnockbackPower = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "KnockbackPower");
		WoundedConstants.NativeFieldInfoPtr_KnockbackDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "KnockbackDuration");
		WoundedConstants.NativeFieldInfoPtr_KnockbackRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "KnockbackRange");
		WoundedConstants.NativeFieldInfoPtr_WoundedKnockbackResistanceIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, "WoundedKnockbackResistanceIndex");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WoundedConstants>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HealthFactor;
	private static readonly IntPtr NativeFieldInfoPtr_WoundedTriggerSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_WoundedSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerKnockbackOnWounded;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackPower;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackDuration;
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackRange;
	private static readonly IntPtr NativeFieldInfoPtr_WoundedKnockbackResistanceIndex;

	public float HealthFactor;

	public SequenceGUID WoundedTriggerSequenceGuid;

	public SequenceGUID WoundedSequenceGuid;

	public bool TriggerKnockbackOnWounded;

	public KnockbackPower KnockbackPower;

	public float KnockbackDuration;

	public float KnockbackRange;

	public int WoundedKnockbackResistanceIndex;
}
```
