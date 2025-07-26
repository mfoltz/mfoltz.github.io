# Script_AbilityResetAbilityComboOnGameplayEvent_Server

```csharp
[StructLayout(2)]
public struct Script_AbilityResetAbilityComboOnGameplayEvent_Server
{
	static Script_AbilityResetAbilityComboOnGameplayEvent_Server()
	{
		Il2CppClassPointerStore<Script_AbilityResetAbilityComboOnGameplayEvent_Server>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_AbilityResetAbilityComboOnGameplayEvent_Server");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_AbilityResetAbilityComboOnGameplayEvent_Server>.NativeClassPtr);
		Script_AbilityResetAbilityComboOnGameplayEvent_Server.NativeFieldInfoPtr_AbilitySlot = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_AbilityResetAbilityComboOnGameplayEvent_Server>.NativeClassPtr, "AbilitySlot");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_AbilityResetAbilityComboOnGameplayEvent_Server>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AbilitySlot;
	[FieldOffset(0)]
	public int AbilitySlot;
}
