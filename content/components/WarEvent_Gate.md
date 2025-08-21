---
nav_exclude: true
search_exclude: true
---

```csharp
public struct WarEvent_Gate
{
	static WarEvent_Gate()
	{
		Il2CppClassPointerStore<WarEvent_Gate>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_Gate");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_Gate>.NativeClassPtr);
		WarEvent_Gate.NativeFieldInfoPtr_HeightOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_Gate>.NativeClassPtr, "HeightOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_Gate>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeightOffset;

	public float HeightOffset;
}
```

## Server Systems

- [WarEventRegistrySystem]({{% relref "systems/server/WarEventRegistrySystem.md" %}})

## Client Systems

- [WarEventRegistrySystem]({{% relref "systems/client/WarEventRegistrySystem.md" %}})
