---
nav_exclude: true
search_exclude: false
---

# MaleFeaturesEntry

```csharp
public struct MaleFeaturesEntry
{
	static MaleFeaturesEntry()
	{
		Il2CppClassPointerStore<MaleFeaturesEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MaleFeaturesEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MaleFeaturesEntry>.NativeClassPtr);
		MaleFeaturesEntry.NativeFieldInfoPtr_Requirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MaleFeaturesEntry>.NativeClassPtr, "Requirement");
		MaleFeaturesEntry.NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaleFeaturesEntry>.NativeClassPtr, 100663919);
	}
	public unsafe UserContentFlags RequirementRO
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaleFeaturesEntry.NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MaleFeaturesEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Requirement;
	private static readonly IntPtr NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0;

	public UserContentFlags Requirement;
}
```
