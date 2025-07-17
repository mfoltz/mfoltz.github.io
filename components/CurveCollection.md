---
nav_exclude: true
search_exclude: true
---

# CurveCollection

```csharp
public struct CurveCollection
{
	static CurveCollection()
	{
		Il2CppClassPointerStore<CurveCollection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "CurveCollection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CurveCollection>.NativeClassPtr);
		CurveCollection.NativeFieldInfoPtr__LookupMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CurveCollection>.NativeClassPtr, "_LookupMap");
		CurveCollection.NativeMethodInfoPtr_Exists_Public_Boolean_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CurveCollection>.NativeClassPtr, 100666966);
		CurveCollection.NativeMethodInfoPtr_TryGet_Public_Boolean_Int32_byref_BlobAssetReference_1_CurveBlobData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CurveCollection>.NativeClassPtr, 100666967);
		CurveCollection.NativeMethodInfoPtr__ctor_Public_Void_NativeParallelHashMap_2_Int32_BlobAssetReference_1_CurveBlobData_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CurveCollection>.NativeClassPtr, 100666968);
	}

	public unsafe bool Exists(int curveGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref curveGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CurveCollection.NativeMethodInfoPtr_Exists_Public_Boolean_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe bool TryGet(int curveGuid, out BlobAssetReference<CurveBlobData> curveData)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref curveGuid;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &curveData;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CurveCollection.NativeMethodInfoPtr_TryGet_Public_Boolean_Int32_byref_BlobAssetReference_1_CurveBlobData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe CurveCollection(NativeParallelHashMap<int, BlobAssetReference<CurveBlobData>> lookupMap)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref lookupMap;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CurveCollection.NativeMethodInfoPtr__ctor_Public_Void_NativeParallelHashMap_2_Int32_BlobAssetReference_1_CurveBlobData_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CurveCollection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr__LookupMap;
	private static readonly IntPtr NativeMethodInfoPtr_Exists_Public_Boolean_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_TryGet_Public_Boolean_Int32_byref_BlobAssetReference_1_CurveBlobData_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_NativeParallelHashMap_2_Int32_BlobAssetReference_1_CurveBlobData_0;

	public NativeParallelHashMap<int, BlobAssetReference<CurveBlobData>> _LookupMap;
}
```
