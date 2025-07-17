---
nav_exclude: true
search_exclude: true
---

# RequiredProgressionToConsume

```csharp
[StructLayout(2)]
public struct RequiredProgressionToConsume
{
	static RequiredProgressionToConsume()
	{
		Il2CppClassPointerStore<RequiredProgressionToConsume>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "RequiredProgressionToConsume");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RequiredProgressionToConsume>.NativeClassPtr);
		RequiredProgressionToConsume.NativeFieldInfoPtr_RequirementGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RequiredProgressionToConsume>.NativeClassPtr, "RequirementGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RequiredProgressionToConsume>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RequirementGuid;
	[FieldOffset(0)]
	public PrefabGUID RequirementGuid;
}
