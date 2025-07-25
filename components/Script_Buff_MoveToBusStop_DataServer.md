---
nav_exclude: true
search_exclude: true
---

# Script_Buff_MoveToBusStop_DataServer

```csharp
public struct Script_Buff_MoveToBusStop_DataServer
{
	static Script_Buff_MoveToBusStop_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Script_Buff_MoveToBusStop_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr);
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_BusStopName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "BusStopName");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_Speed_Base = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "Speed_Base");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_Speed_Variation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "Speed_Variation");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_MaxOffsetDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "MaxOffsetDistance");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_DestroyDistanceSq = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "DestroyDistanceSq");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_TargetDestroyBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "TargetDestroyBuff");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_PatrolEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "PatrolEntity");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_LastWaypointPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "LastWaypointPosition");
		Script_Buff_MoveToBusStop_DataServer.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_MoveToBusStop_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BusStopName;
	private static readonly IntPtr NativeFieldInfoPtr_Speed_Base;
	private static readonly IntPtr NativeFieldInfoPtr_Speed_Variation;
	private static readonly IntPtr NativeFieldInfoPtr_MaxOffsetDistance;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyDistanceSq;
	private static readonly IntPtr NativeFieldInfoPtr_TargetDestroyBuff;
	private static readonly IntPtr NativeFieldInfoPtr_PatrolEntity;
	private static readonly IntPtr NativeFieldInfoPtr_LastWaypointPosition;
	private static readonly IntPtr NativeFieldInfoPtr_State;

	public FixedString32Bytes BusStopName;

	public float Speed_Base;

	public float Speed_Variation;

	public float MaxOffsetDistance;

	public float DestroyDistanceSq;

	public PrefabGUID TargetDestroyBuff;

	public Entity PatrolEntity;

	public float2 LastWaypointPosition;

	public Script_Buff_MoveToBusStop_State State;
}
```
