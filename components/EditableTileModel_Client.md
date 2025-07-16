# EditableTileModel_Client

```csharp
[StructLayout(2)]
public struct EditableTileModel_Client
{
	static EditableTileModel_Client()
	{
		Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "EditableTileModel_Client");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr);
		EditableTileModel_Client.NativeFieldInfoPtr_CurrentEditOptions = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "CurrentEditOptions");
		EditableTileModel_Client.NativeFieldInfoPtr_EffectTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "EffectTarget");
		EditableTileModel_Client.NativeFieldInfoPtr_ActiveEffectTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "ActiveEffectTarget");
		EditableTileModel_Client.NativeFieldInfoPtr_EditedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "EditedSequence");
		EditableTileModel_Client.NativeFieldInfoPtr_HoveredCanBeEditedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "HoveredCanBeEditedSequence");
		EditableTileModel_Client.NativeFieldInfoPtr_HoveredOnlyDismantleSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "HoveredOnlyDismantleSequence");
		EditableTileModel_Client.NativeFieldInfoPtr_HoveredBlockedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "HoveredBlockedSequence");
		EditableTileModel_Client.NativeFieldInfoPtr_DismantlingSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "DismantlingSequence");
		EditableTileModel_Client.NativeFieldInfoPtr_RepairingSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "RepairingSequence");
		EditableTileModel_Client.NativeFieldInfoPtr_EditedSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "EditedSequenceState");
		EditableTileModel_Client.NativeFieldInfoPtr_HoveredSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "HoveredSequenceState");
		EditableTileModel_Client.NativeFieldInfoPtr_DismantlingSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "DismantlingSequenceState");
		EditableTileModel_Client.NativeFieldInfoPtr_RepairingSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "RepairingSequenceState");
		EditableTileModel_Client.NativeFieldInfoPtr_IsHovered = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, "IsHovered");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditableTileModel_Client>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CurrentEditOptions;
	private static readonly IntPtr NativeFieldInfoPtr_EffectTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveEffectTarget;
	private static readonly IntPtr NativeFieldInfoPtr_EditedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_HoveredCanBeEditedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_HoveredOnlyDismantleSequence;
	private static readonly IntPtr NativeFieldInfoPtr_HoveredBlockedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_DismantlingSequence;
	private static readonly IntPtr NativeFieldInfoPtr_RepairingSequence;
	private static readonly IntPtr NativeFieldInfoPtr_EditedSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_HoveredSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_DismantlingSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_RepairingSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_IsHovered;
	[FieldOffset(0)]
	public EditableTileModel_Client.EditOptions CurrentEditOptions;
	[FieldOffset(4)]
	public Entity EffectTarget;
	[FieldOffset(12)]
	public Entity ActiveEffectTarget;
	[FieldOffset(20)]
	public SequenceGUID EditedSequence;
	[FieldOffset(24)]
	public SequenceGUID HoveredCanBeEditedSequence;
	[FieldOffset(28)]
	public SequenceGUID HoveredOnlyDismantleSequence;
	[FieldOffset(32)]
	public SequenceGUID HoveredBlockedSequence;
	[FieldOffset(36)]
	public SequenceGUID DismantlingSequence;
	[FieldOffset(40)]
	public SequenceGUID RepairingSequence;
	[FieldOffset(44)]
	public SequenceState EditedSequenceState;
	[FieldOffset(52)]
	public SequenceState HoveredSequenceState;
	[FieldOffset(60)]
	public SequenceState DismantlingSequenceState;
	[FieldOffset(68)]
	public SequenceState RepairingSequenceState;
	[FieldOffset(76)]
	[MarshalAs(4)]
	public bool IsHovered;
	public enum EditOptions
	{
		CanBeEdited,
		OnlyDismantle,
		Blocked,
		OnlyRepair
	}
}
