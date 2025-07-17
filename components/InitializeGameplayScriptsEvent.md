---
nav_exclude: true
search_exclude: true
---

# InitializeGameplayScriptsEvent

```csharp
public struct InitializeGameplayScriptsEvent
{
	static InitializeGameplayScriptsEvent()
	{
		Il2CppClassPointerStore<InitializeGameplayScriptsEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Scripting", "InitializeGameplayScriptsEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InitializeGameplayScriptsEvent>.NativeClassPtr);
		InitializeGameplayScriptsEvent.NativeFieldInfoPtr_TargetPrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InitializeGameplayScriptsEvent>.NativeClassPtr, "TargetPrefabGUID");
		InitializeGameplayScriptsEvent.NativeFieldInfoPtr_TargetPrefabEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InitializeGameplayScriptsEvent>.NativeClassPtr, "TargetPrefabEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InitializeGameplayScriptsEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetPrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPrefabEntity;

	public PrefabGUID TargetPrefabGUID;

	public Entity TargetPrefabEntity;
}
```
