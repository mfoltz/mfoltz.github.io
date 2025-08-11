---
nav_exclude: true
search_exclude: true
---

# ControlledBy

```csharp
public struct ControlledBy
{
	static ControlledBy()
	{
		Il2CppClassPointerStore<ControlledBy>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ControlledBy");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ControlledBy>.NativeClassPtr);
		ControlledBy.NativeFieldInfoPtr_Controller = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ControlledBy>.NativeClassPtr, "Controller");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ControlledBy>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Controller;

	public Entity Controller;
}
```

## Server Systems

- [DisableNpcsSystem](/systems/server/DisableNpcsSystem)
- [ReactToPlayerCharacterSpawnSystem](/systems/server/ReactToPlayerCharacterSpawnSystem)
- [VBloodSystem](/systems/server/VBloodSystem)

## Client Systems

- [DisableNpcsSystem](/systems/client/DisableNpcsSystem)
