---
nav_exclude: true
search_exclude: true
---

# LocalUser

```csharp
[StructLayout(2)]
public struct LocalUser
{
	static LocalUser()
	{
		Il2CppClassPointerStore<LocalUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "LocalUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LocalUser>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LocalUser>.NativeClassPtr, ref this));
	}
}
