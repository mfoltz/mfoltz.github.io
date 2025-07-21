---
nav_exclude: true
search_exclude: false
---

# TeleportDebugEvent

```csharp
public struct TeleportDebugEvent
{
	static TeleportDebugEvent()
	{
		Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "TeleportDebugEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr);
		TeleportDebugEvent.NativeFieldInfoPtr_MousePosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, "MousePosition");
		TeleportDebugEvent.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, "Target");
		TeleportDebugEvent.NativeFieldInfoPtr_TargetNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, "TargetNetworkId");
		TeleportDebugEvent.NativeFieldInfoPtr_Location = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, "Location");
		TeleportDebugEvent.NativeFieldInfoPtr_LocationNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, "LocationNetworkId");
		TeleportDebugEvent.NativeFieldInfoPtr_LocationPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, "LocationPosition");
		TeleportDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, 100684149);
		TeleportDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, 100684150);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TeleportDebugEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TeleportDebugEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeleportDebugEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MousePosition;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_TargetNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_Location;
	private static readonly IntPtr NativeFieldInfoPtr_LocationNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_LocationPosition;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public float3 MousePosition;

	public TeleportDebugEvent.TeleportTarget Target;

	public NetworkId TargetNetworkId;

	public TeleportDebugEvent.TeleportLocation Location;

	public NetworkId LocationNetworkId;

	public float3 LocationPosition;
	public enum TeleportTarget
	{
		Self,
		ClosestEnemy,
		ClosestAlly,
		ClosestPlayer,
		ClosestUnit,
		ClosestEnemyToCursor,
		ClosestAllyToCursor,
		ClosestPlayerToCursor,
		ClosestUnitToCursor,
		AllPlayers,
		AllUnits,
		AllAllies,
		AllEnemies,
		AllOtherPlayers,
		AllOtherAllies,
		User
	}
	public enum TeleportLocation
	{
		Cursor,
		Self,
		WorldPosition,
		TilePosition,
		Nether,
		User,
		Chunk,
		Waypoint,
		ClosestEnemy,
		VBloodEnemy
	}
}
```

## Server Systems

- [TeleportSystem](/systems/server/TeleportSystem)
