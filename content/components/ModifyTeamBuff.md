---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ModifyTeamBuff
{
	static ModifyTeamBuff()
	{
		Il2CppClassPointerStore<ModifyTeamBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyTeamBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyTeamBuff>.NativeClassPtr);
		ModifyTeamBuff.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTeamBuff>.NativeClassPtr, "Source");
		ModifyTeamBuff.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyTeamBuff>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyTeamBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;

	public ModifyTeamBuffAuthoring.ModifyTeamSource Source;

	public ModificationId ModificationId;
}
```

## Server Systems

- [ModifyTeamBuffSystem_Destroy]({{% relref "systems/server/ModifyTeamBuffSystem_Destroy.md" %}})
- [ModifyTeamBuffSystem_Spawn]({{% relref "systems/server/ModifyTeamBuffSystem_Spawn.md" %}})
- [UpdateModifyTeamBuffSystem]({{% relref "systems/server/UpdateModifyTeamBuffSystem.md" %}})
