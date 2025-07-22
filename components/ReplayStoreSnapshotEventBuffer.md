---
nav_exclude: true
search_exclude: false
---

# ReplayStoreSnapshotEventBuffer

```csharp
public struct ReplayStoreSnapshotEventBuffer
{
	static ReplayStoreSnapshotEventBuffer()
	{
		Il2CppClassPointerStore<ReplayStoreSnapshotEventBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Replays", "ReplayStoreSnapshotEventBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplayStoreSnapshotEventBuffer>.NativeClassPtr);
		ReplayStoreSnapshotEventBuffer.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplayStoreSnapshotEventBuffer>.NativeClassPtr, "Data");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplayStoreSnapshotEventBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Data;

	public byte Data;
}
```
