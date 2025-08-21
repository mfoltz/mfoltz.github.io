---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BuffModificationFlagData
{
	static BuffModificationFlagData()
	{
		Il2CppClassPointerStore<BuffModificationFlagData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BuffModificationFlagData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffModificationFlagData>.NativeClassPtr);
		BuffModificationFlagData.NativeFieldInfoPtr_ModificationTypes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffModificationFlagData>.NativeClassPtr, "ModificationTypes");
		BuffModificationFlagData.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffModificationFlagData>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffModificationFlagData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationTypes;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;

	public long ModificationTypes;

	public ModificationId ModificationId;
}
```

## Server Systems

- [Apply_BuffModificationsSystem_Server]({{% relref "systems/server/Apply_BuffModificationsSystem_Server.md" %}})
- [Destroy_BuffModificationsSystem_Server]({{% relref "systems/server/Destroy_BuffModificationsSystem_Server.md" %}})
- [Modify_BuffModificationsSystem_Server]({{% relref "systems/server/Modify_BuffModificationsSystem_Server.md" %}})
