---
nav_exclude: true
search_exclude: true
---

# UserActivityGrid

```csharp
public struct UserActivityGrid
{
	static UserActivityGrid()
	{
		Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "UserActivityGrid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr);
		UserActivityGrid.NativeFieldInfoPtr_Grid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "Grid");
		UserActivityGrid.NativeFieldInfoPtr_BitMaskGrid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "BitMaskGrid");
		UserActivityGrid.NativeFieldInfoPtr_UserPositionFromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "UserPositionFromUserIndex");
		UserActivityGrid.NativeFieldInfoPtr_UserPosition3DFromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "UserPosition3DFromUserIndex");
		UserActivityGrid.NativeFieldInfoPtr_UserEntityFromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "UserEntityFromUserIndex");
		UserActivityGrid.NativeFieldInfoPtr_ControlledEntityFromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "ControlledEntityFromUserIndex");
		UserActivityGrid.NativeFieldInfoPtr_UserEntityNetworkIdFromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "UserEntityNetworkIdFromUserIndex");
		UserActivityGrid.NativeFieldInfoPtr_ControlledEntityNetworkIdFromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "ControlledEntityNetworkIdFromUserIndex");
		UserActivityGrid.NativeFieldInfoPtr_InputDataEntityNetworkIdFromUserIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "InputDataEntityNetworkIdFromUserIndex");
		UserActivityGrid.NativeFieldInfoPtr_AllConnectedUsersMask = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "AllConnectedUsersMask");
		UserActivityGrid.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "Offset");
		UserActivityGrid.NativeFieldInfoPtr_CellSize = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "CellSize");
		UserActivityGrid.NativeFieldInfoPtr_CellCountOnEachAxis = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, "CellCountOnEachAxis");
		UserActivityGrid.NativeMethodInfoPtr_IsUserClose_Public_Boolean_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670555);
		UserActivityGrid.NativeMethodInfoPtr_IsUserCloseToBoundingBox_Public_Boolean_SyncBoundingBox_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670556);
		UserActivityGrid.NativeMethodInfoPtr_TryGetUserIndexFromEntity_Public_Boolean_Entity_byref_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670557);
		UserActivityGrid.NativeMethodInfoPtr_GetUsersInRadius_Public_UserBitMask128_float3_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670558);
		UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMask_Public_UserBitMask128_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670559);
		UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMask_Public_UserBitMask128_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670560);
		UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMaskWithBoundingBox_Public_UserBitMask128_float3_SyncBoundingBox_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670561);
		UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMaskWithBoundingBox_Public_UserBitMask128_float2_SyncBoundingBox_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670562);
		UserActivityGrid.NativeMethodInfoPtr_GetUsersInBounds_Public_UserBitMask128_BoundsMinMax_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670563);
		UserActivityGrid.NativeMethodInfoPtr_IsCellIndexWithinRange_Private_Boolean_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670564);
		UserActivityGrid.NativeMethodInfoPtr_TryGetDistanceSqToClosestUser_Public_Boolean_float3_byref_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670565);
		UserActivityGrid.NativeMethodInfoPtr_GetCellIndex_Private_Int32_float3_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670566);
		UserActivityGrid.NativeMethodInfoPtr_GetCellIndex_Private_Int32_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670567);
		UserActivityGrid.NativeMethodInfoPtr_GetCellPosition2dFromIndex_Public_float2_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670568);
		UserActivityGrid.NativeMethodInfoPtr_GetCellPositionFromWorldPosition_Public_int2_float2_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670569);
		UserActivityGrid.NativeMethodInfoPtr_GetCellsInRadius_Public_Void_NativeList_1_Int32_float3_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, 100670570);
	}

	public unsafe bool IsUserClose(float3 worldPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_IsUserClose_Public_Boolean_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsUserCloseToBoundingBox(SyncBoundingBox box)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref box;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_IsUserCloseToBoundingBox_Public_Boolean_SyncBoundingBox_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetUserIndexFromEntity(Entity entity, out int index)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entity;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &index;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_TryGetUserIndexFromEntity_Public_Boolean_Entity_byref_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe UserBitMask128 GetUsersInRadius(float3 worldPosition, float radius)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetUsersInRadius_Public_UserBitMask128_float3_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe UserBitMask128 GetUsersAsUserBitMask(float3 worldPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMask_Public_UserBitMask128_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe UserBitMask128 GetUsersAsUserBitMask(float2 worldPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMask_Public_UserBitMask128_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe UserBitMask128 GetUsersAsUserBitMaskWithBoundingBox(float3 worldPosition, SyncBoundingBox boundingBox)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref boundingBox;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMaskWithBoundingBox_Public_UserBitMask128_float3_SyncBoundingBox_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe UserBitMask128 GetUsersAsUserBitMaskWithBoundingBox(float2 worldPosition, SyncBoundingBox boundingBox)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref boundingBox;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetUsersAsUserBitMaskWithBoundingBox_Public_UserBitMask128_float2_SyncBoundingBox_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe UserBitMask128 GetUsersInBounds(BoundsMinMax worldBounds, bool filterExact = false)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldBounds;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref filterExact;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetUsersInBounds_Public_UserBitMask128_BoundsMinMax_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool IsCellIndexWithinRange(int cellIndex)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref cellIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_IsCellIndexWithinRange_Private_Boolean_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetDistanceSqToClosestUser(float3 worldPosition, out float closestDistanceSq)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &closestDistanceSq;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_TryGetDistanceSqToClosestUser_Public_Boolean_float3_byref_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int GetCellIndex(float3 worldPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetCellIndex_Private_Int32_float3_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int GetCellIndex(float2 worldPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetCellIndex_Private_Int32_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float2 GetCellPosition2dFromIndex(int index)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref index;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetCellPosition2dFromIndex_Public_float2_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int2 GetCellPositionFromWorldPosition(float2 worldPosition)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref worldPosition;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetCellPositionFromWorldPosition_Public_int2_float2_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void GetCellsInRadius(NativeList<int> cells, float3 worldPosition, float radius)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref cells;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref worldPosition;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref radius;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(UserActivityGrid.NativeMethodInfoPtr_GetCellsInRadius_Public_Void_NativeList_1_Int32_float3_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UserActivityGrid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Grid;
	private static readonly IntPtr NativeFieldInfoPtr_BitMaskGrid;
	private static readonly IntPtr NativeFieldInfoPtr_UserPositionFromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UserPosition3DFromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UserEntityFromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ControlledEntityFromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_UserEntityNetworkIdFromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_ControlledEntityNetworkIdFromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_InputDataEntityNetworkIdFromUserIndex;
	private static readonly IntPtr NativeFieldInfoPtr_AllConnectedUsersMask;
	private static readonly IntPtr NativeFieldInfoPtr_Offset;
	private static readonly IntPtr NativeFieldInfoPtr_CellSize;
	private static readonly IntPtr NativeFieldInfoPtr_CellCountOnEachAxis;
	private static readonly IntPtr NativeMethodInfoPtr_IsUserClose_Public_Boolean_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsUserCloseToBoundingBox_Public_Boolean_SyncBoundingBox_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetUserIndexFromEntity_Public_Boolean_Entity_byref_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetUsersInRadius_Public_UserBitMask128_float3_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetUsersAsUserBitMask_Public_UserBitMask128_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetUsersAsUserBitMask_Public_UserBitMask128_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetUsersAsUserBitMaskWithBoundingBox_Public_UserBitMask128_float3_SyncBoundingBox_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetUsersAsUserBitMaskWithBoundingBox_Public_UserBitMask128_float2_SyncBoundingBox_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetUsersInBounds_Public_UserBitMask128_BoundsMinMax_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_IsCellIndexWithinRange_Private_Boolean_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetDistanceSqToClosestUser_Public_Boolean_float3_byref_Single_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCellIndex_Private_Int32_float3_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCellIndex_Private_Int32_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCellPosition2dFromIndex_Public_float2_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCellPositionFromWorldPosition_Public_int2_float2_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCellsInRadius_Public_Void_NativeList_1_Int32_float3_Single_0;

	public NativeBitArray Grid;

	public NativeArray<UserBitMask128> BitMaskGrid;

	public NativeArray<float2> UserPositionFromUserIndex;

	public NativeArray<float3> UserPosition3DFromUserIndex;

	public NativeArray<Entity> UserEntityFromUserIndex;

	public NativeArray<Entity> ControlledEntityFromUserIndex;

	public NativeArray<NetworkId> UserEntityNetworkIdFromUserIndex;

	public NativeArray<NetworkId> ControlledEntityNetworkIdFromUserIndex;

	public NativeArray<NetworkId> InputDataEntityNetworkIdFromUserIndex;

	public UserBitMask128 AllConnectedUsersMask;

	public float2 Offset;

	public int CellSize;

	public int CellCountOnEachAxis;
}
```

## Server Systems

- [ProjectM.Network.UserActivityGridSystem](/systems/ProjectM.Network.UserActivityGridSystem)
