---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Script_Dracula_SpawnerData
{
	static Script_Dracula_SpawnerData()
	{
		Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Dracula_SpawnerData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr);
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "State");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_DraculaInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "DraculaInstance");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_DraculaPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "DraculaPrefabGuid");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_SeatedPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "SeatedPrefabGuid");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_StandUpPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "StandUpPrefabGuid");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_VictoryTeleportBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "VictoryTeleportBuff");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_VictoryChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "VictoryChunk");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_SpawnOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "SpawnOffset");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_DraculaFeed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "DraculaFeed");
		Script_Dracula_SpawnerData.NativeFieldInfoPtr_DraculaDowned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, "DraculaDowned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Dracula_SpawnerData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;
	private static readonly IntPtr NativeFieldInfoPtr_DraculaInstance;
	private static readonly IntPtr NativeFieldInfoPtr_DraculaPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SeatedPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_StandUpPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_VictoryTeleportBuff;
	private static readonly IntPtr NativeFieldInfoPtr_VictoryChunk;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnOffset;
	private static readonly IntPtr NativeFieldInfoPtr_DraculaFeed;
	private static readonly IntPtr NativeFieldInfoPtr_DraculaDowned;

	public Script_Dracula_SpawnerData.DraculaState State;

	public Entity DraculaInstance;

	public PrefabGUID DraculaPrefabGuid;

	public PrefabGUID SeatedPrefabGuid;

	public PrefabGUID StandUpPrefabGuid;

	public PrefabGUID VictoryTeleportBuff;

	public TerrainChunk VictoryChunk;

	public float3 SpawnOffset;

	public PrefabIdentifier DraculaFeed;

	public PrefabIdentifier DraculaDowned;
	public enum DraculaState
	{
		Waiting,
		Reset,
		Seated,
		StandUp,
		Combat,
		Victory
	}
}
```
