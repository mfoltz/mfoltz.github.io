# CastleBuildingAttachSettings

```csharp
[StructLayout(2)]
public struct CastleBuildingAttachSettings
{
	static CastleBuildingAttachSettings()
	{
		Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleBuildingAttachSettings");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr);
		CastleBuildingAttachSettings.NativeFieldInfoPtr_MoveWithParentWhenAttached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, "MoveWithParentWhenAttached");
		CastleBuildingAttachSettings.NativeFieldInfoPtr_DestroyWithParentWhenAttached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, "DestroyWithParentWhenAttached");
		CastleBuildingAttachSettings.NativeFieldInfoPtr_LinkDestroyToParentWhenAttached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, "LinkDestroyToParentWhenAttached");
		CastleBuildingAttachSettings.NativeFieldInfoPtr_RestrictMoveWhenAttached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, "RestrictMoveWhenAttached");
		CastleBuildingAttachSettings.NativeFieldInfoPtr_RestrictDismantleWhenAttached = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, "RestrictDismantleWhenAttached");
		CastleBuildingAttachSettings.NativeFieldInfoPtr_MoveWithParentAlsoMovesOtherParents = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, "MoveWithParentAlsoMovesOtherParents");
		CastleBuildingAttachSettings.NativeMethodInfoPtr_Default_Public_Static_CastleBuildingAttachSettings_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, 100671523);
		CastleBuildingAttachSettings.NativeMethodInfoPtr_ToString_Public_Virtual_String_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, 100671524);
	}
	[CallerCount(0)]
	public unsafe static CastleBuildingAttachSettings Default()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleBuildingAttachSettings.NativeMethodInfoPtr_Default_Public_Static_CastleBuildingAttachSettings_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	[CallerCount(0)]
	[CachedScanResults(RefRangeStart = 0, RefRangeEnd = 0, XrefRangeStart = 1148841, XrefRangeEnd = 1148873, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe override string ToString()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(CastleBuildingAttachSettings.NativeMethodInfoPtr_ToString_Public_Virtual_String_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return IL2CPP.Il2CppStringToManaged(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleBuildingAttachSettings>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MoveWithParentWhenAttached;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyWithParentWhenAttached;
	private static readonly IntPtr NativeFieldInfoPtr_LinkDestroyToParentWhenAttached;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictMoveWhenAttached;
	private static readonly IntPtr NativeFieldInfoPtr_RestrictDismantleWhenAttached;
	private static readonly IntPtr NativeFieldInfoPtr_MoveWithParentAlsoMovesOtherParents;
	private static readonly IntPtr NativeMethodInfoPtr_Default_Public_Static_CastleBuildingAttachSettings_0;
	private static readonly IntPtr NativeMethodInfoPtr_ToString_Public_Virtual_String_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool MoveWithParentWhenAttached;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool DestroyWithParentWhenAttached;
	[FieldOffset(2)]
	[MarshalAs(4)]
	public bool LinkDestroyToParentWhenAttached;
	[FieldOffset(3)]
	[MarshalAs(4)]
	public bool RestrictMoveWhenAttached;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool RestrictDismantleWhenAttached;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool MoveWithParentAlsoMovesOtherParents;
}
