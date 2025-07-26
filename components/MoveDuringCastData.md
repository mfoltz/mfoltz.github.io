---
nav_exclude: true
search_exclude: true
---

# MoveDuringCastData

```csharp
public struct MoveDuringCastData
{
	static MoveDuringCastData()
	{
		Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Network", "MoveDuringCastData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr);
		MoveDuringCastData.NativeFieldInfoPtr_ManualDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "ManualDuration");
		MoveDuringCastData.NativeFieldInfoPtr_ForceMovementLength = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "ForceMovementLength");
		MoveDuringCastData.NativeFieldInfoPtr_CurveX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "CurveX");
		MoveDuringCastData.NativeFieldInfoPtr_CurveY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "CurveY");
		MoveDuringCastData.NativeFieldInfoPtr_CurveZ = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "CurveZ");
		MoveDuringCastData.NativeFieldInfoPtr_ModelOffsetCurveX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "ModelOffsetCurveX");
		MoveDuringCastData.NativeFieldInfoPtr_ModelOffsetCurveY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "ModelOffsetCurveY");
		MoveDuringCastData.NativeFieldInfoPtr_ModelOffsetCurveZ = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "ModelOffsetCurveZ");
		MoveDuringCastData.NativeFieldInfoPtr_ForceMoveType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "ForceMoveType");
		MoveDuringCastData.NativeFieldInfoPtr_MoveType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "MoveType");
		MoveDuringCastData.NativeFieldInfoPtr_OnlyForceMoveIfAnyMoveInput = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "OnlyForceMoveIfAnyMoveInput");
		MoveDuringCastData.NativeFieldInfoPtr_UseManualDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "UseManualDuration");
		MoveDuringCastData.NativeFieldInfoPtr_ExcludePostCastDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "ExcludePostCastDuration");
		MoveDuringCastData.NativeFieldInfoPtr_IgnoreMovementImpair = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "IgnoreMovementImpair");
		MoveDuringCastData.NativeFieldInfoPtr_IgnoreMovementSpeedChanges = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, "IgnoreMovementSpeedChanges");
		MoveDuringCastData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_CurveReference_CurveReference_CurveReference_CurveReference_CurveReference_CurveReference_ForceMoveDuringCastType_AbilityMoveType_Boolean_Boolean_Boolean_Boolean_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, 100670540);
		MoveDuringCastData.NativeMethodInfoPtr_EvaluateCurves_Public_float3_Single_CurveCollection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, 100670541);
		MoveDuringCastData.NativeMethodInfoPtr_EvaluateModelOffsetCurves_Public_float3_Single_CurveCollection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, 100670542);
	}

	public unsafe MoveDuringCastData(float manualDuration, float forceMovementLength, CurveReference curveX, CurveReference curveY, CurveReference curveZ, CurveReference modelOffsetCurveX, CurveReference modelOffsetCurveY, CurveReference modelOffsetCurveZ, ForceMoveDuringCastType forceMoveType, AbilityMoveType moveType, bool onlyForceMoveIfAnyMoveInput, bool useManualDuration, bool excludePostCastDuration, bool ignoreMovementImpair, bool ignoreMovementSpeedChanges)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)15) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref manualDuration;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref forceMovementLength;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref curveX;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref curveY;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref curveZ;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modelOffsetCurveX;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modelOffsetCurveY;
		ptr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref modelOffsetCurveZ;
		ptr[checked(unchecked((UIntPtr)8) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref forceMoveType;
		ptr[checked(unchecked((UIntPtr)9) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref moveType;
		ptr[checked(unchecked((UIntPtr)10) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref onlyForceMoveIfAnyMoveInput;
		ptr[checked(unchecked((UIntPtr)11) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref useManualDuration;
		ptr[checked(unchecked((UIntPtr)12) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref excludePostCastDuration;
		ptr[checked(unchecked((UIntPtr)13) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref ignoreMovementImpair;
		ptr[checked(unchecked((UIntPtr)14) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref ignoreMovementSpeedChanges;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveDuringCastData.NativeMethodInfoPtr__ctor_Public_Void_Single_Single_CurveReference_CurveReference_CurveReference_CurveReference_CurveReference_CurveReference_ForceMoveDuringCastType_AbilityMoveType_Boolean_Boolean_Boolean_Boolean_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe float3 EvaluateCurves(float t, CurveCollection curveCollection)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref t;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref curveCollection;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveDuringCastData.NativeMethodInfoPtr_EvaluateCurves_Public_float3_Single_CurveCollection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe float3 EvaluateModelOffsetCurves(float t, CurveCollection curveCollection)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref t;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref curveCollection;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(MoveDuringCastData.NativeMethodInfoPtr_EvaluateModelOffsetCurves_Public_float3_Single_CurveCollection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MoveDuringCastData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ManualDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ForceMovementLength;
	private static readonly IntPtr NativeFieldInfoPtr_CurveX;
	private static readonly IntPtr NativeFieldInfoPtr_CurveY;
	private static readonly IntPtr NativeFieldInfoPtr_CurveZ;
	private static readonly IntPtr NativeFieldInfoPtr_ModelOffsetCurveX;
	private static readonly IntPtr NativeFieldInfoPtr_ModelOffsetCurveY;
	private static readonly IntPtr NativeFieldInfoPtr_ModelOffsetCurveZ;
	private static readonly IntPtr NativeFieldInfoPtr_ForceMoveType;
	private static readonly IntPtr NativeFieldInfoPtr_MoveType;
	private static readonly IntPtr NativeFieldInfoPtr_OnlyForceMoveIfAnyMoveInput;
	private static readonly IntPtr NativeFieldInfoPtr_UseManualDuration;
	private static readonly IntPtr NativeFieldInfoPtr_ExcludePostCastDuration;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreMovementImpair;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreMovementSpeedChanges;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_Single_Single_CurveReference_CurveReference_CurveReference_CurveReference_CurveReference_CurveReference_ForceMoveDuringCastType_AbilityMoveType_Boolean_Boolean_Boolean_Boolean_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_EvaluateCurves_Public_float3_Single_CurveCollection_0;
	private static readonly IntPtr NativeMethodInfoPtr_EvaluateModelOffsetCurves_Public_float3_Single_CurveCollection_0;

	public readonly float ManualDuration;

	public readonly float ForceMovementLength;

	public readonly CurveReference CurveX;

	public readonly CurveReference CurveY;

	public readonly CurveReference CurveZ;

	public readonly CurveReference ModelOffsetCurveX;

	public readonly CurveReference ModelOffsetCurveY;

	public readonly CurveReference ModelOffsetCurveZ;

	public readonly ForceMoveDuringCastType ForceMoveType;

	public readonly AbilityMoveType MoveType;

	public readonly bool OnlyForceMoveIfAnyMoveInput;

	public readonly bool UseManualDuration;

	public readonly bool ExcludePostCastDuration;

	public readonly bool IgnoreMovementImpair;

	public readonly bool IgnoreMovementSpeedChanges;
}
```
