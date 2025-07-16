# Script_Buff_PowerMod_Stacking_DataServer

```csharp
[StructLayout(2)]
public struct Script_Buff_PowerMod_Stacking_DataServer
{
	static Script_Buff_PowerMod_Stacking_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_PowerMod_Stacking_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_PowerMod_Stacking_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_PowerMod_Stacking_DataServer>.NativeClassPtr);
		Script_Buff_PowerMod_Stacking_DataServer.NativeFieldInfoPtr_PhysicalPowerPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_PowerMod_Stacking_DataServer>.NativeClassPtr, "PhysicalPowerPerStack");
		Script_Buff_PowerMod_Stacking_DataServer.NativeFieldInfoPtr_PhysicalPowerModification = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_PowerMod_Stacking_DataServer>.NativeClassPtr, "PhysicalPowerModification");
		Script_Buff_PowerMod_Stacking_DataServer.NativeFieldInfoPtr_SpellPowerPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_PowerMod_Stacking_DataServer>.NativeClassPtr, "SpellPowerPerStack");
		Script_Buff_PowerMod_Stacking_DataServer.NativeFieldInfoPtr_SpellPowerModification = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_PowerMod_Stacking_DataServer>.NativeClassPtr, "SpellPowerModification");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_PowerMod_Stacking_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalPowerPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_PhysicalPowerModification;
	private static readonly IntPtr NativeFieldInfoPtr_SpellPowerPerStack;
	private static readonly IntPtr NativeFieldInfoPtr_SpellPowerModification;
	[FieldOffset(0)]
	public float PhysicalPowerPerStack;
	[FieldOffset(4)]
	public ModificationId PhysicalPowerModification;
	[FieldOffset(8)]
	public float SpellPowerPerStack;
	[FieldOffset(12)]
	public ModificationId SpellPowerModification;
}
