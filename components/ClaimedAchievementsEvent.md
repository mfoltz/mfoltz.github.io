---
nav_exclude: true
search_exclude: true
---

# ClaimedAchievementsEvent

```csharp
public struct ClaimedAchievementsEvent
{
	static ClaimedAchievementsEvent()
	{
		Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "ClaimedAchievementsEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr);
		ClaimedAchievementsEvent.NativeFieldInfoPtr_MAX_ACHIEVEMENTS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, "MAX_ACHIEVEMENTS");
		ClaimedAchievementsEvent.NativeFieldInfoPtr_DataLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, "DataLength");
		ClaimedAchievementsEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, "MAX_DATA_LENGTH_BYTES");
		ClaimedAchievementsEvent.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, "Data");
		ClaimedAchievementsEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_ClaimedAchievementsEvent_DynamicBuffer_1_AchievementClaimedElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, 100674547);
		ClaimedAchievementsEvent.NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_ClaimedAchievementsEvent_DynamicBuffer_1_AchievementClaimedElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, 100674548);
		ClaimedAchievementsEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, 100674549);
		ClaimedAchievementsEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, 100674550);
	}

	public unsafe static ClaimedAchievementsEvent CreateEvent(DynamicBuffer<AchievementClaimedElement> claimedAchievements)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref claimedAchievements;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ClaimedAchievementsEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_ClaimedAchievementsEvent_DynamicBuffer_1_AchievementClaimedElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static void ReadEvent([In] ref ClaimedAchievementsEvent claimedAchievementsEvent, DynamicBuffer<AchievementClaimedElement> claimedAchievements)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &claimedAchievementsEvent;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref claimedAchievements;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ClaimedAchievementsEvent.NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_ClaimedAchievementsEvent_DynamicBuffer_1_AchievementClaimedElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ClaimedAchievementsEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ClaimedAchievementsEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, ref this));
	}
	public unsafe static int MAX_ACHIEVEMENTS
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(ClaimedAchievementsEvent.NativeFieldInfoPtr_MAX_ACHIEVEMENTS, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ClaimedAchievementsEvent.NativeFieldInfoPtr_MAX_ACHIEVEMENTS, (void*)(&value));
		}
	}
	public unsafe static int MAX_DATA_LENGTH_BYTES
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(ClaimedAchievementsEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ClaimedAchievementsEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MAX_ACHIEVEMENTS;
	private static readonly IntPtr NativeFieldInfoPtr_DataLength;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES;
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeMethodInfoPtr_CreateEvent_Public_Static_ClaimedAchievementsEvent_DynamicBuffer_1_AchievementClaimedElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_ClaimedAchievementsEvent_DynamicBuffer_1_AchievementClaimedElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;

	public int DataLength;

	public ClaimedAchievementsEvent._Data_e__FixedBuffer Data;

	public struct _Data_e__FixedBuffer
	{
		static _Data_e__FixedBuffer()
		{
			Il2CppClassPointerStore<ClaimedAchievementsEvent._Data_e__FixedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ClaimedAchievementsEvent>.NativeClassPtr, "<Data>e__FixedBuffer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ClaimedAchievementsEvent._Data_e__FixedBuffer>.NativeClassPtr);
			ClaimedAchievementsEvent._Data_e__FixedBuffer.NativeFieldInfoPtr_FixedElementField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ClaimedAchievementsEvent._Data_e__FixedBuffer>.NativeClassPtr, "FixedElementField");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ClaimedAchievementsEvent._Data_e__FixedBuffer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_FixedElementField;

		public byte FixedElementField;
	}
}
```

## Client Systems

- [ClaimedAchievementsClientSystem](/systems/client/ClaimedAchievementsClientSystem)
