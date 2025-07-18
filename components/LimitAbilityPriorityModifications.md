---
nav_exclude: true
search_exclude: true
---

# LimitAbilityPriorityModifications

```csharp
public struct LimitAbilityPriorityModifications
{
	static LimitAbilityPriorityModifications()
	{
		Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "LimitAbilityPriorityModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr);
		LimitAbilityPriorityModifications.NativeFieldInfoPtr_LimitAbilityPriorityModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr, "LimitAbilityPriorityModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LimitAbilityPriorityModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LimitAbilityPriorityModificationId;

	public ModificationId LimitAbilityPriorityModificationId;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [Destroy_BuffModificationsSystem_Server](/systems/server/Destroy_BuffModificationsSystem_Server)
