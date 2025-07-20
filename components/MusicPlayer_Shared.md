---
nav_exclude: true
search_exclude: true
---

# MusicPlayer_Shared

```csharp
public struct MusicPlayer_Shared
{
	static MusicPlayer_Shared()
	{
		Il2CppClassPointerStore<MusicPlayer_Shared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MusicPlayer_Shared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MusicPlayer_Shared>.NativeClassPtr);
		MusicPlayer_Shared.NativeFieldInfoPtr_State = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayer_Shared>.NativeClassPtr, "State");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MusicPlayer_Shared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_State;

	public MusicPlayerState State;
}
```

## Server Systems

- [MusicPlayerStationSystem_Update](/systems/server/MusicPlayerStationSystem_Update)
