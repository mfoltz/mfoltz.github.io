---
nav_exclude: true
search_exclude: true
---

# CastleRebuildPhaseSequence

```csharp
[StructLayout(2)]
public struct CastleRebuildPhaseSequence
{
	static CastleRebuildPhaseSequence()
	{
		Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRebuildPhaseSequence");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr);
		CastleRebuildPhaseSequence.NativeFieldInfoPtr_OnEnterPhasedGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr, "OnEnterPhasedGuid");
		CastleRebuildPhaseSequence.NativeFieldInfoPtr_OnExitPhasedGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr, "OnExitPhasedGuid");
		CastleRebuildPhaseSequence.NativeFieldInfoPtr_CurrentSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr, "CurrentSequence");
		CastleRebuildPhaseSequence.NativeFieldInfoPtr_Phased = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr, "Phased");
		CastleRebuildPhaseSequence.NativeMethodInfoPtr_ShouldUpdateSequence_Public_Boolean_Boolean_byref_SequenceGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr, 100681934);
	}
	[CallerCount(0)]
	public unsafe bool ShouldUpdateSequence(bool isPhased, out SequenceGUID playSequenceGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref isPhased;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &playSequenceGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildPhaseSequence.NativeMethodInfoPtr_ShouldUpdateSequence_Public_Boolean_Boolean_byref_SequenceGUID_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildPhaseSequence>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OnEnterPhasedGuid;
	private static readonly IntPtr NativeFieldInfoPtr_OnExitPhasedGuid;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentSequence;
	private static readonly IntPtr NativeFieldInfoPtr_Phased;
	private static readonly IntPtr NativeMethodInfoPtr_ShouldUpdateSequence_Public_Boolean_Boolean_byref_SequenceGUID_0;
	[FieldOffset(0)]
	public SequenceGUID OnEnterPhasedGuid;
	[FieldOffset(4)]
	public SequenceGUID OnExitPhasedGuid;
	[FieldOffset(8)]
	public SequenceState CurrentSequence;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool Phased;
}
