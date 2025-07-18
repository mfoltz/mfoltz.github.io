---
nav_exclude: true
search_exclude: true
---

# AimPreviewTargetAoE

```csharp
public struct AimPreviewTargetAoE
{
	static AimPreviewTargetAoE()
	{
		Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewTargetAoE");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr);
		AimPreviewTargetAoE.NativeFieldInfoPtr_ArcSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr, "ArcSequenceGUID");
		AimPreviewTargetAoE.NativeFieldInfoPtr_ArcSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr, "ArcSequenceState");
		AimPreviewTargetAoE.NativeFieldInfoPtr_CircleSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr, "CircleSequenceGUID");
		AimPreviewTargetAoE.NativeFieldInfoPtr_CircleSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr, "CircleSequenceState");
		AimPreviewTargetAoE.NativeFieldInfoPtr_ShowArc = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr, "ShowArc");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewTargetAoE>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ArcSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_ArcSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_CircleSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_ShowArc;

	public SequenceGUID ArcSequenceGUID;

	public SequenceState ArcSequenceState;

	public SequenceGUID CircleSequenceGUID;

	public SequenceState CircleSequenceState;

	public bool ShowArc;
}
```

## Client Systems

- [AimPreviewTargetAoeSystem](/systems/client/AimPreviewTargetAoeSystem)
- [SpawnAimPreviewTargetAoeSystem](/systems/client/SpawnAimPreviewTargetAoeSystem)
