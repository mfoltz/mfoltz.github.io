---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SiegeWeapon
{
	static SiegeWeapon()
	{
		Il2CppClassPointerStore<SiegeWeapon>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SiegeWeapon");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SiegeWeapon>.NativeClassPtr);
		SiegeWeapon.NativeFieldInfoPtr_BuffApplied = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SiegeWeapon>.NativeClassPtr, "BuffApplied");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SiegeWeapon>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffApplied;

	public bool BuffApplied;
}
```
