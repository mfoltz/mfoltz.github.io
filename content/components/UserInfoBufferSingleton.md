---
nav_exclude: true
search_exclude: true
---

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

- [ArenaStationSubMenuMapper]({{% relref "systems/client/ArenaStationSubMenuMapper.md" %}})
- [ClanMenuMapper]({{% relref "systems/client/ClanMenuMapper.md" %}})
- [TargetInfoParentSystem]({{% relref "systems/client/TargetInfoParentSystem.md" %}})
- [UserInfoBufferSystem_Client]({{% relref "systems/client/UserInfoBufferSystem_Client.md" %}})
- [VivoxClientSystem]({{% relref "systems/client/VivoxClientSystem.md" %}})
