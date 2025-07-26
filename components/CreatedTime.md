---
nav_exclude: true
search_exclude: true
---

# CreatedTime

```csharp
public struct CreatedTime
{
	static CreatedTime()
	{
		Il2CppClassPointerStore<CreatedTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CreatedTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreatedTime>.NativeClassPtr);
		CreatedTime.NativeFieldInfoPtr_CreateTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreatedTime>.NativeClassPtr, "CreateTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreatedTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CreateTime;

	public double CreateTime;
}
```

## Server Systems

- [CreatedTimeSpawnSystem](/systems/server/CreatedTimeSpawnSystem)

## Client Systems

- [MountBuffSpawnSystem_Client](/systems/client/MountBuffSpawnSystem_Client)
