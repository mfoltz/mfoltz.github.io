---
nav_exclude: true
search_exclude: true
---

# ModifyTeamBuff

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

- [ModifyTeamBuffSystem_Destroy](/systems/server/ModifyTeamBuffSystem_Destroy)
- [ModifyTeamBuffSystem_Spawn](/systems/server/ModifyTeamBuffSystem_Spawn)
- [UpdateModifyTeamBuffSystem](/systems/server/UpdateModifyTeamBuffSystem)
