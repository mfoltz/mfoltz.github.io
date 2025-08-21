---
nav_exclude: true
search_exclude: true
---

```csharp
public struct InteractPickup
{
	static InteractPickup()
	{
		Il2CppClassPointerStore<InteractPickup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InteractPickup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InteractPickup>.NativeClassPtr);
		InteractPickup.NativeFieldInfoPtr_ShowSCT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InteractPickup>.NativeClassPtr, "ShowSCT");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InteractPickup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ShowSCT;

	public bool ShowSCT;
}
```

## Server Systems

- [ItemPickupSystem]({{% relref "systems/server/ItemPickupSystem.md" %}})
