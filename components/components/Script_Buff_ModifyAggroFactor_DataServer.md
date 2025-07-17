---
nav_exclude: true
search_exclude: true
---

# Script_Buff_ModifyAggroFactor_DataServer

```csharp
[StructLayout(2)]
public struct Script_Buff_ModifyAggroFactor_DataServer
{
	static Script_Buff_ModifyAggroFactor_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_ModifyAggroFactor_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_ModifyAggroFactor_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_ModifyAggroFactor_DataServer>.NativeClassPtr);
		Script_Buff_ModifyAggroFactor_DataServer.NativeFieldInfoPtr_Factor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyAggroFactor_DataServer>.NativeClassPtr, "Factor");
		Script_Buff_ModifyAggroFactor_DataServer.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyAggroFactor_DataServer>.NativeClassPtr, "Target");
		Script_Buff_ModifyAggroFactor_DataServer.NativeFieldInfoPtr_ModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_ModifyAggroFactor_DataServer>.NativeClassPtr, "ModId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_ModifyAggroFactor_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Factor;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_ModId;
	[FieldOffset(0)]
	public float Factor;
	[FieldOffset(4)]
	public Script_Buff_ModifyAggroFactor_Target Target;
	[FieldOffset(8)]
	public ModificationId ModId;
}
