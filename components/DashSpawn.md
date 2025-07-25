---
nav_exclude: true
search_exclude: true
---

# DashSpawn

```csharp
public struct DashSpawn
{
	static DashSpawn()
	{
		Il2CppClassPointerStore<DashSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DashSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DashSpawn>.NativeClassPtr);
		DashSpawn.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DashSpawn>.NativeClassPtr, "MinRange");
		DashSpawn.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DashSpawn>.NativeClassPtr, "MaxRange");
		DashSpawn.NativeFieldInfoPtr_UseMinMaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DashSpawn>.NativeClassPtr, "UseMinMaxRange");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DashSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_UseMinMaxRange;

	public float MinRange;

	public float MaxRange;

	public bool UseMinMaxRange;
}
```

## Server Systems

- [Spawn_DashSystem](/systems/server/Spawn_DashSystem)
