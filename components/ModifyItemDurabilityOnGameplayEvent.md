---
nav_exclude: true
search_exclude: false
---

# ModifyItemDurabilityOnGameplayEvent

```csharp
public struct ModifyItemDurabilityOnGameplayEvent
{
	static ModifyItemDurabilityOnGameplayEvent()
	{
		Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyItemDurabilityOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr);
		ModifyItemDurabilityOnGameplayEvent.NativeFieldInfoPtr_ItemCategory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr, "ItemCategory");
		ModifyItemDurabilityOnGameplayEvent.NativeFieldInfoPtr_DurabilityFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr, "DurabilityFactor");
		ModifyItemDurabilityOnGameplayEvent.NativeFieldInfoPtr_Durability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr, "Durability");
		ModifyItemDurabilityOnGameplayEvent.NativeFieldInfoPtr_SplitForEachItem = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr, "SplitForEachItem");
		ModifyItemDurabilityOnGameplayEvent.NativeFieldInfoPtr_OnlyEquipped = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr, "OnlyEquipped");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyItemDurabilityOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemCategory;
	private static readonly IntPtr NativeFieldInfoPtr_DurabilityFactor;
	private static readonly IntPtr NativeFieldInfoPtr_Durability;
	private static readonly IntPtr NativeFieldInfoPtr_SplitForEachItem;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyEquipped;

	public ItemCategory ItemCategory;

	public float DurabilityFactor;

	public float Durability;

	public bool SplitForEachItem;

	public bool OnlyEquipped;
}
```
