---
nav_exclude: true
search_exclude: false
---

# ReplayJumpToSnapshotEvent

```csharp
public struct ReplayJumpToSnapshotEvent
{
	static ReplayJumpToSnapshotEvent()
	{
		Il2CppClassPointerStore<ReplayJumpToSnapshotEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Replays", "ReplayJumpToSnapshotEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplayJumpToSnapshotEvent>.NativeClassPtr);
		ReplayJumpToSnapshotEvent.NativeFieldInfoPtr_Time = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplayJumpToSnapshotEvent>.NativeClassPtr, "Time");
		ReplayJumpToSnapshotEvent.NativeFieldInfoPtr_Fraction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplayJumpToSnapshotEvent>.NativeClassPtr, "Fraction");
		ReplayJumpToSnapshotEvent.NativeFieldInfoPtr_Snapshot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplayJumpToSnapshotEvent>.NativeClassPtr, "Snapshot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplayJumpToSnapshotEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Time;
	private static readonly IntPtr NativeFieldInfoPtr_Fraction;
	private static readonly IntPtr NativeFieldInfoPtr_Snapshot;

	public Nullable_Unboxed<double> Time;

	public Nullable_Unboxed<float> Fraction;

	public Nullable_Unboxed<int> Snapshot;
}
```
