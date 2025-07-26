# HailMessageStruct_Server

```csharp
[StructLayout(2)]
public struct HailMessageStruct_Server
{
	static HailMessageStruct_Server()
	{
		Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "HailMessageStruct_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr);
		HailMessageStruct_Server.NativeFieldInfoPtr_VERSION = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "VERSION");
		HailMessageStruct_Server.NativeFieldInfoPtr_ServerTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "ServerTime");
		HailMessageStruct_Server.NativeFieldInfoPtr_BalanceSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "BalanceSettings");
		HailMessageStruct_Server.NativeFieldInfoPtr_PrimaryAddress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "PrimaryAddress");
		HailMessageStruct_Server.NativeFieldInfoPtr_SecondaryAddress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "SecondaryAddress");
		HailMessageStruct_Server.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "Name");
		HailMessageStruct_Server.NativeFieldInfoPtr_ServerVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "ServerVersion");
		HailMessageStruct_Server.NativeFieldInfoPtr_SessionGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "SessionGuid");
		HailMessageStruct_Server.NativeFieldInfoPtr_UserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "UserIndex");
		HailMessageStruct_Server.NativeFieldInfoPtr_UserGeneration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "UserGeneration");
		HailMessageStruct_Server.NativeFieldInfoPtr_MaxConnectedUsers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "MaxConnectedUsers");
		HailMessageStruct_Server.NativeFieldInfoPtr_ServerFPS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "ServerFPS");
		HailMessageStruct_Server.NativeFieldInfoPtr_QueryPort = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "QueryPort");
		HailMessageStruct_Server.NativeFieldInfoPtr_ReceivedVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "ReceivedVersion");
		HailMessageStruct_Server.NativeFieldInfoPtr_HasPassword = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "HasPassword");
		HailMessageStruct_Server.NativeFieldInfoPtr_ShouldCreateCharacter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "ShouldCreateCharacter");
		HailMessageStruct_Server.NativeFieldInfoPtr_IsDedicatedServer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, "IsDedicatedServer");
		HailMessageStruct_Server.NativeMethodInfoPtr_Serialize_Public_Static_Void_byref_HailMessageStruct_Server_byref_NetBufferOut_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, 100664846);
		HailMessageStruct_Server.NativeMethodInfoPtr_Deserialize_Public_Static_Boolean_byref_NetBufferIn_byref_HailMessageStruct_Server_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, 100664847);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 33099, XrefRangeEnd = 33145, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void Serialize([In] ref HailMessageStruct_Server data, ref NetBufferOut netBuffer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &data;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &netBuffer;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HailMessageStruct_Server.NativeMethodInfoPtr_Serialize_Public_Static_Void_byref_HailMessageStruct_Server_byref_NetBufferOut_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 33188, RefRangeEnd = 33189, XrefRangeStart = 33145, XrefRangeEnd = 33188, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool Deserialize(ref NetBufferIn netBufferIn, out HailMessageStruct_Server hailData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBufferIn;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &hailData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(HailMessageStruct_Server.NativeMethodInfoPtr_Deserialize_Public_Static_Boolean_byref_NetBufferIn_byref_HailMessageStruct_Server_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HailMessageStruct_Server>.NativeClassPtr, ref this));
	}
	public unsafe static byte VERSION
	{
		get
		{
			byte result;
			IL2CPP.il2cpp_field_static_get_value(HailMessageStruct_Server.NativeFieldInfoPtr_VERSION, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(HailMessageStruct_Server.NativeFieldInfoPtr_VERSION, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_VERSION;
	private static readonly IntPtr NativeFieldInfoPtr_ServerTime;
	private static readonly IntPtr NativeFieldInfoPtr_BalanceSettings;
	private static readonly IntPtr NativeFieldInfoPtr_PrimaryAddress;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryAddress;
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_ServerVersion;
	private static readonly IntPtr NativeFieldInfoPtr_SessionGuid;
	private static readonly IntPtr NativeFieldInfoPtr_UserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UserGeneration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxConnectedUsers;
	private static readonly IntPtr NativeFieldInfoPtr_ServerFPS;
	private static readonly IntPtr NativeFieldInfoPtr_QueryPort;
	private static readonly IntPtr NativeFieldInfoPtr_ReceivedVersion;
	private static readonly IntPtr NativeFieldInfoPtr_HasPassword;
	private static readonly IntPtr NativeFieldInfoPtr_ShouldCreateCharacter;
	private static readonly IntPtr NativeFieldInfoPtr_IsDedicatedServer;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Static_Void_byref_HailMessageStruct_Server_byref_NetBufferOut_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Static_Boolean_byref_NetBufferIn_byref_HailMessageStruct_Server_0;
	[FieldOffset(0)]
	public ServerTime ServerTime;
	[FieldOffset(40)]
	public ServerGameBalanceSettings BalanceSettings;
	[FieldOffset(1472)]
	public ConnectAddress PrimaryAddress;
	[FieldOffset(1584)]
	public ConnectAddress SecondaryAddress;
	[FieldOffset(1696)]
	public FixedString512Bytes Name;
	[FieldOffset(2208)]
	public FixedString32Bytes ServerVersion;
	[FieldOffset(2240)]
	public Guid SessionGuid;
	[FieldOffset(2256)]
	public int UserIndex;
	[FieldOffset(2260)]
	public int UserGeneration;
	[FieldOffset(2264)]
	public int MaxConnectedUsers;
	[FieldOffset(2268)]
	public int ServerFPS;
	[FieldOffset(2272)]
	public ushort QueryPort;
	[FieldOffset(2274)]
	public byte ReceivedVersion;
	[FieldOffset(2275)]
	[MarshalAs(4)]
	public bool HasPassword;
	[FieldOffset(2276)]
	[MarshalAs(4)]
	public bool ShouldCreateCharacter;
	[FieldOffset(2277)]
	[MarshalAs(4)]
	public bool IsDedicatedServer;
}
