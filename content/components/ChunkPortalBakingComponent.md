---
nav_exclude: true
search_exclude: true
---

# ChunkPortalBakingComponent

```csharp
public struct ChunkPortalBakingComponent
{
	static ChunkPortalBakingComponent()
	{
		Il2CppClassPointerStore<ChunkPortalBakingComponent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "ChunkPortalBakingComponent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkPortalBakingComponent>.NativeClassPtr);
		ChunkPortalBakingComponent.NativeFieldInfoPtr_ChunkPortalIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortalBakingComponent>.NativeClassPtr, "ChunkPortalIndex");
		ChunkPortalBakingComponent.NativeFieldInfoPtr_PortalGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortalBakingComponent>.NativeClassPtr, "PortalGUID");
		ChunkPortalBakingComponent.NativeFieldInfoPtr_LocalChunkTRS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortalBakingComponent>.NativeClassPtr, "LocalChunkTRS");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkPortalBakingComponent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ChunkPortalIndex;
	private static readonly IntPtr NativeFieldInfoPtr_PortalGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LocalChunkTRS;

	public int ChunkPortalIndex;

	public PrefabGUID PortalGUID;

	public float4x4 LocalChunkTRS;
}
```
