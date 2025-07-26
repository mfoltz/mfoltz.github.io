# RespawnPoint

```csharp
[StructLayout(2)]
public struct RespawnPoint
{
	static RespawnPoint()
	{
		Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "RespawnPoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr);
		RespawnPoint.NativeFieldInfoPtr_SpawnExitOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "SpawnExitOffset");
		RespawnPoint.NativeFieldInfoPtr_SpawnDelayBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "SpawnDelayBuff");
		RespawnPoint.NativeFieldInfoPtr_SpawnSleepingBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "SpawnSleepingBuff");
		RespawnPoint.NativeFieldInfoPtr_RespawnPointType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "RespawnPointType");
		RespawnPoint.NativeFieldInfoPtr_HasRespawnPointOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "HasRespawnPointOwner");
		RespawnPoint.NativeFieldInfoPtr_RespawnPointOwner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, "RespawnPointOwner");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RespawnPoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SpawnExitOffset;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnDelayBuff;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnSleepingBuff;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnPointType;
	private static readonly IntPtr NativeFieldInfoPtr_HasRespawnPointOwner;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnPointOwner;
	[FieldOffset(0)]
	public float3 SpawnExitOffset;
	[FieldOffset(12)]
	public PrefabGUID SpawnDelayBuff;
	[FieldOffset(16)]
	public PrefabGUID SpawnSleepingBuff;
	[FieldOffset(20)]
	public RespawnPointType RespawnPointType;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool HasRespawnPointOwner;
	[FieldOffset(24)]
	public NetworkedEntity RespawnPointOwner;
}
