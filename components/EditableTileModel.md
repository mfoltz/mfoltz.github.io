---
nav_exclude: true
search_exclude: true
---

# EditableTileModel

```csharp
[StructLayout(2)]
public struct EditableTileModel
{
	static EditableTileModel()
	{
		Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EditableTileModel");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr);
		EditableTileModel.NativeFieldInfoPtr_CurrentEditor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "CurrentEditor");
		EditableTileModel.NativeFieldInfoPtr_DismantleAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "DismantleAbility");
		EditableTileModel.NativeFieldInfoPtr_PlaceAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "PlaceAbility");
		EditableTileModel.NativeFieldInfoPtr_RepairAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "RepairAbility");
		EditableTileModel.NativeFieldInfoPtr_IsEdited = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "IsEdited");
		EditableTileModel.NativeFieldInfoPtr_IsDismantling = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "IsDismantling");
		EditableTileModel.NativeFieldInfoPtr_IsRepairing = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "IsRepairing");
		EditableTileModel.NativeFieldInfoPtr_CanRotateDuringBuild = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "CanRotateDuringBuild");
		EditableTileModel.NativeFieldInfoPtr_CanMoveAfterBuild = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "CanMoveAfterBuild");
		EditableTileModel.NativeFieldInfoPtr_CanRotateAfterBuild = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "CanRotateAfterBuild");
		EditableTileModel.NativeFieldInfoPtr_CanDismantle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "CanDismantle");
		EditableTileModel.NativeFieldInfoPtr_CanRepair = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, "CanRepair");
		EditableTileModel.NativeMethodInfoPtr_SetEditor_Public_Void_Entity_Boolean_Boolean_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, 100665307);
	}
	[CallerCount(1)]
	[CachedScanResults(RefRangeStart = 1070442, RefRangeEnd = 1070443, XrefRangeStart = 1070439, XrefRangeEnd = 1070442, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe void SetEditor(Entity currentEditor, bool isEdited, bool isRepairing, bool isDismantling)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref currentEditor;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref isEdited;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref isRepairing;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref isDismantling;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(EditableTileModel.NativeMethodInfoPtr_SetEditor_Public_Void_Entity_Boolean_Boolean_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditableTileModel>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentEditor;
	private static readonly IntPtr NativeFieldInfoPtr_DismantleAbility;
	private static readonly IntPtr NativeFieldInfoPtr_PlaceAbility;
	private static readonly IntPtr NativeFieldInfoPtr_RepairAbility;
	private static readonly IntPtr NativeFieldInfoPtr_IsEdited;
	private static readonly IntPtr NativeFieldInfoPtr_IsDismantling;
	private static readonly IntPtr NativeFieldInfoPtr_IsRepairing;
	private static readonly IntPtr NativeFieldInfoPtr_CanRotateDuringBuild;
	private static readonly IntPtr NativeFieldInfoPtr_CanMoveAfterBuild;
	private static readonly IntPtr NativeFieldInfoPtr_CanRotateAfterBuild;
	private static readonly IntPtr NativeFieldInfoPtr_CanDismantle;
	private static readonly IntPtr NativeFieldInfoPtr_CanRepair;
	private static readonly IntPtr NativeMethodInfoPtr_SetEditor_Public_Void_Entity_Boolean_Boolean_Boolean_0;
	[FieldOffset(0)]
	public NetworkedEntity CurrentEditor;
	[FieldOffset(12)]
	public PrefabGUID DismantleAbility;
	[FieldOffset(16)]
	public PrefabGUID PlaceAbility;
	[FieldOffset(20)]
	public PrefabGUID RepairAbility;
	[FieldOffset(24)]
	[MarshalAs(4)]
	public bool IsEdited;
	[FieldOffset(25)]
	[MarshalAs(4)]
	public bool IsDismantling;
	[FieldOffset(26)]
	[MarshalAs(4)]
	public bool IsRepairing;
	[FieldOffset(27)]
	[MarshalAs(4)]
	public bool CanRotateDuringBuild;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool CanMoveAfterBuild;
	[FieldOffset(29)]
	[MarshalAs(4)]
	public bool CanRotateAfterBuild;
	[FieldOffset(30)]
	[MarshalAs(4)]
	public bool CanDismantle;
	[FieldOffset(31)]
	[MarshalAs(4)]
	public bool CanRepair;
}
