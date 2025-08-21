---
nav_exclude: true
search_exclude: true
---

```csharp
public struct MaleAccessoriesEntry
{
	static MaleAccessoriesEntry()
	{
		Il2CppClassPointerStore<MaleAccessoriesEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MaleAccessoriesEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MaleAccessoriesEntry>.NativeClassPtr);
		MaleAccessoriesEntry.NativeFieldInfoPtr_Requirement = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MaleAccessoriesEntry>.NativeClassPtr, "Requirement");
		MaleAccessoriesEntry.NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaleAccessoriesEntry>.NativeClassPtr, 100663920);
	}
	public unsafe UserContentFlags RequirementRO
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaleAccessoriesEntry.NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MaleAccessoriesEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Requirement;
	private static readonly IntPtr NativeMethodInfoPtr_get_RequirementRO_Public_Virtual_Final_New_get_UserContentFlags_0;

	public UserContentFlags Requirement;
}
```
