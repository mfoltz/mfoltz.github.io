# Script_Buff_FreeCast_DataServer

```csharp
[StructLayout(2)]
public struct Script_Buff_FreeCast_DataServer
{
	static Script_Buff_FreeCast_DataServer()
	{
		Il2CppClassPointerStore<Script_Buff_FreeCast_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_FreeCast_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_FreeCast_DataServer>.NativeClassPtr);
		Script_Buff_FreeCast_DataServer.NativeFieldInfoPtr_DestroyOnTrigger = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_FreeCast_DataServer>.NativeClassPtr, "DestroyOnTrigger");
		Script_Buff_FreeCast_DataServer.NativeFieldInfoPtr_DestroyBlockingPassive = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_FreeCast_DataServer>.NativeClassPtr, "DestroyBlockingPassive");
		Script_Buff_FreeCast_DataServer.NativeFieldInfoPtr_ChanceOfNotDestroyingPerPassiveStack = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_FreeCast_DataServer>.NativeClassPtr, "ChanceOfNotDestroyingPerPassiveStack");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_FreeCast_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DestroyOnTrigger;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyBlockingPassive;
	private static readonly IntPtr NativeFieldInfoPtr_ChanceOfNotDestroyingPerPassiveStack;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool DestroyOnTrigger;
	[FieldOffset(4)]
	public PrefabGUID DestroyBlockingPassive;
	[FieldOffset(8)]
	public float ChanceOfNotDestroyingPerPassiveStack;
}
