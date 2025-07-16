# ServerShutdown

```csharp
[StructLayout(2)]
public struct ServerShutdown
{
	static ServerShutdown()
	{
		Il2CppClassPointerStore<ServerShutdown>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.ScriptableSystems.dll", "ProjectM", "ServerShutdown");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerShutdown>.NativeClassPtr);
		ServerShutdown.NativeFieldInfoPtr_ShutdownTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerShutdown>.NativeClassPtr, "ShutdownTime");
		ServerShutdown.NativeFieldInfoPtr_CompletedMessages = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerShutdown>.NativeClassPtr, "CompletedMessages");
		ServerShutdown.NativeFieldInfoPtr_TimeSlots = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerShutdown>.NativeClassPtr, "TimeSlots");
		ServerShutdown.NativeFieldInfoPtr_Message = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerShutdown>.NativeClassPtr, "Message");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerShutdown>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ShutdownTime;
	private static readonly IntPtr NativeFieldInfoPtr_CompletedMessages;
	private static readonly IntPtr NativeFieldInfoPtr_TimeSlots;
	private static readonly IntPtr NativeFieldInfoPtr_Message;
	[FieldOffset(0)]
	public double ShutdownTime;
	[FieldOffset(8)]
	public int CompletedMessages;
	[FieldOffset(16)]
	public NativeArray<int> TimeSlots;
	[FieldOffset(32)]
	public FixedString512Bytes Message;
}
