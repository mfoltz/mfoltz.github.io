---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DamageTypeData
{
	static DamageTypeData()
	{
		Il2CppClassPointerStore<DamageTypeData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DamageTypeData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DamageTypeData>.NativeClassPtr);
		DamageTypeData.NativeFieldInfoPtr_DamageType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DamageTypeData>.NativeClassPtr, "DamageType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DamageTypeData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DamageType;

	public MainDamageType DamageType;
}
```
