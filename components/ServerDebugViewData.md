# ServerDebugViewData

```csharp
[StructLayout(2)]
public struct ServerDebugViewData
{
	static ServerDebugViewData()
	{
		Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServerDebugViewData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr);
		ServerDebugViewData.NativeFieldInfoPtr_Fps = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "Fps");
		ServerDebugViewData.NativeFieldInfoPtr_FrameTimeMs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "FrameTimeMs");
		ServerDebugViewData.NativeFieldInfoPtr_EntitiesEnabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "EntitiesEnabled");
		ServerDebugViewData.NativeFieldInfoPtr_EntitiesDisabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "EntitiesDisabled");
		ServerDebugViewData.NativeFieldInfoPtr_NetworkedEntities = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "NetworkedEntities");
		ServerDebugViewData.NativeFieldInfoPtr_NetworkStatsTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "NetworkStatsTime");
		ServerDebugViewData.NativeFieldInfoPtr_BytesSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "BytesSentPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_BytesReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "BytesReceivedPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_MessagesMaxBytesSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "MessagesMaxBytesSentPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_MessagesMaxBytesReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "MessagesMaxBytesReceivedPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_MessagesSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "MessagesSentPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_MessagesReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "MessagesReceivedPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_PacketsSentPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "PacketsSentPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_PacketsReceivedPerSecond = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "PacketsReceivedPerSecond");
		ServerDebugViewData.NativeFieldInfoPtr_AiEnabledCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "AiEnabledCount");
		ServerDebugViewData.NativeFieldInfoPtr_AiHighPriorityCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, "AiHighPriorityCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerDebugViewData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Fps;
	private static readonly IntPtr NativeFieldInfoPtr_FrameTimeMs;
	private static readonly IntPtr NativeFieldInfoPtr_EntitiesEnabled;
	private static readonly IntPtr NativeFieldInfoPtr_EntitiesDisabled;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkedEntities;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkStatsTime;
	private static readonly IntPtr NativeFieldInfoPtr_BytesSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_BytesReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_MessagesMaxBytesSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_MessagesMaxBytesReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_MessagesSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_MessagesReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_PacketsSentPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_PacketsReceivedPerSecond;
	private static readonly IntPtr NativeFieldInfoPtr_AiEnabledCount;
	private static readonly IntPtr NativeFieldInfoPtr_AiHighPriorityCount;
	[FieldOffset(0)]
	public int Fps;
	[FieldOffset(4)]
	public float FrameTimeMs;
	[FieldOffset(8)]
	public int EntitiesEnabled;
	[FieldOffset(12)]
	public int EntitiesDisabled;
	[FieldOffset(16)]
	public int NetworkedEntities;
	[FieldOffset(24)]
	public double NetworkStatsTime;
	[FieldOffset(32)]
	public int BytesSentPerSecond;
	[FieldOffset(36)]
	public int BytesReceivedPerSecond;
	[FieldOffset(40)]
	public int MessagesMaxBytesSentPerSecond;
	[FieldOffset(44)]
	public int MessagesMaxBytesReceivedPerSecond;
	[FieldOffset(48)]
	public int MessagesSentPerSecond;
	[FieldOffset(52)]
	public int MessagesReceivedPerSecond;
	[FieldOffset(56)]
	public int PacketsSentPerSecond;
	[FieldOffset(60)]
	public int PacketsReceivedPerSecond;
	[FieldOffset(64)]
	public int AiEnabledCount;
	[FieldOffset(68)]
	public int AiHighPriorityCount;
}
