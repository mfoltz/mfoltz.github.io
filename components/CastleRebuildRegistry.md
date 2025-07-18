---
nav_exclude: true
search_exclude: true
---

# CastleRebuildRegistry

```csharp
public struct CastleRebuildRegistry
{
	static CastleRebuildRegistry()
	{
		Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding.Rebuilding", "CastleRebuildRegistry");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr);
		CastleRebuildRegistry.NativeFieldInfoPtr__CastleRebuilds = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, "_CastleRebuilds");
		CastleRebuildRegistry.NativeMethodInfoPtr__ctor_Public_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682596);
		CastleRebuildRegistry.NativeMethodInfoPtr_HasAnyRebuilds_Public_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682597);
		CastleRebuildRegistry.NativeMethodInfoPtr_Add_Public_Void_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682598);
		CastleRebuildRegistry.NativeMethodInfoPtr_Set_Public_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682599);
		CastleRebuildRegistry.NativeMethodInfoPtr_RemoveByRebuildTerritory_Public_Boolean_byref_MapZoneId_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682600);
		CastleRebuildRegistry.NativeMethodInfoPtr_RemoveBySourceTerritory_Public_Boolean_byref_MapZoneId_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682601);
		CastleRebuildRegistry.NativeMethodInfoPtr_RemoveByEitherTerritory_Public_Boolean_byref_MapZoneId_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682602);
		CastleRebuildRegistry.NativeMethodInfoPtr_TryGetByRebuildTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682603);
		CastleRebuildRegistry.NativeMethodInfoPtr_TryGetBySourceTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682604);
		CastleRebuildRegistry.NativeMethodInfoPtr_TryGetByEitherTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682605);
		CastleRebuildRegistry.NativeMethodInfoPtr_GetCastleRebuilds_Public_CastleRebuildDataEnumerable_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682606);
		CastleRebuildRegistry.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682607);
		CastleRebuildRegistry.NativeMethodInfoPtr_RemoveIndex_Private_Boolean_Int32_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682608);
		CastleRebuildRegistry.NativeMethodInfoPtr_FindIndex_Private_Int32_TComparer_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682609);
		CastleRebuildRegistry.NativeMethodInfoPtr_TryGet_Private_Boolean_TComparer_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, 100682610);
	}

	public unsafe CastleRebuildRegistry(int capacity)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref capacity;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr__ctor_Public_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool HasAnyRebuilds()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_HasAnyRebuilds_Public_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void Add([In] ref CastleRebuildData data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_Add_Public_Void_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool Set([In] ref CastleRebuildData data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_Set_Public_Boolean_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool RemoveByRebuildTerritory([In] ref MapZoneId rebuildTerritory, bool dispose = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &rebuildTerritory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dispose;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_RemoveByRebuildTerritory_Public_Boolean_byref_MapZoneId_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool RemoveBySourceTerritory([In] ref MapZoneId sourceTerritory, bool dispose = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &sourceTerritory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dispose;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_RemoveBySourceTerritory_Public_Boolean_byref_MapZoneId_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool RemoveByEitherTerritory([In] ref MapZoneId territory, bool dispose = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &territory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dispose;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_RemoveByEitherTerritory_Public_Boolean_byref_MapZoneId_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetByRebuildTerritory([In] ref MapZoneId rebuildTerritory, out CastleRebuildData data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &rebuildTerritory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_TryGetByRebuildTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetBySourceTerritory([In] ref MapZoneId sourceTerritory, out CastleRebuildData data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &sourceTerritory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_TryGetBySourceTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGetByEitherTerritory([In] ref MapZoneId territory, out CastleRebuildData data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &territory;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &data;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_TryGetByEitherTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe CastleRebuildRegistry.CastleRebuildDataEnumerable GetCastleRebuilds()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_GetCastleRebuilds_Public_CastleRebuildDataEnumerable_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void Dispose()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool RemoveIndex(int index, bool dispose)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref index;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref dispose;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.NativeMethodInfoPtr_RemoveIndex_Private_Boolean_Int32_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe int FindIndex<TComparer>(TComparer comparer)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		ref IntPtr ptr2 = ref *ptr;
		IntPtr intPtr;
		if (!typeof(TComparer).IsValueType)
		{
			TComparer tcomparer = comparer;
			intPtr = ((tcomparer is string) ? IL2CPP.ManagedStringToIl2Cpp(tcomparer as string) : IL2CPP.Il2CppObjectBaseToPtr(tcomparer as Il2CppObjectBase));
		}
		else
		{
			intPtr = ref comparer;
		}
		ptr2 = intPtr;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.MethodInfoStoreGeneric_FindIndex_Private_Int32_TComparer_0<TComparer>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}

	public unsafe bool TryGet<TComparer>(TComparer comparer, out CastleRebuildData data)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		ref IntPtr ptr2 = ref *ptr;
		IntPtr intPtr;
		if (!typeof(TComparer).IsValueType)
		{
			TComparer tcomparer = comparer;
			intPtr = ((tcomparer is string) ? IL2CPP.ManagedStringToIl2Cpp(tcomparer as string) : IL2CPP.Il2CppObjectBaseToPtr(tcomparer as Il2CppObjectBase));
		}
		else
		{
			intPtr = ref comparer;
		}
		ptr2 = intPtr;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &data;
		IntPtr intPtr3;
		IntPtr intPtr2 = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.MethodInfoStoreGeneric_TryGet_Private_Boolean_TComparer_byref_CastleRebuildData_0<TComparer>.Pointer, ref this, (void**)ptr, ref intPtr3);
		Il2CppException.RaiseExceptionIfNecessary(intPtr3);
		return *IL2CPP.il2cpp_object_unbox(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__CastleRebuilds;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_HasAnyRebuilds_Public_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Add_Public_Void_byref_CastleRebuildData_0;
	private static readonly IntPtr NativeMethodInfoPtr_Set_Public_Boolean_byref_CastleRebuildData_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveByRebuildTerritory_Public_Boolean_byref_MapZoneId_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveBySourceTerritory_Public_Boolean_byref_MapZoneId_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveByEitherTerritory_Public_Boolean_byref_MapZoneId_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetByRebuildTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetBySourceTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGetByEitherTerritory_Public_Boolean_byref_MapZoneId_byref_CastleRebuildData_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCastleRebuilds_Public_CastleRebuildDataEnumerable_0;
	private static readonly IntPtr NativeMethodInfoPtr_Dispose_Public_Virtual_Final_New_Void_0;
	private static readonly IntPtr NativeMethodInfoPtr_RemoveIndex_Private_Boolean_Int32_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_FindIndex_Private_Int32_TComparer_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGet_Private_Boolean_TComparer_byref_CastleRebuildData_0;

	public NativeList<CastleRebuildData> _CastleRebuilds;

	public struct CastleRebuildDataEnumerable
	{
		static CastleRebuildDataEnumerable()
		{
			Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildDataEnumerable>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, "CastleRebuildDataEnumerable");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildDataEnumerable>.NativeClassPtr);
			CastleRebuildRegistry.CastleRebuildDataEnumerable.NativeFieldInfoPtr__List = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildDataEnumerable>.NativeClassPtr, "_List");
			CastleRebuildRegistry.CastleRebuildDataEnumerable.NativeMethodInfoPtr__ctor_Public_Void_NativeList_1_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildDataEnumerable>.NativeClassPtr, 100682611);
			CastleRebuildRegistry.CastleRebuildDataEnumerable.NativeMethodInfoPtr_GetEnumerator_Public_Enumerator_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildDataEnumerable>.NativeClassPtr, 100682612);
		}

		public unsafe CastleRebuildDataEnumerable(NativeList<CastleRebuildData> list)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref list;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildDataEnumerable.NativeMethodInfoPtr__ctor_Public_Void_NativeList_1_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe NativeArray<CastleRebuildData>.Enumerator GetEnumerator()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildDataEnumerable.NativeMethodInfoPtr_GetEnumerator_Public_Enumerator_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildDataEnumerable>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr__List;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_NativeList_1_CastleRebuildData_0;
		private static readonly IntPtr NativeMethodInfoPtr_GetEnumerator_Public_Enumerator_CastleRebuildData_0;

		public readonly NativeList<CastleRebuildData> _List;
	}
	public class ICastleRebuildComparer : Il2CppObjectBase
	{
		static ICastleRebuildComparer()
		{
			Il2CppClassPointerStore<CastleRebuildRegistry.ICastleRebuildComparer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, "ICastleRebuildComparer");
			CastleRebuildRegistry.ICastleRebuildComparer.NativeMethodInfoPtr_CompareRebuild_Public_Abstract_Virtual_New_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.ICastleRebuildComparer>.NativeClassPtr, 100682613);
		}

		public unsafe virtual bool CompareRebuild([In] ref CastleRebuildData data)
		{
			IL2CPP.Il2CppObjectBaseToPtrNotNull(this);
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &data;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(IL2CPP.il2cpp_object_get_virtual_method(IL2CPP.Il2CppObjectBaseToPtr(this), CastleRebuildRegistry.ICastleRebuildComparer.NativeMethodInfoPtr_CompareRebuild_Public_Abstract_Virtual_New_Boolean_byref_CastleRebuildData_0), IL2CPP.Il2CppObjectBaseToPtrNotNull(this), (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public ICastleRebuildComparer(IntPtr pointer) : base(pointer)
		{
		}
		private static readonly IntPtr NativeMethodInfoPtr_CompareRebuild_Public_Abstract_Virtual_New_Boolean_byref_CastleRebuildData_0;
	}

	public struct CastleRebuildTerritoryComparer
	{
		static CastleRebuildTerritoryComparer()
		{
			Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildTerritoryComparer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, "CastleRebuildTerritoryComparer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildTerritoryComparer>.NativeClassPtr);
			CastleRebuildRegistry.CastleRebuildTerritoryComparer.NativeFieldInfoPtr__RebuildTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildTerritoryComparer>.NativeClassPtr, "_RebuildTerritory");
			CastleRebuildRegistry.CastleRebuildTerritoryComparer.NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildTerritoryComparer>.NativeClassPtr, 100682614);
			CastleRebuildRegistry.CastleRebuildTerritoryComparer.NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildTerritoryComparer>.NativeClassPtr, 100682615);
			CastleRebuildRegistry.CastleRebuildTerritoryComparer.NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildTerritoryComparer>.NativeClassPtr, 100682616);
		}

		public unsafe CastleRebuildTerritoryComparer(MapZoneId rebuildTerritory)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref rebuildTerritory;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildTerritoryComparer.NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe bool CompareRebuild([In] ref CastleRebuildData data)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &data;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildTerritoryComparer.NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe bool ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild([In] ref CastleRebuildData data)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &data;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildTerritoryComparer.NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildTerritoryComparer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr__RebuildTerritory;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0;
		private static readonly IntPtr NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0;
		private static readonly IntPtr NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0;

		public readonly MapZoneId _RebuildTerritory;
	}

	public struct CastleRebuildSourceTerritoryComparer
	{
		static CastleRebuildSourceTerritoryComparer()
		{
			Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, "CastleRebuildSourceTerritoryComparer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer>.NativeClassPtr);
			CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer.NativeFieldInfoPtr__SourceTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer>.NativeClassPtr, "_SourceTerritory");
			CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer.NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer>.NativeClassPtr, 100682617);
			CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer.NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer>.NativeClassPtr, 100682618);
			CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer.NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer>.NativeClassPtr, 100682619);
		}

		public unsafe CastleRebuildSourceTerritoryComparer(MapZoneId sourceTerritory)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref sourceTerritory;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer.NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe bool CompareRebuild([In] ref CastleRebuildData data)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &data;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer.NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe bool ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild([In] ref CastleRebuildData data)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &data;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer.NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildSourceTerritoryComparer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr__SourceTerritory;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0;
		private static readonly IntPtr NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0;
		private static readonly IntPtr NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0;

		public readonly MapZoneId _SourceTerritory;
	}

	public struct CastleRebuildEitherTerritoryComparer
	{
		static CastleRebuildEitherTerritoryComparer()
		{
			Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr, "CastleRebuildEitherTerritoryComparer");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer>.NativeClassPtr);
			CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer.NativeFieldInfoPtr__Territory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer>.NativeClassPtr, "_Territory");
			CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer.NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer>.NativeClassPtr, 100682620);
			CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer.NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer>.NativeClassPtr, 100682621);
			CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer.NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer>.NativeClassPtr, 100682622);
		}

		public unsafe CastleRebuildEitherTerritoryComparer(MapZoneId territory)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref territory;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer.NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}

		public unsafe bool CompareRebuild([In] ref CastleRebuildData data)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &data;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer.NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe bool ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild([In] ref CastleRebuildData data)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = &data;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer.NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleRebuildRegistry.CastleRebuildEitherTerritoryComparer>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr__Territory;
		private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_MapZoneId_0;
		private static readonly IntPtr NativeMethodInfoPtr_CompareRebuild_Public_Boolean_byref_CastleRebuildData_0;
		private static readonly IntPtr NativeMethodInfoPtr_ProjectM_CastleBuilding_Rebuilding_CastleRebuildRegistry_ICastleRebuildComparer_CompareRebuild_Private_Virtual_Final_New_Boolean_byref_CastleRebuildData_0;

		public readonly MapZoneId _Territory;
	}
	private sealed class MethodInfoStoreGeneric_FindIndex_Private_Int32_TComparer_0<TComparer>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(CastleRebuildRegistry.NativeMethodInfoPtr_FindIndex_Private_Int32_TComparer_0, Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComparer>.NativeClassPtr))
		}))));
	}
	private sealed class MethodInfoStoreGeneric_TryGet_Private_Boolean_TComparer_byref_CastleRebuildData_0<TComparer>
	{
		internal static IntPtr Pointer = IL2CPP.il2cpp_method_get_from_reflection(IL2CPP.Il2CppObjectBaseToPtrNotNull(new MethodInfo(IL2CPP.il2cpp_method_get_object(CastleRebuildRegistry.NativeMethodInfoPtr_TryGet_Private_Boolean_TComparer_byref_CastleRebuildData_0, Il2CppClassPointerStore<CastleRebuildRegistry>.NativeClassPtr)).MakeGenericMethod(new Il2CppReferenceArray<Type>(new Type[]
		{
			Type.internal_from_handle(IL2CPP.il2cpp_class_get_type(Il2CppClassPointerStore<TComparer>.NativeClassPtr))
		}))));
	}
}
```

## Client Systems

- [CastleHeartRebuildSubMenuMapper](/systems/client/CastleHeartRebuildSubMenuMapper)
