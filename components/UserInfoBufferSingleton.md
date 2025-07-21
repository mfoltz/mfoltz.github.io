---
nav_exclude: true
search_exclude: false
---

# UserInfoBufferSingleton

```csharp
public struct UserInfoBufferSingleton
{
	static UserInfoBufferSingleton()
	{
		Il2CppClassPointerStore<UserInfoBufferSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UserInfoBufferSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserInfoBufferSingleton>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserInfoBufferSingleton>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [ArenaStationSubMenuMapper](/systems/client/ArenaStationSubMenuMapper)
- [ClanMenuMapper](/systems/client/ClanMenuMapper)
- [TargetInfoParentSystem](/systems/client/TargetInfoParentSystem)
- [UserInfoBufferSystem_Client](/systems/client/UserInfoBufferSystem_Client)
- [VivoxClientSystem](/systems/client/VivoxClientSystem)
