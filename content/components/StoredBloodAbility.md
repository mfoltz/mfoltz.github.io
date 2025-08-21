---
nav_exclude: true
search_exclude: true
---

```csharp
public struct StoredBloodAbility
{
	static StoredBloodAbility()
	{
		Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StoredBloodAbility");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr);
		StoredBloodAbility.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, "BloodQuality");
		StoredBloodAbility.NativeFieldInfoPtr_BloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, "BloodType");
		StoredBloodAbility.NativeFieldInfoPtr_SecondaryBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, "SecondaryBlood");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StoredBloodAbility>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_BloodType;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryBlood;

	public float BloodQuality;

	public PrefabGUID BloodType;

	public SecondaryBloodData SecondaryBlood;
}
```
