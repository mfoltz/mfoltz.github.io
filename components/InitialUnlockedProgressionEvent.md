# InitialUnlockedProgressionEvent

```csharp
[StructLayout(2)]
public struct InitialUnlockedProgressionEvent
{
	static InitialUnlockedProgressionEvent()
	{
		Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "InitialUnlockedProgressionEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr);
		InitialUnlockedProgressionEvent.NativeFieldInfoPtr_MAX_ENTRIES_IN_EVENT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, "MAX_ENTRIES_IN_EVENT");
		InitialUnlockedProgressionEvent.NativeFieldInfoPtr_DataLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, "DataLength");
		InitialUnlockedProgressionEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, "MAX_DATA_LENGTH_BYTES");
		InitialUnlockedProgressionEvent.NativeFieldInfoPtr_Data = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, "Data");
		InitialUnlockedProgressionEvent.NativeMethodInfoPtr_get_HasData_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, 100674598);
		InitialUnlockedProgressionEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_InitialUnlockedProgressionEvent_DynamicBuffer_1_UnlockedProgressionElement_Int32_byref_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, 100674599);
		InitialUnlockedProgressionEvent.NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_InitialUnlockedProgressionEvent_DynamicBuffer_1_UnlockedProgressionElement_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, 100674600);
		InitialUnlockedProgressionEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, 100674601);
		InitialUnlockedProgressionEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, 100674602);
	}
	public unsafe bool HasData
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InitialUnlockedProgressionEvent.NativeMethodInfoPtr_get_HasData_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 167113, RefRangeEnd = 167114, XrefRangeStart = 167067, XrefRangeEnd = 167113, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static InitialUnlockedProgressionEvent CreateEvent(DynamicBuffer<UnlockedProgressionElement> unlockedProgression, int startOffset, out int entriesCount)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref unlockedProgression;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref startOffset;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &entriesCount;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InitialUnlockedProgressionEvent.NativeMethodInfoPtr_CreateEvent_Public_Static_InitialUnlockedProgressionEvent_DynamicBuffer_1_UnlockedProgressionElement_Int32_byref_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 167141, RefRangeEnd = 167142, XrefRangeStart = 167114, XrefRangeEnd = 167141, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static void ReadEvent([In] ref InitialUnlockedProgressionEvent initialUnlockedProgressionEvent, DynamicBuffer<UnlockedProgressionElement> unlockedProgression)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &initialUnlockedProgressionEvent;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref unlockedProgression;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InitialUnlockedProgressionEvent.NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_InitialUnlockedProgressionEvent_DynamicBuffer_1_UnlockedProgressionElement_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 167150, RefRangeEnd = 167151, XrefRangeStart = 167142, XrefRangeEnd = 167150, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Serialize(ref NetBufferOut netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InitialUnlockedProgressionEvent.NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 167161, RefRangeEnd = 167162, XrefRangeStart = 167151, XrefRangeEnd = 167161, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void Deserialize(ref NetBufferIn netBuffer, EntityManager entityManager)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &netBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref entityManager;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(InitialUnlockedProgressionEvent.NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, ref this));
	}
	public unsafe static int MAX_ENTRIES_IN_EVENT
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(InitialUnlockedProgressionEvent.NativeFieldInfoPtr_MAX_ENTRIES_IN_EVENT, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(InitialUnlockedProgressionEvent.NativeFieldInfoPtr_MAX_ENTRIES_IN_EVENT, (void*)(&value));
		}
	}
	public unsafe static int MAX_DATA_LENGTH_BYTES
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(InitialUnlockedProgressionEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(InitialUnlockedProgressionEvent.NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MAX_ENTRIES_IN_EVENT;
	private static readonly IntPtr NativeFieldInfoPtr_DataLength;
	private static readonly IntPtr NativeFieldInfoPtr_MAX_DATA_LENGTH_BYTES;
	private static readonly IntPtr NativeFieldInfoPtr_Data;
	private static readonly IntPtr NativeMethodInfoPtr_get_HasData_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateEvent_Public_Static_InitialUnlockedProgressionEvent_DynamicBuffer_1_UnlockedProgressionElement_Int32_byref_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_ReadEvent_Public_Static_Void_byref_InitialUnlockedProgressionEvent_DynamicBuffer_1_UnlockedProgressionElement_0;
	private static readonly IntPtr NativeMethodInfoPtr_Serialize_Public_Virtual_Final_New_Void_byref_NetBufferOut_EntityManager_0;
	private static readonly IntPtr NativeMethodInfoPtr_Deserialize_Public_Virtual_Final_New_Void_byref_NetBufferIn_EntityManager_0;
	[FieldOffset(0)]
	public int DataLength;
	[FieldOffset(4)]
	public InitialUnlockedProgressionEvent._Data_e__FixedBuffer Data;
	[ObfuscatedName("ProjectM.InitialUnlockedProgressionEvent+<Data>e__FixedBuffer")]
	[StructLayout(2)]
	public struct _Data_e__FixedBuffer
	{
		static _Data_e__FixedBuffer()
		{
			Il2CppClassPointerStore<InitialUnlockedProgressionEvent._Data_e__FixedBuffer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<InitialUnlockedProgressionEvent>.NativeClassPtr, "<Data>e__FixedBuffer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<InitialUnlockedProgressionEvent._Data_e__FixedBuffer>.NativeClassPtr);
			InitialUnlockedProgressionEvent._Data_e__FixedBuffer.NativeFieldInfoPtr_FixedElementField = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<InitialUnlockedProgressionEvent._Data_e__FixedBuffer>.NativeClassPtr, "FixedElementField");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<InitialUnlockedProgressionEvent._Data_e__FixedBuffer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_FixedElementField;
		[FieldOffset(0)]
		public byte FixedElementField;
	}
}
