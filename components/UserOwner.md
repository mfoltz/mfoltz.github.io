---
nav_exclude: true
search_exclude: true
---

# UserOwner

```csharp
public struct UserOwner
{
	static UserOwner()
	{
		Il2CppClassPointerStore<UserOwner>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UserOwner");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserOwner>.NativeClassPtr);
		UserOwner.NativeFieldInfoPtr_Owner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserOwner>.NativeClassPtr, "Owner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserOwner>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Owner;

	public NetworkedEntity Owner;
}
```
