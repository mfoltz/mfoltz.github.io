---
nav_exclude: true
search_exclude: true
---

# BloodBuffScript_ChanceToResetCooldown

```csharp
public struct BloodBuffScript_ChanceToResetCooldown
{
	static BloodBuffScript_ChanceToResetCooldown()
	{
		Il2CppClassPointerStore<BloodBuffScript_ChanceToResetCooldown>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_ChanceToResetCooldown");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_ChanceToResetCooldown>.NativeClassPtr);
		BloodBuffScript_ChanceToResetCooldown.NativeFieldInfoPtr_SCT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_ChanceToResetCooldown>.NativeClassPtr, "SCT");
		BloodBuffScript_ChanceToResetCooldown.NativeFieldInfoPtr_Chance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_ChanceToResetCooldown>.NativeClassPtr, "Chance");
		BloodBuffScript_ChanceToResetCooldown.NativeFieldInfoPtr_TriggerSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_ChanceToResetCooldown>.NativeClassPtr, "TriggerSequence");
		BloodBuffScript_ChanceToResetCooldown.NativeFieldInfoPtr_TriggerSequence2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_ChanceToResetCooldown>.NativeClassPtr, "TriggerSequence2");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_ChanceToResetCooldown>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SCT;
	private static readonly IntPtr NativeFieldInfoPtr_Chance;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerSequence;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerSequence2;

	public AssetGuid SCT;

	public float Chance;

	public SequenceGUID TriggerSequence;

	public SequenceGUID TriggerSequence2;
}
```
