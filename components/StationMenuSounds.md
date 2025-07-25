---
nav_exclude: true
search_exclude: true
---

# StationMenuSounds

```csharp
public struct StationMenuSounds
{
	static StationMenuSounds()
	{
		Il2CppClassPointerStore<StationMenuSounds>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Audio", "StationMenuSounds");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StationMenuSounds>.NativeClassPtr);
		StationMenuSounds.NativeFieldInfoPtr_OpenSound = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationMenuSounds>.NativeClassPtr, "OpenSound");
		StationMenuSounds.NativeFieldInfoPtr_CloseSound = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StationMenuSounds>.NativeClassPtr, "CloseSound");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StationMenuSounds>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OpenSound;
	private static readonly IntPtr NativeFieldInfoPtr_CloseSound;

	public FmodEventGuid OpenSound;

	public FmodEventGuid CloseSound;
}
```
