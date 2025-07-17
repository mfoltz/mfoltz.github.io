---
nav_exclude: true
search_exclude: true
---

# UnlockedWaypointElement

```csharp
[StructLayout(2)]
public struct UnlockedWaypointElement
{
	static UnlockedWaypointElement()
	{
		Il2CppClassPointerStore<UnlockedWaypointElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnlockedWaypointElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedWaypointElement>.NativeClassPtr);
		UnlockedWaypointElement.NativeFieldInfoPtr_Waypoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedWaypointElement>.NativeClassPtr, "Waypoint");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedWaypointElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Waypoint;
	[FieldOffset(0)]
	public NetworkId Waypoint;
}
