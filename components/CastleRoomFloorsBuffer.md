# CastleRoomFloorsBuffer

```csharp
[StructLayout(2)]
public struct CastleRoomFloorsBuffer
{
	static CastleRoomFloorsBuffer()
	{
		Il2CppClassPointerStore<CastleRoomFloorsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRoomFloorsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoomFloorsBuffer>.NativeClassPtr);
		CastleRoomFloorsBuffer.NativeFieldInfoPtr_FloorEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomFloorsBuffer>.NativeClassPtr, "FloorEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoomFloorsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FloorEntity;
	[FieldOffset(0)]
	public NetworkedEntity FloorEntity;
}
