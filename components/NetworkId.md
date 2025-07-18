---
nav_exclude: true
search_exclude: true
---

# NetworkId

```csharp
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

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}

	public unsafe bool Equals(NetworkId other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}

	public unsafe FixedString64Bytes ToFixedString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe NetworkedEntity GetNetworkedEntity([In] ref NetworkIdLookupMap networkIdLookupMap)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = &networkIdLookupMap;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_GetNetworkedEntity_Public_NetworkedEntity_byref_NetworkIdLookupMap_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe StaticTransformIndex GetMegaStaticTransformIndex()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_GetMegaStaticTransformIndex_Public_StaticTransformIndex_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe static NetworkId CreateNormal(NetworkId.NormalId normalId)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref normalId;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NativeMethodInfoPtr_CreateNormal_Public_Static_NetworkId_NormalId_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

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

	public int Normal_Index;

	public byte Normal_Generation;

	public short MegaStatic_StaticTransformIndex;

	public sbyte MegaStatic_TerrainChunkX;

	public sbyte MegaStatic_TerrainChunkY;

	public int MegaStatic_PrefabGUID;

	public NetworkIdType Type;

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

			get
			{
				IntPtr* ptr = null;
				IntPtr intPtr2;
				IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_get_IsValid_Public_get_Boolean_0, ref this, (void**)ptr, ref intPtr2);
				Il2CppException.RaiseExceptionIfNecessary(intPtr2);
				return *IL2CPP.il2cpp_object_unbox(intPtr);
			}
		}

		public unsafe NetworkId ToNetworkId()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_ToNetworkId_Public_NetworkId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe bool Equals(NetworkId.NormalId other)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref other;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_NormalId_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe override bool Equals(Object obj)
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

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

		public unsafe override int GetHashCode()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		public unsafe override string ToString()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return IL2CPP.Il2CppStringToManaged(intPtr);
		}

		public unsafe FixedString64Bytes ToFixedString()
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(NetworkId.NormalId.NativeMethodInfoPtr_ToFixedString_Public_FixedString64Bytes_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

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

		public int Index;

		public byte Generation;
	}
}
```

## Server Systems

- [CastleRebuildRegistryOnSpawnSystem](/systems/server/CastleRebuildRegistryOnSpawnSystem)
- [ReturnNetworkIdSystem_Server](/systems/server/ReturnNetworkIdSystem_Server)
- [ReturnNetworkIdSystem_Server_MegaStatics](/systems/server/ReturnNetworkIdSystem_Server_MegaStatics)
- [SetupNetworkIdSystem](/systems/server/SetupNetworkIdSystem)
- [SetupNetworkIdSystem_PreSerialize](/systems/server/SetupNetworkIdSystem_PreSerialize)
- [UpdateSnapshotsSystem](/systems/server/UpdateSnapshotsSystem)

## Client Systems

- [CleanUpWeakRefsSystem](/systems/client/CleanUpWeakRefsSystem)
- [RegisterMegaStaticWeakRefNetworkIdsSystem](/systems/client/RegisterMegaStaticWeakRefNetworkIdsSystem)
