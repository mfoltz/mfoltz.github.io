---
nav_exclude: true
search_exclude: true
---

```csharp
public struct CastleFloor
{
	static CastleFloor()
	{
		Il2CppClassPointerStore<CastleFloor>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleFloor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr);
		CastleFloor.NativeFieldInfoPtr_FloorType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "FloorType");
		CastleFloor.NativeFieldInfoPtr_RoofType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "RoofType");
		CastleFloor.NativeFieldInfoPtr_GroundConnectionType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "GroundConnectionType");
		CastleFloor.NativeFieldInfoPtr_Impassable = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "Impassable");
		CastleFloor.NativeFieldInfoPtr_NeighbourFloorNorth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "NeighbourFloorNorth");
		CastleFloor.NativeFieldInfoPtr_NeighbourFloorEast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "NeighbourFloorEast");
		CastleFloor.NativeFieldInfoPtr_NeighbourFloorSouth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "NeighbourFloorSouth");
		CastleFloor.NativeFieldInfoPtr_NeighbourFloorWest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "NeighbourFloorWest");
		CastleFloor.NativeFieldInfoPtr_NeighbourFloorUp = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "NeighbourFloorUp");
		CastleFloor.NativeFieldInfoPtr_NeighbourFloorDown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "NeighbourFloorDown");
		CastleFloor.NativeFieldInfoPtr_WallNorth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "WallNorth");
		CastleFloor.NativeFieldInfoPtr_WallEast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "WallEast");
		CastleFloor.NativeFieldInfoPtr_WallSouth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "WallSouth");
		CastleFloor.NativeFieldInfoPtr_WallWest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, "WallWest");
		CastleFloor.NativeMethodInfoPtr_GetNeighbourFloors_Public_CastleFloorNeighbourEnumerator_ComponentLookup_1_PlacementDestroyData_NeighbourFilter_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671746);
		CastleFloor.NativeMethodInfoPtr_GetNeighbourFloor_Public_NeighbourData_CardinalDirection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671747);
		CastleFloor.NativeMethodInfoPtr_GetWall_Public_Entity_CardinalDirection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671748);
		CastleFloor.NativeMethodInfoPtr_SetNeighbourFloor_Public_Void_Entity_CardinalDirection_NeighbourFilter_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671749);
		CastleFloor.NativeMethodInfoPtr_SetWall_Public_Void_Entity_CardinalDirection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671750);
		CastleFloor.NativeMethodInfoPtr_ClearFloors_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671751);
		CastleFloor.NativeMethodInfoPtr_ClearWalls_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671752);
		CastleFloor.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, 100671753);
	}

	public unsafe CastleFloorNeighbourEnumerator GetNeighbourFloors(ComponentLookup<PlacementDestroyData> getPlacementDestroyData, NeighbourFilter requireFilter)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref getPlacementDestroyData;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref requireFilter;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_GetNeighbourFloors_Public_CastleFloorNeighbourEnumerator_ComponentLookup_1_PlacementDestroyData_NeighbourFilter_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe NeighbourData GetNeighbourFloor(CardinalDirection direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_GetNeighbourFloor_Public_NeighbourData_CardinalDirection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe Entity GetWall(CardinalDirection direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_GetWall_Public_Entity_CardinalDirection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void SetNeighbourFloor(Entity tileModel, CardinalDirection direction, NeighbourFilter matchingFilter)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileModel;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref matchingFilter;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_SetNeighbourFloor_Public_Void_Entity_CardinalDirection_NeighbourFilter_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void SetWall(Entity tileModel, CardinalDirection direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileModel;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_SetWall_Public_Void_Entity_CardinalDirection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void ClearFloors()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_ClearFloors_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void ClearWalls()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_ClearWalls_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleFloor.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleFloor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FloorType;
	private static readonly IntPtr NativeFieldInfoPtr_RoofType;
	private static readonly IntPtr NativeFieldInfoPtr_GroundConnectionType;
	private static readonly IntPtr NativeFieldInfoPtr_Impassable;
	private static readonly IntPtr NativeFieldInfoPtr_NeighbourFloorNorth;
	private static readonly IntPtr NativeFieldInfoPtr_NeighbourFloorEast;
	private static readonly IntPtr NativeFieldInfoPtr_NeighbourFloorSouth;
	private static readonly IntPtr NativeFieldInfoPtr_NeighbourFloorWest;
	private static readonly IntPtr NativeFieldInfoPtr_NeighbourFloorUp;
	private static readonly IntPtr NativeFieldInfoPtr_NeighbourFloorDown;
	private static readonly IntPtr NativeFieldInfoPtr_WallNorth;
	private static readonly IntPtr NativeFieldInfoPtr_WallEast;
	private static readonly IntPtr NativeFieldInfoPtr_WallSouth;
	private static readonly IntPtr NativeFieldInfoPtr_WallWest;
	private static readonly IntPtr NativeMethodInfoPtr_GetNeighbourFloors_Public_CastleFloorNeighbourEnumerator_ComponentLookup_1_PlacementDestroyData_NeighbourFilter_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetNeighbourFloor_Public_NeighbourData_CardinalDirection_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetWall_Public_Entity_CardinalDirection_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetNeighbourFloor_Public_Void_Entity_CardinalDirection_NeighbourFilter_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetWall_Public_Void_Entity_CardinalDirection_0;
	private static readonly IntPtr NativeMethodInfoPtr_ClearFloors_Public_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_ClearWalls_Public_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;

	public CastleFloorTypes FloorType;

	public RoofCategoryType RoofType;

	public GroundConnectionType GroundConnectionType;

	public bool Impassable;

	public NeighbourData NeighbourFloorNorth;

	public NeighbourData NeighbourFloorEast;

	public NeighbourData NeighbourFloorSouth;

	public NeighbourData NeighbourFloorWest;

	public NeighbourData NeighbourFloorUp;

	public NeighbourData NeighbourFloorDown;

	public Entity WallNorth;

	public Entity WallEast;

	public Entity WallSouth;

	public Entity WallWest;
}
```

## Server Systems

- [CastleDecrementCountOnDestroySystem]({{% relref "systems/server/CastleDecrementCountOnDestroySystem.md" %}})
- [CastleIncrementCountOnSpawnSystem]({{% relref "systems/server/CastleIncrementCountOnSpawnSystem.md" %}})
