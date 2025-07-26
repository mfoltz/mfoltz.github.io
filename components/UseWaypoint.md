# UseWaypoint

```csharp
[StructLayout(2)]
public struct UseWaypoint
{
	static UseWaypoint()
	{
		Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UseWaypoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr);
		UseWaypoint.NativeFieldInfoPtr_ToFewPortalUnlocked = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr, "ToFewPortalUnlocked");
		UseWaypoint.NativeFieldInfoPtr_TeleportBoundItemText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr, "TeleportBoundItemText");
		UseWaypoint.NativeFieldInfoPtr_SoulShardDuringCastlePvPText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr, "SoulShardDuringCastlePvPText");
		UseWaypoint.NativeFieldInfoPtr_HasCharmedUnitText = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr, "HasCharmedUnitText");
		UseWaypoint.NativeFieldInfoPtr_TeleportBoundItemSctTypeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr, "TeleportBoundItemSctTypeGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UseWaypoint>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ToFewPortalUnlocked;
	private static readonly IntPtr NativeFieldInfoPtr_TeleportBoundItemText;
	private static readonly IntPtr NativeFieldInfoPtr_SoulShardDuringCastlePvPText;
	private static readonly IntPtr NativeFieldInfoPtr_HasCharmedUnitText;
	private static readonly IntPtr NativeFieldInfoPtr_TeleportBoundItemSctTypeGuid;
	[FieldOffset(0)]
	public LocalizationKey ToFewPortalUnlocked;
	[FieldOffset(16)]
	public LocalizationKey TeleportBoundItemText;
	[FieldOffset(32)]
	public LocalizationKey SoulShardDuringCastlePvPText;
	[FieldOffset(48)]
	public LocalizationKey HasCharmedUnitText;
	[FieldOffset(64)]
	public PrefabGUID TeleportBoundItemSctTypeGuid;
}
