---
nav_exclude: true
search_exclude: true
---

# Script_SpawnTravelToTargetOriginPosition_DataServer

```csharp
[StructLayout(2)]
public struct Script_SpawnTravelToTargetOriginPosition_DataServer
{
	static Script_SpawnTravelToTargetOriginPosition_DataServer()
	{
		Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SpawnTravelToTargetOriginPosition_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr);
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "TargetFilterCondition");
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_SelfTravelSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "SelfTravelSpell");
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_ActivateScriptWhenPlayersHasBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "ActivateScriptWhenPlayersHasBuff");
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_TargetOriginPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "TargetOriginPosition");
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_MinDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "MinDuration");
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_MaxDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "MaxDuration");
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "MaxRange");
		Script_SpawnTravelToTargetOriginPosition_DataServer.NativeFieldInfoPtr_Activated = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, "Activated");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SpawnTravelToTargetOriginPosition_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_SelfTravelSpell;
	private static readonly IntPtr NativeFieldInfoPtr_ActivateScriptWhenPlayersHasBuff;
	private static readonly IntPtr NativeFieldInfoPtr_TargetOriginPosition;
	private static readonly IntPtr NativeFieldInfoPtr_MinDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_Activated;
	[FieldOffset(0)]
	public BlobAssetReference<ConditionBlob> TargetFilterCondition;
	[FieldOffset(8)]
	public PrefabGUID SelfTravelSpell;
	[FieldOffset(12)]
	public PrefabGUID ActivateScriptWhenPlayersHasBuff;
	[FieldOffset(16)]
	public float3 TargetOriginPosition;
	[FieldOffset(28)]
	public float MinDuration;
	[FieldOffset(32)]
	public float MaxDuration;
	[FieldOffset(36)]
	public float MaxRange;
	[FieldOffset(40)]
	[MarshalAs(4)]
	public bool Activated;
}
