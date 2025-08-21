---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BagEquipUpdateBuffByItemCategoryCountEvent
{
	static BagEquipUpdateBuffByItemCategoryCountEvent()
	{
		Il2CppClassPointerStore<BagEquipUpdateBuffByItemCategoryCountEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "BagEquipUpdateBuffByItemCategoryCountEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BagEquipUpdateBuffByItemCategoryCountEvent>.NativeClassPtr);
		BagEquipUpdateBuffByItemCategoryCountEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagEquipUpdateBuffByItemCategoryCountEvent>.NativeClassPtr, "Target");
		BagEquipUpdateBuffByItemCategoryCountEvent.NativeFieldInfoPtr_ItemCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BagEquipUpdateBuffByItemCategoryCountEvent>.NativeClassPtr, "ItemCategory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BagEquipUpdateBuffByItemCategoryCountEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ItemCategory;

	public Entity Target;

	public ItemCategory ItemCategory;
}
```

## Server Systems

- [BuffByItemCategoryCountSystem]({{% relref "systems/server/BuffByItemCategoryCountSystem.md" %}})
