---
nav_exclude: true
search_exclude: false
---

# FollowBuffOwnerModifications

```csharp
public struct FollowBuffOwnerModifications
{
	static FollowBuffOwnerModifications()
	{
		Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "FollowBuffOwnerModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr);
		FollowBuffOwnerModifications.NativeFieldInfoPtr_FollowedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr, "FollowedModId");
		FollowBuffOwnerModifications.NativeFieldInfoPtr_FollowModeModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr, "FollowModeModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<FollowBuffOwnerModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FollowedModId;
	private static readonly IntPtr NativeFieldInfoPtr_FollowModeModId;

	public ModificationId FollowedModId;

	public ModificationId FollowModeModId;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server](/systems/server/Apply_BuffModificationsSystem_Server)
- [Cleanup_BuffModificationsSystem_Server](/systems/server/Cleanup_BuffModificationsSystem_Server)
- [Destroy_BuffModificationsSystem_Server](/systems/server/Destroy_BuffModificationsSystem_Server)
