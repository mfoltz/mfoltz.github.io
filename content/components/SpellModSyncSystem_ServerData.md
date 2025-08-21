---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SpellModSyncSystem_ServerData
{
	static SpellModSyncSystem_ServerData()
	{
		Il2CppClassPointerStore<SpellModSyncSystem_ServerData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "SpellModSyncSystem_ServerData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellModSyncSystem_ServerData>.NativeClassPtr);
		SpellModSyncSystem_ServerData.NativeFieldInfoPtr_SpellMods = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellModSyncSystem_ServerData>.NativeClassPtr, "SpellMods");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellModSyncSystem_ServerData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpellMods;

	public SyncRegistry_Server<SpellModSet> SpellMods;
}
```

## Server Systems

- [SpellModSyncPersistenceSystem]({{% relref "systems/server/SpellModSyncPersistenceSystem.md" %}})
- [SpellModSyncSystem_Server]({{% relref "systems/server/SpellModSyncSystem_Server.md" %}})
