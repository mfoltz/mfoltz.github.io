# DiscoveredMapZoneElement

```csharp
[StructLayout(2)]
public struct DiscoveredMapZoneElement
{
	static DiscoveredMapZoneElement()
	{
		Il2CppClassPointerStore<DiscoveredMapZoneElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "DiscoveredMapZoneElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DiscoveredMapZoneElement>.NativeClassPtr);
		DiscoveredMapZoneElement.NativeFieldInfoPtr_ZoneId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DiscoveredMapZoneElement>.NativeClassPtr, "ZoneId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DiscoveredMapZoneElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ZoneId;
	[FieldOffset(0)]
	public MapZoneId ZoneId;
}
