---
nav_exclude: true
search_exclude: false
---

# WarEvent_Portal

```csharp
public struct WarEvent_Portal
{
	static WarEvent_Portal()
	{
		Il2CppClassPointerStore<WarEvent_Portal>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_Portal");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_Portal>.NativeClassPtr);
		WarEvent_Portal.NativeFieldInfoPtr_SpawnRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_Portal>.NativeClassPtr, "SpawnRadius");
		WarEvent_Portal.NativeFieldInfoPtr_HeightOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_Portal>.NativeClassPtr, "HeightOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_Portal>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnRadius;
	private static readonly IntPtr NativeFieldInfoPtr_HeightOffset;

	public float SpawnRadius;

	public float HeightOffset;
}
```

## Server Systems

- [WarEventRegistrySystem](/systems/server/WarEventRegistrySystem)

## Client Systems

- [WarEventRegistrySystem](/systems/client/WarEventRegistrySystem)
