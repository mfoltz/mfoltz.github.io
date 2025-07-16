# DebugUnlockSpellSchoolPassiveInStation

```csharp
[StructLayout(2)]
public struct DebugUnlockSpellSchoolPassiveInStation
{
	static DebugUnlockSpellSchoolPassiveInStation()
	{
		Il2CppClassPointerStore<DebugUnlockSpellSchoolPassiveInStation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "DebugUnlockSpellSchoolPassiveInStation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DebugUnlockSpellSchoolPassiveInStation>.NativeClassPtr);
		DebugUnlockSpellSchoolPassiveInStation.NativeFieldInfoPtr_Passive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DebugUnlockSpellSchoolPassiveInStation>.NativeClassPtr, "Passive");
		DebugUnlockSpellSchoolPassiveInStation.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DebugUnlockSpellSchoolPassiveInStation>.NativeClassPtr, 100684501);
		DebugUnlockSpellSchoolPassiveInStation.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DebugUnlockSpellSchoolPassiveInStation>.NativeClassPtr, 100684502);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293110, RefRangeEnd = 293111, XrefRangeStart = 293108, XrefRangeEnd = 293110, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DebugUnlockSpellSchoolPassiveInStation.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 293113, RefRangeEnd = 293114, XrefRangeStart = 293111, XrefRangeEnd = 293113, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DebugUnlockSpellSchoolPassiveInStation.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DebugUnlockSpellSchoolPassiveInStation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Passive;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public PrefabGUID Passive;
}
