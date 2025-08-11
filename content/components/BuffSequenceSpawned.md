---
nav_exclude: true
search_exclude: true
---

# BuffSequenceSpawned

```csharp
public struct BuffSequenceSpawned
{
	static BuffSequenceSpawned()
	{
		Il2CppClassPointerStore<BuffSequenceSpawned>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Sequencer", "BuffSequenceSpawned");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuffSequenceSpawned>.NativeClassPtr);
		BuffSequenceSpawned.NativeFieldInfoPtr_SequenceInstance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffSequenceSpawned>.NativeClassPtr, "SequenceInstance");
		BuffSequenceSpawned.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffSequenceSpawned>.NativeClassPtr, "Condition");
		BuffSequenceSpawned.NativeFieldInfoPtr_SequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuffSequenceSpawned>.NativeClassPtr, "SequenceGuid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuffSequenceSpawned>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SequenceInstance;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceGuid;

	public Entity SequenceInstance;

	public BlobAssetReference<ConditionBlob> Condition;

	public SequenceGUID SequenceGuid;
}
```

## Client Systems

- [BuffSequenceSystem_Destroy](/systems/client/BuffSequenceSystem_Destroy)
