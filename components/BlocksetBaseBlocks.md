---
nav_exclude: true
search_exclude: true
---

# BlocksetBaseBlocks

```csharp
public struct BlocksetBaseBlocks
{
	static BlocksetBaseBlocks()
	{
		Il2CppClassPointerStore<BlocksetBaseBlocks>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BlocksetBaseBlocks");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlocksetBaseBlocks>.NativeClassPtr);
		BlocksetBaseBlocks.NativeFieldInfoPtr_BaseBlockType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlocksetBaseBlocks>.NativeClassPtr, "BaseBlockType");
		BlocksetBaseBlocks.NativeFieldInfoPtr_BaseBlockEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlocksetBaseBlocks>.NativeClassPtr, "BaseBlockEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlocksetBaseBlocks>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BaseBlockType;
	private static readonly IntPtr NativeFieldInfoPtr_BaseBlockEntity;

	public TerrainBaseBlockType BaseBlockType;

	public Entity BaseBlockEntity;
}
```
