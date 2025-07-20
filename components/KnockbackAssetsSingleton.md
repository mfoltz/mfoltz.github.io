---
nav_exclude: true
search_exclude: true
---

# KnockbackAssetsSingleton

```csharp
public struct KnockbackAssetsSingleton
{
	static KnockbackAssetsSingleton()
	{
		Il2CppClassPointerStore<KnockbackAssetsSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "KnockbackAssetsSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<KnockbackAssetsSingleton>.NativeClassPtr);
		KnockbackAssetsSingleton.NativeFieldInfoPtr_KnockbackBuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackAssetsSingleton>.NativeClassPtr, "KnockbackBuffGuid");
		KnockbackAssetsSingleton.NativeFieldInfoPtr_InterruptBuffGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<KnockbackAssetsSingleton>.NativeClassPtr, "InterruptBuffGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<KnockbackAssetsSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_KnockbackBuffGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InterruptBuffGuid;

	public PrefabGUID KnockbackBuffGuid;

	public PrefabGUID InterruptBuffGuid;
}
```

## Server Systems

- [HandleGameplayEventsRecursiveSystem](/systems/server/HandleGameplayEventsRecursiveSystem)
- [KnockbackEventSystem](/systems/server/KnockbackEventSystem)
