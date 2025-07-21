---
nav_exclude: true
search_exclude: false
---

# ClanTeam

```csharp
public struct ClanTeam
{
	static ClanTeam()
	{
		Il2CppClassPointerStore<ClanTeam>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ClanTeam");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr);
		ClanTeam.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr, "Name");
		ClanTeam.NativeFieldInfoPtr_Motto = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr, "Motto");
		ClanTeam.NativeFieldInfoPtr_ClanGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr, "ClanGuid");
		ClanTeam.NativeFieldInfoPtr_TeamValue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr, "TeamValue");
		ClanTeam.NativeFieldInfoPtr_CreatedBy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr, "CreatedBy");
		ClanTeam.NativeFieldInfoPtr_LastEditedBy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr, "LastEditedBy");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClanTeam>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_Motto;
	private static readonly IntPtr NativeFieldInfoPtr_ClanGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TeamValue;
	private static readonly IntPtr NativeFieldInfoPtr_CreatedBy;
	private static readonly IntPtr NativeFieldInfoPtr_LastEditedBy;

	public FixedString64Bytes Name;

	public FixedString64Bytes Motto;

	public Guid ClanGuid;

	public int TeamValue;

	public NetworkId CreatedBy;

	public NetworkId LastEditedBy;
}
```
