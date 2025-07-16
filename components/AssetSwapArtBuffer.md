# AssetSwapArtBuffer

```csharp
[StructLayout(2)]
public struct AssetSwapArtBuffer
{
	static AssetSwapArtBuffer()
	{
		Il2CppClassPointerStore<AssetSwapArtBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.AssetSwapping", "AssetSwapArtBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AssetSwapArtBuffer>.NativeClassPtr);
		AssetSwapArtBuffer.NativeFieldInfoPtr_AssetSwapConfig = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetSwapArtBuffer>.NativeClassPtr, "AssetSwapConfig");
		AssetSwapArtBuffer.NativeFieldInfoPtr_RenderMeshEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AssetSwapArtBuffer>.NativeClassPtr, "RenderMeshEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AssetSwapArtBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AssetSwapConfig;
	private static readonly IntPtr NativeFieldInfoPtr_RenderMeshEntity;
	[FieldOffset(0)]
	public BlobAssetReference<AssetSwapConfig> AssetSwapConfig;
	[FieldOffset(8)]
	public Entity RenderMeshEntity;
}
