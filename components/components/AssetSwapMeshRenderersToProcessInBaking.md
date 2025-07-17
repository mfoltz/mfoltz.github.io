---
nav_exclude: true
search_exclude: true
---

# AssetSwapMeshRenderersToProcessInBaking

```csharp
[StructLayout(2)]
public struct AssetSwapMeshRenderersToProcessInBaking
{
	static AssetSwapMeshRenderersToProcessInBaking()
	{
		Il2CppClassPointerStore<AssetSwapMeshRenderersToProcessInBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.AssetSwapping", "AssetSwapMeshRenderersToProcessInBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AssetSwapMeshRenderersToProcessInBaking>.NativeClassPtr);
		AssetSwapMeshRenderersToProcessInBaking.NativeFieldInfoPtr_RenderMeshRootEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetSwapMeshRenderersToProcessInBaking>.NativeClassPtr, "RenderMeshRootEntity");
		AssetSwapMeshRenderersToProcessInBaking.NativeFieldInfoPtr_ArtBuffer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetSwapMeshRenderersToProcessInBaking>.NativeClassPtr, "ArtBuffer");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AssetSwapMeshRenderersToProcessInBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RenderMeshRootEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ArtBuffer;
	[FieldOffset(0)]
	public Entity RenderMeshRootEntity;
	[FieldOffset(8)]
	public AssetSwapArtBuffer ArtBuffer;
}
