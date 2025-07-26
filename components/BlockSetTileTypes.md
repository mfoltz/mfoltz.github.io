---
nav_exclude: true
search_exclude: true
---

# BlockSetTileTypes

```csharp
public struct BlockSetTileTypes
{
	static BlockSetTileTypes()
	{
		Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BlockSetTileTypes");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr);
		BlockSetTileTypes.NativeFieldInfoPtr_ID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "ID");
		BlockSetTileTypes.NativeFieldInfoPtr_SlotState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "SlotState");
		BlockSetTileTypes.NativeFieldInfoPtr_BlockGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "BlockGroup");
		BlockSetTileTypes.NativeFieldInfoPtr_TileTypeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "TileTypeGuid");
		BlockSetTileTypes.NativeFieldInfoPtr_TileTypeName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "TileTypeName");
		BlockSetTileTypes.NativeFieldInfoPtr_HideBrush = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "HideBrush");
		BlockSetTileTypes.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "Level");
		BlockSetTileTypes.NativeFieldInfoPtr_Color = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, "Color");
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlockSetTileTypes>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ID;
	private static readonly IntPtr NativeFieldInfoPtr_SlotState;
	private static readonly IntPtr NativeFieldInfoPtr_BlockGroup;
	private static readonly IntPtr NativeFieldInfoPtr_TileTypeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TileTypeName;
	private static readonly IntPtr NativeFieldInfoPtr_HideBrush;
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_Color;

	public ushort ID;

	public PersistentSlotState SlotState;

	public BlockGroup BlockGroup;

	public AssetGuid TileTypeGuid;

	public FixedString64Bytes TileTypeName;

	public bool HideBrush;

	public int Level;

	public Color Color;
}
```
