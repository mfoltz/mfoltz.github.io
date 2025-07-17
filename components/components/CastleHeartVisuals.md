---
nav_exclude: true
search_exclude: true
---

# CastleHeartVisuals

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public PrefabGUID TierSequencesAsset;
	[FieldOffset(4)]
	public SequenceState ActiveSequenceState;
	[FieldOffset(12)]
	public SequenceState InactiveSequenceState;
	[FieldOffset(20)]
	public float CurrentFuelProgress;
	[FieldOffset(24)]
	public float TotalFuelSatisfaction;
	[FieldOffset(28)]
	public float RelativeFuelSatisfaction;
	[FieldOffset(32)]
	public float TotalFuelTimeRemaining;
}
