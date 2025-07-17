---
nav_exclude: true
search_exclude: true
---

# ShareSpellSchoolPassive

```csharp
[StructLayout(2)]
public struct ShareSpellSchoolPassive
{
	static ShareSpellSchoolPassive()
	{
		Il2CppClassPointerStore<ShareSpellSchoolPassive>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "ShareSpellSchoolPassive");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ShareSpellSchoolPassive>.NativeClassPtr);
		ShareSpellSchoolPassive.NativeFieldInfoPtr_Passive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShareSpellSchoolPassive>.NativeClassPtr, "Passive");
		ShareSpellSchoolPassive.NativeFieldInfoPtr_Station = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ShareSpellSchoolPassive>.NativeClassPtr, "Station");
		ShareSpellSchoolPassive.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShareSpellSchoolPassive>.NativeClassPtr, 100684493);
		ShareSpellSchoolPassive.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ShareSpellSchoolPassive>.NativeClassPtr, 100684494);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293080, RefRangeEnd = 293081, XrefRangeStart = 293074, XrefRangeEnd = 293080, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShareSpellSchoolPassive.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293087, RefRangeEnd = 293088, XrefRangeStart = 293081, XrefRangeEnd = 293087, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ShareSpellSchoolPassive.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ShareSpellSchoolPassive>.NativeClassPtr, ref this));
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
