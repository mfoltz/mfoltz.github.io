---
nav_exclude: true
search_exclude: false
---

# LaunchProjectileTowardsTargetOnGameplayEvent_DataServer

```csharp
public struct LaunchProjectileTowardsTargetOnGameplayEvent_DataServer
{
	static LaunchProjectileTowardsTargetOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<LaunchProjectileTowardsTargetOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "LaunchProjectileTowardsTargetOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LaunchProjectileTowardsTargetOnGameplayEvent_DataServer>.NativeClassPtr);
		LaunchProjectileTowardsTargetOnGameplayEvent_DataServer.NativeFieldInfoPtr_NewProjectileEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LaunchProjectileTowardsTargetOnGameplayEvent_DataServer>.NativeClassPtr, "NewProjectileEntity");
		LaunchProjectileTowardsTargetOnGameplayEvent_DataServer.NativeFieldInfoPtr_MaxTriggers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LaunchProjectileTowardsTargetOnGameplayEvent_DataServer>.NativeClassPtr, "MaxTriggers");
		LaunchProjectileTowardsTargetOnGameplayEvent_DataServer.NativeFieldInfoPtr_CurrentTriggers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LaunchProjectileTowardsTargetOnGameplayEvent_DataServer>.NativeClassPtr, "CurrentTriggers");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LaunchProjectileTowardsTargetOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NewProjectileEntity;
	private static readonly IntPtr NativeFieldInfoPtr_MaxTriggers;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentTriggers;

	public PrefabGUID NewProjectileEntity;

	public int MaxTriggers;

	public int CurrentTriggers;
}
```
