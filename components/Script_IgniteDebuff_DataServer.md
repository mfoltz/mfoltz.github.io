# Script_IgniteDebuff_DataServer

```csharp
[StructLayout(2)]
public struct Script_IgniteDebuff_DataServer
{
	static Script_IgniteDebuff_DataServer()
	{
		Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_IgniteDebuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr);
		Script_IgniteDebuff_DataServer.NativeFieldInfoPtr_TotalTicks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr, "TotalTicks");
		Script_IgniteDebuff_DataServer.NativeFieldInfoPtr_Damage_TotalProcentualHealth_Vampire = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr, "Damage_TotalProcentualHealth_Vampire");
		Script_IgniteDebuff_DataServer.NativeFieldInfoPtr_Damage_TotalProcentualHealth_Pve = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr, "Damage_TotalProcentualHealth_Pve");
		Script_IgniteDebuff_DataServer.NativeFieldInfoPtr_TicksCounter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr, "TicksCounter");
		Script_IgniteDebuff_DataServer.NativeFieldInfoPtr_StaticPveBonusDamage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr, "StaticPveBonusDamage");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_IgniteDebuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TotalTicks;
	private static readonly IntPtr NativeFieldInfoPtr_Damage_TotalProcentualHealth_Vampire;
	private static readonly IntPtr NativeFieldInfoPtr_Damage_TotalProcentualHealth_Pve;
	private static readonly IntPtr NativeFieldInfoPtr_TicksCounter;
	private static readonly IntPtr NativeFieldInfoPtr_StaticPveBonusDamage;
	[FieldOffset(0)]
	public float TotalTicks;
	[FieldOffset(4)]
	public float Damage_TotalProcentualHealth_Vampire;
	[FieldOffset(8)]
	public float Damage_TotalProcentualHealth_Pve;
	[FieldOffset(12)]
	public float TicksCounter;
	[FieldOffset(16)]
	public float StaticPveBonusDamage;
}
