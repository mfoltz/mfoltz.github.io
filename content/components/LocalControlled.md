---
nav_exclude: true
search_exclude: true
---

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

- [AbilityBarParentBinderSystem]({{% relref "systems/client/AbilityBarParentBinderSystem.md" %}})
- [ActionBarParentMapper]({{% relref "systems/client/ActionBarParentMapper.md" %}})
- [AnnouncementHUDSystem]({{% relref "systems/client/AnnouncementHUDSystem.md" %}})
- [ClientAdminConsoleCommandSystem]({{% relref "systems/client/ClientAdminConsoleCommandSystem.md" %}})
- [ClientSequencerConsoleCommandSystem]({{% relref "systems/client/ClientSequencerConsoleCommandSystem.md" %}})
- [CommonClientDataSystem]({{% relref "systems/client/CommonClientDataSystem.md" %}})
- [DeathMenuSystem]({{% relref "systems/client/DeathMenuSystem.md" %}})
- [DebugViewBinderSystem]({{% relref "systems/client/DebugViewBinderSystem.md" %}})
- [MapMenuMapper]({{% relref "systems/client/MapMenuMapper.md" %}})
- [NetworkInterpolationSystem_Client]({{% relref "systems/client/NetworkInterpolationSystem_Client.md" %}})
- [ScrollingCombatTextParentBinderSystem]({{% relref "systems/client/ScrollingCombatTextParentBinderSystem.md" %}})
- [WindSystem]({{% relref "systems/client/WindSystem.md" %}})
