# BloodBuffScript_Worker_ReducedDurability

```csharp
[StructLayout(2)]
public struct BloodBuffScript_Worker_ReducedDurability
{
	static BloodBuffScript_Worker_ReducedDurability()
	{
		Il2CppClassPointerStore<BloodBuffScript_Worker_ReducedDurability>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "BloodBuffScript_Worker_ReducedDurability");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BloodBuffScript_Worker_ReducedDurability>.NativeClassPtr);
		BloodBuffScript_Worker_ReducedDurability.NativeFieldInfoPtr_MinReduceDurabilityLossOnResources = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Worker_ReducedDurability>.NativeClassPtr, "MinReduceDurabilityLossOnResources");
		BloodBuffScript_Worker_ReducedDurability.NativeFieldInfoPtr_MaxReduceDurabilityLossOnResources = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Worker_ReducedDurability>.NativeClassPtr, "MaxReduceDurabilityLossOnResources");
		BloodBuffScript_Worker_ReducedDurability.NativeFieldInfoPtr_RequiredBloodPercentage = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Worker_ReducedDurability>.NativeClassPtr, "RequiredBloodPercentage");
		BloodBuffScript_Worker_ReducedDurability.NativeFieldInfoPtr_ReduceDurabilityLossOnResourcesModificationId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BloodBuffScript_Worker_ReducedDurability>.NativeClassPtr, "ReduceDurabilityLossOnResourcesModificationId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BloodBuffScript_Worker_ReducedDurability>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_MinReduceDurabilityLossOnResources;
	private static readonly IntPtr NativeFieldInfoPtr_MaxReduceDurabilityLossOnResources;
	private static readonly IntPtr NativeFieldInfoPtr_RequiredBloodPercentage;
	private static readonly IntPtr NativeFieldInfoPtr_ReduceDurabilityLossOnResourcesModificationId;
	[FieldOffset(0)]
	public float MinReduceDurabilityLossOnResources;
	[FieldOffset(4)]
	public float MaxReduceDurabilityLossOnResources;
	[FieldOffset(8)]
	public float RequiredBloodPercentage;
	[FieldOffset(12)]
	public ModificationId ReduceDurabilityLossOnResourcesModificationId;
}
