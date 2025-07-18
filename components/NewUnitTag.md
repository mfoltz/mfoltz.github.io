---
nav_exclude: true
search_exclude: true
---

# NewUnitTag

```csharp
public struct NewUnitTag
{
	static NewUnitTag()
	{
		Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "NewUnitTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr);
		NewUnitTag.NativeFieldInfoPtr_FollowerTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr, "FollowerTarget");
		NewUnitTag.NativeFieldInfoPtr_MapToStation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr, "MapToStation");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NewUnitTag>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FollowerTarget;
	private static readonly IntPtr NativeFieldInfoPtr_MapToStation;

	public Entity FollowerTarget;

	public bool MapToStation;
}
```

## Server Systems

- [ServantSpawnSetupSystem](/systems/server/ServantSpawnSetupSystem)
