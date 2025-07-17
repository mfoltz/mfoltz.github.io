---
nav_exclude: true
search_exclude: true
---

# EvenSpreadCluster_DataServer

```csharp
[StructLayout(2)]
public struct EvenSpreadCluster_DataServer
{
	static EvenSpreadCluster_DataServer()
	{
		Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Gameplay.Scripting.dll", "ProjectM.Gameplay.Scripting", "EvenSpreadCluster_DataServer");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr);
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_OffsetAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "OffsetAngle");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_RandomAngle = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "RandomAngle");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_NewThrowEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "NewThrowEntity");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_Count = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "Count");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_IndividualRandom = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "IndividualRandom");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_UseAimDirection = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "UseAimDirection");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_AlwaysMaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "AlwaysMaxRange");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_OnSpawn = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "OnSpawn");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_OnDestroy = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "OnDestroy");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_ListenerEventId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "ListenerEventId");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_UseGameplayEventTargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "UseGameplayEventTargetPosition");
		EvenSpreadCluster_DataServer.NativeFieldInfoPtr_TryFindThrowLocationIterations = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, "TryFindThrowLocationIterations");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EvenSpreadCluster_DataServer>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_OffsetAngle;
	private static readonly IntPtr NativeFieldInfoPtr_RandomAngle;
	private static readonly IntPtr NativeFieldInfoPtr_NewThrowEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Count;
	private static readonly IntPtr NativeFieldInfoPtr_IndividualRandom;
	private static readonly IntPtr NativeFieldInfoPtr_UseAimDirection;
	private static readonly IntPtr NativeFieldInfoPtr_AlwaysMaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_OnSpawn;
	private static readonly IntPtr NativeFieldInfoPtr_OnDestroy;
	private static readonly IntPtr NativeFieldInfoPtr_ListenerEventId;
	private static readonly IntPtr NativeFieldInfoPtr_UseGameplayEventTargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TryFindThrowLocationIterations;
	[FieldOffset(0)]
	public float OffsetAngle;
	[FieldOffset(4)]
	public float RandomAngle;
	[FieldOffset(8)]
	public PrefabGUID NewThrowEntity;
	[FieldOffset(12)]
	public int Count;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool IndividualRandom;
	[FieldOffset(17)]
	[MarshalAs(4)]
	public bool UseAimDirection;
	[FieldOffset(18)]
	[MarshalAs(4)]
	public bool AlwaysMaxRange;
	[FieldOffset(19)]
	[MarshalAs(4)]
	public bool OnSpawn;
	[FieldOffset(20)]
	[MarshalAs(4)]
	public bool OnDestroy;
	[FieldOffset(24)]
	public GameplayEventId ListenerEventId;
	[FieldOffset(32)]
	[MarshalAs(4)]
	public bool UseGameplayEventTargetPosition;
	[FieldOffset(33)]
	public byte TryFindThrowLocationIterations;
}
