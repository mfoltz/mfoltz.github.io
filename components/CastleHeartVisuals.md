---
nav_exclude: true
search_exclude: true
---

# CastleHeartVisuals

```csharp
public struct CastleHeartVisuals
{
	static CastleHeartVisuals()
	{
		Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.CastleBuilding", "CastleHeartVisuals");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr);
		CastleHeartVisuals.NativeFieldInfoPtr_TierSequencesAsset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, "TierSequencesAsset");
		CastleHeartVisuals.NativeFieldInfoPtr_ActiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, "ActiveSequenceState");
		CastleHeartVisuals.NativeFieldInfoPtr_InactiveSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, "InactiveSequenceState");
		CastleHeartVisuals.NativeFieldInfoPtr_CurrentFuelProgress = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, "CurrentFuelProgress");
		CastleHeartVisuals.NativeFieldInfoPtr_TotalFuelSatisfaction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, "TotalFuelSatisfaction");
		CastleHeartVisuals.NativeFieldInfoPtr_RelativeFuelSatisfaction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, "RelativeFuelSatisfaction");
		CastleHeartVisuals.NativeFieldInfoPtr_TotalFuelTimeRemaining = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, "TotalFuelTimeRemaining");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<CastleHeartVisuals>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TierSequencesAsset;
	private static readonly IntPtr NativeFieldInfoPtr_ActiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_InactiveSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentFuelProgress;
	private static readonly IntPtr NativeFieldInfoPtr_TotalFuelSatisfaction;
	private static readonly IntPtr NativeFieldInfoPtr_RelativeFuelSatisfaction;
	private static readonly IntPtr NativeFieldInfoPtr_TotalFuelTimeRemaining;

	public PrefabGUID TierSequencesAsset;

	public SequenceState ActiveSequenceState;

	public SequenceState InactiveSequenceState;

	public float CurrentFuelProgress;

	public float TotalFuelSatisfaction;

	public float RelativeFuelSatisfaction;

	public float TotalFuelTimeRemaining;
}
```

## Client Systems

- [CastleHeartVisualStateSystem](/systems/client/CastleHeartVisualStateSystem)
- [UpdateCastleHeartModelSystem](/systems/client/UpdateCastleHeartModelSystem)
