# Snapshot_SpawnedUnitsBuffer

```csharp
[StructLayout(2)]
public struct Snapshot_SpawnedUnitsBuffer
{
	static Snapshot_SpawnedUnitsBuffer()
	{
		Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.GeneratedNetCode.dll", "ProjectM.Network", "Snapshot_SpawnedUnitsBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr);
		Snapshot_SpawnedUnitsBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, "Value");
		Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, 100664537);
		Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_SpawnedUnitsBuffer_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, 100664538);
		Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_SpawnedUnitsBuffer_Boolean_byref_BufferSnapshotPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, 100664539);
		Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_SpawnedUnitsBuffer_Int32_byref_BufferSnapshotPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, 100664540);
		Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_SpawnedUnitsBuffer_Int32_Int32_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, 100664541);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 491898, XrefRangeEnd = 491899, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static int CalculateBufferSize(int elementCount)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref elementCount;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr InitializeSnapshot(Snapshot_SpawnedUnitsBuffer* bufferPtr, int elementCount, int currentFrame)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = bufferPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref elementCount;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref currentFrame;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_SpawnedUnitsBuffer_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 491899, XrefRangeEnd = 491902, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool TryGetSerializedSnapshot(DynamicBuffer<Snapshot_SpawnedUnitsBuffer> dynamicBuffer, bool readOnly, out Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr bufferSnapshotPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dynamicBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref readOnly;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bufferSnapshotPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_SpawnedUnitsBuffer_Boolean_byref_BufferSnapshotPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static bool TryGetSerializedSnapshot(Snapshot_SpawnedUnitsBuffer* bufferPtr, int bufferLength, out Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr bufferSnapshotPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = bufferPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bufferLength;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bufferSnapshotPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_SpawnedUnitsBuffer_Int32_byref_BufferSnapshotPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 491948, RefRangeEnd = 491952, XrefRangeStart = 491902, XrefRangeEnd = 491948, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr GetSerializedBufferSnapshotGrowIfNeeded(DynamicBuffer<Snapshot_SpawnedUnitsBuffer> dynamicBuffer, int newElementCount, int currentFrame, out bool didBufferGrow)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dynamicBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newElementCount;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref currentFrame;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &didBufferGrow;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_SpawnedUnitsBuffer.NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_SpawnedUnitsBuffer_Int32_Int32_byref_Boolean_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_SpawnedUnitsBuffer_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_SpawnedUnitsBuffer_Boolean_byref_BufferSnapshotPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_SpawnedUnitsBuffer_Int32_byref_BufferSnapshotPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_SpawnedUnitsBuffer_Int32_Int32_byref_Boolean_0;
	[FieldOffset(0)]
	public byte Value;
	[StructLayout(2)]
	public struct BufferSnapshotPtr
	{
		static BufferSnapshotPtr()
		{
			Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer>.NativeClassPtr, "BufferSnapshotPtr");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr>.NativeClassPtr);
			Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_ElementFrameChanged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr>.NativeClassPtr, "ElementFrameChanged");
			Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_Elements = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr>.NativeClassPtr, "Elements");
			Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr>.NativeClassPtr, "Length");
			Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_LengthFrameChanged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr>.NativeClassPtr, "LengthFrameChanged");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Snapshot_SpawnedUnitsBuffer.BufferSnapshotPtr>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_ElementFrameChanged;
		private static readonly IntPtr NativeFieldInfoPtr_Elements;
		private static readonly IntPtr NativeFieldInfoPtr_Length;
		private static readonly IntPtr NativeFieldInfoPtr_LengthFrameChanged;
		[FieldOffset(0)]
		public unsafe int* ElementFrameChanged;
		[FieldOffset(8)]
		public unsafe Snapshot_SpawnedUnitsBuffer_Data* Elements;
		[FieldOffset(16)]
		public int Length;
		[FieldOffset(20)]
		public int LengthFrameChanged;
	}
}
