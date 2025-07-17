---
nav_exclude: true
search_exclude: true
---

# CameraSweepSingleton

```csharp
[StructLayout(2)]
public struct CameraSweepSingleton
{
	static CameraSweepSingleton()
	{
		Il2CppClassPointerStore<CameraSweepSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CameraSweepSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CameraSweepSingleton>.NativeClassPtr);
		CameraSweepSingleton.NativeFieldInfoPtr_HasReplayTimeOnStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraSweepSingleton>.NativeClassPtr, "HasReplayTimeOnStart");
		CameraSweepSingleton.NativeFieldInfoPtr_ReplayTimeOnStart = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CameraSweepSingleton>.NativeClassPtr, "ReplayTimeOnStart");
		CameraSweepSingleton.NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_CameraSweepSingleton_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CameraSweepSingleton>.NativeClassPtr, 100663857);
		CameraSweepSingleton.NativeMethodInfoPtr_Deserialize_Public_Static_CameraSweepSingleton_BinaryReader_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CameraSweepSingleton>.NativeClassPtr, 100663858);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1054190, XrefRangeEnd = 1054191, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void Serialize(BinaryWriter writer, CameraSweepSingleton data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(writer);
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CameraSweepSingleton.NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_CameraSweepSingleton_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe static CameraSweepSingleton Deserialize(BinaryReader reader)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(reader);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CameraSweepSingleton.NativeMethodInfoPtr_Deserialize_Public_Static_CameraSweepSingleton_BinaryReader_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CameraSweepSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HasReplayTimeOnStart;
	private static readonly IntPtr NativeFieldInfoPtr_ReplayTimeOnStart;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Static_Void_BinaryWriter_CameraSweepSingleton_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Static_CameraSweepSingleton_BinaryReader_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool HasReplayTimeOnStart;
	[FieldOffset(8)]
	public double ReplayTimeOnStart;
}
