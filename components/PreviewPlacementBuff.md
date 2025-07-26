# PreviewPlacementBuff

```csharp
[StructLayout(2)]
public struct PreviewPlacementBuff
{
	static PreviewPlacementBuff()
	{
		Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PreviewPlacementBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr);
		PreviewPlacementBuff.NativeFieldInfoPtr_PreviewRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "PreviewRotation");
		PreviewPlacementBuff.NativeFieldInfoPtr_PreviewSnappedPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "PreviewSnappedPosition");
		PreviewPlacementBuff.NativeFieldInfoPtr_PreviewBlueprintPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "PreviewBlueprintPrefabGuid");
		PreviewPlacementBuff.NativeFieldInfoPtr_PreviewEditingEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "PreviewEditingEntity");
		PreviewPlacementBuff.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "Target");
		PreviewPlacementBuff.NativeFieldInfoPtr_PreviewEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "PreviewEntity");
		PreviewPlacementBuff.NativeFieldInfoPtr_EditingEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "EditingEntity");
		PreviewPlacementBuff.NativeFieldInfoPtr_BlueprintPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "BlueprintPrefabGuid");
		PreviewPlacementBuff.NativeFieldInfoPtr_PreviewPrefabGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "PreviewPrefabGuid");
		PreviewPlacementBuff.NativeFieldInfoPtr_PlacementMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "PlacementMode");
		PreviewPlacementBuff.NativeFieldInfoPtr_HideUntilMoved = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, "HideUntilMoved");
		PreviewPlacementBuff.NativeMethodInfoPtr_get_ForceAutoSnap_Public_Static_get_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, 100667407);
		PreviewPlacementBuff.NativeMethodInfoPtr_CreatePreviewSequence_Public_PreviewPlacementSequence_EntityManager_Entity_Entity_Boolean_PrefabLookupMap_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, 100667408);
	}
	public unsafe static bool ForceAutoSnap
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PreviewPlacementBuff.NativeMethodInfoPtr_get_ForceAutoSnap_Public_Static_get_Boolean_0, 0, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 76446, RefRangeEnd = 76447, XrefRangeStart = 76424, XrefRangeEnd = 76446, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe PreviewPlacementSequence CreatePreviewSequence(EntityManager entityManager, Entity blueprintPrefab, Entity previewInstance, bool isPlacementValid, PrefabLookupMap prefabLookupMap)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref entityManager;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref blueprintPrefab;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref previewInstance;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref isPlacementValid;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref prefabLookupMap;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PreviewPlacementBuff.NativeMethodInfoPtr_CreatePreviewSequence_Public_PreviewPlacementSequence_EntityManager_Entity_Entity_Boolean_PrefabLookupMap_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PreviewPlacementBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PreviewRotation;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewSnappedPosition;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewBlueprintPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewEditingEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewEntity;
	private static readonly IntPtr NativeFieldInfoPtr_EditingEntity;
	private static readonly IntPtr NativeFieldInfoPtr_BlueprintPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_PreviewPrefabGuid;
	private static readonly IntPtr NativeFieldInfoPtr_PlacementMode;
	private static readonly IntPtr NativeFieldInfoPtr_HideUntilMoved;
	private static readonly IntPtr NativeMethodInfoPtr_get_ForceAutoSnap_Public_Static_get_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_CreatePreviewSequence_Public_PreviewPlacementSequence_EntityManager_Entity_Entity_Boolean_PrefabLookupMap_0;
	[FieldOffset(0)]
	public Nullable_Unboxed<quaternion> PreviewRotation;
	[FieldOffset(20)]
	public Nullable_Unboxed<float3> PreviewSnappedPosition;
	[FieldOffset(36)]
	public Nullable_Unboxed<PrefabGUID> PreviewBlueprintPrefabGuid;
	[FieldOffset(44)]
	public Nullable_Unboxed<Entity> PreviewEditingEntity;
	[FieldOffset(56)]
	public Entity Target;
	[FieldOffset(64)]
	public Entity PreviewEntity;
	[FieldOffset(72)]
	public Entity EditingEntity;
	[FieldOffset(80)]
	public PrefabGUID BlueprintPrefabGuid;
	[FieldOffset(84)]
	public PrefabGUID PreviewPrefabGuid;
	[FieldOffset(88)]
	public PlacementMode PlacementMode;
	[FieldOffset(92)]
	[MarshalAs(4)]
	public bool HideUntilMoved;
}
