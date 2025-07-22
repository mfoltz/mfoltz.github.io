---
nav_exclude: true
search_exclude: false
---

# PlayImpactOnGameplayEvent

```csharp
public struct PlayImpactOnGameplayEvent
{
	static PlayImpactOnGameplayEvent()
	{
		Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "PlayImpactOnGameplayEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr);
		PlayImpactOnGameplayEvent.NativeFieldInfoPtr_PrimarySequenceGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, "PrimarySequenceGuid");
		PlayImpactOnGameplayEvent.NativeFieldInfoPtr_ImpactMappingGuid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, "ImpactMappingGuid");
		PlayImpactOnGameplayEvent.NativeFieldInfoPtr_SkipMaterialSequence = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, "SkipMaterialSequence");
		PlayImpactOnGameplayEvent.NativeFieldInfoPtr_RotationOffsetEulerMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, "RotationOffsetEulerMin");
		PlayImpactOnGameplayEvent.NativeFieldInfoPtr_RotationOffsetEulerMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, "RotationOffsetEulerMax");
		PlayImpactOnGameplayEvent.NativeFieldInfoPtr_Scale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, "Scale");
		PlayImpactOnGameplayEvent.NativeFieldInfoPtr_SequenceRotationTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, "SequenceRotationTarget");
		PlayImpactOnGameplayEvent.NativeMethodInfoPtr_ApplySequenceGUID_Public_Virtual_Final_New_Void_SpellModSequenceGuid_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, 100668315);
	}

	public unsafe void ApplySequenceGUID(SpellModSequenceGuid spellMod)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(PlayImpactOnGameplayEvent.NativeMethodInfoPtr_ApplySequenceGUID_Public_Virtual_Final_New_Void_SpellModSequenceGuid_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<PlayImpactOnGameplayEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_PrimarySequenceGuid;
	private static readonly IntPtr NativeFieldInfoPtr_ImpactMappingGuid;
	private static readonly IntPtr NativeFieldInfoPtr_SkipMaterialSequence;
	private static readonly IntPtr NativeFieldInfoPtr_RotationOffsetEulerMin;
	private static readonly IntPtr NativeFieldInfoPtr_RotationOffsetEulerMax;
	private static readonly IntPtr NativeFieldInfoPtr_Scale;
	private static readonly IntPtr NativeFieldInfoPtr_SequenceRotationTarget;
	private static readonly IntPtr NativeMethodInfoPtr_ApplySequenceGUID_Public_Virtual_Final_New_Void_SpellModSequenceGuid_0;

	public SequenceGUID PrimarySequenceGuid;

	public PrefabGUID ImpactMappingGuid;

	public bool SkipMaterialSequence;

	public float3 RotationOffsetEulerMin;

	public float3 RotationOffsetEulerMax;

	public float Scale;

	public PlaySequenceOnGameplayEventTarget SequenceRotationTarget;
}
```
