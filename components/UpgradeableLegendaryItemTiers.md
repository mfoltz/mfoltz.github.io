# UpgradeableLegendaryItemTiers

```csharp
[StructLayout(2)]
public struct UpgradeableLegendaryItemTiers
{
	static UpgradeableLegendaryItemTiers()
	{
		Il2CppClassPointerStore<UpgradeableLegendaryItemTiers>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "UpgradeableLegendaryItemTiers");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<UpgradeableLegendaryItemTiers>.NativeClassPtr);
		UpgradeableLegendaryItemTiers.NativeFieldInfoPtr_TierPrefab = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpgradeableLegendaryItemTiers>.NativeClassPtr, "TierPrefab");
		UpgradeableLegendaryItemTiers.NativeFieldInfoPtr_AdditionalLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<UpgradeableLegendaryItemTiers>.NativeClassPtr, "AdditionalLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<UpgradeableLegendaryItemTiers>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TierPrefab;
	private static readonly IntPtr NativeFieldInfoPtr_AdditionalLevel;
	[FieldOffset(0)]
	public PrefabGUID TierPrefab;
	[FieldOffset(4)]
	public float AdditionalLevel;
}
