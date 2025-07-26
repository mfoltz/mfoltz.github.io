# Script_SetWeaponRunCycle_DataClient

```csharp
[StructLayout(2)]
public struct Script_SetWeaponRunCycle_DataClient
{
	static Script_SetWeaponRunCycle_DataClient()
	{
		Il2CppClassPointerStore<Script_SetWeaponRunCycle_DataClient>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SetWeaponRunCycle_DataClient");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SetWeaponRunCycle_DataClient>.NativeClassPtr);
		Script_SetWeaponRunCycle_DataClient.NativeFieldInfoPtr_WeaponType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetWeaponRunCycle_DataClient>.NativeClassPtr, "WeaponType");
		Script_SetWeaponRunCycle_DataClient.NativeFieldInfoPtr_WeaponRunCycleModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SetWeaponRunCycle_DataClient>.NativeClassPtr, "WeaponRunCycleModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SetWeaponRunCycle_DataClient>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_WeaponType;
	private static readonly IntPtr NativeFieldInfoPtr_WeaponRunCycleModificationId;
	[FieldOffset(0)]
	public WeaponType WeaponType;
	[FieldOffset(4)]
	public ModificationId WeaponRunCycleModificationId;
}
