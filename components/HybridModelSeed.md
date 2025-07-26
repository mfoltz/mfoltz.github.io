---
nav_exclude: true
search_exclude: true
---

# HybridModelSeed

```csharp
public struct HybridModelSeed
{
	static HybridModelSeed()
	{
		Il2CppClassPointerStore<HybridModelSeed>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Hybrid", "HybridModelSeed");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HybridModelSeed>.NativeClassPtr);
		HybridModelSeed.NativeFieldInfoPtr_Seed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelSeed>.NativeClassPtr, "Seed");
		HybridModelSeed.NativeFieldInfoPtr_HasSetSeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HybridModelSeed>.NativeClassPtr, "HasSetSeed");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HybridModelSeed>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Seed;
	private static readonly IntPtr NativeFieldInfoPtr_HasSetSeed;

	public ushort Seed;

	public bool HasSetSeed;
}
```

## Server Systems

- [HybridModelSeed_Spawn](/systems/server/HybridModelSeed_Spawn)
