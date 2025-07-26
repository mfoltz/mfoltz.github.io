# AbilityChargeBuff_DataServer

```csharp
[StructLayout(2)]
public struct AbilityChargeBuff_DataServer
{
	static AbilityChargeBuff_DataServer()
	{
		Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "AbilityChargeBuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr);
		AbilityChargeBuff_DataServer.NativeFieldInfoPtr_AbilityGroup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr, "AbilityGroup");
		AbilityChargeBuff_DataServer.NativeFieldInfoPtr_AbilitySlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr, "AbilitySlot");
		AbilityChargeBuff_DataServer.NativeFieldInfoPtr_AbilityModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr, "AbilityModificationId");
		AbilityChargeBuff_DataServer.NativeFieldInfoPtr_WeaponChargeAbilityPriority = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr, "WeaponChargeAbilityPriority");
		AbilityChargeBuff_DataServer.NativeFieldInfoPtr_ConsumeWhenInterrupted = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr, "ConsumeWhenInterrupted");
		AbilityChargeBuff_DataServer.NativeFieldInfoPtr_ResetOnAnyAbilityUseForSlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr, "ResetOnAnyAbilityUseForSlot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AbilityChargeBuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilityGroup;
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlot;
	private static readonly IntPtr NativeFieldInfoPtr_AbilityModificationId;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponChargeAbilityPriority;
	private static readonly IntPtr NativeFieldInfoPtr_ConsumeWhenInterrupted;
	private static readonly IntPtr NativeFieldInfoPtr_ResetOnAnyAbilityUseForSlot;
	[FieldOffset(0)]
	public PrefabGUID AbilityGroup;
	[FieldOffset(4)]
	public int AbilitySlot;
	[FieldOffset(8)]
	public ModificationId AbilityModificationId;
	[FieldOffset(12)]
	public int WeaponChargeAbilityPriority;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool ConsumeWhenInterrupted;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool ResetOnAnyAbilityUseForSlot;
}
