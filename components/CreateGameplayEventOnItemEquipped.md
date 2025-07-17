---
nav_exclude: true
search_exclude: true
---

# CreateGameplayEventOnItemEquipped

```csharp
[StructLayout(2)]
public struct CreateGameplayEventOnItemEquipped
{
	static CreateGameplayEventOnItemEquipped()
	{
		Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CreateGameplayEventOnItemEquipped");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr);
		CreateGameplayEventOnItemEquipped.NativeFieldInfoPtr_EventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr, "EventId");
		CreateGameplayEventOnItemEquipped.NativeFieldInfoPtr_EquipmentType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr, "EquipmentType");
		CreateGameplayEventOnItemEquipped.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr, "Condition");
		CreateGameplayEventOnItemEquipped.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr, "Source");
		CreateGameplayEventOnItemEquipped.NativeFieldInfoPtr_TriggerOnUnEquip = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr, "TriggerOnUnEquip");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CreateGameplayEventOnItemEquipped>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_EventId;
	private static readonly IntPtr NativeFieldInfoPtr_EquipmentType;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerOnUnEquip;
	[FieldOffset(0)]
	public GameplayEventId EventId;
	[FieldOffset(8)]
	public EquipmentType EquipmentType;
	[FieldOffset(16)]
	public BlobAssetReference<ConditionBlob> Condition;
	[FieldOffset(24)]
	public ItemEquipTarget Source;
	[FieldOffset(28)]
	[MarshalAs(4)]
	public bool TriggerOnUnEquip;
}
