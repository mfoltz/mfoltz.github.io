---
nav_exclude: true
search_exclude: true
---

# SpawnSequenceForEntity

```csharp
public struct SpawnSequenceForEntity
{
	static SpawnSequenceForEntity()
	{
		Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Sequencer", "SpawnSequenceForEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr);
		SpawnSequenceForEntity.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, "SequenceGuid");
		SpawnSequenceForEntity.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, "Target");
		SpawnSequenceForEntity.NativeFieldInfoPtr_SecondaryTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, "SecondaryTarget");
		SpawnSequenceForEntity.NativeFieldInfoPtr_PlayOnSelf = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, "PlayOnSelf");
		SpawnSequenceForEntity.NativeFieldInfoPtr_Scale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, "Scale");
		SpawnSequenceForEntity.NativeFieldInfoPtr_SequenceInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, "SequenceInstance");
		SpawnSequenceForEntity.NativeFieldInfoPtr_HandledPotentialError = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, "HandledPotentialError");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpawnSequenceForEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_SecondaryTarget;
	private static readonly IntPtr NativeFieldInfoPtr_PlayOnSelf;
	private static readonly IntPtr NativeFieldInfoPtr_Scale;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceInstance;
	private static readonly IntPtr NativeFieldInfoPtr_HandledPotentialError;

	public SequenceGUID SequenceGuid;

	public NetworkedEntity Target;

	public NetworkedEntity SecondaryTarget;

	public bool PlayOnSelf;

	public float Scale;

	public SequenceState SequenceInstance;

	public bool HandledPotentialError;
}
```

## Server Systems

- [SpawnSequenceForEntitySystem_Server](/systems/server/SpawnSequenceForEntitySystem_Server)

## Client Systems

- [SpawnSequenceForEntitySystem](/systems/client/SpawnSequenceForEntitySystem)
