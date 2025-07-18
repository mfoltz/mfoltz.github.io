---
nav_exclude: true
search_exclude: true
---

# Trader

```csharp
public struct Trader
{
	static Trader()
	{
		Il2CppClassPointerStore<Trader>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Trader");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Trader>.NativeClassPtr);
		Trader.NativeFieldInfoPtr_RestockTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trader>.NativeClassPtr, "RestockTime");
		Trader.NativeFieldInfoPtr_NextRestockTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trader>.NativeClassPtr, "NextRestockTime");
		Trader.NativeFieldInfoPtr_PrevRestockTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Trader>.NativeClassPtr, "PrevRestockTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Trader>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RestockTime;
	private static readonly IntPtr NativeFieldInfoPtr_NextRestockTime;
	private static readonly IntPtr NativeFieldInfoPtr_PrevRestockTime;

	public float RestockTime;

	public double NextRestockTime;

	public double PrevRestockTime;
}
```

## Server Systems

- [TraderSpawnSystem](/systems/server/TraderSpawnSystem)
