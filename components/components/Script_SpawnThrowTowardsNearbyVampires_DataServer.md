---
nav_exclude: true
search_exclude: true
---

# Script_SpawnThrowTowardsNearbyVampires_DataServer

```csharp
[StructLayout(2)]
public struct Script_SpawnThrowTowardsNearbyVampires_DataServer
{
	static Script_SpawnThrowTowardsNearbyVampires_DataServer()
	{
		Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "Script_SpawnThrowTowardsNearbyVampires_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr);
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_ThrowType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "ThrowType");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_MaximumCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "MaximumCount");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_CountPerTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "CountPerTarget");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "Radius");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_OffsetMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "OffsetMin");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_OffsetMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "OffsetMax");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_HitFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "HitFilter");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_TriggerId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "TriggerId");
		Script_SpawnThrowTowardsNearbyVampires_DataServer.NativeFieldInfoPtr_TargetFilterCondition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, "TargetFilterCondition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Script_SpawnThrowTowardsNearbyVampires_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ThrowType;
	private static readonly IntPtr NativeFieldInfoPtr_MaximumCount;
	private static readonly IntPtr NativeFieldInfoPtr_CountPerTarget;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetMin;
	private static readonly IntPtr NativeFieldInfoPtr_OffsetMax;
	private static readonly IntPtr NativeFieldInfoPtr_HitFilter;
	private static readonly IntPtr NativeFieldInfoPtr_TriggerId;
	private static readonly IntPtr NativeFieldInfoPtr_TargetFilterCondition;
	[FieldOffset(0)]
	public PrefabGUID ThrowType;
	[FieldOffset(4)]
	public int MaximumCount;
	[FieldOffset(8)]
	public int CountPerTarget;
	[FieldOffset(12)]
	public float Radius;
	[FieldOffset(16)]
	public float OffsetMin;
	[FieldOffset(20)]
	public float OffsetMax;
	[FieldOffset(24)]
	public HitFilter HitFilter;
	[FieldOffset(28)]
	public TriggerId TriggerId;
	[FieldOffset(40)]
	public BlobAssetReference<ConditionBlob> TargetFilterCondition;
}
