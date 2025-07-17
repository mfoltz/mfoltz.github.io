---
nav_exclude: true
search_exclude: true
---

# TerrainBlockBuffer

```csharp
[StructLayout(2)]
public struct TerrainBlockBuffer
{
	static TerrainBlockBuffer()
	{
		Il2CppClassPointerStore<TerrainBlockBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "TerrainBlockBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TerrainBlockBuffer>.NativeClassPtr);
		TerrainBlockBuffer.NativeFieldInfoPtr_BlockType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainBlockBuffer>.NativeClassPtr, "BlockType");
		TerrainBlockBuffer.NativeFieldInfoPtr_Hidden = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TerrainBlockBuffer>.NativeClassPtr, "Hidden");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TerrainBlockBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlockType;
	private static readonly IntPtr NativeFieldInfoPtr_Hidden;
	[FieldOffset(0)]
	public BlockTypeId BlockType;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool Hidden;
}
