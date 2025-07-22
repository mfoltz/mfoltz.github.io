---
nav_exclude: true
search_exclude: false
---

# BuffByItemCategoryCount

```csharp
public struct BuffByItemCategoryCount
{
	static BuffByItemCategoryCount()
	{
		Il2CppClassPointerStore<BuffByItemCategoryCount>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BuffByItemCategoryCount");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffByItemCategoryCount>.NativeClassPtr);
		BuffByItemCategoryCount.NativeFieldInfoPtr_ItemCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffByItemCategoryCount>.NativeClassPtr, "ItemCategory");
		BuffByItemCategoryCount.NativeFieldInfoPtr_BuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffByItemCategoryCount>.NativeClassPtr, "BuffGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffByItemCategoryCount>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemCategory;
	private static readonly IntPtr NativeFieldInfoPtr_BuffGuid;

	public ItemCategory ItemCategory;

	public PrefabGUID BuffGuid;
}
```
