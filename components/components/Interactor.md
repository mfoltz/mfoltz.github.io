---
nav_exclude: true
search_exclude: true
---

# Interactor

```csharp
[StructLayout(2)]
public struct Interactor
{
	static Interactor()
	{
		Il2CppClassPointerStore<Interactor>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Shared", "Interactor");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Interactor>.NativeClassPtr);
		Interactor.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "Radius");
		Interactor.NativeFieldInfoPtr_MouseAimRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "MouseAimRadius");
		Interactor.NativeFieldInfoPtr_TargetNetworkId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "TargetNetworkId");
		Interactor.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "Target");
		Interactor.NativeFieldInfoPtr_PreviousTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "PreviousTarget");
		Interactor.NativeFieldInfoPtr_InteractAbilityGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "InteractAbilityGuid");
		Interactor.NativeFieldInfoPtr_TargetSequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "TargetSequenceGuid");
		Interactor.NativeFieldInfoPtr_TargetSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "TargetSequence");
		Interactor.NativeFieldInfoPtr_ForceReleaseBeforeNextInteract = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Interactor>.NativeClassPtr, "ForceReleaseBeforeNextInteract");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Interactor>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_MouseAimRadius;
	private static readonly IntPtr NativeFieldInfoPtr_TargetNetworkId;
	private static readonly IntPtr NativeFieldInfoPtr_Target;
	private static readonly IntPtr NativeFieldInfoPtr_PreviousTarget;
	private static readonly IntPtr NativeFieldInfoPtr_InteractAbilityGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TargetSequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_TargetSequence;
	private static readonly IntPtr NativeFieldInfoPtr_ForceReleaseBeforeNextInteract;
	[FieldOffset(0)]
	public float Radius;
	[FieldOffset(4)]
	public float MouseAimRadius;
	[FieldOffset(8)]
	public NetworkId TargetNetworkId;
	[FieldOffset(20)]
	public Entity Target;
	[FieldOffset(28)]
	public Entity PreviousTarget;
	[FieldOffset(36)]
	public PrefabGUID InteractAbilityGuid;
	[FieldOffset(40)]
	public SequenceGUID TargetSequenceGuid;
	[FieldOffset(44)]
	public SequenceState TargetSequence;
	[FieldOffset(52)]
	[MarshalAs(4)]
	public bool ForceReleaseBeforeNextInteract;
}
