# CastleAreaRequirement

```csharp
[StructLayout(2)]
public struct CastleAreaRequirement
{
	static CastleAreaRequirement()
	{
		Il2CppClassPointerStore<CastleAreaRequirement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "CastleAreaRequirement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleAreaRequirement>.NativeClassPtr);
		CastleAreaRequirement.NativeFieldInfoPtr_RequirementType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleAreaRequirement>.NativeClassPtr, "RequirementType");
		CastleAreaRequirement.NativeFieldInfoPtr_BlockPlacementOnRoads = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleAreaRequirement>.NativeClassPtr, "BlockPlacementOnRoads");
		CastleAreaRequirement.NativeFieldInfoPtr_AllowPlaceInObjectsInRepairState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleAreaRequirement>.NativeClassPtr, "AllowPlaceInObjectsInRepairState");
		CastleAreaRequirement.NativeFieldInfoPtr_AllowTilesStickingOutOfTerritory = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleAreaRequirement>.NativeClassPtr, "AllowTilesStickingOutOfTerritory");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleAreaRequirement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_RequirementType;
	private static readonly IntPtr NativeFieldInfoPtr_BlockPlacementOnRoads;
	private static readonly IntPtr NativeFieldInfoPtr_AllowPlaceInObjectsInRepairState;
	private static readonly IntPtr NativeFieldInfoPtr_AllowTilesStickingOutOfTerritory;
	[FieldOffset(0)]
	public CastleAreaRequirementType RequirementType;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool BlockPlacementOnRoads;
	[FieldOffset(2)]
	[MarshalAs(4)]
	public bool AllowPlaceInObjectsInRepairState;
	[FieldOffset(3)]
	[MarshalAs(4)]
	public bool AllowTilesStickingOutOfTerritory;
}
