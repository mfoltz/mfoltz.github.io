---
nav_exclude: true
search_exclude: true
---

# CastleRoomWall

```csharp
public struct CastleRoomWall
{
	static CastleRoomWall()
	{
		Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleRoomWall");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr);
		CastleRoomWall.NativeFieldInfoPtr_FloorNorth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, "FloorNorth");
		CastleRoomWall.NativeFieldInfoPtr_FloorEast = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, "FloorEast");
		CastleRoomWall.NativeFieldInfoPtr_FloorSouth = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, "FloorSouth");
		CastleRoomWall.NativeFieldInfoPtr_FloorWest = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, "FloorWest");
		CastleRoomWall.NativeMethodInfoPtr_GetFloor_Public_Entity_CardinalDirection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, 100682184);
		CastleRoomWall.NativeMethodInfoPtr_SetFloor_Public_Void_Entity_CardinalDirection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, 100682185);
		CastleRoomWall.NativeMethodInfoPtr_ClearFloors_Public_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, 100682186);
	}

	public unsafe Entity GetFloor(CardinalDirection direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRoomWall.NativeMethodInfoPtr_GetFloor_Public_Entity_CardinalDirection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void SetFloor(Entity tileModel, CardinalDirection direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref tileModel;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRoomWall.NativeMethodInfoPtr_SetFloor_Public_Void_Entity_CardinalDirection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe void ClearFloors()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRoomWall.NativeMethodInfoPtr_ClearFloors_Public_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRoomWall>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_FloorNorth;
	private static readonly IntPtr NativeFieldInfoPtr_FloorEast;
	private static readonly IntPtr NativeFieldInfoPtr_FloorSouth;
	private static readonly IntPtr NativeFieldInfoPtr_FloorWest;
	private static readonly IntPtr NativeMethodInfoPtr_GetFloor_Public_Entity_CardinalDirection_0;
	private static readonly IntPtr NativeMethodInfoPtr_SetFloor_Public_Void_Entity_CardinalDirection_0;
	private static readonly IntPtr NativeMethodInfoPtr_ClearFloors_Public_Void_0;

	public Entity FloorNorth;

	public Entity FloorEast;

	public Entity FloorSouth;

	public Entity FloorWest;
}
```
