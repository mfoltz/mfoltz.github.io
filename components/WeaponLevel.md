---
nav_exclude: true
search_exclude: false
---

# WeaponLevel

```csharp
public struct WeaponLevel
{
	static WeaponLevel()
	{
		Il2CppClassPointerStore<WeaponLevel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WeaponLevel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WeaponLevel>.NativeClassPtr);
		WeaponLevel.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeaponLevel>.NativeClassPtr, "Level");
		WeaponLevel.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WeaponLevel>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WeaponLevel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;

	public float Level;

	public ModificationId ModificationId;
}
```

## Server Systems

- [WeaponLevelSystem_Destroy](/systems/server/WeaponLevelSystem_Destroy)
- [WeaponLevelSystem_Spawn](/systems/server/WeaponLevelSystem_Spawn)
