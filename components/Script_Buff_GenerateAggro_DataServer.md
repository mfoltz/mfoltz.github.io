# Script_Buff_GenerateAggro_DataServer

```csharp
[StructLayout(2)]
public struct Script_Buff_GenerateAggro_DataServer
{
	static Script_Buff_GenerateAggro_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_GenerateAggro_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_GenerateAggro_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_GenerateAggro_DataServer>.NativeClassPtr);
		Script_Buff_GenerateAggro_DataServer.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_GenerateAggro_DataServer>.NativeClassPtr, "Value");
		Script_Buff_GenerateAggro_DataServer.NativeFieldInfoPtr_From = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_GenerateAggro_DataServer>.NativeClassPtr, "From");
		Script_Buff_GenerateAggro_DataServer.NativeFieldInfoPtr_Towards = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_GenerateAggro_DataServer>.NativeClassPtr, "Towards");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_GenerateAggro_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;
	private static readonly IntPtr NativeFieldInfoPtr_From;
	private static readonly IntPtr NativeFieldInfoPtr_Towards;
	[FieldOffset(0)]
	public float Value;
	[FieldOffset(4)]
	public Script_Buff_GenerateAggro_Target From;
	[FieldOffset(8)]
	public Script_Buff_GenerateAggro_Target Towards;
}
