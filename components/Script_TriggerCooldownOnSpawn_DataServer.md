# Script_TriggerCooldownOnSpawn_DataServer

```csharp
[StructLayout(2)]
public struct Script_TriggerCooldownOnSpawn_DataServer
{
	static Script_TriggerCooldownOnSpawn_DataServer()
	{
		Il2CppClassPointerStore<Script_TriggerCooldownOnSpawn_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_TriggerCooldownOnSpawn_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_TriggerCooldownOnSpawn_DataServer>.NativeClassPtr);
		Script_TriggerCooldownOnSpawn_DataServer.NativeFieldInfoPtr_CustomCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TriggerCooldownOnSpawn_DataServer>.NativeClassPtr, "CustomCooldown");
		Script_TriggerCooldownOnSpawn_DataServer.NativeFieldInfoPtr_TriggerAbility = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TriggerCooldownOnSpawn_DataServer>.NativeClassPtr, "TriggerAbility");
		Script_TriggerCooldownOnSpawn_DataServer.NativeFieldInfoPtr_FetchAbilityBaseCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_TriggerCooldownOnSpawn_DataServer>.NativeClassPtr, "FetchAbilityBaseCooldown");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_TriggerCooldownOnSpawn_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_CustomCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerAbility;
	private static readonly IntPtr NativeFieldInfoPtr_FetchAbilityBaseCooldown;
	[FieldOffset(0)]
	public float CustomCooldown;
	[FieldOffset(4)]
	public PrefabGUID TriggerAbility;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool FetchAbilityBaseCooldown;
}
