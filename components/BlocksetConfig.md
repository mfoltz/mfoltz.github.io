---
nav_exclude: true
search_exclude: true
---

# BlocksetConfig

```csharp
[StructLayout(2)]
public struct BlocksetConfig
{
	static BlocksetConfig()
	{
		Il2CppClassPointerStore<BlocksetConfig>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "BlocksetConfig");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlocksetConfig>.NativeClassPtr);
		BlocksetConfig.NativeFieldInfoPtr_GridSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlocksetConfig>.NativeClassPtr, "GridSize");
		BlocksetConfig.NativeFieldInfoPtr_DefaultBlockType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlocksetConfig>.NativeClassPtr, "DefaultBlockType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlocksetConfig>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_GridSize;
	private static readonly IntPtr NativeFieldInfoPtr_DefaultBlockType;
	[FieldOffset(0)]
	public uint GridSize;
	[FieldOffset(4)]
	public ushort DefaultBlockType;
}
