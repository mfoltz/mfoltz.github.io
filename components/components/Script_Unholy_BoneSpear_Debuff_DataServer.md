---
nav_exclude: true
search_exclude: true
---

# Script_Unholy_BoneSpear_Debuff_DataServer

```csharp
[StructLayout(2)]
public struct Script_Unholy_BoneSpear_Debuff_DataServer
{
	static Script_Unholy_BoneSpear_Debuff_DataServer()
	{
		Il2CppClassPointerStore<Script_Unholy_BoneSpear_Debuff_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Unholy_BoneSpear_Debuff_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Debuff_DataServer>.NativeClassPtr);
		Script_Unholy_BoneSpear_Debuff_DataServer.NativeFieldInfoPtr_AmplifyFactor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Debuff_DataServer>.NativeClassPtr, "AmplifyFactor");
		Script_Unholy_BoneSpear_Debuff_DataServer.NativeFieldInfoPtr_OnDamageTakenListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Debuff_DataServer>.NativeClassPtr, "OnDamageTakenListener");
		Script_Unholy_BoneSpear_Debuff_DataServer.NativeFieldInfoPtr_OnTargetDeathListener = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Debuff_DataServer>.NativeClassPtr, "OnTargetDeathListener");
		Script_Unholy_BoneSpear_Debuff_DataServer.NativeFieldInfoPtr_SpawnSpellType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Debuff_DataServer>.NativeClassPtr, "SpawnSpellType");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Unholy_BoneSpear_Debuff_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AmplifyFactor;
	private static readonly IntPtr NativeFieldInfoPtr_OnDamageTakenListener;
	private static readonly IntPtr NativeFieldInfoPtr_OnTargetDeathListener;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnSpellType;
	[FieldOffset(0)]
	public float AmplifyFactor;
	[FieldOffset(4)]
	public ListenerId OnDamageTakenListener;
	[FieldOffset(12)]
	public ListenerId OnTargetDeathListener;
	[FieldOffset(20)]
	public PrefabGUID SpawnSpellType;
}
