# ServerSystemChatMessage

```csharp
[StructLayout(2)]
public struct ServerSystemChatMessage
{
	static ServerSystemChatMessage()
	{
		Il2CppClassPointerStore<ServerSystemChatMessage>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ServerSystemChatMessage");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ServerSystemChatMessage>.NativeClassPtr);
		ServerSystemChatMessage.NativeFieldInfoPtr_ToUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerSystemChatMessage>.NativeClassPtr, "ToUserIndex");
		ServerSystemChatMessage.NativeFieldInfoPtr_MessageText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ServerSystemChatMessage>.NativeClassPtr, "MessageText");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ServerSystemChatMessage>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ToUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_MessageText;
	[FieldOffset(0)]
	public int ToUserIndex;
	[FieldOffset(4)]
	public FixedString512Bytes MessageText;
}
