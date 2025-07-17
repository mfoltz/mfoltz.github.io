---
nav_exclude: true
search_exclude: true
---

# RoofCategory

```csharp
[StructLayout(2)]
public struct RoofCategory
{
	static RoofCategory()
	{
		Il2CppClassPointerStore<RoofCategory>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Roofs", "RoofCategory");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RoofCategory>.NativeClassPtr);
		RoofCategory.NativeFieldInfoPtr_Category = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RoofCategory>.NativeClassPtr, "Category");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RoofCategory>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Category;
	[FieldOffset(0)]
	public RoofCategoryType Category;
}
