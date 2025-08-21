---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public Entity RoomEntity;

	public CastleRoomEventType EventType;

	public bool Merged;
}
```

## Server Systems

- [CastleBuildingClearRoomEventsSystem]({{% relref "systems/server/CastleBuildingClearRoomEventsSystem.md" %}})
- [CastleBuildingWorkstationsSystem]({{% relref "systems/server/CastleBuildingWorkstationsSystem.md" %}})
- [RoomRoofUpdateSystem]({{% relref "systems/server/RoomRoofUpdateSystem.md" %}})
