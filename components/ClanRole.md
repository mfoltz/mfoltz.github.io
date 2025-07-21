---
nav_exclude: true
search_exclude: false
---

# ClanRole

```csharp
public struct ClanRole
{
	static ClanRole()
	{
		Il2CppClassPointerStore<ClanRole>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ClanRole");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClanRole>.NativeClassPtr);
		ClanRole.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanRole>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClanRole>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public ClanRoleEnum Value;
}
```
