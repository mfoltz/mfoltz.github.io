---
nav_exclude: true
search_exclude: false
---

# EvenSpreadCluster_Tick_DataServer

```csharp
public struct EvenSpreadCluster_Tick_DataServer
{
	static EvenSpreadCluster_Tick_DataServer()
	{
		Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "EvenSpreadCluster_Tick_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr);
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_OffsetAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "OffsetAngle");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_RandomAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "RandomAngle");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_RotationPerTick = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "RotationPerTick");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "Count");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_TicksDone = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "TicksDone");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_IndividualRandom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "IndividualRandom");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_UseAimDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "UseAimDirection");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_UseSelfRotation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "UseSelfRotation");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_UseAIReturnPosAsOrigo = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "UseAIReturnPosAsOrigo");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_AlwaysMaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "AlwaysMaxRange");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_SpawnOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "SpawnOffset");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_IgnoreCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "IgnoreCollision");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_FullCircleSpread = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "FullCircleSpread");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_SpawnPrefabInsteadIfConditionTrue = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "SpawnPrefabInsteadIfConditionTrue");
		EvenSpreadCluster_Tick_DataServer.NativeFieldInfoPtr_Condition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, "Condition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EvenSpreadCluster_Tick_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OffsetAngle;
	private static readonly IntPtr NativeFieldInfoPtr_RandomAngle;
	private static readonly IntPtr NativeFieldInfoPtr_RotationPerTick;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_TicksDone;
	private static readonly IntPtr NativeFieldInfoPtr_IndividualRandom;
	private static readonly IntPtr NativeFieldInfoPtr_UseAimDirection;
	private static readonly IntPtr NativeFieldInfoPtr_UseSelfRotation;
	private static readonly IntPtr NativeFieldInfoPtr_UseAIReturnPosAsOrigo;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysMaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnOffset;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreCollision;
	private static readonly IntPtr NativeFieldInfoPtr_FullCircleSpread;
	private static readonly IntPtr NativeFieldInfoPtr_SpawnPrefabInsteadIfConditionTrue;
	private static readonly IntPtr NativeFieldInfoPtr_Condition;

	public float OffsetAngle;

	public float RandomAngle;

	public float RotationPerTick;

	public int Count;

	public int TicksDone;

	public bool IndividualRandom;

	public bool UseAimDirection;

	public bool UseSelfRotation;

	public bool UseAIReturnPosAsOrigo;

	public bool AlwaysMaxRange;

	public float3 SpawnOffset;

	public bool IgnoreCollision;

	public bool FullCircleSpread;

	public PrefabGUID SpawnPrefabInsteadIfConditionTrue;

	public BlobAssetReference<ConditionBlob> Condition;
}
```
