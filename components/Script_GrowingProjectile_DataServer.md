---
nav_exclude: true
search_exclude: true
---

# Script_GrowingProjectile_DataServer

```csharp
public struct Script_GrowingProjectile_DataServer
{
	static Script_GrowingProjectile_DataServer()
	{
		Il2CppClassPointerStore<Script_GrowingProjectile_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_GrowingProjectile_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_GrowingProjectile_DataServer>.NativeClassPtr);
		Script_GrowingProjectile_DataServer.NativeFieldInfoPtr_StartSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GrowingProjectile_DataServer>.NativeClassPtr, "StartSize");
		Script_GrowingProjectile_DataServer.NativeFieldInfoPtr_EndSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_GrowingProjectile_DataServer>.NativeClassPtr, "EndSize");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_GrowingProjectile_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartSize;
	private static readonly IntPtr NativeFieldInfoPtr_EndSize;

	public float StartSize;

	public float EndSize;
}
```
