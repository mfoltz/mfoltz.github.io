---
nav_exclude: true
search_exclude: true
---

```csharp
public struct AllyPermission
{
	static AllyPermission()
	{
		Il2CppClassPointerStore<AllyPermission>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AllyPermission");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AllyPermission>.NativeClassPtr);
		AllyPermission.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AllyPermission>.NativeClassPtr, "User");
		AllyPermission.NativeFieldInfoPtr_Permissions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AllyPermission>.NativeClassPtr, "Permissions");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AllyPermission>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_User;
	private static readonly IntPtr NativeFieldInfoPtr_Permissions;

	public NetworkedEntity User;

	public AllyPermissionFlag Permissions;
}
```
