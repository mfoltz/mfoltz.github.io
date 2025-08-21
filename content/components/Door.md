---
nav_exclude: true
search_exclude: true
---

```csharp
public struct Door
{
	static Door()
	{
		Il2CppClassPointerStore<Door>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "Door");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Door>.NativeClassPtr);
		Door.NativeFieldInfoPtr_AgeSinceOpened = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "AgeSinceOpened");
		Door.NativeFieldInfoPtr_AutoCloseTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "AutoCloseTime");
		Door.NativeFieldInfoPtr_OpenEntityLeft = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "OpenEntityLeft");
		Door.NativeFieldInfoPtr_OpenEntityRight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "OpenEntityRight");
		Door.NativeFieldInfoPtr_ClosedEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "ClosedEntity");
		Door.NativeFieldInfoPtr_LastSequenceEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "LastSequenceEntity");
		Door.NativeFieldInfoPtr_OpenLeftDoorSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "OpenLeftDoorSequence");
		Door.NativeFieldInfoPtr_CloseLeftDoorSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "CloseLeftDoorSequence");
		Door.NativeFieldInfoPtr_OpenRightDoorSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "OpenRightDoorSequence");
		Door.NativeFieldInfoPtr_CloseRightDoorSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "CloseRightDoorSequence");
		Door.NativeFieldInfoPtr_OpenState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "OpenState");
		Door.NativeFieldInfoPtr_OpenLeftDoor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "OpenLeftDoor");
		Door.NativeFieldInfoPtr_LastOpenState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "LastOpenState");
		Door.NativeFieldInfoPtr_SkipNextSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "SkipNextSequence");
		Door.NativeFieldInfoPtr_DenyManualCloseDoor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "DenyManualCloseDoor");
		Door.NativeFieldInfoPtr_CanBeOpenedByServant = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Door>.NativeClassPtr, "CanBeOpenedByServant");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Door>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AgeSinceOpened;
	private static readonly IntPtr NativeFieldInfoPtr_AutoCloseTime;
	private static readonly IntPtr NativeFieldInfoPtr_OpenEntityLeft;
	private static readonly IntPtr NativeFieldInfoPtr_OpenEntityRight;
	private static readonly IntPtr NativeFieldInfoPtr_ClosedEntity;
	private static readonly IntPtr NativeFieldInfoPtr_LastSequenceEntity;
	private static readonly IntPtr NativeFieldInfoPtr_OpenLeftDoorSequence;
	private static readonly IntPtr NativeFieldInfoPtr_CloseLeftDoorSequence;
	private static readonly IntPtr NativeFieldInfoPtr_OpenRightDoorSequence;
	private static readonly IntPtr NativeFieldInfoPtr_CloseRightDoorSequence;
	private static readonly IntPtr NativeFieldInfoPtr_OpenState;
	private static readonly IntPtr NativeFieldInfoPtr_OpenLeftDoor;
	private static readonly IntPtr NativeFieldInfoPtr_LastOpenState;
	private static readonly IntPtr NativeFieldInfoPtr_SkipNextSequence;
	private static readonly IntPtr NativeFieldInfoPtr_DenyManualCloseDoor;
	private static readonly IntPtr NativeFieldInfoPtr_CanBeOpenedByServant;

	public double AgeSinceOpened;

	public float AutoCloseTime;

	public Entity OpenEntityLeft;

	public Entity OpenEntityRight;

	public Entity ClosedEntity;

	public Entity LastSequenceEntity;

	public SequenceGUID OpenLeftDoorSequence;

	public SequenceGUID CloseLeftDoorSequence;

	public SequenceGUID OpenRightDoorSequence;

	public SequenceGUID CloseRightDoorSequence;

	public bool OpenState;

	public bool OpenLeftDoor;

	public Nullable_Unboxed<bool> LastOpenState;

	public bool SkipNextSequence;

	public bool DenyManualCloseDoor;

	public bool CanBeOpenedByServant;
}
```

## Server Systems

- [DoorSystem]({{% relref "systems/server/DoorSystem.md" %}})
- [DoorSystem_Server]({{% relref "systems/server/DoorSystem_Server.md" %}})

## Client Systems

- [DoorSystem]({{% relref "systems/client/DoorSystem.md" %}})
- [DoorSystem_Client]({{% relref "systems/client/DoorSystem_Client.md" %}})
