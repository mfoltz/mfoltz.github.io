# SavePersistentDataEvent

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public SaveReason Reason;
	[FieldOffset(4)]
	public FixedString512Bytes SaveFileName;
	[FieldOffset(516)]
	[MarshalAs(4)]
	public bool CompressSaveFiles;
}
