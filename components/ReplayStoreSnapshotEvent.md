# ReplayStoreSnapshotEvent

```csharp
[StructLayout(2)]
public struct ReplayStoreSnapshotEvent
{
	static ReplayStoreSnapshotEvent()
	{
		Il2CppClassPointerStore<ReplayStoreSnapshotEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Replays", "ReplayStoreSnapshotEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplayStoreSnapshotEvent>.NativeClassPtr);
		ReplayStoreSnapshotEvent.NativeFieldInfoPtr_LengthBits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplayStoreSnapshotEvent>.NativeClassPtr, "LengthBits");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplayStoreSnapshotEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LengthBits;
	[FieldOffset(0)]
	public int LengthBits;
}
