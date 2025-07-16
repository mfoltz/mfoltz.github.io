# BakedCollisionTiles

```csharp
[StructLayout(2)]
public struct BakedCollisionTiles
{
	static BakedCollisionTiles()
	{
		Il2CppClassPointerStore<BakedCollisionTiles>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Tiles", "BakedCollisionTiles");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BakedCollisionTiles>.NativeClassPtr);
		BakedCollisionTiles.NativeFieldInfoPtr_Data2D = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedCollisionTiles>.NativeClassPtr, "Data2D");
		BakedCollisionTiles.NativeFieldInfoPtr_TilePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedCollisionTiles>.NativeClassPtr, "TilePosition");
		BakedCollisionTiles.NativeFieldInfoPtr_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedCollisionTiles>.NativeClassPtr, "PrefabGUID");
		BakedCollisionTiles.NativeFieldInfoPtr_StaticTileModelData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BakedCollisionTiles>.NativeClassPtr, "StaticTileModelData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BakedCollisionTiles>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data2D;
	private static readonly IntPtr NativeFieldInfoPtr_TilePosition;
	private static readonly IntPtr NativeFieldInfoPtr_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_StaticTileModelData;
	[FieldOffset(0)]
	public BlobAssetReference<TileDatas2dArray<CollisionData>> Data2D;
	[FieldOffset(8)]
	public TilePosition TilePosition;
	[FieldOffset(20)]
	public PrefabGUID PrefabGUID;
	[FieldOffset(24)]
	public StaticTileModelData StaticTileModelData;
}
