---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CreateResetBuffAgeNetworkEvent
{
	static CreateResetBuffAgeNetworkEvent()
	{
		Il2CppClassPointerStore<CreateResetBuffAgeNetworkEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CreateResetBuffAgeNetworkEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateResetBuffAgeNetworkEvent>.NativeClassPtr);
		CreateResetBuffAgeNetworkEvent.NativeFieldInfoPtr_BuffEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateResetBuffAgeNetworkEvent>.NativeClassPtr, "BuffEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateResetBuffAgeNetworkEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuffEntity;

	public Entity BuffEntity;
}
```

## Server Systems

- [ResetBuffAgeEventSystem_Server]({{% relref "systems/server/ResetBuffAgeEventSystem_Server.md" %}})
