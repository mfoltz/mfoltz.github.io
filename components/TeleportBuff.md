# TeleportBuff

```csharp
[StructLayout(2)]
public struct TeleportBuff
{
	static TeleportBuff()
	{
		Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TeleportBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr);
		TeleportBuff.NativeFieldInfoPtr_EndPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr, "EndPosition");
		TeleportBuff.NativeFieldInfoPtr_TimeSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr, "TimeSpawned");
		TeleportBuff.NativeFieldInfoPtr_EndCameraRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr, "EndCameraRotation");
		TeleportBuff.NativeFieldInfoPtr_FrameSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr, "FrameSpawned");
		TeleportBuff.NativeFieldInfoPtr_SetCameraRotationOnTeleport = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr, "SetCameraRotationOnTeleport");
		TeleportBuff.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr, "Type");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TeleportBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EndPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TimeSpawned;
	private static readonly IntPtr NativeFieldInfoPtr_EndCameraRotation;
	private static readonly IntPtr NativeFieldInfoPtr_FrameSpawned;
	private static readonly IntPtr NativeFieldInfoPtr_SetCameraRotationOnTeleport;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	[FieldOffset(0)]
	public float3 EndPosition;
	[FieldOffset(16)]
	public double TimeSpawned;
	[FieldOffset(24)]
	public float EndCameraRotation;
	[FieldOffset(28)]
	public int FrameSpawned;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool SetCameraRotationOnTeleport;
	[FieldOffset(36)]
	public TeleportationType Type;
}
