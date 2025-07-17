---
nav_exclude: true
search_exclude: true
---

# ClanInviteRequest_Server

```csharp
[StructLayout(2)]
public struct ClanInviteRequest_Server
{
	static ClanInviteRequest_Server()
	{
		Il2CppClassPointerStore<ClanInviteRequest_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ClanInviteRequest_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClanInviteRequest_Server>.NativeClassPtr);
		ClanInviteRequest_Server.NativeFieldInfoPtr_ClanEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Server>.NativeClassPtr, "ClanEntity");
		ClanInviteRequest_Server.NativeFieldInfoPtr_ToUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Server>.NativeClassPtr, "ToUser");
		ClanInviteRequest_Server.NativeFieldInfoPtr_FromUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanInviteRequest_Server>.NativeClassPtr, "FromUser");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClanInviteRequest_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ClanEntity;
	private static readonly IntPtr NativeFieldInfoPtr_ToUser;
	private static readonly IntPtr NativeFieldInfoPtr_FromUser;
	[FieldOffset(0)]
	public Entity ClanEntity;
	[FieldOffset(8)]
	public Entity ToUser;
	[FieldOffset(16)]
	public Entity FromUser;
}
