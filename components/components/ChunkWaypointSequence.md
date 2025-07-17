---
nav_exclude: true
search_exclude: true
---

# ChunkWaypointSequence

```csharp
[StructLayout(2)]
public struct ChunkWaypointSequence
{
	static ChunkWaypointSequence()
	{
		Il2CppClassPointerStore<ChunkWaypointSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ChunkWaypointSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkWaypointSequence>.NativeClassPtr);
		ChunkWaypointSequence.NativeFieldInfoPtr_LockedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointSequence>.NativeClassPtr, "LockedSequence");
		ChunkWaypointSequence.NativeFieldInfoPtr_LockedSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointSequence>.NativeClassPtr, "LockedSequenceState");
		ChunkWaypointSequence.NativeFieldInfoPtr_UnlockedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointSequence>.NativeClassPtr, "UnlockedSequence");
		ChunkWaypointSequence.NativeFieldInfoPtr_UnlockedSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkWaypointSequence>.NativeClassPtr, "UnlockedSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkWaypointSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LockedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_LockedSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedSequenceState;
	[FieldOffset(0)]
	public SequenceGUID LockedSequence;
	[FieldOffset(4)]
	public SequenceState LockedSequenceState;
	[FieldOffset(12)]
	public SequenceGUID UnlockedSequence;
	[FieldOffset(16)]
	public SequenceState UnlockedSequenceState;
}
