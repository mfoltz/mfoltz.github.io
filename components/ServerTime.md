# ServerTime

```csharp
[StructLayout(2)]
public struct ServerTime
{
	static ServerTime()
	{
		Il2CppClassPointerStore<ServerTime>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ServerTime");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerTime>.NativeClassPtr);
		ServerTime.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "Time");
		ServerTime.NativeFieldInfoPtr_UnmodifiedTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "UnmodifiedTime");
		ServerTime.NativeFieldInfoPtr_TimeOnServer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "TimeOnServer");
		ServerTime.NativeFieldInfoPtr_ModifiedTimeOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "ModifiedTimeOffset");
		ServerTime.NativeFieldInfoPtr_FrameCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, "FrameCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerTime>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_UnmodifiedTime;
	private static readonly IntPtr NativeFieldInfoPtr_TimeOnServer;
	private static readonly IntPtr NativeFieldInfoPtr_ModifiedTimeOffset;
	private static readonly IntPtr NativeFieldInfoPtr_FrameCount;
	[FieldOffset(0)]
	public double Time;
	[FieldOffset(8)]
	public double UnmodifiedTime;
	[FieldOffset(16)]
	public double TimeOnServer;
	[FieldOffset(24)]
	public double ModifiedTimeOffset;
	[FieldOffset(32)]
	public int FrameCount;
}
