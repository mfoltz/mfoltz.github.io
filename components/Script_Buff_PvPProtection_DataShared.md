# Script_Buff_PvPProtection_DataShared

```csharp
[StructLayout(2)]
public struct Script_Buff_PvPProtection_DataShared
{
	static Script_Buff_PvPProtection_DataShared()
	{
		Il2CppClassPointerStore<Script_Buff_PvPProtection_DataShared>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Buff_PvPProtection_DataShared");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Buff_PvPProtection_DataShared>.NativeClassPtr);
		Script_Buff_PvPProtection_DataShared.NativeFieldInfoPtr_ModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Buff_PvPProtection_DataShared>.NativeClassPtr, "ModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Buff_PvPProtection_DataShared>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ModificationId;
	[FieldOffset(0)]
	public ModificationId ModificationId;
}
