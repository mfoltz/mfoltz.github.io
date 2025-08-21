---
nav_exclude: true
search_exclude: true
---

```csharp
public struct StoredBlood
{
	static StoredBlood()
	{
		Il2CppClassPointerStore<StoredBlood>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "StoredBlood");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StoredBlood>.NativeClassPtr);
		StoredBlood.NativeFieldInfoPtr_BloodQuality = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBlood>.NativeClassPtr, "BloodQuality");
		StoredBlood.NativeFieldInfoPtr_PrimaryBloodType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBlood>.NativeClassPtr, "PrimaryBloodType");
		StoredBlood.NativeFieldInfoPtr_SecondaryBlood = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StoredBlood>.NativeClassPtr, "SecondaryBlood");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StoredBlood>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BloodQuality;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryBloodType;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryBlood;

	public float BloodQuality;

	public PrefabGUID PrimaryBloodType;

	public SecondaryBloodData SecondaryBlood;
}
```
