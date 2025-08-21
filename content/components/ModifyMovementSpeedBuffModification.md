---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ModifyMovementSpeedBuffModification
{
	static ModifyMovementSpeedBuffModification()
	{
		Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ModifyMovementSpeedBuffModification");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr);
		ModifyMovementSpeedBuffModification.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr, "Target");
		ModifyMovementSpeedBuffModification.NativeFieldInfoPtr_Id = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr, "Id");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ModifyMovementSpeedBuffModification>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Id;

	public Entity Target;

	public ModificationId Id;
}
```

## Server Systems

- [Destroy_MoveSpeedBuffSystem]({{% relref "systems/server/Destroy_MoveSpeedBuffSystem.md" %}})
- [MoveSpeedBuffSystem]({{% relref "systems/server/MoveSpeedBuffSystem.md" %}})
- [Spawn_MoveSpeedBuffSystem]({{% relref "systems/server/Spawn_MoveSpeedBuffSystem.md" %}})
