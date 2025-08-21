---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HideWeapon
{
	static HideWeapon()
	{
		Il2CppClassPointerStore<HideWeapon>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HideWeapon");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HideWeapon>.NativeClassPtr);
		HideWeapon.NativeFieldInfoPtr_HideWeaponSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideWeapon>.NativeClassPtr, "HideWeaponSequenceGUID");
		HideWeapon.NativeFieldInfoPtr_HideWeaponState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HideWeapon>.NativeClassPtr, "HideWeaponState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HideWeapon>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HideWeaponSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_HideWeaponState;

	public SequenceGUID HideWeaponSequenceGUID;

	public SequenceState HideWeaponState;
}
```

## Client Systems

- [HideWeaponSystem_Destroy]({{% relref "systems/client/HideWeaponSystem_Destroy.md" %}})
