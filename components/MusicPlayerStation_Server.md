---
nav_exclude: true
search_exclude: true
---

# MusicPlayerStation_Server

```csharp
public struct MusicPlayerStation_Server
{
	static MusicPlayerStation_Server()
	{
		Il2CppClassPointerStore<MusicPlayerStation_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "MusicPlayerStation_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MusicPlayerStation_Server>.NativeClassPtr);
		MusicPlayerStation_Server.NativeFieldInfoPtr_StateStartTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MusicPlayerStation_Server>.NativeClassPtr, "StateStartTime");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MusicPlayerStation_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StateStartTime;

	public double StateStartTime;
}
```

## Server Systems

- [ProjectM.MusicPlayerStationSystem_Update](/systems/ProjectM.MusicPlayerStationSystem_Update)
