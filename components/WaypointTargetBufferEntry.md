---
nav_exclude: true
search_exclude: true
---

# WaypointTargetBufferEntry

```csharp
public struct WaypointTargetBufferEntry
{
	static WaypointTargetBufferEntry()
	{
		Il2CppClassPointerStore<WaypointTargetBufferEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WaypointTargetBufferEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WaypointTargetBufferEntry>.NativeClassPtr);
		WaypointTargetBufferEntry.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WaypointTargetBufferEntry>.NativeClassPtr, "Position");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WaypointTargetBufferEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;

	public float3 Position;
}
```
