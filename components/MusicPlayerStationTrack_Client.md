---
nav_exclude: true
search_exclude: false
---

# MusicPlayerStationTrack_Client

```csharp
public struct MusicPlayerStationTrack_Client
{
	static MusicPlayerStationTrack_Client()
	{
		Il2CppClassPointerStore<MusicPlayerStationTrack_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MusicPlayerStationTrack_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MusicPlayerStationTrack_Client>.NativeClassPtr);
		MusicPlayerStationTrack_Client.NativeFieldInfoPtr_Track = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayerStationTrack_Client>.NativeClassPtr, "Track");
		MusicPlayerStationTrack_Client.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayerStationTrack_Client>.NativeClassPtr, "Index");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MusicPlayerStationTrack_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Track;
	private static readonly IntPtr NativeFieldInfoPtr_Index;

	public int Track;

	public int Index;
}
```
