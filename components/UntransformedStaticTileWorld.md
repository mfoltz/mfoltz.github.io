---
nav_exclude: true
search_exclude: true
---

# UntransformedStaticTileWorld

```csharp
public struct UntransformedStaticTileWorld
{
	static UntransformedStaticTileWorld()
	{
		Il2CppClassPointerStore<UntransformedStaticTileWorld>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "UntransformedStaticTileWorld");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UntransformedStaticTileWorld>.NativeClassPtr);
		UntransformedStaticTileWorld.NativeFieldInfoPtr_TerrainEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UntransformedStaticTileWorld>.NativeClassPtr, "TerrainEntity");
		UntransformedStaticTileWorld.NativeFieldInfoPtr_Blob = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UntransformedStaticTileWorld>.NativeClassPtr, "Blob");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UntransformedStaticTileWorld>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TerrainEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Blob;

	public Entity TerrainEntity;

	public BlobAssetReference<StaticTileWorldBlob> Blob;
}
```
