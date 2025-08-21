---
nav_exclude: true
search_exclude: true
---

```csharp
public struct TargetAoE
{
	static TargetAoE()
	{
		Il2CppClassPointerStore<TargetAoE>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TargetAoE");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr);
		TargetAoE.NativeFieldInfoPtr_TargetPositionType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "TargetPositionType");
		TargetAoE.NativeFieldInfoPtr_HandleCollisionType = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "HandleCollisionType");
		TargetAoE.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "StartPosition");
		TargetAoE.NativeFieldInfoPtr_EndPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "EndPosition");
		TargetAoE.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "MaxRange");
		TargetAoE.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "MinRange");
		TargetAoE.NativeFieldInfoPtr_MaxTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "MaxTime");
		TargetAoE.NativeFieldInfoPtr_MinTime = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "MinTime");
		TargetAoE.NativeFieldInfoPtr_MaxRandomTimeAdded = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "MaxRandomTimeAdded");
		TargetAoE.NativeFieldInfoPtr_ThrowMaxHeightDiff = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "ThrowMaxHeightDiff");
		TargetAoE.NativeFieldInfoPtr_ThrowArcHeight = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "ThrowArcHeight");
		TargetAoE.NativeFieldInfoPtr_RandomOffsetMin = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "RandomOffsetMin");
		TargetAoE.NativeFieldInfoPtr_RandomOffsetRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "RandomOffsetRadius");
		TargetAoE.NativeFieldInfoPtr_MapCollisionRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "MapCollisionRadius");
		TargetAoE.NativeFieldInfoPtr_UseRandomOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "UseRandomOffset");
		TargetAoE.NativeFieldInfoPtr_FindValidPositionFromMax = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, "FindValidPositionFromMax");
		TargetAoE.NativeMethodInfoPtr_CalculateEndPosition_Public_float3_float3_FixedList64Bytes_1_float3_byref_TileWorld_byref_CollisionWorld_byref_Random_byref_Single_Boolean_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, 100664532);
		TargetAoE.NativeMethodInfoPtr_GetCollisionInfo_Public_GameplayLocationCollisionInfo_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, 100664533);
		TargetAoE.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, 100664534);
	}

	public unsafe float3 CalculateEndPosition(float3 startPosition, FixedList64Bytes<float3> aimPositions, [In] ref TileWorld tileWorld, ref CollisionWorld collisionWorld, ref Unity.Mathematics.Random random, out float rangeFactor, bool allowRandomOffset = true)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)7) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref startPosition;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref aimPositions;
		ptr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &tileWorld;
		ptr[checked(unchecked((UIntPtr)3) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &collisionWorld;
		ptr[checked(unchecked((UIntPtr)4) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &random;
		ptr[checked(unchecked((UIntPtr)5) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = &rangeFactor;
		ptr[checked(unchecked((UIntPtr)6) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref allowRandomOffset;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TargetAoE.NativeMethodInfoPtr_CalculateEndPosition_Public_float3_float3_FixedList64Bytes_1_float3_byref_TileWorld_byref_CollisionWorld_byref_Random_byref_Single_Boolean_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe GameplayLocationCollisionInfo GetCollisionInfo()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TargetAoE.NativeMethodInfoPtr_GetCollisionInfo_Public_GameplayLocationCollisionInfo_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TargetAoE.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TargetAoE>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetPositionType;
	private static readonly IntPtr NativeFieldInfoPtr_HandleCollisionType;
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_EndPosition;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxTime;
	private static readonly IntPtr NativeFieldInfoPtr_MinTime;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRandomTimeAdded;
	private static readonly IntPtr NativeFieldInfoPtr_ThrowMaxHeightDiff;
	private static readonly IntPtr NativeFieldInfoPtr_ThrowArcHeight;
	private static readonly IntPtr NativeFieldInfoPtr_RandomOffsetMin;
	private static readonly IntPtr NativeFieldInfoPtr_RandomOffsetRadius;
	private static readonly IntPtr NativeFieldInfoPtr_MapCollisionRadius;
	private static readonly IntPtr NativeFieldInfoPtr_UseRandomOffset;
	private static readonly IntPtr NativeFieldInfoPtr_FindValidPositionFromMax;
	private static readonly IntPtr NativeMethodInfoPtr_CalculateEndPosition_Public_float3_float3_FixedList64Bytes_1_float3_byref_TileWorld_byref_CollisionWorld_byref_Random_byref_Single_Boolean_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetCollisionInfo_Public_GameplayLocationCollisionInfo_0;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;

	public TargetAoE.TargetPositionTypeEnum TargetPositionType;

	public TargetAoE.HandleCollisionTypeEnum HandleCollisionType;

	public float3 StartPosition;

	public float3 EndPosition;

	public float MaxRange;

	public float MinRange;

	public float MaxTime;

	public float MinTime;

	public float MaxRandomTimeAdded;

	public float ThrowMaxHeightDiff;

	public float ThrowArcHeight;

	public float RandomOffsetMin;

	public float RandomOffsetRadius;

	public float MapCollisionRadius;

	public bool UseRandomOffset;

	public bool FindValidPositionFromMax;
	public enum TargetPositionTypeEnum
	{
		AimPosition,
		SpellTarget,
		Self,
		ForceSetOwner,
		RandomDirection,
		SelfDirection
	}
	public enum HandleCollisionTypeEnum
	{
		None,
		StopOnCollision
	}
}
```

## Server Systems

- [TargetAOESystem]({{% relref "systems/server/TargetAOESystem.md" %}})

## Client Systems

- [TargetAOESequenceSystem]({{% relref "systems/client/TargetAOESequenceSystem.md" %}})
- [TargetAoE_DestroySystem]({{% relref "systems/client/TargetAoE_DestroySystem.md" %}})
