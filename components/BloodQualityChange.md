---
nav_exclude: true
search_exclude: true
---

# BloodQualityChange

```csharp
public struct BloodQualityChange
{
	static BloodQualityChange()
	{
		Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodQualityChange");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr);
		BloodQualityChange.NativeFieldInfoPtr_Quality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr, "Quality");
		BloodQualityChange.NativeFieldInfoPtr_BloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr, "BloodType");
		BloodQualityChange.NativeFieldInfoPtr_SecondaryBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr, "SecondaryBlood");
		BloodQualityChange.NativeFieldInfoPtr_BloodSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr, "BloodSource");
		BloodQualityChange.NativeFieldInfoPtr_ForceReapplyBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr, "ForceReapplyBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodQualityChange>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Quality;
	private static readonly IntPtr NativeFieldInfoPtr_BloodType;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryBlood;
	private static readonly IntPtr NativeFieldInfoPtr_BloodSource;
	private static readonly IntPtr NativeFieldInfoPtr_ForceReapplyBuff;

	public float Quality;

	public PrefabGUID BloodType;

	public SecondaryBloodData SecondaryBlood;

	public PrefabGUID BloodSource;

	public bool ForceReapplyBuff;
}
```
