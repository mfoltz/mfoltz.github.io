---
nav_exclude: true
search_exclude: true
---

# CastleTeleporterComponent

```csharp
public struct CastleTeleporterComponent
{
	static CastleTeleporterComponent()
	{
		Il2CppClassPointerStore<CastleTeleporterComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleTeleporterComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleTeleporterComponent>.NativeClassPtr);
		CastleTeleporterComponent.NativeFieldInfoPtr_Group = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleTeleporterComponent>.NativeClassPtr, "Group");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleTeleporterComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Group;

	public byte Group;
}
```

## Server Systems

- [CastleTeleporterConnectSystem](/systems/server/CastleTeleporterConnectSystem)
- [CastleTeleporterDisconnectSystem](/systems/server/CastleTeleporterDisconnectSystem)
