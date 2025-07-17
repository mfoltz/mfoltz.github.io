---
nav_exclude: true
search_exclude: true
---

# CompleteCurrentAchievementAdminEvent

```csharp
[StructLayout(2)]
public struct CompleteCurrentAchievementAdminEvent
{
	static CompleteCurrentAchievementAdminEvent()
	{
		Il2CppClassPointerStore<CompleteCurrentAchievementAdminEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.Network", "CompleteCurrentAchievementAdminEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CompleteCurrentAchievementAdminEvent>.NativeClassPtr);
		CompleteCurrentAchievementAdminEvent.NativeFieldInfoPtr_Amount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CompleteCurrentAchievementAdminEvent>.NativeClassPtr, "Amount");
		CompleteCurrentAchievementAdminEvent.NativeFieldInfoPtr_CharacterName = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CompleteCurrentAchievementAdminEvent>.NativeClassPtr, "CharacterName");
		CompleteCurrentAchievementAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CompleteCurrentAchievementAdminEvent>.NativeClassPtr, 100684443);
		CompleteCurrentAchievementAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CompleteCurrentAchievementAdminEvent>.NativeClassPtr, 100684444);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292794, RefRangeEnd = 292795, XrefRangeStart = 292788, XrefRangeEnd = 292794, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CompleteCurrentAchievementAdminEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 292799, RefRangeEnd = 292800, XrefRangeStart = 292795, XrefRangeEnd = 292799, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CompleteCurrentAchievementAdminEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CompleteCurrentAchievementAdminEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Amount;
	private static readonly IntPtr NativeFieldInfoPtr_CharacterName;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int Amount;
	[FieldOffset(4)]
	public FixedString64Bytes CharacterName;
}
