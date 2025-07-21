---
nav_exclude: true
search_exclude: false
---

# Snapshot_ResearchBuffer

```csharp
public struct Snapshot_ResearchBuffer
{
	static Snapshot_ResearchBuffer()
	{
		Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.GeneratedNetCode.dll", "ProjectM.Network", "Snapshot_ResearchBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr);
		Snapshot_ResearchBuffer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, "Value");
		Snapshot_ResearchBuffer.NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, 100664502);
		Snapshot_ResearchBuffer.NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_ResearchBuffer_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, 100664503);
		Snapshot_ResearchBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_ResearchBuffer_Boolean_byref_BufferSnapshotPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, 100664504);
		Snapshot_ResearchBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_ResearchBuffer_Int32_byref_BufferSnapshotPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, 100664505);
		Snapshot_ResearchBuffer.NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_ResearchBuffer_Int32_Int32_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, 100664506);
	}

	public unsafe static int CalculateBufferSize(int elementCount)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref elementCount;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_ResearchBuffer.NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Snapshot_ResearchBuffer.BufferSnapshotPtr InitializeSnapshot(Snapshot_ResearchBuffer* bufferPtr, int elementCount, int currentFrame)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = bufferPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref elementCount;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref currentFrame;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_ResearchBuffer.NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_ResearchBuffer_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryGetSerializedSnapshot(DynamicBuffer<Snapshot_ResearchBuffer> dynamicBuffer, bool readOnly, out Snapshot_ResearchBuffer.BufferSnapshotPtr bufferSnapshotPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dynamicBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref readOnly;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bufferSnapshotPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_ResearchBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_ResearchBuffer_Boolean_byref_BufferSnapshotPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryGetSerializedSnapshot(Snapshot_ResearchBuffer* bufferPtr, int bufferLength, out Snapshot_ResearchBuffer.BufferSnapshotPtr bufferSnapshotPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = bufferPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bufferLength;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bufferSnapshotPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_ResearchBuffer.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_ResearchBuffer_Int32_byref_BufferSnapshotPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Snapshot_ResearchBuffer.BufferSnapshotPtr GetSerializedBufferSnapshotGrowIfNeeded(DynamicBuffer<Snapshot_ResearchBuffer> dynamicBuffer, int newElementCount, int currentFrame, out bool didBufferGrow)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dynamicBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newElementCount;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref currentFrame;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &didBufferGrow;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_ResearchBuffer.NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_ResearchBuffer_Int32_Int32_byref_Boolean_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_ResearchBuffer_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_ResearchBuffer_Boolean_byref_BufferSnapshotPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_ResearchBuffer_Int32_byref_BufferSnapshotPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_ResearchBuffer_Int32_Int32_byref_Boolean_0;

	public byte Value;

	public struct BufferSnapshotPtr
	{
		static BufferSnapshotPtr()
		{
			Il2CppClassPointerStore<Snapshot_ResearchBuffer.BufferSnapshotPtr>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<Snapshot_ResearchBuffer>.NativeClassPtr, "BufferSnapshotPtr");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Snapshot_ResearchBuffer.BufferSnapshotPtr>.NativeClassPtr);
			Snapshot_ResearchBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_ElementFrameChanged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_ResearchBuffer.BufferSnapshotPtr>.NativeClassPtr, "ElementFrameChanged");
			Snapshot_ResearchBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_Elements = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_ResearchBuffer.BufferSnapshotPtr>.NativeClassPtr, "Elements");
			Snapshot_ResearchBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_ResearchBuffer.BufferSnapshotPtr>.NativeClassPtr, "Length");
			Snapshot_ResearchBuffer.BufferSnapshotPtr.NativeFieldInfoPtr_LengthFrameChanged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_ResearchBuffer.BufferSnapshotPtr>.NativeClassPtr, "LengthFrameChanged");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Snapshot_ResearchBuffer.BufferSnapshotPtr>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_ElementFrameChanged;
		private static readonly IntPtr NativeFieldInfoPtr_Elements;
		private static readonly IntPtr NativeFieldInfoPtr_Length;
		private static readonly IntPtr NativeFieldInfoPtr_LengthFrameChanged;

		public unsafe int* ElementFrameChanged;

		public unsafe Snapshot_ResearchBuffer_Data* Elements;

		public int Length;

		public int LengthFrameChanged;
	}
}
```
