# LocalTransform

```csharp
[StructLayout(2)]
public struct LocalTransform
{
	static LocalTransform()
	{
		Il2CppClassPointerStore<LocalTransform>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Transforms.dll", "Unity.Transforms", "LocalTransform");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr);
		LocalTransform.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, "Position");
		LocalTransform.NativeFieldInfoPtr_Scale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, "Scale");
		LocalTransform.NativeFieldInfoPtr_Rotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, "Rotation");
		LocalTransform.NativeFieldInfoPtr_Identity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, "Identity");
		LocalTransform.NativeMethodInfoPtr_FromMatrix_Public_Static_LocalTransform_float4x4_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663382);
		LocalTransform.NativeMethodInfoPtr_FromMatrixSafe_Public_Static_LocalTransform_float4x4_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663383);
		LocalTransform.NativeMethodInfoPtr_FromPositionRotation_Public_Static_LocalTransform_float3_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663384);
		LocalTransform.NativeMethodInfoPtr_FromPositionRotationScale_Public_Static_LocalTransform_float3_quaternion_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663385);
		LocalTransform.NativeMethodInfoPtr_FromPosition_Public_Static_LocalTransform_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663386);
		LocalTransform.NativeMethodInfoPtr_FromPosition_Public_Static_LocalTransform_Single_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663387);
		LocalTransform.NativeMethodInfoPtr_FromRotation_Public_Static_LocalTransform_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663388);
		LocalTransform.NativeMethodInfoPtr_FromScale_Public_Static_LocalTransform_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663389);
		LocalTransform.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663390);
		LocalTransform.NativeMethodInfoPtr_Right_Public_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663391);
		LocalTransform.NativeMethodInfoPtr_Up_Public_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663392);
		LocalTransform.NativeMethodInfoPtr_Forward_Public_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663393);
		LocalTransform.NativeMethodInfoPtr_TransformPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663394);
		LocalTransform.NativeMethodInfoPtr_InverseTransformPoint_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663395);
		LocalTransform.NativeMethodInfoPtr_TransformDirection_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663396);
		LocalTransform.NativeMethodInfoPtr_InverseTransformDirection_Public_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663397);
		LocalTransform.NativeMethodInfoPtr_TransformRotation_Public_quaternion_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663398);
		LocalTransform.NativeMethodInfoPtr_InverseTransformRotation_Public_quaternion_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663399);
		LocalTransform.NativeMethodInfoPtr_TransformScale_Public_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663400);
		LocalTransform.NativeMethodInfoPtr_InverseTransformScale_Public_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663401);
		LocalTransform.NativeMethodInfoPtr_TransformTransform_Public_LocalTransform_byref_LocalTransform_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663402);
		LocalTransform.NativeMethodInfoPtr_InverseTransformTransform_Public_LocalTransform_byref_LocalTransform_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663403);
		LocalTransform.NativeMethodInfoPtr_Inverse_Public_LocalTransform_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663404);
		LocalTransform.NativeMethodInfoPtr_ToMatrix_Public_float4x4_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663405);
		LocalTransform.NativeMethodInfoPtr_ToInverseMatrix_Public_float4x4_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663406);
		LocalTransform.NativeMethodInfoPtr_WithPosition_Public_LocalTransform_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663407);
		LocalTransform.NativeMethodInfoPtr_WithPosition_Public_LocalTransform_Single_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663408);
		LocalTransform.NativeMethodInfoPtr_WithRotation_Public_LocalTransform_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663409);
		LocalTransform.NativeMethodInfoPtr_WithScale_Public_LocalTransform_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663410);
		LocalTransform.NativeMethodInfoPtr_Translate_Public_LocalTransform_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663411);
		LocalTransform.NativeMethodInfoPtr_ApplyScale_Public_LocalTransform_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663412);
		LocalTransform.NativeMethodInfoPtr_Rotate_Public_LocalTransform_quaternion_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663413);
		LocalTransform.NativeMethodInfoPtr_RotateX_Public_LocalTransform_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663414);
		LocalTransform.NativeMethodInfoPtr_RotateY_Public_LocalTransform_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663415);
		LocalTransform.NativeMethodInfoPtr_RotateZ_Public_LocalTransform_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663416);
		LocalTransform.NativeMethodInfoPtr_Equals_Public_Boolean_byref_LocalTransform_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, 100663417);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2388547, RefRangeEnd = 2388548, XrefRangeStart = 2388542, XrefRangeEnd = 2388547, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static LocalTransform FromMatrix(float4x4 matrix)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref matrix;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromMatrix_Public_Static_LocalTransform_float4x4_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388548, XrefRangeEnd = 2388553, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static LocalTransform FromMatrixSafe(float4x4 matrix)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref matrix;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromMatrixSafe_Public_Static_LocalTransform_float4x4_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static LocalTransform FromPositionRotation(float3 position, quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromPositionRotation_Public_Static_LocalTransform_float3_quaternion_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static LocalTransform FromPositionRotationScale(float3 position, quaternion rotation, float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rotation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromPositionRotationScale_Public_Static_LocalTransform_float3_quaternion_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388553, XrefRangeEnd = 2388555, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static LocalTransform FromPosition(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromPosition_Public_Static_LocalTransform_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388555, XrefRangeEnd = 2388557, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static LocalTransform FromPosition(float x, float y, float z)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref x;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref y;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref z;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromPosition_Public_Static_LocalTransform_Single_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388557, XrefRangeEnd = 2388559, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static LocalTransform FromRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromRotation_Public_Static_LocalTransform_quaternion_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388559, XrefRangeEnd = 2388563, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static LocalTransform FromScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromScale_Public_Static_LocalTransform_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388563, XrefRangeEnd = 2388590, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388590, XrefRangeEnd = 2388594, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 Right()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Right_Public_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388594, XrefRangeEnd = 2388598, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 Up()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Up_Public_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388598, XrefRangeEnd = 2388602, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 Forward()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Forward_Public_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(4)]
	[CachedScanResults(RefRangeStart = 2388602, RefRangeEnd = 2388606, XrefRangeStart = 2388602, XrefRangeEnd = 2388602, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 TransformPoint(float3 point)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 2388606, RefRangeEnd = 2388608, XrefRangeStart = 2388606, XrefRangeEnd = 2388606, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 InverseTransformPoint(float3 point)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 2388608, RefRangeEnd = 2388611, XrefRangeStart = 2388608, XrefRangeEnd = 2388608, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 TransformDirection(float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformDirection_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float3 InverseTransformDirection(float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformDirection_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2388611, RefRangeEnd = 2388612, XrefRangeStart = 2388611, XrefRangeEnd = 2388611, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe quaternion TransformRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformRotation_Public_quaternion_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 2388612, RefRangeEnd = 2388613, XrefRangeStart = 2388612, XrefRangeEnd = 2388612, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe quaternion InverseTransformRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformRotation_Public_quaternion_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float TransformScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformScale_Public_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe float InverseTransformScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformScale_Public_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388613, XrefRangeEnd = 2388618, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe LocalTransform TransformTransform([In] ref LocalTransform transformData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &transformData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformTransform_Public_LocalTransform_byref_LocalTransform_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388618, XrefRangeEnd = 2388623, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe LocalTransform InverseTransformTransform([In] ref LocalTransform transformData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &transformData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformTransform_Public_LocalTransform_byref_LocalTransform_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 2388623, RefRangeEnd = 2388625, XrefRangeStart = 2388623, XrefRangeEnd = 2388623, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe LocalTransform Inverse()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Inverse_Public_LocalTransform_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388625, XrefRangeEnd = 2388626, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float4x4 ToMatrix()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ToMatrix_Public_float4x4_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388626, XrefRangeEnd = 2388631, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float4x4 ToInverseMatrix()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ToInverseMatrix_Public_float4x4_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe LocalTransform WithPosition(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_WithPosition_Public_LocalTransform_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe LocalTransform WithPosition(float x, float y, float z)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref x;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref y;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref z;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_WithPosition_Public_LocalTransform_Single_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe LocalTransform WithRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_WithRotation_Public_LocalTransform_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe LocalTransform WithScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_WithScale_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe LocalTransform Translate(float3 translation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref translation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Translate_Public_LocalTransform_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe LocalTransform ApplyScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ApplyScale_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(3)]
	[CachedScanResults(RefRangeStart = 2388631, RefRangeEnd = 2388634, XrefRangeStart = 2388631, XrefRangeEnd = 2388631, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe LocalTransform Rotate(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Rotate_Public_LocalTransform_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388634, XrefRangeEnd = 2388640, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe LocalTransform RotateX(float angle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref angle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_RotateX_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388640, XrefRangeEnd = 2388646, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe LocalTransform RotateY(float angle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref angle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_RotateY_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2388646, XrefRangeEnd = 2388652, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe LocalTransform RotateZ(float angle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref angle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_RotateZ_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe bool Equals([In] ref LocalTransform other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Equals_Public_Boolean_byref_LocalTransform_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LocalTransform>.NativeClassPtr, ref this));
	}
	public unsafe static LocalTransform Identity
	{
		get
		{
			LocalTransform result;
			IL2CPP.il2cpp_field_static_get_value(LocalTransform.NativeFieldInfoPtr_Identity, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(LocalTransform.NativeFieldInfoPtr_Identity, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_Scale;
	private static readonly IntPtr NativeFieldInfoPtr_Rotation;
	private static readonly IntPtr NativeFieldInfoPtr_Identity;
	private static readonly IntPtr NativeMethodInfoPtr_FromMatrix_Public_Static_LocalTransform_float4x4_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromMatrixSafe_Public_Static_LocalTransform_float4x4_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromPositionRotation_Public_Static_LocalTransform_float3_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromPositionRotationScale_Public_Static_LocalTransform_float3_quaternion_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromPosition_Public_Static_LocalTransform_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromPosition_Public_Static_LocalTransform_Single_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromRotation_Public_Static_LocalTransform_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromScale_Public_Static_LocalTransform_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_Right_Public_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_Up_Public_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_Forward_Public_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TransformPoint_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_InverseTransformPoint_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TransformDirection_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_InverseTransformDirection_Public_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_TransformRotation_Public_quaternion_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_InverseTransformRotation_Public_quaternion_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_TransformScale_Public_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_InverseTransformScale_Public_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_TransformTransform_Public_LocalTransform_byref_LocalTransform_0;
	private static readonly IntPtr NativeMethodInfoPtr_InverseTransformTransform_Public_LocalTransform_byref_LocalTransform_0;
	private static readonly IntPtr NativeMethodInfoPtr_Inverse_Public_LocalTransform_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToMatrix_Public_float4x4_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToInverseMatrix_Public_float4x4_0;
	private static readonly IntPtr NativeMethodInfoPtr_WithPosition_Public_LocalTransform_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_WithPosition_Public_LocalTransform_Single_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_WithRotation_Public_LocalTransform_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_WithScale_Public_LocalTransform_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_Translate_Public_LocalTransform_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyScale_Public_LocalTransform_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_Rotate_Public_LocalTransform_quaternion_0;
	private static readonly IntPtr NativeMethodInfoPtr_RotateX_Public_LocalTransform_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_RotateY_Public_LocalTransform_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_RotateZ_Public_LocalTransform_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Boolean_byref_LocalTransform_0;
	[FieldOffset(0)]
	public float3 Position;
	[FieldOffset(12)]
	public float Scale;
	[FieldOffset(16)]
	public quaternion Rotation;
}
