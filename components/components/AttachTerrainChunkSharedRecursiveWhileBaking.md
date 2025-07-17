---
nav_exclude: true
search_exclude: true
---

# AttachTerrainChunkSharedRecursiveWhileBaking

```csharp
[StructLayout(2)]
public struct AttachTerrainChunkSharedRecursiveWhileBaking
{
	static AttachTerrainChunkSharedRecursiveWhileBaking()
	{
		Il2CppClassPointerStore<AttachTerrainChunkSharedRecursiveWhileBaking>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "AttachTerrainChunkSharedRecursiveWhileBaking");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AttachTerrainChunkSharedRecursiveWhileBaking>.NativeClassPtr);
		AttachTerrainChunkSharedRecursiveWhileBaking.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AttachTerrainChunkSharedRecursiveWhileBaking>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AttachTerrainChunkSharedRecursiveWhileBaking>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	[FieldOffset(0)]
	public TerrainChunkShared Value;
}
