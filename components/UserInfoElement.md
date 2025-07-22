---
nav_exclude: true
search_exclude: false
---

# UserInfoElement

```csharp
public struct UserInfoElement
{
	static UserInfoElement()
	{
		Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UserInfoElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr);
		UserInfoElement.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "Name");
		UserInfoElement.NativeFieldInfoPtr_PlatformId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "PlatformId");
		UserInfoElement.NativeFieldInfoPtr_UserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "UserIndex");
		UserInfoElement.NativeFieldInfoPtr_NetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "NetworkId");
		UserInfoElement.NativeFieldInfoPtr_Voip_TimeSinceUpdate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "Voip_TimeSinceUpdate");
		UserInfoElement.NativeFieldInfoPtr_IsConnected = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "IsConnected");
		UserInfoElement.NativeFieldInfoPtr_IsAdmin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "IsAdmin");
		UserInfoElement.NativeFieldInfoPtr_FirstTimeConnected = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, "FirstTimeConnected");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserInfoElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_PlatformId;
	private static readonly IntPtr NativeFieldInfoPtr_UserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_NetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_Voip_TimeSinceUpdate;
	private static readonly IntPtr NativeFieldInfoPtr_IsConnected;
	private static readonly IntPtr NativeFieldInfoPtr_IsAdmin;
	private static readonly IntPtr NativeFieldInfoPtr_FirstTimeConnected;

	public FixedString64Bytes Name;

	public ulong PlatformId;

	public int UserIndex;

	public NetworkId NetworkId;

	public float Voip_TimeSinceUpdate;

	public bool IsConnected;

	public bool IsAdmin;

	public bool FirstTimeConnected;
}
```
