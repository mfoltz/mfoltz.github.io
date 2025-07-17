---
nav_exclude: true
search_exclude: true
---

# MaterialMeshInfo

```csharp
[StructLayout(2)]
public struct MaterialMeshInfo
{
	static MaterialMeshInfo()
	{
		Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.Graphics.dll", "Unity.Rendering", "MaterialMeshInfo");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr);
		MaterialMeshInfo.NativeFieldInfoPtr_Material = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, "Material");
		MaterialMeshInfo.NativeFieldInfoPtr_Mesh = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, "Mesh");
		MaterialMeshInfo.NativeFieldInfoPtr_m_SubMeshIndexInfo = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, "m_SubMeshIndexInfo");
		MaterialMeshInfo.NativeMethodInfoPtr_get_SubMesh_Public_get_UInt16_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664305);
		MaterialMeshInfo.NativeMethodInfoPtr_set_SubMesh_Public_set_Void_UInt16_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664306);
		MaterialMeshInfo.NativeMethodInfoPtr_get_MaterialMeshIndexRange_Public_get_RangeInt_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664307);
		MaterialMeshInfo.NativeMethodInfoPtr_get_HasMaterialMeshIndexRange_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664308);
		MaterialMeshInfo.NativeMethodInfoPtr_get_Submesh_Public_get_SByte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664309);
		MaterialMeshInfo.NativeMethodInfoPtr_set_Submesh_Public_set_Void_SByte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664310);
		MaterialMeshInfo.NativeMethodInfoPtr_ArrayIndexToStaticIndex_Public_Static_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664311);
		MaterialMeshInfo.NativeMethodInfoPtr_StaticIndexToArrayIndex_Public_Static_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664312);
		MaterialMeshInfo.NativeMethodInfoPtr_FromRenderMeshArrayIndices_Public_Static_MaterialMeshInfo_Int32_Int32_UInt16_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664313);
		MaterialMeshInfo.NativeMethodInfoPtr_FromMaterialMeshIndexRange_Public_Static_MaterialMeshInfo_Int32_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664314);
		MaterialMeshInfo.NativeMethodInfoPtr__ctor_Private_Void_Int32_Int32_SubMeshIndexInfo32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664315);
		MaterialMeshInfo.NativeMethodInfoPtr__ctor_Public_Void_BatchMaterialID_BatchMeshID_UInt16_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664316);
		MaterialMeshInfo.NativeMethodInfoPtr_get_MeshID_Public_get_BatchMeshID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664317);
		MaterialMeshInfo.NativeMethodInfoPtr_set_MeshID_Public_set_Void_BatchMeshID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664318);
		MaterialMeshInfo.NativeMethodInfoPtr_get_MaterialID_Public_get_BatchMaterialID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664319);
		MaterialMeshInfo.NativeMethodInfoPtr_set_MaterialID_Public_set_Void_BatchMaterialID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664320);
		MaterialMeshInfo.NativeMethodInfoPtr_get_IsRuntimeMaterial_Internal_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664321);
		MaterialMeshInfo.NativeMethodInfoPtr_get_IsRuntimeMesh_Internal_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664322);
		MaterialMeshInfo.NativeMethodInfoPtr_get_MeshArrayIndex_Internal_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664323);
		MaterialMeshInfo.NativeMethodInfoPtr_set_MeshArrayIndex_Internal_set_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664324);
		MaterialMeshInfo.NativeMethodInfoPtr_get_MaterialArrayIndex_Internal_get_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664325);
		MaterialMeshInfo.NativeMethodInfoPtr_set_MaterialArrayIndex_Internal_set_Void_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, 100664326);
	}
	public unsafe ushort SubMesh
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_SubMesh_Public_get_UInt16_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_set_SubMesh_Public_set_Void_UInt16_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe RangeInt MaterialMeshIndexRange
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2143540, XrefRangeEnd = 2143542, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_MaterialMeshIndexRange_Public_get_RangeInt_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool HasMaterialMeshIndexRange
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_HasMaterialMeshIndexRange_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe sbyte Submesh
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_Submesh_Public_get_SByte_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_set_Submesh_Public_set_Void_SByte_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	[CallerCount(0)]
	public unsafe static int ArrayIndexToStaticIndex(int index)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref index;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_ArrayIndexToStaticIndex_Public_Static_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static int StaticIndexToArrayIndex(int staticIndex)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref staticIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_StaticIndexToArrayIndex_Public_Static_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static MaterialMeshInfo FromRenderMeshArrayIndices(int materialIndexInRenderMeshArray, int meshIndexInRenderMeshArray, ushort submeshIndex = 0)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref materialIndexInRenderMeshArray;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref meshIndexInRenderMeshArray;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref submeshIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_FromRenderMeshArrayIndices_Public_Static_MaterialMeshInfo_Int32_Int32_UInt16_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2143542, XrefRangeEnd = 2143543, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static MaterialMeshInfo FromMaterialMeshIndexRange(int rangeStart, int rangeLength)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref rangeStart;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref rangeLength;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_FromMaterialMeshIndexRange_Public_Static_MaterialMeshInfo_Int32_Int32_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe MaterialMeshInfo(int material, int mesh, SubMeshIndexInfo32 subMeshIndexInfo)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref material;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref mesh;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref subMeshIndexInfo;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr__ctor_Private_Void_Int32_Int32_SubMeshIndexInfo32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	[CallerCount(0)]
	public unsafe MaterialMeshInfo(BatchMaterialID materialID, BatchMeshID meshID, ushort submeshIndex = 0)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref materialID;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref meshID;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref submeshIndex;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr__ctor_Public_Void_BatchMaterialID_BatchMeshID_UInt16_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public unsafe BatchMeshID MeshID
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2143543, XrefRangeEnd = 2143544, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_MeshID_Public_get_BatchMeshID_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_set_MeshID_Public_set_Void_BatchMeshID_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe BatchMaterialID MaterialID
	{
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 2143544, XrefRangeEnd = 2143545, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_MaterialID_Public_get_BatchMaterialID_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(11)]
		[CachedScanResults(RefRangeStart = 1063175, RefRangeEnd = 1063186, XrefRangeStart = 1063175, XrefRangeEnd = 1063186, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_set_MaterialID_Public_set_Void_BatchMaterialID_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe bool IsRuntimeMaterial
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_IsRuntimeMaterial_Internal_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe bool IsRuntimeMesh
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_IsRuntimeMesh_Internal_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public unsafe int MeshArrayIndex
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_MeshArrayIndex_Internal_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_set_MeshArrayIndex_Internal_set_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe int MaterialArrayIndex
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_get_MaterialArrayIndex_Internal_get_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MaterialMeshInfo.NativeMethodInfoPtr_set_MaterialArrayIndex_Internal_set_Void_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Il2CppSystem.Object BoxIl2CppObject()
	{
		return new Il2CppSystem.Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MaterialMeshInfo>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Material;
	private static readonly IntPtr NativeFieldInfoPtr_Mesh;
	private static readonly IntPtr NativeFieldInfoPtr_m_SubMeshIndexInfo;
	private static readonly IntPtr NativeMethodInfoPtr_get_SubMesh_Public_get_UInt16_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_SubMesh_Public_set_Void_UInt16_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MaterialMeshIndexRange_Public_get_RangeInt_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_HasMaterialMeshIndexRange_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_Submesh_Public_get_SByte_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_Submesh_Public_set_Void_SByte_0;
	private static readonly IntPtr NativeMethodInfoPtr_ArrayIndexToStaticIndex_Public_Static_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_StaticIndexToArrayIndex_Public_Static_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromRenderMeshArrayIndices_Public_Static_MaterialMeshInfo_Int32_Int32_UInt16_0;
	private static readonly IntPtr NativeMethodInfoPtr_FromMaterialMeshIndexRange_Public_Static_MaterialMeshInfo_Int32_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Private_Void_Int32_Int32_SubMeshIndexInfo32_0;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_BatchMaterialID_BatchMeshID_UInt16_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MeshID_Public_get_BatchMeshID_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_MeshID_Public_set_Void_BatchMeshID_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MaterialID_Public_get_BatchMaterialID_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_MaterialID_Public_set_Void_BatchMaterialID_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsRuntimeMaterial_Internal_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsRuntimeMesh_Internal_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MeshArrayIndex_Internal_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_MeshArrayIndex_Internal_set_Void_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_get_MaterialArrayIndex_Internal_get_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_MaterialArrayIndex_Internal_set_Void_Int32_0;
	[FieldOffset(0)]
	public int Material;
	[FieldOffset(4)]
	public int Mesh;
	[FieldOffset(8)]
	public SubMeshIndexInfo32 m_SubMeshIndexInfo;
}
