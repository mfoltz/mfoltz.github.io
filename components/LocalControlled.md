---
nav_exclude: true
search_exclude: true
---

# LocalControlled

```csharp
public struct LocalControlled
{
	static LocalControlled()
	{
		Il2CppClassPointerStore<LocalControlled>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "LocalControlled");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LocalControlled>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LocalControlled>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [AbilityBarParentBinderSystem](/systems/client/AbilityBarParentBinderSystem)
- [ActionBarParentMapper](/systems/client/ActionBarParentMapper)
- [AnnouncementHUDSystem](/systems/client/AnnouncementHUDSystem)
- [ClientAdminConsoleCommandSystem](/systems/client/ClientAdminConsoleCommandSystem)
- [ClientSequencerConsoleCommandSystem](/systems/client/ClientSequencerConsoleCommandSystem)
- [CommonClientDataSystem](/systems/client/CommonClientDataSystem)
- [DeathMenuSystem](/systems/client/DeathMenuSystem)
- [DebugViewBinderSystem](/systems/client/DebugViewBinderSystem)
- [MapMenuMapper](/systems/client/MapMenuMapper)
- [NetworkInterpolationSystem_Client](/systems/client/NetworkInterpolationSystem_Client)
- [ScrollingCombatTextParentBinderSystem](/systems/client/ScrollingCombatTextParentBinderSystem)
- [WindSystem](/systems/client/WindSystem)
