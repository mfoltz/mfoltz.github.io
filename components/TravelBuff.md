# TravelBuff

```csharp
[StructLayout(2)]
public struct TravelBuff
{
	static TravelBuff()
	{
		Il2CppClassPointerStore<TravelBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TravelBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr);
		TravelBuff.NativeFieldInfoPtr_StartPositionInternal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "StartPositionInternal");
		TravelBuff.NativeFieldInfoPtr_StartPositionServer = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "StartPositionServer");
		TravelBuff.NativeFieldInfoPtr_EndPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "EndPosition");
		TravelBuff.NativeFieldInfoPtr_MaxHeightDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "MaxHeightDiff");
		TravelBuff.NativeFieldInfoPtr_ExtraDistanceAllowed = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "ExtraDistanceAllowed");
		TravelBuff.NativeFieldInfoPtr_Height = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "Height");
		TravelBuff.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "MaxRange");
		TravelBuff.NativeFieldInfoPtr_Curve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "Curve");
		TravelBuff.NativeFieldInfoPtr_HeightCurve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "HeightCurve");
		TravelBuff.NativeFieldInfoPtr_RotationMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "RotationMode");
		TravelBuff.NativeFieldInfoPtr_CurveId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "CurveId");
		TravelBuff.NativeFieldInfoPtr_DenyLowerHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "DenyLowerHeight");
		TravelBuff.NativeFieldInfoPtr_StopAtHighCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "StopAtHighCollision");
		TravelBuff.NativeFieldInfoPtr_SnapToEndPositionOnDestroy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, "SnapToEndPositionOnDestroy");
		TravelBuff.NativeMethodInfoPtr_get_StartPosition_Public_get_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, 100664543);
		TravelBuff.NativeMethodInfoPtr_SetStartPosition_Public_Void_float3_WorldType_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, 100664544);
		TravelBuff.NativeMethodInfoPtr_GetTargetPositionFromInput_Public_float3_byref_FixedList64Bytes_1_float3_byref_TravelBuffSpawn_byref_float3_byref_MapCollision_byref_Random_byref_TileWorld_byref_CollisionWorld_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, 100664545);
		TravelBuff.NativeMethodInfoPtr_GetCollisionInfo_Public_GameplayLocationCollisionInfo_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, 100664546);
	}
	public unsafe float3 StartPosition
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuff.NativeMethodInfoPtr_get_StartPosition_Public_get_float3_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1062130, RefRangeEnd = 1062131, XrefRangeStart = 1062130, XrefRangeEnd = 1062130, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetStartPosition(float3 position, WorldType world)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref position;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref world;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuff.NativeMethodInfoPtr_SetStartPosition_Public_Void_float3_WorldType_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1062159, RefRangeEnd = 1062161, XrefRangeStart = 1062131, XrefRangeEnd = 1062159, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe float3 GetTargetPositionFromInput([In] ref FixedList64Bytes<float3> aimPositions, [In] ref TravelBuffSpawn travelBuffSpawn, [In] ref float3 startPosition, ref MapCollision mapCollision, ref Unity.Mathematics.Random random, ref TileWorld tileWorld, ref CollisionWorld collisionWorld)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &aimPositions;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &travelBuffSpawn;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &startPosition;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &mapCollision;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &random;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &tileWorld;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &collisionWorld;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuff.NativeMethodInfoPtr_GetTargetPositionFromInput_Public_float3_byref_FixedList64Bytes_1_float3_byref_TravelBuffSpawn_byref_float3_byref_MapCollision_byref_Random_byref_TileWorld_byref_CollisionWorld_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1062161, XrefRangeEnd = 1062164, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe GameplayLocationCollisionInfo GetCollisionInfo(float radius)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref radius;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuff.NativeMethodInfoPtr_GetCollisionInfo_Public_GameplayLocationCollisionInfo_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TravelBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartPositionInternal;
	private static readonly IntPtr NativeFieldInfoPtr_StartPositionServer;
	private static readonly IntPtr NativeFieldInfoPtr_EndPosition;
	private static readonly IntPtr NativeFieldInfoPtr_MaxHeightDiff;
	private static readonly IntPtr NativeFieldInfoPtr_ExtraDistanceAllowed;
	private static readonly IntPtr NativeFieldInfoPtr_Height;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_Curve;
	private static readonly IntPtr NativeFieldInfoPtr_HeightCurve;
	private static readonly IntPtr NativeFieldInfoPtr_RotationMode;
	private static readonly IntPtr NativeFieldInfoPtr_CurveId;
	private static readonly IntPtr NativeFieldInfoPtr_DenyLowerHeight;
	private static readonly IntPtr NativeFieldInfoPtr_StopAtHighCollision;
	private static readonly IntPtr NativeFieldInfoPtr_SnapToEndPositionOnDestroy;
	private static readonly IntPtr NativeMethodInfoPtr_get_StartPosition_Public_get_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetStartPosition_Public_Void_float3_WorldType_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetTargetPositionFromInput_Public_float3_byref_FixedList64Bytes_1_float3_byref_TravelBuffSpawn_byref_float3_byref_MapCollision_byref_Random_byref_TileWorld_byref_CollisionWorld_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCollisionInfo_Public_GameplayLocationCollisionInfo_Single_0;
	[FieldOffset(0)]
	public float3 StartPositionInternal;
	[FieldOffset(12)]
	public float3 StartPositionServer;
	[FieldOffset(24)]
	public float3 EndPosition;
	[FieldOffset(36)]
	public float MaxHeightDiff;
	[FieldOffset(40)]
	public float ExtraDistanceAllowed;
	[FieldOffset(44)]
	public float Height;
	[FieldOffset(48)]
	public float MaxRange;
	[FieldOffset(52)]
	public CurveReference Curve;
	[FieldOffset(60)]
	public CurveReference HeightCurve;
	[FieldOffset(68)]
	public MovementCurveRotationMode RotationMode;
	[FieldOffset(72)]
	public int CurveId;
	[FieldOffset(76)]
	[MarshalAs(4)]
	public bool DenyLowerHeight;
	[FieldOffset(77)]
	[MarshalAs(4)]
	public bool StopAtHighCollision;
	[FieldOffset(78)]
	[MarshalAs(4)]
	public bool SnapToEndPositionOnDestroy;
}
