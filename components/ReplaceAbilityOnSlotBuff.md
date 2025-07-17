---
nav_exclude: true
search_exclude: true
---

# ReplaceAbilityOnSlotBuff

```csharp
[Serializable]
[StructLayout(2)]
public struct ReplaceAbilityOnSlotBuff
{
	static ReplaceAbilityOnSlotBuff()
	{
		Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ReplaceAbilityOnSlotBuff");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr);
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "Target");
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_Slot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "Slot");
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_ReplaceGroupId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "ReplaceGroupId");
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_NewGroupId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "NewGroupId");
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_Priority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "Priority");
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "Condition");
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_CastBlockType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "CastBlockType");
		ReplaceAbilityOnSlotBuff.NativeFieldInfoPtr_CopyCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, "CopyCooldown");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplaceAbilityOnSlotBuff>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_Slot;
	private static readonly IntPtr NativeFieldInfoPtr_ReplaceGroupId;
	private static readonly IntPtr NativeFieldInfoPtr_NewGroupId;
	private static readonly IntPtr NativeFieldInfoPtr_Priority;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_CastBlockType;
	private static readonly IntPtr NativeFieldInfoPtr_CopyCooldown;
	[FieldOffset(0)]
	public ReplaceAbilityTarget Target;
	[FieldOffset(4)]
	public int Slot;
	[FieldOffset(8)]
	public PrefabGUID ReplaceGroupId;
	[FieldOffset(12)]
	public PrefabGUID NewGroupId;
	[FieldOffset(16)]
	public int Priority;
	[FieldOffset(24)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(32)]
	public GroupSlotModificationCastBlockType CastBlockType;
	[FieldOffset(36)]
	[MarshalAs(4)]
	public bool CopyCooldown;
}
