# SpawnRegionSpawnSlotEntry

```csharp
[StructLayout(2)]
public struct SpawnRegionSpawnSlotEntry
{
	static SpawnRegionSpawnSlotEntry()
	{
		Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM", "SpawnRegionSpawnSlotEntry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr);
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_BlockRespawnUntil = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "BlockRespawnUntil");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "Entity");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_ActiveSpawnPointIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "ActiveSpawnPointIndex");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_ActiveSpawnGroupIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "ActiveSpawnGroupIndex");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_ActiveSpawnBlockingRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "ActiveSpawnBlockingRadius");
		SpawnRegionSpawnSlotEntry.NativeFieldInfoPtr_HasSpawned = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, "HasSpawned");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnRegionSpawnSlotEntry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BlockRespawnUntil;
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSpawnPointIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSpawnGroupIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSpawnBlockingRadius;
	private static readonly IntPtr NativeFieldInfoPtr_HasSpawned;
	[FieldOffset(0)]
	public double BlockRespawnUntil;
	[FieldOffset(8)]
	public Entity Entity;
	[FieldOffset(16)]
	public int ActiveSpawnPointIndex;
	[FieldOffset(20)]
	public int ActiveSpawnGroupIndex;
	[FieldOffset(24)]
	public float ActiveSpawnBlockingRadius;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool HasSpawned;
}
