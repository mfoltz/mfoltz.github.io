# CastleRoomEvent

```csharp
[StructLayout(2)]
public struct CastleRoomEvent
{
	static CastleRoomEvent()
	{
		Il2CppClassPointerStore<CastleRoomEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.CastleBuilding.Systems.dll", "ProjectM.CastleBuilding", "CastleRoomEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoomEvent>.NativeClassPtr);
		CastleRoomEvent.NativeFieldInfoPtr_RoomEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomEvent>.NativeClassPtr, "RoomEntity");
		CastleRoomEvent.NativeFieldInfoPtr_EventType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomEvent>.NativeClassPtr, "EventType");
		CastleRoomEvent.NativeFieldInfoPtr_Merged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomEvent>.NativeClassPtr, "Merged");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoomEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RoomEntity;
	private static readonly IntPtr NativeFieldInfoPtr_EventType;
	private static readonly IntPtr NativeFieldInfoPtr_Merged;
	[FieldOffset(0)]
	public Entity RoomEntity;
	[FieldOffset(8)]
	public CastleRoomEventType EventType;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool Merged;
}
