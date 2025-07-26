# WaypointMapIcon

```csharp
[StructLayout(2)]
public struct WaypointMapIcon
{
	static WaypointMapIcon()
	{
		Il2CppClassPointerStore<WaypointMapIcon>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "WaypointMapIcon");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WaypointMapIcon>.NativeClassPtr);
		WaypointMapIcon.NativeFieldInfoPtr_TargetNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WaypointMapIcon>.NativeClassPtr, "TargetNetworkId");
		WaypointMapIcon.NativeFieldInfoPtr_IsLocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WaypointMapIcon>.NativeClassPtr, "IsLocked");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WaypointMapIcon>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_IsLocked;
	[FieldOffset(0)]
	public NetworkId TargetNetworkId;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool IsLocked;
}
