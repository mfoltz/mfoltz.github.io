---
nav_exclude: true
search_exclude: false
---

# YieldResourcesOnDamageTaken

```csharp
public struct YieldResourcesOnDamageTaken
{
	static YieldResourcesOnDamageTaken()
	{
		Il2CppClassPointerStore<YieldResourcesOnDamageTaken>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "YieldResourcesOnDamageTaken");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<YieldResourcesOnDamageTaken>.NativeClassPtr);
		YieldResourcesOnDamageTaken.NativeFieldInfoPtr_ItemType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<YieldResourcesOnDamageTaken>.NativeClassPtr, "ItemType");
		YieldResourcesOnDamageTaken.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<YieldResourcesOnDamageTaken>.NativeClassPtr, "Amount");
		YieldResourcesOnDamageTaken.NativeFieldInfoPtr_AmountTaken = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<YieldResourcesOnDamageTaken>.NativeClassPtr, "AmountTaken");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<YieldResourcesOnDamageTaken>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ItemType;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_AmountTaken;

	public PrefabGUID ItemType;

	public int Amount;

	public int AmountTaken;
}
```

## Server Systems

- [InitializeYieldResourcesSystem](/systems/server/InitializeYieldResourcesSystem)
- [YieldResourcesSystem_Dead](/systems/server/YieldResourcesSystem_Dead)
