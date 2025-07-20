---
nav_exclude: true
search_exclude: true
---

# BloodBuff_Brute_RecoverOnKill_DataShared

```csharp
public struct BloodBuff_Brute_RecoverOnKill_DataShared
{
	static BloodBuff_Brute_RecoverOnKill_DataShared()
	{
		Il2CppClassPointerStore<BloodBuff_Brute_RecoverOnKill_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "BloodBuff_Brute_RecoverOnKill_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuff_Brute_RecoverOnKill_DataShared>.NativeClassPtr);
		BloodBuff_Brute_RecoverOnKill_DataShared.NativeFieldInfoPtr_RecoverHealthOnKill = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Brute_RecoverOnKill_DataShared>.NativeClassPtr, "RecoverHealthOnKill");
		BloodBuff_Brute_RecoverOnKill_DataShared.NativeFieldInfoPtr_AffectRecovery = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuff_Brute_RecoverOnKill_DataShared>.NativeClassPtr, "AffectRecovery");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuff_Brute_RecoverOnKill_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RecoverHealthOnKill;
	private static readonly IntPtr NativeFieldInfoPtr_AffectRecovery;

	public float RecoverHealthOnKill;

	public bool AffectRecovery;
}
```
