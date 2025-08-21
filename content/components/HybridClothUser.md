---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HybridClothUser
{
	static HybridClothUser()
	{
		Il2CppClassPointerStore<HybridClothUser>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Hybrid", "HybridClothUser");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridClothUser>.NativeClassPtr);
		HybridClothUser.NativeFieldInfoPtr_BudgetType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridClothUser>.NativeClassPtr, "BudgetType");
		HybridClothUser.NativeFieldInfoPtr_SimulateCloth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridClothUser>.NativeClassPtr, "SimulateCloth");
		HybridClothUser.NativeFieldInfoPtr_HasCape = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridClothUser>.NativeClassPtr, "HasCape");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridClothUser>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BudgetType;
	private static readonly IntPtr NativeFieldInfoPtr_SimulateCloth;
	private static readonly IntPtr NativeFieldInfoPtr_HasCape;

	public UnitBudgetType BudgetType;

	public bool SimulateCloth;

	public bool HasCape;
}
```

## Client Systems

- [HybridDynamicClothSystem]({{% relref "systems/client/HybridDynamicClothSystem.md" %}})
