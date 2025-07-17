---
nav_exclude: true
search_exclude: true
---

# Script_Blood_CrimsonBeam_DataServer

```csharp
[StructLayout(2)]
public struct Script_Blood_CrimsonBeam_DataServer
{
	static Script_Blood_CrimsonBeam_DataServer()
	{
		Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Blood_CrimsonBeam_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr);
		Script_Blood_CrimsonBeam_DataServer.NativeFieldInfoPtr_TickRate = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr, "TickRate");
		Script_Blood_CrimsonBeam_DataServer.NativeFieldInfoPtr_DamageParameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr, "DamageParameters");
		Script_Blood_CrimsonBeam_DataServer.NativeFieldInfoPtr_HealParameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr, "HealParameters");
		Script_Blood_CrimsonBeam_DataServer.NativeFieldInfoPtr_TickEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr, "TickEventId");
		Script_Blood_CrimsonBeam_DataServer.NativeFieldInfoPtr_SelfHealParameters = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr, "SelfHealParameters");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Blood_CrimsonBeam_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TickRate;
	private static readonly IntPtr NativeFieldInfoPtr_DamageParameters;
	private static readonly IntPtr NativeFieldInfoPtr_HealParameters;
	private static readonly IntPtr NativeFieldInfoPtr_TickEventId;
	private static readonly IntPtr NativeFieldInfoPtr_SelfHealParameters;
	[FieldOffset(0)]
	public float TickRate;
	[FieldOffset(4)]
	public DealDamageParameters DamageParameters;
	[FieldOffset(124)]
	public HealUtility.DealHealingParameters HealParameters;
	[FieldOffset(140)]
	public GameplayEventId TickEventId;
	[FieldOffset(148)]
	public HealUtility.DealHealingParameters SelfHealParameters;
}
