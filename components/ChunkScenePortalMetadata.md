# ChunkScenePortalMetadata

```csharp
[StructLayout(2)]
public struct ChunkScenePortalMetadata
{
	static ChunkScenePortalMetadata()
	{
		Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ChunkScenePortalMetadata");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr);
		ChunkScenePortalMetadata.NativeFieldInfoPtr_MaxPortals = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, "MaxPortals");
		ChunkScenePortalMetadata.NativeFieldInfoPtr_Portal0 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, "Portal0");
		ChunkScenePortalMetadata.NativeFieldInfoPtr_Portal1 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, "Portal1");
		ChunkScenePortalMetadata.NativeFieldInfoPtr_Portal2 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, "Portal2");
		ChunkScenePortalMetadata.NativeFieldInfoPtr_Portal3 = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, "Portal3");
		ChunkScenePortalMetadata.NativeMethodInfoPtr_get_Item_Public_get_Portal_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, 100664690);
		ChunkScenePortalMetadata.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_Portal_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, 100664691);
	}
	public unsafe ChunkScenePortalMetadata.Portal this[int index]
	{
		[CallerCount(2)]
		[CachedScanResults(RefRangeStart = 1063094, RefRangeEnd = 1063096, XrefRangeStart = 1063094, XrefRangeEnd = 1063094, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		get
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref index;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkScenePortalMetadata.NativeMethodInfoPtr_get_Item_Public_get_Portal_Int32_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(1)]
		[CachedScanResults(RefRangeStart = 1063096, RefRangeEnd = 1063097, XrefRangeStart = 1063096, XrefRangeEnd = 1063096, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref index;
			ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(ChunkScenePortalMetadata.NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_Portal_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, ref this));
	}
	public unsafe static int MaxPortals
	{
		get
		{
			int result;
			IL2CPP.il2cpp_field_static_get_value(ChunkScenePortalMetadata.NativeFieldInfoPtr_MaxPortals, (void*)(&result));
			return result;
		}
		set
		{
			IL2CPP.il2cpp_field_static_set_value(ChunkScenePortalMetadata.NativeFieldInfoPtr_MaxPortals, (void*)(&value));
		}
	}
	private static readonly IntPtr NativeFieldInfoPtr_MaxPortals;
	private static readonly IntPtr NativeFieldInfoPtr_Portal0;
	private static readonly IntPtr NativeFieldInfoPtr_Portal1;
	private static readonly IntPtr NativeFieldInfoPtr_Portal2;
	private static readonly IntPtr NativeFieldInfoPtr_Portal3;
	private static readonly IntPtr NativeMethodInfoPtr_get_Item_Public_get_Portal_Int32_0;
	private static readonly IntPtr NativeMethodInfoPtr_set_Item_Public_set_Void_Int32_Portal_0;
	[FieldOffset(0)]
	public ChunkScenePortalMetadata.Portal Portal0;
	[FieldOffset(72)]
	public ChunkScenePortalMetadata.Portal Portal1;
	[FieldOffset(144)]
	public ChunkScenePortalMetadata.Portal Portal2;
	[FieldOffset(216)]
	public ChunkScenePortalMetadata.Portal Portal3;
	[StructLayout(2)]
	public struct Portal
	{
		static Portal()
		{
			Il2CppClassPointerStore<ChunkScenePortalMetadata.Portal>.NativeClassPtr = IL2CPP.GetIl2CppNestedType(Il2CppClassPointerStore<ChunkScenePortalMetadata>.NativeClassPtr, "Portal");
			IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ChunkScenePortalMetadata.Portal>.NativeClassPtr);
			ChunkScenePortalMetadata.Portal.NativeFieldInfoPtr_PortalGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata.Portal>.NativeClassPtr, "PortalGUID");
			ChunkScenePortalMetadata.Portal.NativeFieldInfoPtr_LocalChunkTRS = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata.Portal>.NativeClassPtr, "LocalChunkTRS");
			ChunkScenePortalMetadata.Portal.NativeFieldInfoPtr_TransformIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ChunkScenePortalMetadata.Portal>.NativeClassPtr, "TransformIndex");
		}
		public Object BoxIl2CppObject()
		{
			return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ChunkScenePortalMetadata.Portal>.NativeClassPtr, ref this));
		}
		private static readonly IntPtr NativeFieldInfoPtr_PortalGUID;
		private static readonly IntPtr NativeFieldInfoPtr_LocalChunkTRS;
		private static readonly IntPtr NativeFieldInfoPtr_TransformIndex;
		[FieldOffset(0)]
		public PrefabGUID PortalGUID;
		[FieldOffset(4)]
		public float4x4 LocalChunkTRS;
		[FieldOffset(68)]
		public StaticTransformIndex TransformIndex;
	}
}
