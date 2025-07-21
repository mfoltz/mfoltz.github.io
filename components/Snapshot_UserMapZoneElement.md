---
nav_exclude: true
search_exclude: false
---

# Snapshot_UserMapZoneElement

```csharp
public struct Snapshot_UserMapZoneElement
{
	static Snapshot_UserMapZoneElement()
	{
		Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.GeneratedNetCode.dll", "ProjectM.Network", "Snapshot_UserMapZoneElement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr);
		Snapshot_UserMapZoneElement.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, "Value");
		Snapshot_UserMapZoneElement.NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, 100664572);
		Snapshot_UserMapZoneElement.NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_UserMapZoneElement_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, 100664573);
		Snapshot_UserMapZoneElement.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_UserMapZoneElement_Boolean_byref_BufferSnapshotPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, 100664574);
		Snapshot_UserMapZoneElement.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_UserMapZoneElement_Int32_byref_BufferSnapshotPtr_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, 100664575);
		Snapshot_UserMapZoneElement.NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_UserMapZoneElement_Int32_Int32_byref_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, 100664576);
	}

	public unsafe static int CalculateBufferSize(int elementCount)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref elementCount;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_UserMapZoneElement.NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Snapshot_UserMapZoneElement.BufferSnapshotPtr InitializeSnapshot(Snapshot_UserMapZoneElement* bufferPtr, int elementCount, int currentFrame)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = bufferPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref elementCount;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref currentFrame;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_UserMapZoneElement.NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_UserMapZoneElement_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryGetSerializedSnapshot(DynamicBuffer<Snapshot_UserMapZoneElement> dynamicBuffer, bool readOnly, out Snapshot_UserMapZoneElement.BufferSnapshotPtr bufferSnapshotPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dynamicBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref readOnly;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bufferSnapshotPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_UserMapZoneElement.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_UserMapZoneElement_Boolean_byref_BufferSnapshotPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static bool TryGetSerializedSnapshot(Snapshot_UserMapZoneElement* bufferPtr, int bufferLength, out Snapshot_UserMapZoneElement.BufferSnapshotPtr bufferSnapshotPtr)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = bufferPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bufferLength;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &bufferSnapshotPtr;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_UserMapZoneElement.NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_UserMapZoneElement_Int32_byref_BufferSnapshotPtr_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static Snapshot_UserMapZoneElement.BufferSnapshotPtr GetSerializedBufferSnapshotGrowIfNeeded(DynamicBuffer<Snapshot_UserMapZoneElement> dynamicBuffer, int newElementCount, int currentFrame, out bool didBufferGrow)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref dynamicBuffer;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref newElementCount;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref currentFrame;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &didBufferGrow;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Snapshot_UserMapZoneElement.NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_UserMapZoneElement_Int32_Int32_byref_Boolean_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateBufferSize_Public_Static_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_InitializeSnapshot_Public_Static_BufferSnapshotPtr_ptr_Snapshot_UserMapZoneElement_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_DynamicBuffer_1_Snapshot_UserMapZoneElement_Boolean_byref_BufferSnapshotPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetSerializedSnapshot_Public_Static_Boolean_ptr_Snapshot_UserMapZoneElement_Int32_byref_BufferSnapshotPtr_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetSerializedBufferSnapshotGrowIfNeeded_Public_Static_BufferSnapshotPtr_DynamicBuffer_1_Snapshot_UserMapZoneElement_Int32_Int32_byref_Boolean_0;

	public byte Value;

	public struct BufferSnapshotPtr
	{
		static BufferSnapshotPtr()
		{
			Il2CppClassPointerStore<Snapshot_UserMapZoneElement.BufferSnapshotPtr>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<Snapshot_UserMapZoneElement>.NativeClassPtr, "BufferSnapshotPtr");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Snapshot_UserMapZoneElement.BufferSnapshotPtr>.NativeClassPtr);
			Snapshot_UserMapZoneElement.BufferSnapshotPtr.NativeFieldInfoPtr_ElementFrameChanged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_UserMapZoneElement.BufferSnapshotPtr>.NativeClassPtr, "ElementFrameChanged");
			Snapshot_UserMapZoneElement.BufferSnapshotPtr.NativeFieldInfoPtr_Elements = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_UserMapZoneElement.BufferSnapshotPtr>.NativeClassPtr, "Elements");
			Snapshot_UserMapZoneElement.BufferSnapshotPtr.NativeFieldInfoPtr_Length = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_UserMapZoneElement.BufferSnapshotPtr>.NativeClassPtr, "Length");
			Snapshot_UserMapZoneElement.BufferSnapshotPtr.NativeFieldInfoPtr_LengthFrameChanged = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Snapshot_UserMapZoneElement.BufferSnapshotPtr>.NativeClassPtr, "LengthFrameChanged");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Snapshot_UserMapZoneElement.BufferSnapshotPtr>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_ElementFrameChanged;
		private static readonly IntPtr NativeFieldInfoPtr_Elements;
		private static readonly IntPtr NativeFieldInfoPtr_Length;
		private static readonly IntPtr NativeFieldInfoPtr_LengthFrameChanged;

		public unsafe int* ElementFrameChanged;

		public unsafe Snapshot_UserMapZoneElement_Data* Elements;

		public int Length;

		public int LengthFrameChanged;
	}
}
```
