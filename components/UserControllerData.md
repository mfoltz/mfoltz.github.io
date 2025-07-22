---
nav_exclude: true
search_exclude: false
---

# UserControllerData

```csharp
public struct UserControllerData
{
	static UserControllerData()
	{
		Il2CppClassPointerStore<UserControllerData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserControllerData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserControllerData>.NativeClassPtr);
		UserControllerData.NativeFieldInfoPtr_AbilityAttackSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserControllerData>.NativeClassPtr, "AbilityAttackSpeed");
		UserControllerData.NativeFieldInfoPtr_PrimaryAttackSpeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserControllerData>.NativeClassPtr, "PrimaryAttackSpeed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserControllerData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityAttackSpeed;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryAttackSpeed;

	public float AbilityAttackSpeed;

	public float PrimaryAttackSpeed;
}
```

## Server Systems

- [UserControllerDataCopySystem](/systems/server/UserControllerDataCopySystem)
