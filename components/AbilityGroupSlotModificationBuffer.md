# AbilityGroupSlotModificationBuffer

```csharp
[StructLayout(2)]
public struct AbilityGroupSlotModificationBuffer
{
	static AbilityGroupSlotModificationBuffer()
	{
		Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Systems.dll", "ProjectM", "AbilityGroupSlotModificationBuffer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr);
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_Owner = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "Owner");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "Target");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "ModificationId");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_CopyCooldownModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "CopyCooldownModificationId");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_SpellModModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "SpellModModificationId");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_NewAbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "NewAbilityGroup");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "Priority");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_Slot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "Slot");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "Condition");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_ConditionTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "ConditionTarget");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_CopyCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "CopyCooldown");
		AbilityGroupSlotModificationBuffer.NativeFieldInfoPtr_CastBlockType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, "CastBlockType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityGroupSlotModificationBuffer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Owner;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_CopyCooldownModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_SpellModModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_NewAbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_Slot;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_ConditionTarget;
	private static readonly IntPtr NativeFieldInfoPtr_CopyCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_CastBlockType;
	[FieldOffset(0)]
	public Entity Owner;
	[FieldOffset(8)]
	public Entity Target;
	[FieldOffset(16)]
	public ModificationId ModificationId;
	[FieldOffset(20)]
	public ModificationId CopyCooldownModificationId;
	[FieldOffset(24)]
	public ModificationId SpellModModificationId;
	[FieldOffset(28)]
	public PrefabGUID NewAbilityGroup;
	[FieldOffset(32)]
	public int Priority;
	[FieldOffset(36)]
	public int Slot;
	[FieldOffset(40)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(48)]
	public Entity ConditionTarget;
	[FieldOffset(56)]
	[MarshalAs(4)]
	public bool CopyCooldown;
	[FieldOffset(60)]
	public GroupSlotModificationCastBlockType CastBlockType;
}
