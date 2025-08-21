---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PreventDisableBuffModifications
{
	static PreventDisableBuffModifications()
	{
		Il2CppClassPointerStore<PreventDisableBuffModifications>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PreventDisableBuffModifications");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PreventDisableBuffModifications>.NativeClassPtr);
		PreventDisableBuffModifications.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreventDisableBuffModifications>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PreventDisableBuffModifications>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModId;

	public ModificationId ModId;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server]({{% relref "systems/server/Apply_BuffModificationsSystem_Server.md" %}})
- [Destroy_BuffModificationsSystem_Server]({{% relref "systems/server/Destroy_BuffModificationsSystem_Server.md" %}})
