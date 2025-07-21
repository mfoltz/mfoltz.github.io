---
nav_exclude: true
search_exclude: false
---

# ItemPickAchievementEvent

```csharp
public struct ItemPickAchievementEvent
{
	static ItemPickAchievementEvent()
	{
		Il2CppClassPointerStore<ItemPickAchievementEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ItemPickAchievementEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ItemPickAchievementEvent>.NativeClassPtr);
		ItemPickAchievementEvent.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemPickAchievementEvent>.NativeClassPtr, "Item");
		ItemPickAchievementEvent.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemPickAchievementEvent>.NativeClassPtr, "Amount");
		ItemPickAchievementEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ItemPickAchievementEvent>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ItemPickAchievementEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Item;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public PrefabGUID Item;

	public int Amount;

	public Entity Target;
}
```
