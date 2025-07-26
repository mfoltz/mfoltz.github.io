# UpdateBlockRequestBuffer

```csharp
[StructLayout(2)]
public struct UpdateBlockRequestBuffer
{
	static UpdateBlockRequestBuffer()
	{
		Il2CppClassPointerStore<UpdateBlockRequestBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "UpdateBlockRequestBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UpdateBlockRequestBuffer>.NativeClassPtr);
		UpdateBlockRequestBuffer.NativeFieldInfoPtr_BlockX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateBlockRequestBuffer>.NativeClassPtr, "BlockX");
		UpdateBlockRequestBuffer.NativeFieldInfoPtr_BlockY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateBlockRequestBuffer>.NativeClassPtr, "BlockY");
		UpdateBlockRequestBuffer.NativeFieldInfoPtr_BlockType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateBlockRequestBuffer>.NativeClassPtr, "BlockType");
		UpdateBlockRequestBuffer.NativeFieldInfoPtr_Hidden = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpdateBlockRequestBuffer>.NativeClassPtr, "Hidden");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UpdateBlockRequestBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlockX;
	private static readonly IntPtr NativeFieldInfoPtr_BlockY;
	private static readonly IntPtr NativeFieldInfoPtr_BlockType;
	private static readonly IntPtr NativeFieldInfoPtr_Hidden;
	[FieldOffset(0)]
	public uint BlockX;
	[FieldOffset(4)]
	public uint BlockY;
	[FieldOffset(8)]
	public BlockTypeId BlockType;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool Hidden;
}
