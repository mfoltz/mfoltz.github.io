---
nav_exclude: true
search_exclude: true
---

```csharp
public struct ClanInviteRequest_Shared
{
	static ClanInviteRequest_Shared()
	{
		Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ClanInviteRequest_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr);
		ClanInviteRequest_Shared.NativeFieldInfoPtr_ClanNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "ClanNetworkId");
		ClanInviteRequest_Shared.NativeFieldInfoPtr_ClanName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "ClanName");
		ClanInviteRequest_Shared.NativeFieldInfoPtr_FromUserName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "FromUserName");
		ClanInviteRequest_Shared.NativeFieldInfoPtr_ToUserName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "ToUserName");
		ClanInviteRequest_Shared.NativeFieldInfoPtr_ToUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "ToUserIndex");
		ClanInviteRequest_Shared.NativeFieldInfoPtr_FromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "FromUserIndex");
		ClanInviteRequest_Shared.NativeFieldInfoPtr_ClanCastleHeartCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "ClanCastleHeartCount");
		ClanInviteRequest_Shared.NativeFieldInfoPtr_ACTIVE_DURATION = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, "ACTIVE_DURATION");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClanInviteRequest_Shared>.NativeClassPtr, ref this));
	}
	public unsafe static float ACTIVE_DURATION
	{
		get
		{
			float result;
			IL2CPP.il2cpp_field_static_get_value(ClanInviteRequest_Shared.NativeFieldInfoPtr_ACTIVE_DURATION, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ClanInviteRequest_Shared.NativeFieldInfoPtr_ACTIVE_DURATION, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_ClanNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_ClanName;
	private static readonly IntPtr NativeFieldInfoPtr_FromUserName;
	private static readonly IntPtr NativeFieldInfoPtr_ToUserName;
	private static readonly IntPtr NativeFieldInfoPtr_ToUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ClanCastleHeartCount;
	private static readonly IntPtr NativeFieldInfoPtr_ACTIVE_DURATION;

	public NetworkId ClanNetworkId;

	public FixedString64Bytes ClanName;

	public FixedString64Bytes FromUserName;

	public FixedString64Bytes ToUserName;

	public int ToUserIndex;

	public int FromUserIndex;

	public int ClanCastleHeartCount;
}
```

## Client Systems

- [ClanSystem_InviteReceived_Client]({{% relref "systems/client/ClanSystem_InviteReceived_Client.md" %}})
