---
nav_exclude: true
search_exclude: false
---

# WarEvent_NetworkedData

```csharp
public struct WarEvent_NetworkedData
{
	static WarEvent_NetworkedData()
	{
		Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_NetworkedData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr);
		WarEvent_NetworkedData.NativeFieldInfoPtr_NextEventTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, "NextEventTimeTicks");
		WarEvent_NetworkedData.NativeFieldInfoPtr_LastEventTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, "LastEventTimeTicks");
		WarEvent_NetworkedData.NativeFieldInfoPtr_ActiveEventStartTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, "ActiveEventStartTimeTicks");
		WarEvent_NetworkedData.NativeFieldInfoPtr_ActiveEventEndTimeTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, "ActiveEventEndTimeTicks");
		WarEvent_NetworkedData.NativeFieldInfoPtr_ActiveEventDecayTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, "ActiveEventDecayTicks");
		WarEvent_NetworkedData.NativeFieldInfoPtr_IsActive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, "IsActive");
		WarEvent_NetworkedData.NativeFieldInfoPtr_ActiveType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, "ActiveType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_NetworkedData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_NextEventTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_LastEventTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveEventStartTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveEventEndTimeTicks;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveEventDecayTicks;
	private static readonly IntPtr NativeFieldInfoPtr_IsActive;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveType;

	public long NextEventTimeTicks;

	public long LastEventTimeTicks;

	public long ActiveEventStartTimeTicks;

	public long ActiveEventEndTimeTicks;

	public long ActiveEventDecayTicks;

	public bool IsActive;

	public WarEventType ActiveType;
}
```

## Client Systems

- [AlertsUISystem](/systems/client/AlertsUISystem)
- [MapMenuMapper](/systems/client/MapMenuMapper)
