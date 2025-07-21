---
nav_exclude: true
search_exclude: false
---

# WarEvent_DebugData

```csharp
public struct WarEvent_DebugData
{
	static WarEvent_DebugData()
	{
		Il2CppClassPointerStore<WarEvent_DebugData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared.WarEvents", "WarEvent_DebugData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WarEvent_DebugData>.NativeClassPtr);
		WarEvent_DebugData.NativeFieldInfoPtr_SimulatedEventUsersCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_DebugData>.NativeClassPtr, "SimulatedEventUsersCount");
		WarEvent_DebugData.NativeFieldInfoPtr_FakeUsersInAreaCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WarEvent_DebugData>.NativeClassPtr, "FakeUsersInAreaCount");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WarEvent_DebugData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SimulatedEventUsersCount;
	private static readonly IntPtr NativeFieldInfoPtr_FakeUsersInAreaCount;

	public Nullable_Unboxed<int> SimulatedEventUsersCount;

	public Nullable_Unboxed<int> FakeUsersInAreaCount;
}
```

## Server Systems

- [WarEventDebugSystem](/systems/server/WarEventDebugSystem)
