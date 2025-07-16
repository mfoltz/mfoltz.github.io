# CastleRoomWallsBuffer

```csharp
[StructLayout(2)]
public struct CastleRoomWallsBuffer
{
	static CastleRoomWallsBuffer()
	{
		Il2CppClassPointerStore<CastleRoomWallsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRoomWallsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoomWallsBuffer>.NativeClassPtr);
		CastleRoomWallsBuffer.NativeFieldInfoPtr_WallDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomWallsBuffer>.NativeClassPtr, "WallDirection");
		CastleRoomWallsBuffer.NativeFieldInfoPtr_WallEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomWallsBuffer>.NativeClassPtr, "WallEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoomWallsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WallDirection;
	private static readonly IntPtr NativeFieldInfoPtr_WallEntity;
	[FieldOffset(0)]
	public CardinalDirection WallDirection;
	[FieldOffset(4)]
	public NetworkedEntity WallEntity;
}
