---
nav_exclude: true
search_exclude: true
---

# UnlockSpellSchoolProgression

```csharp
[StructLayout(2)]
public struct UnlockSpellSchoolProgression
{
	static UnlockSpellSchoolProgression()
	{
		Il2CppClassPointerStore<UnlockSpellSchoolProgression>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "UnlockSpellSchoolProgression");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockSpellSchoolProgression>.NativeClassPtr);
		UnlockSpellSchoolProgression.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockSpellSchoolProgression>.NativeClassPtr, "Ability");
		UnlockSpellSchoolProgression.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockSpellSchoolProgression>.NativeClassPtr, 100684487);
		UnlockSpellSchoolProgression.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockSpellSchoolProgression>.NativeClassPtr, 100684488);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293042, RefRangeEnd = 293043, XrefRangeStart = 293040, XrefRangeEnd = 293042, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockSpellSchoolProgression.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293045, RefRangeEnd = 293046, XrefRangeStart = 293043, XrefRangeEnd = 293045, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockSpellSchoolProgression.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockSpellSchoolProgression>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID Ability;
}
