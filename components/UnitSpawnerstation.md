---
nav_exclude: true
search_exclude: true
---

# UnitSpawnerstation

```csharp
public struct UnitSpawnerstation
{
	static UnitSpawnerstation()
	{
		Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnitSpawnerstation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr);
		UnitSpawnerstation.NativeFieldInfoPtr_MaxSpawnedUnits = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "MaxSpawnedUnits");
		UnitSpawnerstation.NativeFieldInfoPtr_SpawnRadiusMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "SpawnRadiusMin");
		UnitSpawnerstation.NativeFieldInfoPtr_SpawnRadiusMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "SpawnRadiusMax");
		UnitSpawnerstation.NativeFieldInfoPtr_LastInventoryChangedVersion = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "LastInventoryChangedVersion");
		UnitSpawnerstation.NativeFieldInfoPtr_ActiveUnitAmount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "ActiveUnitAmount");
		UnitSpawnerstation.NativeFieldInfoPtr_OnDestroyAction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "OnDestroyAction");
		UnitSpawnerstation.NativeFieldInfoPtr_CurrentRecipeGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "CurrentRecipeGuid");
		UnitSpawnerstation.NativeFieldInfoPtr_Progress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "Progress");
		UnitSpawnerstation.NativeFieldInfoPtr_IsWorking = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "IsWorking");
		UnitSpawnerstation.NativeFieldInfoPtr_Status = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "Status");
		UnitSpawnerstation.NativeFieldInfoPtr_ActiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "ActiveSequenceGuid");
		UnitSpawnerstation.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "ActiveSequenceState");
		UnitSpawnerstation.NativeFieldInfoPtr_InactiveSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "InactiveSequenceGuid");
		UnitSpawnerstation.NativeFieldInfoPtr_InactiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, "InactiveSequenceState");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitSpawnerstation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxSpawnedUnits;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnRadiusMin;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnRadiusMax;
	private static readonly IntPtr NativeFieldInfoPtr_LastInventoryChangedVersion;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveUnitAmount;
	private static readonly IntPtr NativeFieldInfoPtr_OnDestroyAction;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentRecipeGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Progress;
	private static readonly IntPtr NativeFieldInfoPtr_IsWorking;
	private static readonly IntPtr NativeFieldInfoPtr_Status;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceState;

	public int MaxSpawnedUnits;

	public float SpawnRadiusMin;

	public float SpawnRadiusMax;

	public byte LastInventoryChangedVersion;

	public int ActiveUnitAmount;

	public UnitSpawnerOnDestroyAction OnDestroyAction;

	public PrefabGUID CurrentRecipeGuid;

	public float Progress;

	public bool IsWorking;

	public UnitSpawnerStationStatus Status;

	public SequenceGUID ActiveSequenceGuid;

	public SequenceState ActiveSequenceState;

	public SequenceGUID InactiveSequenceGuid;

	public SequenceState InactiveSequenceState;
}
```
