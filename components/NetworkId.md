# NetworkId

```csharp
[StructLayout(2)]
public struct NetworkId
{
	static NetworkId()
	{
		Il2CppClassPointerStore<NetworkId>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "NetworkId");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkId>.NativeClassPtr);
		NetworkId.NativeFieldInfoPtr_Empty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "Empty");
		NetworkId.NativeFieldInfoPtr_Normal_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "Normal_Index");
		NetworkId.NativeFieldInfoPtr_Normal_Generation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "Normal_Generation");
		NetworkId.NativeFieldInfoPtr_MegaStatic_StaticTransformIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "MegaStatic_StaticTransformIndex");
		NetworkId.NativeFieldInfoPtr_MegaStatic_TerrainChunkX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "MegaStatic_TerrainChunkX");
		NetworkId.NativeFieldInfoPtr_MegaStatic_TerrainChunkY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "MegaStatic_TerrainChunkY");
		NetworkId.NativeFieldInfoPtr_MegaStatic_PrefabGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "MegaStatic_PrefabGUID");
		NetworkId.NativeFieldInfoPtr_Type = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "Type");
		NetworkId.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670364);
		NetworkId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670365);
		NetworkId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670366);
		NetworkId.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NetworkId_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670367);
		NetworkId.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NetworkId_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670368);
		NetworkId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670369);
		NetworkId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670370);
		NetworkId.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670371);
		NetworkId.NativeMethodInfoPtr_GetNetworkedEntity_Public_NetworkedEntity_byref_NetworkIdLookupMap_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670372);
		NetworkId.NativeMethodInfoPtr_GetMegaStaticTransformIndex_Public_StaticTransformIndex_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670373);
		NetworkId.NativeMethodInfoPtr_CreateNormal_Public_Static_NetworkId_NormalId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670374);
		NetworkId.NativeMethodInfoPtr_CreateNormal_Public_Static_NetworkId_Int32_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670375);
		NetworkId.NativeMethodInfoPtr_CreateMegaStatic_Public_Static_NetworkId_StaticTransformIndex_PrefabGUID_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, 100670376);
	}
	public unsafe bool IsValid
	{
		[CallerCount(5)]
		[CachedScanResults(RefRangeStart = 1128485, RefRangeEnd = 1128490, XrefRangeStart = 1128485, XrefRangeEnd = 1128485, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(10)]
	[CachedScanResults(RefRangeStart = 1128490, RefRangeEnd = 1128500, XrefRangeStart = 1128490, XrefRangeEnd = 1128490, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe bool Equals(NetworkId other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128500, XrefRangeEnd = 1128510, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128510, XrefRangeEnd = 1128514, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool operator !=(NetworkId value1, NetworkId value2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref value1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NetworkId_NetworkId_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128514, XrefRangeEnd = 1128518, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static bool operator ==(NetworkId value1, NetworkId value2)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref value1;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value2;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NetworkId_NetworkId_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1128518, RefRangeEnd = 1128519, XrefRangeStart = 1128518, XrefRangeEnd = 1128518, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128519, XrefRangeEnd = 1128548, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	[CallerCount(256)]
	[CachedScanResults(RefRangeStart = 1128585, RefRangeEnd = 1128841, XrefRangeStart = 1128548, XrefRangeEnd = 1128585, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe FixedString64Bytes ToFixedString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(924)]
	[CachedScanResults(RefRangeStart = 1128849, RefRangeEnd = 1129773, XrefRangeStart = 1128841, XrefRangeEnd = 1128849, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe NetworkedEntity GetNetworkedEntity([In] ref NetworkIdLookupMap networkIdLookupMap)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &networkIdLookupMap;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_GetNetworkedEntity_Public_NetworkedEntity_byref_NetworkIdLookupMap_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe StaticTransformIndex GetMegaStaticTransformIndex()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_GetMegaStaticTransformIndex_Public_StaticTransformIndex_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1129773, XrefRangeEnd = 1129776, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static NetworkId CreateNormal(NetworkId.NormalId normalId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref normalId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_CreateNormal_Public_Static_NetworkId_NormalId_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static NetworkId CreateNormal(int index, byte generation)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref index;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref generation;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_CreateNormal_Public_Static_NetworkId_Int32_Byte_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	public unsafe static NetworkId CreateMegaStatic(StaticTransformIndex staticTransformIndex, PrefabGUID prefabGuid)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref staticTransformIndex;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref prefabGuid;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_CreateMegaStatic_Public_Static_NetworkId_StaticTransformIndex_PrefabGUID_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, ref this));
	}
	public unsafe static NetworkId Empty
	{
		get
		{
			NetworkId result;
			IL2CPP.il2cpp_field_static_get_value(NetworkId.NativeFieldInfoPtr_Empty, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(NetworkId.NativeFieldInfoPtr_Empty, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_Empty;
	private static readonly IntPtr NativeFieldInfoPtr_Normal_Index;
	private static readonly IntPtr NativeFieldInfoPtr_Normal_Generation;
	private static readonly IntPtr NativeFieldInfoPtr_MegaStatic_StaticTransformIndex;
	private static readonly IntPtr NativeFieldInfoPtr_MegaStatic_TerrainChunkX;
	private static readonly IntPtr NativeFieldInfoPtr_MegaStatic_TerrainChunkY;
	private static readonly IntPtr NativeFieldInfoPtr_MegaStatic_PrefabGUID;
	private static readonly IntPtr NativeFieldInfoPtr_Type;
	private static readonly IntPtr NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NetworkId_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NetworkId_NetworkId_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetNetworkedEntity_Public_NetworkedEntity_byref_NetworkIdLookupMap_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetMegaStaticTransformIndex_Public_StaticTransformIndex_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateNormal_Public_Static_NetworkId_NormalId_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateNormal_Public_Static_NetworkId_Int32_Byte_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreateMegaStatic_Public_Static_NetworkId_StaticTransformIndex_PrefabGUID_0;
	[FieldOffset(0)]
	public int Normal_Index;
	[FieldOffset(4)]
	public byte Normal_Generation;
	[FieldOffset(0)]
	public short MegaStatic_StaticTransformIndex;
	[FieldOffset(2)]
	public sbyte MegaStatic_TerrainChunkX;
	[FieldOffset(3)]
	public sbyte MegaStatic_TerrainChunkY;
	[FieldOffset(4)]
	public int MegaStatic_PrefabGUID;
	[FieldOffset(8)]
	public NetworkIdType Type;
	[StructLayout(2)]
	public struct NormalId
	{
		static NormalId()
		{
			Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<NetworkId>.NativeClassPtr, "NormalId");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr);
			NetworkId.NormalId.NativeFieldInfoPtr_Empty = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, "Empty");
			NetworkId.NormalId.NativeFieldInfoPtr_Index = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, "Index");
			NetworkId.NormalId.NativeFieldInfoPtr_Generation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, "Generation");
			NetworkId.NormalId.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670378);
			NetworkId.NormalId.NativeMethodInfoPtr_ToNetworkId_Public_NetworkId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670379);
			NetworkId.NormalId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NormalId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670380);
			NetworkId.NormalId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670381);
			NetworkId.NormalId.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NormalId_NormalId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670382);
			NetworkId.NormalId.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NormalId_NormalId_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670383);
			NetworkId.NormalId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670384);
			NetworkId.NormalId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670385);
			NetworkId.NormalId.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670386);
			NetworkId.NormalId.NativeMethodInfoPtr_Create_Public_Static_NormalId_Int32_Byte_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, 100670387);
		}
		public unsafe bool IsValid
		{
			[CallerCount(0)]
			get
			{
				IntPtr* ptr = null;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
				return *IL2CPP.il2cpp_object_unbox(intPtr);
			}
		}
		[CallerCount(1)]
		[CachedScanResults(RefRangeStart = 1128444, RefRangeEnd = 1128445, XrefRangeStart = 1128438, XrefRangeEnd = 1128444, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe NetworkId ToNetworkId()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_ToNetworkId_Public_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe bool Equals(NetworkId.NormalId other)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref other;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NormalId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128445, XrefRangeEnd = 1128454, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe override bool Equals(Object obj)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128454, XrefRangeEnd = 1128457, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe static bool operator !=(NetworkId.NormalId value1, NetworkId.NormalId value2)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value1;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value2;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NormalId_NormalId_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128457, XrefRangeEnd = 1128460, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe static bool operator ==(NetworkId.NormalId value1, NetworkId.NormalId value2)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value1;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value2;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NormalId_NormalId_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe override int GetHashCode()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1128460, XrefRangeEnd = 1128470, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe override string ToString()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return IL2CPP.Il2CppStringToManaged(intPtr);
		}
		[CallerCount(4)]
		[CachedScanResults(RefRangeStart = 1128481, RefRangeEnd = 1128485, XrefRangeStart = 1128470, XrefRangeEnd = 1128481, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		public unsafe FixedString64Bytes ToFixedString()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		public unsafe static NetworkId.NormalId Create(int index, byte generation)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref index;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref generation;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_Create_Public_Static_NormalId_Int32_Byte_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<NetworkId.NormalId>.NativeClassPtr, ref this));
		}
		public unsafe static NetworkId.NormalId Empty
		{
			get
			{
				NetworkId.NormalId result;
				IL2CPP.il2cpp_field_static_get_value(NetworkId.NormalId.NativeFieldInfoPtr_Empty, (void*)(&result));
				return result;
			}
			set
			{
				IL2CPP.il2cpp_field_static_set_value(NetworkId.NormalId.NativeFieldInfoPtr_Empty, (void*)(&value));
			}
		}
		private static readonly IntPtr NativeFieldInfoPtr_Empty;
		private static readonly IntPtr NativeFieldInfoPtr_Index;
		private static readonly IntPtr NativeFieldInfoPtr_Generation;
		private static readonly IntPtr NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0;
		private static readonly IntPtr NativeMethodInfoPtr_ToNetworkId_Public_NetworkId_0;
		private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NormalId_0;
		private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
		private static readonly IntPtr NativeMethodInfoPtr_op_Inequality_Public_Static_Boolean_NormalId_NormalId_0;
		private static readonly IntPtr NativeMethodInfoPtr_op_Equality_Public_Static_Boolean_NormalId_NormalId_0;
		private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;
		private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
		private static readonly IntPtr NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0;
		private static readonly IntPtr NativeMethodInfoPtr_Create_Public_Static_NormalId_Int32_Byte_0;
		[FieldOffset(0)]
		public int Index;
		[FieldOffset(4)]
		public byte Generation;
	}
}
