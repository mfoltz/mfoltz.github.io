---
nav_exclude: true
search_exclude: false
---

# SunDamageDebuff

```csharp
public struct SunDamageDebuff
{
	static SunDamageDebuff()
	{
		Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SunDamageDebuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr);
		SunDamageDebuff.NativeFieldInfoPtr_CooldownTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "CooldownTime");
		SunDamageDebuff.NativeFieldInfoPtr_DamageFactorPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "DamageFactorPerTick");
		SunDamageDebuff.NativeFieldInfoPtr_TickRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "TickRate");
		SunDamageDebuff.NativeFieldInfoPtr_ActiveSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "ActiveSequence");
		SunDamageDebuff.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, "ActiveSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SunDamageDebuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CooldownTime;
	private static readonly IntPtr NativeFieldInfoPtr_DamageFactorPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_TickRate;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;

	public float CooldownTime;

	public float DamageFactorPerTick;

	public float TickRate;

	public SequenceGUID ActiveSequence;

	public SequenceState ActiveSequenceState;
}
```

## Server Systems

- [TakeDamageInSunDestroySystem](/systems/server/TakeDamageInSunDestroySystem)

## Client Systems

- [TakeDamageInSunDestroySystem](/systems/client/TakeDamageInSunDestroySystem)
