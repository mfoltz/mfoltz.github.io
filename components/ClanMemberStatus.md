---
nav_exclude: true
search_exclude: true
---

# ClanMemberStatus

```csharp
public struct ClanMemberStatus
{
	static ClanMemberStatus()
	{
		Il2CppClassPointerStore<ClanMemberStatus>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ClanMemberStatus");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClanMemberStatus>.NativeClassPtr);
		ClanMemberStatus.NativeFieldInfoPtr_UserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanMemberStatus>.NativeClassPtr, "UserIndex");
		ClanMemberStatus.NativeFieldInfoPtr_HealthPercent = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanMemberStatus>.NativeClassPtr, "HealthPercent");
		ClanMemberStatus.NativeFieldInfoPtr_IsConnected = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanMemberStatus>.NativeClassPtr, "IsConnected");
		ClanMemberStatus.NativeFieldInfoPtr_ClanRole = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanMemberStatus>.NativeClassPtr, "ClanRole");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClanMemberStatus>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_HealthPercent;
	private static readonly IntPtr NativeFieldInfoPtr_IsConnected;
	private static readonly IntPtr NativeFieldInfoPtr_ClanRole;

	public int UserIndex;

	public int HealthPercent;

	public bool IsConnected;

	public ClanRoleEnum ClanRole;
}
```
