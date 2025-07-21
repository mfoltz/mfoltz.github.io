---
nav_exclude: true
search_exclude: false
---

# CastleMemberNames

```csharp
public struct CastleMemberNames
{
	static CastleMemberNames()
	{
		Il2CppClassPointerStore<CastleMemberNames>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleMemberNames");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleMemberNames>.NativeClassPtr);
		CastleMemberNames.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleMemberNames>.NativeClassPtr, "Name");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleMemberNames>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;

	public FixedString64Bytes Name;
}
```
