---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ItemData
{
	static ItemData()
	{
		Il2CppClassPointerStore<ItemData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ItemData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ItemData>.NativeClassPtr);
		ItemData.NativeFieldInfoPtr_SilverValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "SilverValue");
		ItemData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "Entity");
		ItemData.NativeFieldInfoPtr_ItemTypeGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "ItemTypeGUID");
		ItemData.NativeFieldInfoPtr_DropItemPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "DropItemPrefab");
		ItemData.NativeFieldInfoPtr_DropItemArc = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "DropItemArc");
		ItemData.NativeFieldInfoPtr_MaxAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "MaxAmount");
		ItemData.NativeFieldInfoPtr_ItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "ItemType");
		ItemData.NativeFieldInfoPtr_ItemCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "ItemCategory");
		ItemData.NativeFieldInfoPtr_RemoveOnConsume = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "RemoveOnConsume");
		ItemData.NativeFieldInfoPtr_SortOrder = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemData>.NativeClassPtr, "SortOrder");
		ItemData.NativeMethodInfoPtr_get_SoulBound_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ItemData>.NativeClassPtr, 100664590);
		ItemData.NativeMethodInfoPtr_get_BloodBound_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ItemData>.NativeClassPtr, 100664591);
		ItemData.NativeMethodInfoPtr_get_CanBeDropped_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ItemData>.NativeClassPtr, 100664592);
	}
	public unsafe bool SoulBound
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ItemData.NativeMethodInfoPtr_get_SoulBound_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool BloodBound
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ItemData.NativeMethodInfoPtr_get_BloodBound_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool CanBeDropped
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ItemData.NativeMethodInfoPtr_get_CanBeDropped_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ItemData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SilverValue;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_ItemTypeGUID;
	private static readonly IntPtr NativeFieldInfoPtr_DropItemPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_DropItemArc;
	private static readonly IntPtr NativeFieldInfoPtr_MaxAmount;
	private static readonly IntPtr NativeFieldInfoPtr_ItemType;
	private static readonly IntPtr NativeFieldInfoPtr_ItemCategory;
	private static readonly IntPtr NativeFieldInfoPtr_RemoveOnConsume;
	private static readonly IntPtr NativeFieldInfoPtr_SortOrder;
	private static readonly IntPtr NativeMethodInfoPtr_get_SoulBound_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_BloodBound_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_CanBeDropped_Public_get_Boolean_0;

	public float SilverValue;

	public Entity Entity;

	public PrefabGUID ItemTypeGUID;

	public PrefabGUID DropItemPrefab;

	public PrefabGUID DropItemArc;

	public int MaxAmount;

	public ItemType ItemType;

	public ItemCategory ItemCategory;

	public bool RemoveOnConsume;

	public ushort SortOrder;
}
```

## Server Systems

- [GameDataSystem]({{% relref "systems/server/GameDataSystem.md" %}})
