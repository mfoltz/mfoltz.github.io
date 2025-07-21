---
nav_exclude: true
search_exclude: false
---

# UserVisitedRegions

```csharp
public struct UserVisitedRegions
{
	static UserVisitedRegions()
	{
		Il2CppClassPointerStore<UserVisitedRegions>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserVisitedRegions");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserVisitedRegions>.NativeClassPtr);
		UserVisitedRegions.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserVisitedRegions>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserVisitedRegions>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public BitField32 Value;
}
```
