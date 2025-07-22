---
nav_exclude: true
search_exclude: false
---

# PlayerPresence

```csharp
public struct PlayerPresence
{
	static PlayerPresence()
	{
		Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Community", "PlayerPresence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr);
		PlayerPresence.NativeFieldInfoPtr_LastUpdateTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr, "LastUpdateTime");
		PlayerPresence.NativeFieldInfoPtr_Activity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr, "Activity");
		PlayerPresence.NativeFieldInfoPtr_Region = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr, "Region");
		PlayerPresence.NativeFieldInfoPtr_ClanId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr, "ClanId");
		PlayerPresence.NativeFieldInfoPtr_ActiveClanMemberCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr, "ActiveClanMemberCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayerPresence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LastUpdateTime;
	private static readonly IntPtr NativeFieldInfoPtr_Activity;
	private static readonly IntPtr NativeFieldInfoPtr_Region;
	private static readonly IntPtr NativeFieldInfoPtr_ClanId;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveClanMemberCount;

	public double LastUpdateTime;

	public PlayerActivities Activity;

	public WorldRegionType Region;

	public Guid ClanId;

	public int ActiveClanMemberCount;
}
```
