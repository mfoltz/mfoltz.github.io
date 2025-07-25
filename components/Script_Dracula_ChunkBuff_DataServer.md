---
nav_exclude: true
search_exclude: true
---

# Script_Dracula_ChunkBuff_DataServer

```csharp
public struct Script_Dracula_ChunkBuff_DataServer
{
	static Script_Dracula_ChunkBuff_DataServer()
	{
		Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Dracula_ChunkBuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr);
		Script_Dracula_ChunkBuff_DataServer.NativeFieldInfoPtr_VisionModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, "VisionModificationId");
		Script_Dracula_ChunkBuff_DataServer.NativeFieldInfoPtr_ProxySyncPositionModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, "ProxySyncPositionModId");
		Script_Dracula_ChunkBuff_DataServer.NativeFieldInfoPtr_Chunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, "Chunk");
		Script_Dracula_ChunkBuff_DataServer.NativeFieldInfoPtr_ChunkFinal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, "ChunkFinal");
		Script_Dracula_ChunkBuff_DataServer.NativeFieldInfoPtr_VisionRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, "VisionRange");
		Script_Dracula_ChunkBuff_DataServer.NativeFieldInfoPtr_AffectVision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, "AffectVision");
		Script_Dracula_ChunkBuff_DataServer.NativeFieldInfoPtr_CheckAgainstDraculaVictoryChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, "CheckAgainstDraculaVictoryChunk");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Dracula_ChunkBuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_VisionModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_ProxySyncPositionModId;
	private static readonly IntPtr NativeFieldInfoPtr_Chunk;
	private static readonly IntPtr NativeFieldInfoPtr_ChunkFinal;
	private static readonly IntPtr NativeFieldInfoPtr_VisionRange;
	private static readonly IntPtr NativeFieldInfoPtr_AffectVision;
	private static readonly IntPtr NativeFieldInfoPtr_CheckAgainstDraculaVictoryChunk;

	public ModificationId VisionModificationId;

	public ModificationId ProxySyncPositionModId;

	public TerrainChunk Chunk;

	public TerrainChunk ChunkFinal;

	public float VisionRange;

	public bool AffectVision;

	public bool CheckAgainstDraculaVictoryChunk;
}
```
