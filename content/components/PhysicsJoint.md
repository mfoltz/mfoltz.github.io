---
nav_exclude: true
search_exclude: true
---

```csharp
public struct PhysicsJoint
{
	static PhysicsJoint()
	{
		Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsJoint");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr);
		PhysicsJoint.NativeFieldInfoPtr_m_BodyAFromJoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "m_BodyAFromJoint");
		PhysicsJoint.NativeFieldInfoPtr_m_BodyBFromJoint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "m_BodyBFromJoint");
		PhysicsJoint.NativeFieldInfoPtr_m_Version = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "m_Version");
		PhysicsJoint.NativeFieldInfoPtr_m_JointType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "m_JointType");
		PhysicsJoint.NativeFieldInfoPtr_m_Constraints = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "m_Constraints");
		PhysicsJoint.NativeFieldInfoPtr_k_LimitedDistanceRangeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_LimitedDistanceRangeIndex");
		PhysicsJoint.NativeFieldInfoPtr_k_LimitedHingeRangeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_LimitedHingeRangeIndex");
		PhysicsJoint.NativeFieldInfoPtr_k_PrismaticDistanceOnAxisIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_PrismaticDistanceOnAxisIndex");
		PhysicsJoint.NativeFieldInfoPtr_k_RagdollPrimaryMaxConeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_RagdollPrimaryMaxConeIndex");
		PhysicsJoint.NativeFieldInfoPtr_k_RagdollPrimaryTwistRangeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_RagdollPrimaryTwistRangeIndex");
		PhysicsJoint.NativeFieldInfoPtr_k_RagdollPerpendicularRangeIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_RagdollPerpendicularRangeIndex");
		PhysicsJoint.NativeFieldInfoPtr_k_LimitedDOFLinearIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_LimitedDOFLinearIndex");
		PhysicsJoint.NativeFieldInfoPtr_k_LimitedDOFAngularIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, "k_LimitedDOFAngularIndex");
		PhysicsJoint.NativeMethodInfoPtr_get_BodyAFromJoint_Public_get_BodyFrame_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665789);
		PhysicsJoint.NativeMethodInfoPtr_set_BodyAFromJoint_Public_set_Void_BodyFrame_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665790);
		PhysicsJoint.NativeMethodInfoPtr_get_BodyBFromJoint_Public_get_BodyFrame_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665791);
		PhysicsJoint.NativeMethodInfoPtr_set_BodyBFromJoint_Public_set_Void_BodyFrame_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665792);
		PhysicsJoint.NativeMethodInfoPtr_get_Version_Public_get_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665793);
		PhysicsJoint.NativeMethodInfoPtr_get_JointType_Public_get_JointType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665794);
		PhysicsJoint.NativeMethodInfoPtr_set_JointType_Public_set_Void_JointType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665795);
		PhysicsJoint.NativeMethodInfoPtr_get_Constraints_Private_get_IEnumerable_1_Constraint_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665796);
		PhysicsJoint.NativeMethodInfoPtr_GetConstraintCount_Public_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665797);
		PhysicsJoint.NativeMethodInfoPtr_get_Item_Public_get_Constraint_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665798);
		PhysicsJoint.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_Constraint_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665799);
		PhysicsJoint.NativeMethodInfoPtr_GetConstraints_Public_FixedList512Bytes_1_Constraint_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665800);
		PhysicsJoint.NativeMethodInfoPtr_SetConstraints_Public_Void_FixedList512Bytes_1_Constraint_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665801);
		PhysicsJoint.NativeMethodInfoPtr_SetImpulseEventThresholdSingleConstraint_Public_Void_Int32_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665802);
		PhysicsJoint.NativeMethodInfoPtr_SetImpulseEventThresholdAllConstraints_Public_Void_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665803);
		PhysicsJoint.NativeMethodInfoPtr_SetImpulseEventThresholdAllConstraints_Public_Void_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665804);
		PhysicsJoint.NativeMethodInfoPtr_CreateBallAndSocket_Public_Static_PhysicsJoint_float3_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665805);
		PhysicsJoint.NativeMethodInfoPtr_CreateFixed_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665806);
		PhysicsJoint.NativeMethodInfoPtr_CreateHinge_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665807);
		PhysicsJoint.NativeMethodInfoPtr_CreateLimitedDistance_Public_Static_PhysicsJoint_float3_float3_FloatRange_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665808);
		PhysicsJoint.NativeMethodInfoPtr_CreateLimitedDistance_Public_Static_PhysicsJoint_float3_float3_FloatRange_float3_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665809);
		PhysicsJoint.NativeMethodInfoPtr_CreateLimitedHinge_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_FloatRange_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665810);
		PhysicsJoint.NativeMethodInfoPtr_CreateRotationalMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665811);
		PhysicsJoint.NativeMethodInfoPtr_CreateAngularVelocityMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665812);
		PhysicsJoint.NativeMethodInfoPtr_CreatePrismatic_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_FloatRange_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665813);
		PhysicsJoint.NativeMethodInfoPtr_CreatePositionMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665814);
		PhysicsJoint.NativeMethodInfoPtr_CreateLinearVelocityMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665815);
		PhysicsJoint.NativeMethodInfoPtr_CreateRagdoll_Public_Static_Void_BodyFrame_BodyFrame_Single_FloatRange_FloatRange_byref_PhysicsJoint_byref_PhysicsJoint_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665816);
		PhysicsJoint.NativeMethodInfoPtr_CreateLimitedDOF_Public_Static_PhysicsJoint_RigidTransform_bool3_bool3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, 100665817);
	}
	public unsafe BodyFrame BodyAFromJoint
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_get_BodyAFromJoint_Public_get_BodyFrame_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_set_BodyAFromJoint_Public_set_Void_BodyFrame_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe BodyFrame BodyBFromJoint
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_get_BodyBFromJoint_Public_get_BodyFrame_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_set_BodyBFromJoint_Public_set_Void_BodyFrame_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe byte Version
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_get_Version_Public_get_Byte_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe JointType JointType
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_get_JointType_Public_get_JointType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_set_JointType_Public_set_Void_JointType_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe IEnumerable<Constraint> Constraints
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_get_Constraints_Private_get_IEnumerable_1_Constraint_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			IntPtr intPtr3 = intPtr;
			return (intPtr3 != 0) ? Il2CppObjectPool.Get<IEnumerable<Constraint>>(intPtr3) : null;
		}
	}

	public unsafe int GetConstraintCount()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_GetConstraintCount_Public_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public unsafe Constraint this[int constraintIndex]
	{

		get
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref constraintIndex;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_get_Item_Public_get_Constraint_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref constraintIndex;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_Constraint_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}

	public unsafe FixedList512Bytes<Constraint> GetConstraints()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_GetConstraints_Public_FixedList512Bytes_1_Constraint_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void SetConstraints(FixedList512Bytes<Constraint> constraints)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref constraints;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_SetConstraints_Public_Void_FixedList512Bytes_1_Constraint_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void SetImpulseEventThresholdSingleConstraint(int constraintIndex, float3 impulseEventThreshold)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref constraintIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref impulseEventThreshold;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_SetImpulseEventThresholdSingleConstraint_Public_Void_Int32_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void SetImpulseEventThresholdAllConstraints(float3 impulseEventThreshold)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref impulseEventThreshold;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_SetImpulseEventThresholdAllConstraints_Public_Void_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void SetImpulseEventThresholdAllConstraints(float3 impulseEventLinearThreshold, float3 impulseEventAngularThreshold)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref impulseEventLinearThreshold;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref impulseEventAngularThreshold;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_SetImpulseEventThresholdAllConstraints_Public_Void_float3_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static PhysicsJoint CreateBallAndSocket(float3 anchorA, float3 anchorB)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref anchorA;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref anchorB;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateBallAndSocket_Public_Static_PhysicsJoint_float3_float3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateFixed(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateFixed_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateHinge(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateHinge_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateLimitedDistance(float3 anchorA, float3 anchorB, Math.FloatRange distanceRange)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref anchorA;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref anchorB;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref distanceRange;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateLimitedDistance_Public_Static_PhysicsJoint_float3_float3_FloatRange_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateLimitedDistance(float3 anchorA, float3 anchorB, Math.FloatRange distanceRange, float3 impulseEventThreshold, float springFrequency = 74341.31f, float dampingRatio = 2530.126f)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref anchorA;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref anchorB;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref distanceRange;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref impulseEventThreshold;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref springFrequency;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dampingRatio;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateLimitedDistance_Public_Static_PhysicsJoint_float3_float3_FloatRange_float3_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateLimitedHinge(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint, Math.FloatRange angularRange)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref angularRange;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateLimitedHinge_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_FloatRange_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateRotationalMotor(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint, float target, float maxImpulseOfMotor = float.PositiveInfinity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxImpulseOfMotor;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateRotationalMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateAngularVelocityMotor(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint, float targetVelocity, float maxImpulseOfMotor = float.PositiveInfinity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref targetVelocity;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxImpulseOfMotor;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateAngularVelocityMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreatePrismatic(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint, Math.FloatRange distanceOnAxis)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref distanceOnAxis;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreatePrismatic_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_FloatRange_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreatePositionMotor(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint, float target, float maxImpulseOfMotor = float.PositiveInfinity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxImpulseOfMotor;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreatePositionMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static PhysicsJoint CreateLinearVelocityMotor(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint, float target, float maxImpulseOfMotor = float.PositiveInfinity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref target;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxImpulseOfMotor;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateLinearVelocityMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static void CreateRagdoll(BodyFrame bodyAFromJoint, BodyFrame bodyBFromJoint, float maxConeAngle, Math.FloatRange angularPlaneRange, Math.FloatRange angularTwistRange, out PhysicsJoint primaryConeAndTwist, out PhysicsJoint perpendicularCone)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref bodyAFromJoint;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref bodyBFromJoint;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxConeAngle;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref angularPlaneRange;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref angularTwistRange;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &primaryConeAndTwist;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &perpendicularCone;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateRagdoll_Public_Static_Void_BodyFrame_BodyFrame_Single_FloatRange_FloatRange_byref_PhysicsJoint_byref_PhysicsJoint_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe static PhysicsJoint CreateLimitedDOF(RigidTransform offset, bool3 linearLocks, bool3 angularLocks)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref offset;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref linearLocks;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref angularLocks;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsJoint.NativeMethodInfoPtr_CreateLimitedDOF_Public_Static_PhysicsJoint_RigidTransform_bool3_bool3_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsJoint>.NativeClassPtr, ref this));
	}
	public unsafe static int k_LimitedDistanceRangeIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedDistanceRangeIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedDistanceRangeIndex, (void*)(&value));
		}
	}
	public unsafe static int k_LimitedHingeRangeIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedHingeRangeIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedHingeRangeIndex, (void*)(&value));
		}
	}
	public unsafe static int k_PrismaticDistanceOnAxisIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_PrismaticDistanceOnAxisIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_PrismaticDistanceOnAxisIndex, (void*)(&value));
		}
	}
	public unsafe static int k_RagdollPrimaryMaxConeIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_RagdollPrimaryMaxConeIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_RagdollPrimaryMaxConeIndex, (void*)(&value));
		}
	}
	public unsafe static int k_RagdollPrimaryTwistRangeIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_RagdollPrimaryTwistRangeIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_RagdollPrimaryTwistRangeIndex, (void*)(&value));
		}
	}
	public unsafe static int k_RagdollPerpendicularRangeIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_RagdollPerpendicularRangeIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_RagdollPerpendicularRangeIndex, (void*)(&value));
		}
	}
	public unsafe static int k_LimitedDOFLinearIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedDOFLinearIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedDOFLinearIndex, (void*)(&value));
		}
	}
	public unsafe static int k_LimitedDOFAngularIndex
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedDOFAngularIndex, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(PhysicsJoint.NativeFieldInfoPtr_k_LimitedDOFAngularIndex, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_m_BodyAFromJoint;
	private static readonly IntPtr NativeFieldInfoPtr_m_BodyBFromJoint;
	private static readonly IntPtr NativeFieldInfoPtr_m_Version;
	private static readonly IntPtr NativeFieldInfoPtr_m_JointType;
	private static readonly IntPtr NativeFieldInfoPtr_m_Constraints;
	private static readonly IntPtr NativeFieldInfoPtr_k_LimitedDistanceRangeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_k_LimitedHingeRangeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_k_PrismaticDistanceOnAxisIndex;
	private static readonly IntPtr NativeFieldInfoPtr_k_RagdollPrimaryMaxConeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_k_RagdollPrimaryTwistRangeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_k_RagdollPerpendicularRangeIndex;
	private static readonly IntPtr NativeFieldInfoPtr_k_LimitedDOFLinearIndex;
	private static readonly IntPtr NativeFieldInfoPtr_k_LimitedDOFAngularIndex;
	private static readonly IntPtr NativeMethodInfoPtr_get_BodyAFromJoint_Public_get_BodyFrame_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_BodyAFromJoint_Public_set_Void_BodyFrame_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_BodyBFromJoint_Public_get_BodyFrame_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_BodyBFromJoint_Public_set_Void_BodyFrame_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Version_Public_get_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_JointType_Public_get_JointType_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_JointType_Public_set_Void_JointType_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Constraints_Private_get_IEnumerable_1_Constraint_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetConstraintCount_Public_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Item_Public_get_Constraint_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_Constraint_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetConstraints_Public_FixedList512Bytes_1_Constraint_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetConstraints_Public_Void_FixedList512Bytes_1_Constraint_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetImpulseEventThresholdSingleConstraint_Public_Void_Int32_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetImpulseEventThresholdAllConstraints_Public_Void_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetImpulseEventThresholdAllConstraints_Public_Void_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateBallAndSocket_Public_Static_PhysicsJoint_float3_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateFixed_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateHinge_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLimitedDistance_Public_Static_PhysicsJoint_float3_float3_FloatRange_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLimitedDistance_Public_Static_PhysicsJoint_float3_float3_FloatRange_float3_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLimitedHinge_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_FloatRange_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateRotationalMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateAngularVelocityMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreatePrismatic_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_FloatRange_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreatePositionMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLinearVelocityMotor_Public_Static_PhysicsJoint_BodyFrame_BodyFrame_Single_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateRagdoll_Public_Static_Void_BodyFrame_BodyFrame_Single_FloatRange_FloatRange_byref_PhysicsJoint_byref_PhysicsJoint_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateLimitedDOF_Public_Static_PhysicsJoint_RigidTransform_bool3_bool3_0;

	public BodyFrame m_BodyAFromJoint;

	public BodyFrame m_BodyBFromJoint;

	public byte m_Version;

	public JointType m_JointType;

	public ConstraintBlock3 m_Constraints;
}
```

## Server Systems

- [JointConversionFinalizationSystem]({{% relref "systems/server/JointConversionFinalizationSystem.md" %}})

## Client Systems

- [JointConversionFinalizationSystem]({{% relref "systems/client/JointConversionFinalizationSystem.md" %}})
