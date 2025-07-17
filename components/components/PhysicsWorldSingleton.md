---
nav_exclude: true
search_exclude: true
---

# PhysicsWorldSingleton

```csharp
[StructLayout(2)]
public struct PhysicsWorldSingleton
{
	static PhysicsWorldSingleton()
	{
		Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Physics.dll", "Unity.Physics", "PhysicsWorldSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr);
		PhysicsWorldSingleton.NativeFieldInfoPtr_PhysicsWorld = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, "PhysicsWorld");
		PhysicsWorldSingleton.NativeFieldInfoPtr_PhysicsWorldIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, "PhysicsWorldIndex");
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_CollisionWorld_Public_get_CollisionWorld_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665713);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_DynamicsWorld_Public_get_DynamicsWorld_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665714);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumBodies_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665715);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumStaticBodies_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665716);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumDynamicBodies_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665717);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumSuperStaticBodies_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665718);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumJoints_Public_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665719);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_Bodies_Public_get_NativeArray_1_RigidBody_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665720);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_StaticBodies_Public_get_NativeArray_1_RigidBody_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665721);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_DynamicBodies_Public_get_NativeArray_1_RigidBody_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665722);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_SuperStaticBodies_Public_get_NativeArray_1_RigidBody_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665723);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_MotionDatas_Public_get_NativeArray_1_MotionData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665724);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_MotionVelocities_Public_get_NativeArray_1_MotionVelocity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665725);
		PhysicsWorldSingleton.NativeMethodInfoPtr_get_Joints_Public_get_NativeArray_1_Joint_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665726);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateAabb_Public_Virtual_Final_New_Aabb_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665727);
		PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapAabb_Public_Boolean_OverlapAabbInput_byref_NativeList_1_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665728);
		PhysicsWorldSingleton.NativeMethodInfoPtr_GetRigidBodyIndex_Public_Int32_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665729);
		PhysicsWorldSingleton.NativeMethodInfoPtr_GetJointIndex_Public_Int32_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665730);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665731);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_RaycastHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665732);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_NativeList_1_RaycastHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665733);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_T_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665734);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665735);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_DistanceHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665736);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_NativeList_1_DistanceHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665737);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_T_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665738);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665739);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_DistanceHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665740);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_NativeList_1_DistanceHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665741);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_T_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665742);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665743);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_ColliderCastHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665744);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_NativeList_1_ColliderCastHit_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665745);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_T_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665746);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CheckCapsule_Public_Virtual_Final_New_Boolean_float3_float3_Single_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665747);
		PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapCapsule_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665748);
		PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapCapsuleCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665749);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CheckSphere_Public_Virtual_Final_New_Boolean_float3_Single_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665750);
		PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapSphere_Public_Virtual_Final_New_Boolean_float3_Single_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665751);
		PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapSphereCustom_Public_Virtual_Final_New_Boolean_float3_Single_byref_T_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665752);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CheckBox_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665753);
		PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapBox_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665754);
		PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapBoxCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_T_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665755);
		PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCast_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665756);
		PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCast_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665757);
		PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCastAll_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665758);
		PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCastCustom_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665759);
		PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCast_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665760);
		PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCast_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665761);
		PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCastAll_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665762);
		PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCastCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665763);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCast_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665764);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCast_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665765);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCastAll_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665766);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCastCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665767);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665768);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_ColliderCastHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665769);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_NativeList_1_ColliderCastHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665770);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665771);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665772);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_DistanceHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665773);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_NativeList_1_DistanceHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665774);
		PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665775);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665776);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_ColliderCastHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665777);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_NativeList_1_ColliderCastHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665778);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665779);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665780);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_DistanceHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665781);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_NativeList_1_DistanceHit_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665782);
		PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, 100665783);
	}
	public unsafe CollisionWorld CollisionWorld
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_CollisionWorld_Public_get_CollisionWorld_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe DynamicsWorld DynamicsWorld
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_DynamicsWorld_Public_get_DynamicsWorld_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int NumBodies
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumBodies_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int NumStaticBodies
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumStaticBodies_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int NumDynamicBodies
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumDynamicBodies_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int NumSuperStaticBodies
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumSuperStaticBodies_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int NumJoints
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_NumJoints_Public_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeArray<RigidBody> Bodies
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_Bodies_Public_get_NativeArray_1_RigidBody_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeArray<RigidBody> StaticBodies
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_StaticBodies_Public_get_NativeArray_1_RigidBody_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeArray<RigidBody> DynamicBodies
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_DynamicBodies_Public_get_NativeArray_1_RigidBody_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeArray<RigidBody> SuperStaticBodies
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_SuperStaticBodies_Public_get_NativeArray_1_RigidBody_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeArray<MotionData> MotionDatas
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822366, XrefRangeEnd = 1822370, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_MotionDatas_Public_get_NativeArray_1_MotionData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeArray<MotionVelocity> MotionVelocities
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822370, XrefRangeEnd = 1822374, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_MotionVelocities_Public_get_NativeArray_1_MotionVelocity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe NativeArray<Joint> Joints
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822374, XrefRangeEnd = 1822378, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_get_Joints_Public_get_NativeArray_1_Joint_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe Aabb CalculateAabb()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateAabb_Public_Virtual_Final_New_Aabb_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool OverlapAabb(OverlapAabbInput input, ref NativeList<int> allHits)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapAabb_Public_Boolean_OverlapAabbInput_byref_NativeList_1_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int GetRigidBodyIndex(Entity entity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_GetRigidBodyIndex_Public_Int32_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe int GetJointIndex(Entity entity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_GetJointIndex_Public_Int32_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822378, XrefRangeEnd = 1822383, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastRay(RaycastInput input)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822383, XrefRangeEnd = 1822393, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastRay(RaycastInput input, out RaycastHit closestHit)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_RaycastHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822393, XrefRangeEnd = 1822398, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastRay(RaycastInput input, ref NativeList<RaycastHit> allHits)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_NativeList_1_RaycastHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822398, XrefRangeEnd = 1822400, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastRay<T>(RaycastInput input, ref T collector)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_T_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822400, XrefRangeEnd = 1822405, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance(PointDistanceInput input)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822405, XrefRangeEnd = 1822415, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance(PointDistanceInput input, out DistanceHit closestHit)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_DistanceHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822415, XrefRangeEnd = 1822420, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance(PointDistanceInput input, ref NativeList<DistanceHit> allHits)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_NativeList_1_DistanceHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822420, XrefRangeEnd = 1822422, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance<T>(PointDistanceInput input, ref T collector)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_T_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822422, XrefRangeEnd = 1822427, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance(ColliderDistanceInput input)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822427, XrefRangeEnd = 1822437, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance(ColliderDistanceInput input, out DistanceHit closestHit)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_DistanceHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822437, XrefRangeEnd = 1822442, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance(ColliderDistanceInput input, ref NativeList<DistanceHit> allHits)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_NativeList_1_DistanceHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822442, XrefRangeEnd = 1822444, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance<T>(ColliderDistanceInput input, ref T collector)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_T_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822444, XrefRangeEnd = 1822449, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider(ColliderCastInput input)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822449, XrefRangeEnd = 1822459, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider(ColliderCastInput input, out ColliderCastHit closestHit)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_ColliderCastHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822459, XrefRangeEnd = 1822464, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider(ColliderCastInput input, ref NativeList<ColliderCastHit> allHits)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_NativeList_1_ColliderCastHit_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822464, XrefRangeEnd = 1822466, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider<T>(ColliderCastInput input, ref T collector)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref input;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_T_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822466, XrefRangeEnd = 1822472, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CheckCapsule(float3 point1, float3 point2, float radius, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref point2;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CheckCapsule_Public_Virtual_Final_New_Boolean_float3_float3_Single_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822472, XrefRangeEnd = 1822478, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool OverlapCapsule(float3 point1, float3 point2, float radius, ref NativeList<DistanceHit> outHits, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref point2;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &outHits;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapCapsule_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822478, XrefRangeEnd = 1822480, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool OverlapCapsuleCustom<T>(float3 point1, float3 point2, float radius, ref T collector, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref point2;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_OverlapCapsuleCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822480, XrefRangeEnd = 1822485, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CheckSphere(float3 position, float radius, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CheckSphere_Public_Virtual_Final_New_Boolean_float3_Single_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822485, XrefRangeEnd = 1822490, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool OverlapSphere(float3 position, float radius, ref NativeList<DistanceHit> outHits, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &outHits;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapSphere_Public_Virtual_Final_New_Boolean_float3_Single_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822490, XrefRangeEnd = 1822495, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool OverlapSphereCustom<T>(float3 position, float radius, ref T collector, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_OverlapSphereCustom_Public_Virtual_Final_New_Boolean_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822495, XrefRangeEnd = 1822501, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CheckBox(float3 center, quaternion orientation, float3 halfExtents, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref center;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref orientation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref halfExtents;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CheckBox_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822501, XrefRangeEnd = 1822507, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool OverlapBox(float3 center, quaternion orientation, float3 halfExtents, ref NativeList<DistanceHit> outHits, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref center;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref orientation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref halfExtents;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &outHits;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapBox_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822507, XrefRangeEnd = 1822509, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool OverlapBoxCustom<T>(float3 center, quaternion orientation, float3 halfExtents, ref T collector, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref center;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref orientation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref halfExtents;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_OverlapBoxCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_T_CollisionFilter_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822509, XrefRangeEnd = 1822515, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool SphereCast(float3 origin, float radius, float3 direction, float maxDistance, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref origin;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCast_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822515, XrefRangeEnd = 1822525, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool SphereCast(float3 origin, float radius, float3 direction, float maxDistance, out ColliderCastHit hitInfo, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref origin;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &hitInfo;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCast_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822525, XrefRangeEnd = 1822531, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool SphereCastAll(float3 origin, float radius, float3 direction, float maxDistance, ref NativeList<ColliderCastHit> outHits, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref origin;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &outHits;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCastAll_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822531, XrefRangeEnd = 1822533, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool SphereCastCustom<T>(float3 origin, float radius, float3 direction, float maxDistance, ref T collector, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref origin;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_SphereCastCustom_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822533, XrefRangeEnd = 1822539, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool BoxCast(float3 center, quaternion orientation, float3 halfExtents, float3 direction, float maxDistance, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref center;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref orientation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref halfExtents;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCast_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822539, XrefRangeEnd = 1822549, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool BoxCast(float3 center, quaternion orientation, float3 halfExtents, float3 direction, float maxDistance, out ColliderCastHit hitInfo, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref center;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref orientation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref halfExtents;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &hitInfo;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCast_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822549, XrefRangeEnd = 1822555, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool BoxCastAll(float3 center, quaternion orientation, float3 halfExtents, float3 direction, float maxDistance, ref NativeList<ColliderCastHit> outHits, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref center;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref orientation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref halfExtents;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &outHits;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCastAll_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822555, XrefRangeEnd = 1822557, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool BoxCastCustom<T>(float3 center, quaternion orientation, float3 halfExtents, float3 direction, float maxDistance, ref T collector, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref center;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref orientation;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref halfExtents;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_BoxCastCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822557, XrefRangeEnd = 1822563, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CapsuleCast(float3 point1, float3 point2, float radius, float3 direction, float maxDistance, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref point2;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCast_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822563, XrefRangeEnd = 1822573, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CapsuleCast(float3 point1, float3 point2, float radius, float3 direction, float maxDistance, out ColliderCastHit hitInfo, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref point2;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &hitInfo;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCast_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822573, XrefRangeEnd = 1822579, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CapsuleCastAll(float3 point1, float3 point2, float radius, float3 direction, float maxDistance, ref NativeList<ColliderCastHit> outHits, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref point2;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &outHits;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCastAll_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822579, XrefRangeEnd = 1822581, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CapsuleCastCustom<T>(float3 point1, float3 point2, float radius, float3 direction, float maxDistance, ref T collector, CollisionFilter filter, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref point1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref point2;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filter;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_CapsuleCastCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1822587, RefRangeEnd = 1822588, XrefRangeStart = 1822581, XrefRangeEnd = 1822587, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1822599, RefRangeEnd = 1822600, XrefRangeStart = 1822588, XrefRangeEnd = 1822599, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, out ColliderCastHit closestHit, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_ColliderCastHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1822606, RefRangeEnd = 1822607, XrefRangeStart = 1822600, XrefRangeEnd = 1822606, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, ref NativeList<ColliderCastHit> allHits, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_NativeList_1_ColliderCastHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CastCollider<T>([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, ref T collector, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1822613, RefRangeEnd = 1822614, XrefRangeStart = 1822607, XrefRangeEnd = 1822613, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance([In] ref ColliderAspect colliderAspect, float maxDistance, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1822625, RefRangeEnd = 1822626, XrefRangeStart = 1822614, XrefRangeEnd = 1822625, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance([In] ref ColliderAspect colliderAspect, float maxDistance, out DistanceHit closestHit, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_DistanceHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1822632, RefRangeEnd = 1822633, XrefRangeStart = 1822626, XrefRangeEnd = 1822632, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance([In] ref ColliderAspect colliderAspect, float maxDistance, ref NativeList<DistanceHit> allHits, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_NativeList_1_DistanceHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 0, XrefRangeEnd = 0, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool CalculateDistance<T>([In] ref ColliderAspect colliderAspect, float maxDistance, ref T collector, QueryInteraction queryInteraction = QueryInteraction.Default)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822633, XrefRangeEnd = 1822634, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CastCollider([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822634, XrefRangeEnd = 1822635, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CastCollider([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, out ColliderCastHit closestHit, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_ColliderCastHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822635, XrefRangeEnd = 1822636, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CastCollider([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, ref NativeList<ColliderCastHit> allHits, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_NativeList_1_ColliderCastHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822636, XrefRangeEnd = 1822638, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CastCollider<T>([In] ref ColliderAspect colliderAspect, float3 direction, float maxDistance, ref T collector, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822638, XrefRangeEnd = 1822639, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CalculateDistance([In] ref ColliderAspect colliderAspect, float maxDistance, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822639, XrefRangeEnd = 1822640, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CalculateDistance([In] ref ColliderAspect colliderAspect, float maxDistance, out DistanceHit closestHit, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestHit;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_DistanceHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822640, XrefRangeEnd = 1822641, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CalculateDistance([In] ref ColliderAspect colliderAspect, float maxDistance, ref NativeList<DistanceHit> allHits, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &allHits;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_NativeList_1_DistanceHit_QueryInteraction_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1822641, XrefRangeEnd = 1822647, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Unity_Physics_IAspectQueryable_CalculateDistance<T>([In] ref ColliderAspect colliderAspect, float maxDistance, ref T collector, QueryInteraction queryInteraction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &colliderAspect;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref maxDistance;
		ref IntPtr ptr2 = ref ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)];
		IntPtr intPtr = IL2CPP.Il2CppObjectBaseToPtr(collector);
		ptr2 = &intPtr;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref queryInteraction;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(PhysicsWorldSingleton.MethodInfoStoreGeneric_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0<T>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		IntPtr intPtr4 = intPtr;
		collector = ((intPtr4 == 0) ? null : IL2CPP.PointerToValueGeneric<T>(intPtr4, false, false));
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PhysicsWorld;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicsWorldIndex;
	private static readonly IntPtr NativeMethodInfoPtr_get_CollisionWorld_Public_get_CollisionWorld_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_DynamicsWorld_Public_get_DynamicsWorld_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_NumBodies_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_NumStaticBodies_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_NumDynamicBodies_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_NumSuperStaticBodies_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_NumJoints_Public_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Bodies_Public_get_NativeArray_1_RigidBody_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_StaticBodies_Public_get_NativeArray_1_RigidBody_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_DynamicBodies_Public_get_NativeArray_1_RigidBody_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_SuperStaticBodies_Public_get_NativeArray_1_RigidBody_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MotionDatas_Public_get_NativeArray_1_MotionData_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MotionVelocities_Public_get_NativeArray_1_MotionVelocity_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Joints_Public_get_NativeArray_1_Joint_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateAabb_Public_Virtual_Final_New_Aabb_0;
	private static readonly IntPtr NativeMethodInfoPtr_OverlapAabb_Public_Boolean_OverlapAabbInput_byref_NativeList_1_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetRigidBodyIndex_Public_Int32_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetJointIndex_Public_Int32_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_RaycastHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_NativeList_1_RaycastHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_T_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_DistanceHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_NativeList_1_DistanceHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_T_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_DistanceHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_NativeList_1_DistanceHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_T_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_ColliderCastHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_NativeList_1_ColliderCastHit_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_T_0;
	private static readonly IntPtr NativeMethodInfoPtr_CheckCapsule_Public_Virtual_Final_New_Boolean_float3_float3_Single_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_OverlapCapsule_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_OverlapCapsuleCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CheckSphere_Public_Virtual_Final_New_Boolean_float3_Single_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_OverlapSphere_Public_Virtual_Final_New_Boolean_float3_Single_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_OverlapSphereCustom_Public_Virtual_Final_New_Boolean_float3_Single_byref_T_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CheckBox_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_OverlapBox_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_NativeList_1_DistanceHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_OverlapBoxCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_T_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_SphereCast_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_SphereCast_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_SphereCastAll_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_SphereCastCustom_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_BoxCast_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_BoxCast_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_BoxCastAll_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_BoxCastCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CapsuleCast_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CapsuleCast_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_ColliderCastHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CapsuleCastAll_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_NativeList_1_ColliderCastHit_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CapsuleCastCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_ColliderCastHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_NativeList_1_ColliderCastHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_DistanceHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_NativeList_1_DistanceHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_ColliderCastHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_NativeList_1_ColliderCastHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_DistanceHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_NativeList_1_DistanceHit_QueryInteraction_0;
	private static readonly IntPtr NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0;
	[FieldOffset(0)]
	public PhysicsWorld PhysicsWorld;
	[FieldOffset(440)]
	public PhysicsWorldIndex PhysicsWorldIndex;
	private sealed class MethodInfoStoreGeneric_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_T_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_CastRay_Public_Virtual_Final_New_Boolean_RaycastInput_byref_T_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_T_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_PointDistanceInput_byref_T_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_T_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Virtual_Final_New_Boolean_ColliderDistanceInput_byref_T_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_T_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Virtual_Final_New_Boolean_ColliderCastInput_byref_T_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_OverlapCapsuleCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapCapsuleCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_OverlapSphereCustom_Public_Virtual_Final_New_Boolean_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapSphereCustom_Public_Virtual_Final_New_Boolean_float3_Single_byref_T_CollisionFilter_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_OverlapBoxCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_T_CollisionFilter_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_OverlapBoxCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_byref_T_CollisionFilter_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_SphereCastCustom_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_SphereCastCustom_Public_Virtual_Final_New_Boolean_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_BoxCastCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_BoxCastCustom_Public_Virtual_Final_New_Boolean_float3_quaternion_float3_float3_Single_byref_T_CollisionFilter_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_CapsuleCastCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_CapsuleCastCustom_Public_Virtual_Final_New_Boolean_float3_float3_Single_float3_Single_byref_T_CollisionFilter_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_CastCollider_Public_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_CalculateDistance_Public_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CastCollider_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_float3_Single_byref_T_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0<T>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(PhysicsWorldSingleton.NativeMethodInfoPtr_Unity_Physics_IAspectQueryable_CalculateDistance_Private_Virtual_Final_New_Boolean_byref_ColliderAspect_Single_byref_T_QueryInteraction_0, Il2CppClassPointerStore<PhysicsWorldSingleton>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<T>.NativeClassPtr))
		}))));
	}
}
