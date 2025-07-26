# ChunkPortal

```csharp
[StructLayout(2)]
public struct ChunkPortal
{
	static ChunkPortal()
	{
		Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ChunkPortal");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr);
		ChunkPortal.NativeFieldInfoPtr_FromChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr, "FromChunk");
		ChunkPortal.NativeFieldInfoPtr_FromChunkPortalIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr, "FromChunkPortalIndex");
		ChunkPortal.NativeFieldInfoPtr_ToChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr, "ToChunk");
		ChunkPortal.NativeFieldInfoPtr_ToChunkPortalIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr, "ToChunkPortalIndex");
		ChunkPortal.NativeFieldInfoPtr_InPositionOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr, "InPositionOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkPortal>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FromChunk;
	private static readonly IntPtr NativeFieldInfoPtr_FromChunkPortalIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ToChunk;
	private static readonly IntPtr NativeFieldInfoPtr_ToChunkPortalIndex;
	private static readonly IntPtr NativeFieldInfoPtr_InPositionOffset;
	[FieldOffset(0)]
	public TerrainChunk FromChunk;
	[FieldOffset(4)]
	public int FromChunkPortalIndex;
	[FieldOffset(8)]
	public TerrainChunk ToChunk;
	[FieldOffset(12)]
	public int ToChunkPortalIndex;
	[FieldOffset(16)]
	public float3 InPositionOffset;
}
