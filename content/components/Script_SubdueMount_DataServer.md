---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_SubdueMount_DataServer
{
	static Script_SubdueMount_DataServer()
	{
		Il2CppClassPointerStore<Script_SubdueMount_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SubdueMount_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SubdueMount_DataServer>.NativeClassPtr);
		Script_SubdueMount_DataServer.NativeFieldInfoPtr_MountGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SubdueMount_DataServer>.NativeClassPtr, "MountGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SubdueMount_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MountGuid;

	public PrefabGUID MountGuid;
}
```
