---
nav_exclude: true
search_exclude: true
---

# ModifyBloodDrainBuff

```csharp
public struct ModifyBloodDrainBuff
{
	static ModifyBloodDrainBuff()
	{
		Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyBloodDrainBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr);
		ModifyBloodDrainBuff.NativeFieldInfoPtr_BloodValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "BloodValue");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_BloodIdleValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "BloodIdleValue");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "ModificationId");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_IgnoreIdleDrainModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "IgnoreIdleDrainModId");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_ModificationIdleId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "ModificationIdleId");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_ModificationType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "ModificationType");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_ModificationIdleType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "ModificationIdleType");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_ModificationPriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "ModificationPriority");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_ModificationIdlePriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "ModificationIdlePriority");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_AffectBloodValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "AffectBloodValue");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_AffectIdleBloodValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "AffectIdleBloodValue");
		ModifyBloodDrainBuff.NativeFieldInfoPtr_IgnoreIdleDrainWhileActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, "IgnoreIdleDrainWhileActive");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyBloodDrainBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodValue;
	private static readonly IntPtr NativeFieldInfoPtr_BloodIdleValue;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreIdleDrainModId;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationIdleId;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationType;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationIdleType;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationPriority;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationIdlePriority;
	private static readonly IntPtr NativeFieldInfoPtr_AffectBloodValue;
	private static readonly IntPtr NativeFieldInfoPtr_AffectIdleBloodValue;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreIdleDrainWhileActive;

	public float BloodValue;

	public float BloodIdleValue;

	public ModificationId ModificationId;

	public ModificationId IgnoreIdleDrainModId;

	public ModificationId ModificationIdleId;

	public ModificationType ModificationType;

	public ModificationType ModificationIdleType;

	public int ModificationPriority;

	public int ModificationIdlePriority;

	public bool AffectBloodValue;

	public bool AffectIdleBloodValue;

	public bool IgnoreIdleDrainWhileActive;
}
```

## Server Systems

- [ModifyBloodDrainSystem_Destroy](/systems/server/ModifyBloodDrainSystem_Destroy)
- [ModifyBloodDrainSystem_Spawn](/systems/server/ModifyBloodDrainSystem_Spawn)
- [ModifyBloodDrainSystem_Update](/systems/server/ModifyBloodDrainSystem_Update)
