---
nav_exclude: true
search_exclude: true
---

# CastleRoomConnection

```csharp
public struct CastleRoomConnection
{
	static CastleRoomConnection()
	{
		Il2CppClassPointerStore<CastleRoomConnection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleRoomConnection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoomConnection>.NativeClassPtr);
		CastleRoomConnection.NativeFieldInfoPtr_RoomEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomConnection>.NativeClassPtr, "RoomEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoomConnection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RoomEntity;

	public NetworkedEntity RoomEntity;
}
```
