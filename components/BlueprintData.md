---
nav_exclude: true
search_exclude: true
---

# BlueprintData

```csharp
[StructLayout(2)]
public struct BlueprintData
{
	static BlueprintData()
	{
		Il2CppClassPointerStore<BlueprintData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BlueprintData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr);
		BlueprintData.NativeFieldInfoPtr_Entity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "Entity");
		BlueprintData.NativeFieldInfoPtr_Guid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "Guid");
		BlueprintData.NativeFieldInfoPtr_PlaceSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "PlaceSequence");
		BlueprintData.NativeFieldInfoPtr_InvalidPlaceSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "InvalidPlaceSequence");
		BlueprintData.NativeFieldInfoPtr_EditSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "EditSequence");
		BlueprintData.NativeFieldInfoPtr_InvalidEditSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "InvalidEditSequence");
		BlueprintData.NativeFieldInfoPtr_BuildingSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "BuildingSequence");
		BlueprintData.NativeFieldInfoPtr_PhasedBuildingSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "PhasedBuildingSequence");
		BlueprintData.NativeFieldInfoPtr_DismantledSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "DismantledSequence");
		BlueprintData.NativeFieldInfoPtr_DestroyedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "DestroyedSequence");
		BlueprintData.NativeFieldInfoPtr_RepairedSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "RepairedSequence");
		BlueprintData.NativeFieldInfoPtr_DismantleFraction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "DismantleFraction");
		BlueprintData.NativeFieldInfoPtr_FullDismantleTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "FullDismantleTime");
		BlueprintData.NativeFieldInfoPtr_IsStartBlueprint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "IsStartBlueprint");
		BlueprintData.NativeFieldInfoPtr_IsInventoryItemBuilding = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "IsInventoryItemBuilding");
		BlueprintData.NativeFieldInfoPtr_ExitBuildModeWhenBuilt = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "ExitBuildModeWhenBuilt");
		BlueprintData.NativeFieldInfoPtr_RequiresLineOfSight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "RequiresLineOfSight");
		BlueprintData.NativeFieldInfoPtr_RequiresSuccessfullPathfinding = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, "RequiresSuccessfullPathfinding");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BlueprintData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Entity;
	private static readonly IntPtr NativeFieldInfoPtr_Guid;
	private static readonly IntPtr NativeFieldInfoPtr_PlaceSequence;
	private static readonly IntPtr NativeFieldInfoPtr_InvalidPlaceSequence;
	private static readonly IntPtr NativeFieldInfoPtr_EditSequence;
	private static readonly IntPtr NativeFieldInfoPtr_InvalidEditSequence;
	private static readonly IntPtr NativeFieldInfoPtr_BuildingSequence;
	private static readonly IntPtr NativeFieldInfoPtr_PhasedBuildingSequence;
	private static readonly IntPtr NativeFieldInfoPtr_DismantledSequence;
	private static readonly IntPtr NativeFieldInfoPtr_DestroyedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_RepairedSequence;
	private static readonly IntPtr NativeFieldInfoPtr_DismantleFraction;
	private static readonly IntPtr NativeFieldInfoPtr_FullDismantleTime;
	private static readonly IntPtr NativeFieldInfoPtr_IsStartBlueprint;
	private static readonly IntPtr NativeFieldInfoPtr_IsInventoryItemBuilding;
	private static readonly IntPtr NativeFieldInfoPtr_ExitBuildModeWhenBuilt;
	private static readonly IntPtr NativeFieldInfoPtr_RequiresLineOfSight;
	private static readonly IntPtr NativeFieldInfoPtr_RequiresSuccessfullPathfinding;
	[FieldOffset(0)]
	public Entity Entity;
	[FieldOffset(8)]
	public PrefabGUID Guid;
	[FieldOffset(12)]
	public SequenceGUID PlaceSequence;
	[FieldOffset(16)]
	public SequenceGUID InvalidPlaceSequence;
	[FieldOffset(20)]
	public SequenceGUID EditSequence;
	[FieldOffset(24)]
	public SequenceGUID InvalidEditSequence;
	[FieldOffset(28)]
	public SequenceGUID BuildingSequence;
	[FieldOffset(32)]
	public SequenceGUID PhasedBuildingSequence;
	[FieldOffset(36)]
	public SequenceGUID DismantledSequence;
	[FieldOffset(40)]
	public SequenceGUID DestroyedSequence;
	[FieldOffset(44)]
	public SequenceGUID RepairedSequence;
	[FieldOffset(48)]
	public float DismantleFraction;
	[FieldOffset(52)]
	public float FullDismantleTime;
	[FieldOffset(56)]
	[MarshalAs(4)]
	public bool IsStartBlueprint;
	[FieldOffset(57)]
	[MarshalAs(4)]
	public bool IsInventoryItemBuilding;
	[FieldOffset(58)]
	[MarshalAs(4)]
	public bool ExitBuildModeWhenBuilt;
	[FieldOffset(59)]
	[MarshalAs(4)]
	public bool RequiresLineOfSight;
	[FieldOffset(60)]
	[MarshalAs(4)]
	public bool RequiresSuccessfullPathfinding;
}
