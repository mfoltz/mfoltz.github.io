---
nav_exclude: true
search_exclude: true
---

```csharp
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

	public Entity Owner;

	public Entity Target;

	public ModificationId ModificationId;

	public ModificationId CopyCooldownModificationId;

	public ModificationId SpellModModificationId;

	public PrefabGUID NewAbilityGroup;

	public int Priority;

	public int Slot;

	public BlobAssetReference<ConditionBlob> Condition;

	public Entity ConditionTarget;

	public bool CopyCooldown;

	public GroupSlotModificationCastBlockType CastBlockType;
}
```

## Server Systems

- [Update_ReplaceAbilityOnSlotSystem]({{% relref "systems/server/Update_ReplaceAbilityOnSlotSystem.md" %}})
