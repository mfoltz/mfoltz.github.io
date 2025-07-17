---
nav_exclude: true
search_exclude: true
---

# CurrentWorldRegionChangedEvent

```csharp
public struct CurrentWorldRegionChangedEvent
{
	static CurrentWorldRegionChangedEvent()
	{
		Il2CppClassPointerStore<CurrentWorldRegionChangedEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "CurrentWorldRegionChangedEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurrentWorldRegionChangedEvent>.NativeClassPtr);
		CurrentWorldRegionChangedEvent.NativeFieldInfoPtr_PreviousRegion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentWorldRegionChangedEvent>.NativeClassPtr, "PreviousRegion");
		CurrentWorldRegionChangedEvent.NativeFieldInfoPtr_NewRegion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentWorldRegionChangedEvent>.NativeClassPtr, "NewRegion");
		CurrentWorldRegionChangedEvent.NativeFieldInfoPtr_User = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurrentWorldRegionChangedEvent>.NativeClassPtr, "User");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurrentWorldRegionChangedEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviousRegion;
	private static readonly IntPtr NativeFieldInfoPtr_NewRegion;
	private static readonly IntPtr NativeFieldInfoPtr_User;

	public WorldRegionType PreviousRegion;

	public WorldRegionType NewRegion;

	public Entity User;
}
```
