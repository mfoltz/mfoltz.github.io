---
nav_exclude: true
search_exclude: true
---

# TradeCost

```csharp
public struct TradeCost
{
	static TradeCost()
	{
		Il2CppClassPointerStore<TradeCost>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "TradeCost");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TradeCost>.NativeClassPtr);
		TradeCost.NativeFieldInfoPtr_Item = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TradeCost>.NativeClassPtr, "Item");
		TradeCost.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TradeCost>.NativeClassPtr, "Amount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TradeCost>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Item;
	private static readonly IntPtr NativeFieldInfoPtr_Amount;

	public PrefabGUID Item;

	public ushort Amount;
}
```
