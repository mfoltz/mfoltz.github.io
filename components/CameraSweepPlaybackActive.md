---
nav_exclude: true
search_exclude: false
---

# CameraSweepPlaybackActive

```csharp
public struct CameraSweepPlaybackActive
{
	static CameraSweepPlaybackActive()
	{
		Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CameraSweepPlaybackActive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr);
		CameraSweepPlaybackActive.NativeFieldInfoPtr_CurrentFrameData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr, "CurrentFrameData");
		CameraSweepPlaybackActive.NativeFieldInfoPtr_ElapsedOnPlaybackStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr, "ElapsedOnPlaybackStart");
		CameraSweepPlaybackActive.NativeFieldInfoPtr_LoopPlayback = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr, "LoopPlayback");
		CameraSweepPlaybackActive.NativeFieldInfoPtr_SyncToReplay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr, "SyncToReplay");
		CameraSweepPlaybackActive.NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_CameraSweepPlaybackActive_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr, 100663855);
		CameraSweepPlaybackActive.NativeMethodInfoPtr_Deserialize_Public_Static_CameraSweepPlaybackActive_BinaryReader_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr, 100663856);
	}

	public unsafe static void Serialize(BinaryWriter writer, CameraSweepPlaybackActive data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(writer);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CameraSweepPlaybackActive.NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_CameraSweepPlaybackActive_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static CameraSweepPlaybackActive Deserialize(BinaryReader reader)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(reader);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CameraSweepPlaybackActive.NativeMethodInfoPtr_Deserialize_Public_Static_CameraSweepPlaybackActive_BinaryReader_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CameraSweepPlaybackActive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentFrameData;
	private static readonly IntPtr NativeFieldInfoPtr_ElapsedOnPlaybackStart;
	private static readonly IntPtr NativeFieldInfoPtr_LoopPlayback;
	private static readonly IntPtr NativeFieldInfoPtr_SyncToReplay;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_CameraSweepPlaybackActive_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Static_CameraSweepPlaybackActive_BinaryReader_0;

	public RecordedCameraFrame CurrentFrameData;

	public double ElapsedOnPlaybackStart;

	public bool LoopPlayback;

	public bool SyncToReplay;
}
```
