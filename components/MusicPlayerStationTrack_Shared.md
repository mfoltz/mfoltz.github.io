---
nav_exclude: true
search_exclude: false
---

# MusicPlayerStationTrack_Shared

```csharp
public struct MusicPlayerStationTrack_Shared
{
	static MusicPlayerStationTrack_Shared()
	{
		Il2CppClassPointerStore<MusicPlayerStationTrack_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MusicPlayerStationTrack_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MusicPlayerStationTrack_Shared>.NativeClassPtr);
		MusicPlayerStationTrack_Shared.NativeFieldInfoPtr_Name = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayerStationTrack_Shared>.NativeClassPtr, "Name");
		MusicPlayerStationTrack_Shared.NativeFieldInfoPtr_RequiresRegionExplored = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayerStationTrack_Shared>.NativeClassPtr, "RequiresRegionExplored");
		MusicPlayerStationTrack_Shared.NativeFieldInfoPtr_RequiresTechUnlock = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayerStationTrack_Shared>.NativeClassPtr, "RequiresTechUnlock");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MusicPlayerStationTrack_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Name;
	private static readonly IntPtr NativeFieldInfoPtr_RequiresRegionExplored;
	private static readonly IntPtr NativeFieldInfoPtr_RequiresTechUnlock;

	public LocalizationKey Name;

	public WorldRegionType RequiresRegionExplored;

	public bool RequiresTechUnlock;
}
```
