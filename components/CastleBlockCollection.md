---
nav_exclude: true
search_exclude: true
---

# CastleBlockCollection

```csharp
public struct CastleBlockCollection
{
	static CastleBlockCollection()
	{
		Il2CppClassPointerStore<CastleBlockCollection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "CastleBlockCollection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBlockCollection>.NativeClassPtr);
		CastleBlockCollection.NativeFieldInfoPtr_Floors = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBlockCollection>.NativeClassPtr, "Floors");
		CastleBlockCollection.NativeFieldInfoPtr_Walls = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBlockCollection>.NativeClassPtr, "Walls");
		CastleBlockCollection.NativeFieldInfoPtr_Pillars = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBlockCollection>.NativeClassPtr, "Pillars");
		CastleBlockCollection.NativeMethodInfoPtr__ctor_Internal_Void_NativeParallelHashMap_2_CastleFloorBlock_Entity_NativeParallelHashMap_2_CastleWallBlock_Entity_NativeParallelHashMap_2_CastlePillarBlock_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleBlockCollection>.NativeClassPtr, 100681753);
	}

	public unsafe CastleBlockCollection(NativeParallelHashMap<CastleFloorBlock, Entity> floors, NativeParallelHashMap<CastleWallBlock, Entity> walls, NativeParallelHashMap<CastlePillarBlock, Entity> pillars)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref floors;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref walls;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref pillars;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleBlockCollection.NativeMethodInfoPtr__ctor_Internal_Void_NativeParallelHashMap_2_CastleFloorBlock_Entity_NativeParallelHashMap_2_CastleWallBlock_Entity_NativeParallelHashMap_2_CastlePillarBlock_Entity_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBlockCollection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Floors;
	private static readonly IntPtr NativeFieldInfoPtr_Walls;
	private static readonly IntPtr NativeFieldInfoPtr_Pillars;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Internal_Void_NativeParallelHashMap_2_CastleFloorBlock_Entity_NativeParallelHashMap_2_CastleWallBlock_Entity_NativeParallelHashMap_2_CastlePillarBlock_Entity_0;

	public readonly CastleFloorBlockCollection Floors;

	public readonly CastleWallBlockCollection Walls;

	public readonly CastlePillarBlockCollection Pillars;
}
```
