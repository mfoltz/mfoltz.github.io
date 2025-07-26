# StudioEvent

```csharp
[StructLayout(2)]
public struct StudioEvent
{
	static StudioEvent()
	{
		Il2CppClassPointerStore<StudioEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Audio", "StudioEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr);
		StudioEvent.NativeFieldInfoPtr_Event = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "Event");
		StudioEvent.NativeFieldInfoPtr_StopMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "StopMode");
		StudioEvent.NativeFieldInfoPtr_SourcePrefabPlayedFrom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "SourcePrefabPlayedFrom");
		StudioEvent.NativeFieldInfoPtr_EventInfo = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "EventInfo");
		StudioEvent.NativeFieldInfoPtr_Pitch = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "Pitch");
		StudioEvent.NativeFieldInfoPtr_Volume = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "Volume");
		StudioEvent.NativeFieldInfoPtr_MinDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "MinDistance");
		StudioEvent.NativeFieldInfoPtr_MaxDistance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, "MaxDistance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<StudioEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Event;
	private static readonly IntPtr NativeFieldInfoPtr_StopMode;
	private static readonly IntPtr NativeFieldInfoPtr_SourcePrefabPlayedFrom;
	private static readonly IntPtr NativeFieldInfoPtr_EventInfo;
	private static readonly IntPtr NativeFieldInfoPtr_Pitch;
	private static readonly IntPtr NativeFieldInfoPtr_Volume;
	private static readonly IntPtr NativeFieldInfoPtr_MinDistance;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDistance;
	[FieldOffset(0)]
	public FmodEventGuid Event;
	[FieldOffset(16)]
	public StudioEventStopModeEnum StopMode;
	[FieldOffset(20)]
	public PrefabIdentifier SourcePrefabPlayedFrom;
	[FieldOffset(24)]
	public StudioEventInfo EventInfo;
	[FieldOffset(32)]
	public Nullable_Unboxed<float> Pitch;
	[FieldOffset(40)]
	public Nullable_Unboxed<float> Volume;
	[FieldOffset(48)]
	public Nullable_Unboxed<float> MinDistance;
	[FieldOffset(56)]
	public Nullable_Unboxed<float> MaxDistance;
}
