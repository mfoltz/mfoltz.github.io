---
nav_exclude: true
search_exclude: true
---

# Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer

```csharp
[StructLayout(2)]
public struct Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer
{
	static Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer()
	{
		Il2CppClassPointerStore<Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer>.NativeClassPtr);
		Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer.NativeFieldInfoPtr_MovementSpeedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer>.NativeClassPtr, "MovementSpeedModId");
		Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer.NativeFieldInfoPtr_MovementSpeedPerStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer>.NativeClassPtr, "MovementSpeedPerStack");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SpellSchoolPassive_ShapeshiftEmpowered_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeedModId;
	private static readonly IntPtr NativeFieldInfoPtr_MovementSpeedPerStack;
	[FieldOffset(0)]
	public ModificationId MovementSpeedModId;
	[FieldOffset(4)]
	public float MovementSpeedPerStack;
}
