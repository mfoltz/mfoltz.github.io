---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LaunchProjectileFromKiller_DataServer
{
	static LaunchProjectileFromKiller_DataServer()
	{
		Il2CppClassPointerStore<LaunchProjectileFromKiller_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "LaunchProjectileFromKiller_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LaunchProjectileFromKiller_DataServer>.NativeClassPtr);
		LaunchProjectileFromKiller_DataServer.NativeFieldInfoPtr_NewProjectileEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LaunchProjectileFromKiller_DataServer>.NativeClassPtr, "NewProjectileEntity");
		LaunchProjectileFromKiller_DataServer.NativeFieldInfoPtr_OnTargetDeathListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LaunchProjectileFromKiller_DataServer>.NativeClassPtr, "OnTargetDeathListener");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LaunchProjectileFromKiller_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectileEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OnTargetDeathListener;

	public PrefabGUID NewProjectileEntity;

	public ListenerId OnTargetDeathListener;
}
```
