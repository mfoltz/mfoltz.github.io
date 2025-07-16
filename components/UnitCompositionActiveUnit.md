# UnitCompositionActiveUnit

```csharp
[StructLayout(2)]
public struct UnitCompositionActiveUnit
{
	static UnitCompositionActiveUnit()
	{
		Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "UnitCompositionActiveUnit");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr);
		UnitCompositionActiveUnit.NativeFieldInfoPtr_UnitEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "UnitEntity");
		UnitCompositionActiveUnit.NativeFieldInfoPtr_UnitPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "UnitPrefab");
		UnitCompositionActiveUnit.NativeFieldInfoPtr_RespawnTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "RespawnTime");
		UnitCompositionActiveUnit.NativeFieldInfoPtr_FormationOffsetIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "FormationOffsetIndex");
		UnitCompositionActiveUnit.NativeFieldInfoPtr_FollowedModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "FollowedModId");
		UnitCompositionActiveUnit.NativeFieldInfoPtr_FollowModeModId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "FollowModeModId");
		UnitCompositionActiveUnit.NativeFieldInfoPtr_Despawning = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "Despawning");
		UnitCompositionActiveUnit.NativeFieldInfoPtr_AtGraveyard = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, "AtGraveyard");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UnitCompositionActiveUnit>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_UnitEntity;
	private static readonly IntPtr NativeFieldInfoPtr_UnitPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_RespawnTime;
	private static readonly IntPtr NativeFieldInfoPtr_FormationOffsetIndex;
	private static readonly IntPtr NativeFieldInfoPtr_FollowedModId;
	private static readonly IntPtr NativeFieldInfoPtr_FollowModeModId;
	private static readonly IntPtr NativeFieldInfoPtr_Despawning;
	private static readonly IntPtr NativeFieldInfoPtr_AtGraveyard;
	[FieldOffset(0)]
	public Entity UnitEntity;
	[FieldOffset(8)]
	public Entity UnitPrefab;
	[FieldOffset(16)]
	public Nullable_Unboxed<double> RespawnTime;
	[FieldOffset(32)]
	public int FormationOffsetIndex;
	[FieldOffset(36)]
	public ModificationId FollowedModId;
	[FieldOffset(40)]
	public ModificationId FollowModeModId;
	[FieldOffset(44)]
	[MarshalAs(4)]
	public bool Despawning;
	[FieldOffset(45)]
	[MarshalAs(4)]
	public bool AtGraveyard;
}
