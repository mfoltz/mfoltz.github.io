---
nav_exclude: true
search_exclude: true
---

# SetDynamicCollisionHardnessModifications

```csharp
public struct SetDynamicCollisionHardnessModifications
{
	static SetDynamicCollisionHardnessModifications()
	{
		Il2CppClassPointerStore<SetDynamicCollisionHardnessModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SetDynamicCollisionHardnessModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SetDynamicCollisionHardnessModifications>.NativeClassPtr);
		SetDynamicCollisionHardnessModifications.NativeFieldInfoPtr_AgainstPlayersModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetDynamicCollisionHardnessModifications>.NativeClassPtr, "AgainstPlayersModId");
		SetDynamicCollisionHardnessModifications.NativeFieldInfoPtr_AgainstUnitsModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SetDynamicCollisionHardnessModifications>.NativeClassPtr, "AgainstUnitsModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SetDynamicCollisionHardnessModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AgainstPlayersModId;
	private static readonly IntPtr NativeFieldInfoPtr_AgainstUnitsModId;

	public ModificationId AgainstPlayersModId;

	public ModificationId AgainstUnitsModId;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [Destroy_BuffModificationsSystem_Server](/systems/server/Destroy_BuffModificationsSystem_Server)
