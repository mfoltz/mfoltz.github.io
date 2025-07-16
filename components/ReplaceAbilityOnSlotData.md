# ReplaceAbilityOnSlotData

```csharp
[StructLayout(2)]
public struct ReplaceAbilityOnSlotData
{
	static ReplaceAbilityOnSlotData()
	{
		Il2CppClassPointerStore<ReplaceAbilityOnSlotData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "ReplaceAbilityOnSlotData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ReplaceAbilityOnSlotData>.NativeClassPtr);
		ReplaceAbilityOnSlotData.NativeFieldInfoPtr_ModificationEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotData>.NativeClassPtr, "ModificationEntity");
		ReplaceAbilityOnSlotData.NativeFieldInfoPtr_CopyCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ReplaceAbilityOnSlotData>.NativeClassPtr, "CopyCooldown");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ReplaceAbilityOnSlotData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationEntity;
	private static readonly IntPtr NativeFieldInfoPtr_CopyCooldown;
	[FieldOffset(0)]
	public Entity ModificationEntity;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool CopyCooldown;
}
