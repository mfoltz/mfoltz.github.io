---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Passive_SpawnPrefabOnGameplayEvent_DataServer
{
	static Script_Passive_SpawnPrefabOnGameplayEvent_DataServer()
	{
		Il2CppClassPointerStore<Script_Passive_SpawnPrefabOnGameplayEvent_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Passive_SpawnPrefabOnGameplayEvent_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Passive_SpawnPrefabOnGameplayEvent_DataServer>.NativeClassPtr);
		Script_Passive_SpawnPrefabOnGameplayEvent_DataServer.NativeFieldInfoPtr_SpawnPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Passive_SpawnPrefabOnGameplayEvent_DataServer>.NativeClassPtr, "SpawnPrefab");
		Script_Passive_SpawnPrefabOnGameplayEvent_DataServer.NativeFieldInfoPtr_PassivePrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Passive_SpawnPrefabOnGameplayEvent_DataServer>.NativeClassPtr, "PassivePrefab");
		Script_Passive_SpawnPrefabOnGameplayEvent_DataServer.NativeFieldInfoPtr_RandomChanceToSpawnPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Passive_SpawnPrefabOnGameplayEvent_DataServer>.NativeClassPtr, "RandomChanceToSpawnPrefab");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Passive_SpawnPrefabOnGameplayEvent_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_PassivePrefab;
	private static readonly IntPtr NativeFieldInfoPtr_RandomChanceToSpawnPrefab;

	public PrefabGUID SpawnPrefab;

	public PrefabGUID PassivePrefab;

	public float RandomChanceToSpawnPrefab;
}
```
