---
nav_exclude: true
search_exclude: true
---

# EditableTileModel

```csharp
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

	public NetworkedEntity CurrentEditor;

	public PrefabGUID DismantleAbility;

	public PrefabGUID PlaceAbility;

	public PrefabGUID RepairAbility;

	public bool IsEdited;

	public bool IsDismantling;

	public bool IsRepairing;

	public bool CanRotateDuringBuild;

	public bool CanMoveAfterBuild;

	public bool CanRotateAfterBuild;

	public bool CanDismantle;

	public bool CanRepair;
}
```
