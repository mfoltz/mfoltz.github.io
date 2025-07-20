---
nav_exclude: true
search_exclude: true
---

# AdminUser

```csharp
public struct AdminUser
{
	static AdminUser()
	{
		Il2CppClassPointerStore<AdminUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AdminUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AdminUser>.NativeClassPtr);
		AdminUser.NativeFieldInfoPtr_AuthMethod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdminUser>.NativeClassPtr, "AuthMethod");
		AdminUser.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AdminUser>.NativeClassPtr, "Level");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AdminUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AuthMethod;
	private static readonly IntPtr NativeFieldInfoPtr_Level;

	public AdminAuthMethod AuthMethod;

	public AdminLevel Level;
}
```
