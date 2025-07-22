---
nav_exclude: true
search_exclude: false
---

# DisableAggroBuffModifications

```csharp
public struct DisableAggroBuffModifications
{
	static DisableAggroBuffModifications()
	{
		Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DisableAggroBuffModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr);
		DisableAggroBuffModifications.NativeFieldInfoPtr_OthersDontAttackTargetModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr, "OthersDontAttackTargetModId");
		DisableAggroBuffModifications.NativeFieldInfoPtr_TargetDontAttackOthersModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr, "TargetDontAttackOthersModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableAggroBuffModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OthersDontAttackTargetModId;
	private static readonly IntPtr NativeFieldInfoPtr_TargetDontAttackOthersModId;

	public ModificationId OthersDontAttackTargetModId;

	public ModificationId TargetDontAttackOthersModId;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [Destroy_BuffModificationsSystem_Server](/systems/server/Destroy_BuffModificationsSystem_Server)
