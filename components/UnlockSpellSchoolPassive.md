---
nav_exclude: true
search_exclude: true
---

# UnlockSpellSchoolPassive

```csharp
[StructLayout(2)]
public struct UnlockSpellSchoolPassive
{
	static UnlockSpellSchoolPassive()
	{
		Il2CppClassPointerStore<UnlockSpellSchoolPassive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "UnlockSpellSchoolPassive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnlockSpellSchoolPassive>.NativeClassPtr);
		UnlockSpellSchoolPassive.NativeFieldInfoPtr_Passive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockSpellSchoolPassive>.NativeClassPtr, "Passive");
		UnlockSpellSchoolPassive.NativeFieldInfoPtr_Station = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnlockSpellSchoolPassive>.NativeClassPtr, "Station");
		UnlockSpellSchoolPassive.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockSpellSchoolPassive>.NativeClassPtr, 100684489);
		UnlockSpellSchoolPassive.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UnlockSpellSchoolPassive>.NativeClassPtr, 100684490);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293052, RefRangeEnd = 293053, XrefRangeStart = 293046, XrefRangeEnd = 293052, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockSpellSchoolPassive.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293059, RefRangeEnd = 293060, XrefRangeStart = 293053, XrefRangeEnd = 293059, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UnlockSpellSchoolPassive.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnlockSpellSchoolPassive>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Passive;
	private static readonly IntPtr NativeFieldInfoPtr_Station;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID Passive;
	[FieldOffset(4)]
	public NetworkId Station;
}
