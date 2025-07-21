---
nav_exclude: true
search_exclude: false
---

# LocalTransform

```csharp
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

	public unsafe static LocalTransform FromMatrix(float4x4 matrix)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref matrix;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromMatrix_Public_Static_LocalTransform_float4x4_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static LocalTransform FromMatrixSafe(float4x4 matrix)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref matrix;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromMatrixSafe_Public_Static_LocalTransform_float4x4_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public unsafe static LocalTransform FromPosition(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromPosition_Public_Static_LocalTransform_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public unsafe static LocalTransform FromRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromRotation_Public_Static_LocalTransform_quaternion_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static LocalTransform FromScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_FromScale_Public_Static_LocalTransform_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

	public unsafe float3 Right()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Right_Public_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 Up()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Up_Public_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 Forward()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Forward_Public_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 TransformPoint(float3 point)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 InverseTransformPoint(float3 point)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformPoint_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 TransformDirection(float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformDirection_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 InverseTransformDirection(float3 direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformDirection_Public_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe quaternion TransformRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformRotation_Public_quaternion_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe quaternion InverseTransformRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformRotation_Public_quaternion_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float TransformScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformScale_Public_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float InverseTransformScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformScale_Public_Single_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform TransformTransform([In] ref LocalTransform transformData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &transformData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_TransformTransform_Public_LocalTransform_byref_LocalTransform_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform InverseTransformTransform([In] ref LocalTransform transformData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &transformData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_InverseTransformTransform_Public_LocalTransform_byref_LocalTransform_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform Inverse()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Inverse_Public_LocalTransform_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float4x4 ToMatrix()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ToMatrix_Public_float4x4_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float4x4 ToInverseMatrix()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ToInverseMatrix_Public_float4x4_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform WithPosition(float3 position)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_WithPosition_Public_LocalTransform_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public unsafe LocalTransform WithRotation(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_WithRotation_Public_LocalTransform_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform WithScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_WithScale_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform Translate(float3 translation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref translation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Translate_Public_LocalTransform_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform ApplyScale(float scale)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref scale;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_ApplyScale_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform Rotate(quaternion rotation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rotation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_Rotate_Public_LocalTransform_quaternion_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform RotateX(float angle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref angle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_RotateX_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform RotateY(float angle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref angle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_RotateY_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe LocalTransform RotateZ(float angle)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref angle;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(LocalTransform.NativeMethodInfoPtr_RotateZ_Public_LocalTransform_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public float3 Position;

	public float Scale;

	public quaternion Rotation;
}
```
