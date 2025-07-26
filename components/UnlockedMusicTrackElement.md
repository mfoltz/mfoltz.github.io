# UnlockedMusicTrackElement

```csharp
[StructLayout(2)]
public struct UnlockedMusicTrackElement
{
	static UnlockedMusicTrackElement()
	{
		Il2CppClassPointerStore<UnlockedMusicTrackElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "UnlockedMusicTrackElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockedMusicTrackElement>.NativeClassPtr);
		UnlockedMusicTrackElement.NativeFieldInfoPtr_UnlockedMusicTrack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedMusicTrackElement>.NativeClassPtr, "UnlockedMusicTrack");
		UnlockedMusicTrackElement.NativeFieldInfoPtr_UserHasRequiredContentFlags = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockedMusicTrackElement>.NativeClassPtr, "UserHasRequiredContentFlags");
		UnlockedMusicTrackElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedMusicTrackElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedMusicTrackElement>.NativeClassPtr, 100670736);
		UnlockedMusicTrackElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedMusicTrackElement_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockedMusicTrackElement>.NativeClassPtr, 100670737);
	}
	[CallerCount(529)]
	[CachedScanResults(RefRangeStart = 117126, RefRangeEnd = 117655, XrefRangeStart = 117126, XrefRangeEnd = 117655, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static implicit operator PrefabGUID(UnlockedMusicTrackElement e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedMusicTrackElement.NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedMusicTrackElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static implicit operator UnlockedMusicTrackElement(PrefabGUID e)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref e;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockedMusicTrackElement.NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedMusicTrackElement_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockedMusicTrackElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnlockedMusicTrack;
	private static readonly IntPtr NativeFieldInfoPtr_UserHasRequiredContentFlags;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_PrefabGUID_UnlockedMusicTrackElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Implicit_Public_Static_UnlockedMusicTrackElement_PrefabGUID_0;
	[FieldOffset(0)]
	public PrefabGUID UnlockedMusicTrack;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool UserHasRequiredContentFlags;
}
