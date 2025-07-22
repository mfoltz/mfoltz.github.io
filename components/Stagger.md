---
nav_exclude: true
search_exclude: false
---

# Stagger

```csharp
public struct Stagger
{
	static Stagger()
	{
		Il2CppClassPointerStore<Stagger>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Stagger");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Stagger>.NativeClassPtr);
		Stagger.NativeFieldInfoPtr_StaggerMaxHp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stagger>.NativeClassPtr, "StaggerMaxHp");
		Stagger.NativeFieldInfoPtr_StaggerRecoveryDelay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stagger>.NativeClassPtr, "StaggerRecoveryDelay");
		Stagger.NativeFieldInfoPtr_LastHitTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stagger>.NativeClassPtr, "LastHitTime");
		Stagger.NativeFieldInfoPtr_StaggerHp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stagger>.NativeClassPtr, "StaggerHp");
		Stagger.NativeFieldInfoPtr_StaggerMaxHpFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stagger>.NativeClassPtr, "StaggerMaxHpFactor");
		Stagger.NativeFieldInfoPtr_StaggerRecoveryRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stagger>.NativeClassPtr, "StaggerRecoveryRate");
		Stagger.NativeFieldInfoPtr_StaggerBuffGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Stagger>.NativeClassPtr, "StaggerBuffGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Stagger>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StaggerMaxHp;
	private static readonly IntPtr NativeFieldInfoPtr_StaggerRecoveryDelay;
	private static readonly IntPtr NativeFieldInfoPtr_LastHitTime;
	private static readonly IntPtr NativeFieldInfoPtr_StaggerHp;
	private static readonly IntPtr NativeFieldInfoPtr_StaggerMaxHpFactor;
	private static readonly IntPtr NativeFieldInfoPtr_StaggerRecoveryRate;
	private static readonly IntPtr NativeFieldInfoPtr_StaggerBuffGUID;

	public ModifiableFloat StaggerMaxHp;

	public double StaggerRecoveryDelay;

	public double LastHitTime;

	public float StaggerHp;

	public float StaggerMaxHpFactor;

	public float StaggerRecoveryRate;

	public PrefabGUID StaggerBuffGUID;
}
```
