---
nav_exclude: true
search_exclude: true
---

# Script_Sword_Shockwave_ReturnToTargetPosition_Data

```csharp
[StructLayout(2)]
public struct Script_Sword_Shockwave_ReturnToTargetPosition_Data
{
	static Script_Sword_Shockwave_ReturnToTargetPosition_Data()
	{
		Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_Sword_Shockwave_ReturnToTargetPosition_Data");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr);
		Script_Sword_Shockwave_ReturnToTargetPosition_Data.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, "TargetFilterCondition");
		Script_Sword_Shockwave_ReturnToTargetPosition_Data.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, "TargetPosition");
		Script_Sword_Shockwave_ReturnToTargetPosition_Data.NativeFieldInfoPtr_SelfTravelSpell = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, "SelfTravelSpell");
		Script_Sword_Shockwave_ReturnToTargetPosition_Data.NativeFieldInfoPtr_MinDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, "MinDuration");
		Script_Sword_Shockwave_ReturnToTargetPosition_Data.NativeFieldInfoPtr_MaxDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, "MaxDuration");
		Script_Sword_Shockwave_ReturnToTargetPosition_Data.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, "MaxRange");
		Script_Sword_Shockwave_ReturnToTargetPosition_Data.NativeFieldInfoPtr_SpawnBuff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, "SpawnBuff");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_Sword_Shockwave_ReturnToTargetPosition_Data>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_SelfTravelSpell;
	private static readonly IntPtr NativeFieldInfoPtr_MinDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnBuff;
	[FieldOffset(0)]
	public BlobAssetReference<ConditionBlob> TargetFilterCondition;
	[FieldOffset(8)]
	public float3 TargetPosition;
	[FieldOffset(20)]
	public PrefabGUID SelfTravelSpell;
	[FieldOffset(24)]
	public float MinDuration;
	[FieldOffset(28)]
	public float MaxDuration;
	[FieldOffset(32)]
	public float MaxRange;
	[FieldOffset(36)]
	[MarshalAs(4)]
	public bool SpawnBuff;
}
