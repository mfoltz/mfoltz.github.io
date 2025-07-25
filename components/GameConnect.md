---
nav_exclude: true
search_exclude: true
---

# GameConnect

```csharp
public struct GameConnect
{
	static GameConnect()
	{
		Il2CppClassPointerStore<GameConnect>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GameConnect");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GameConnect>.NativeClassPtr);
		GameConnect.NativeFieldInfoPtr_ConnectAddress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "ConnectAddress");
		GameConnect.NativeFieldInfoPtr_FallbackConnectAddress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "FallbackConnectAddress");
		GameConnect.NativeFieldInfoPtr_ServerSaveName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "ServerSaveName");
		GameConnect.NativeFieldInfoPtr_SaveFile = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "SaveFile");
		GameConnect.NativeFieldInfoPtr_ReplayFilePath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "ReplayFilePath");
		GameConnect.NativeFieldInfoPtr_ConnectPassword = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "ConnectPassword");
		GameConnect.NativeFieldInfoPtr_HostAddress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "HostAddress");
		GameConnect.NativeFieldInfoPtr_HostMaxUsers = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "HostMaxUsers");
		GameConnect.NativeFieldInfoPtr_HostPort = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "HostPort");
		GameConnect.NativeFieldInfoPtr_HostFallbackPort = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "HostFallbackPort");
		GameConnect.NativeFieldInfoPtr_PlayReplay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "PlayReplay");
		GameConnect.NativeFieldInfoPtr_CreateClient = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "CreateClient");
		GameConnect.NativeFieldInfoPtr_ShouldHost = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "ShouldHost");
		GameConnect.NativeFieldInfoPtr_HostDedicated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "HostDedicated");
		GameConnect.NativeFieldInfoPtr_SavePerUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "SavePerUser");
		GameConnect.NativeFieldInfoPtr_AnalyticsJoinMethod = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, "AnalyticsJoinMethod");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GameConnect>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ConnectAddress;
	private static readonly IntPtr NativeFieldInfoPtr_FallbackConnectAddress;
	private static readonly IntPtr NativeFieldInfoPtr_ServerSaveName;
	private static readonly IntPtr NativeFieldInfoPtr_SaveFile;
	private static readonly IntPtr NativeFieldInfoPtr_ReplayFilePath;
	private static readonly IntPtr NativeFieldInfoPtr_ConnectPassword;
	private static readonly IntPtr NativeFieldInfoPtr_HostAddress;
	private static readonly IntPtr NativeFieldInfoPtr_HostMaxUsers;
	private static readonly IntPtr NativeFieldInfoPtr_HostPort;
	private static readonly IntPtr NativeFieldInfoPtr_HostFallbackPort;
	private static readonly IntPtr NativeFieldInfoPtr_PlayReplay;
	private static readonly IntPtr NativeFieldInfoPtr_CreateClient;
	private static readonly IntPtr NativeFieldInfoPtr_ShouldHost;
	private static readonly IntPtr NativeFieldInfoPtr_HostDedicated;
	private static readonly IntPtr NativeFieldInfoPtr_SavePerUser;
	private static readonly IntPtr NativeFieldInfoPtr_AnalyticsJoinMethod;

	public ConnectAddress ConnectAddress;

	public Nullable_Unboxed<ConnectAddress> FallbackConnectAddress;

	public FixedString512Bytes ServerSaveName;

	public FixedString512Bytes SaveFile;

	public FixedString512Bytes ReplayFilePath;

	public FixedString128Bytes ConnectPassword;

	public FixedString32Bytes HostAddress;

	public int HostMaxUsers;

	public ushort HostPort;

	public ushort HostFallbackPort;

	public bool PlayReplay;

	public bool CreateClient;

	public bool ShouldHost;

	public bool HostDedicated;

	public bool SavePerUser;

	public StunAnalytics.Client.ServerJoinMethod AnalyticsJoinMethod;
}
```
