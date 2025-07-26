# ResearchStation

```csharp
[StructLayout(2)]
public struct ResearchStation
{
	static ResearchStation()
	{
		Il2CppClassPointerStore<ResearchStation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ResearchStation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr);
		ResearchStation.NativeFieldInfoPtr_Level = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, "Level");
		ResearchStation.NativeFieldInfoPtr_ConnectedTrophyUnlock = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, "ConnectedTrophyUnlock");
		ResearchStation.NativeFieldInfoPtr_ActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, "ActiveSequenceGuid");
		ResearchStation.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, "ActiveSequenceState");
		ResearchStation.NativeFieldInfoPtr_InactiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, "InactiveSequenceGuid");
		ResearchStation.NativeFieldInfoPtr_InactiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, "InactiveSequenceState");
		ResearchStation.NativeFieldInfoPtr_ResearchCompletedGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, "ResearchCompletedGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResearchStation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Level;
	private static readonly IntPtr NativeFieldInfoPtr_ConnectedTrophyUnlock;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_ResearchCompletedGuid;
	[FieldOffset(0)]
	public int Level;
	[FieldOffset(4)]
	public int ConnectedTrophyUnlock;
	[FieldOffset(8)]
	public SequenceGUID ActiveSequenceGuid;
	[FieldOffset(12)]
	public SequenceState ActiveSequenceState;
	[FieldOffset(20)]
	public SequenceGUID InactiveSequenceGuid;
	[FieldOffset(24)]
	public SequenceState InactiveSequenceState;
	[FieldOffset(32)]
	public SequenceGUID ResearchCompletedGuid;
}
