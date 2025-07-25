---
nav_exclude: true
search_exclude: true
---

# SavePersistentDataEvent

```csharp
public struct SavePersistentDataEvent
{
	static SavePersistentDataEvent()
	{
		Il2CppClassPointerStore<SavePersistentDataEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "SavePersistentDataEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SavePersistentDataEvent>.NativeClassPtr);
		SavePersistentDataEvent.NativeFieldInfoPtr_Reason = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SavePersistentDataEvent>.NativeClassPtr, "Reason");
		SavePersistentDataEvent.NativeFieldInfoPtr_SaveFileName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SavePersistentDataEvent>.NativeClassPtr, "SaveFileName");
		SavePersistentDataEvent.NativeFieldInfoPtr_CompressSaveFiles = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SavePersistentDataEvent>.NativeClassPtr, "CompressSaveFiles");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SavePersistentDataEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Reason;
	private static readonly IntPtr NativeFieldInfoPtr_SaveFileName;
	private static readonly IntPtr NativeFieldInfoPtr_CompressSaveFiles;

	public SaveReason Reason;

	public FixedString512Bytes SaveFileName;

	public bool CompressSaveFiles;
}
```

## Server Systems

- [SerializePersistenceSystemV2](/systems/server/SerializePersistenceSystemV2)
- [TriggerPersistenceSaveSystem](/systems/server/TriggerPersistenceSaveSystem)
