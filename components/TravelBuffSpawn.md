---
nav_exclude: true
search_exclude: false
---

# TravelBuffSpawn

```csharp
public struct TravelBuffSpawn
{
	static TravelBuffSpawn()
	{
		Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "TravelBuffSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr);
		TravelBuffSpawn.NativeFieldInfoPtr_TargetRangeOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "TargetRangeOffset");
		TravelBuffSpawn.NativeFieldInfoPtr_MinRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MinRange");
		TravelBuffSpawn.NativeFieldInfoPtr_MaxRange = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MaxRange");
		TravelBuffSpawn.NativeFieldInfoPtr_RandomOffsetRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "RandomOffsetRadius");
		TravelBuffSpawn.NativeFieldInfoPtr_MinDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MinDuration");
		TravelBuffSpawn.NativeFieldInfoPtr_MaxDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "MaxDuration");
		TravelBuffSpawn.NativeFieldInfoPtr_TravelTargetMode = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "TravelTargetMode");
		TravelBuffSpawn.NativeFieldInfoPtr_GetStartPositionFromBuffTarget = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "GetStartPositionFromBuffTarget");
		TravelBuffSpawn.NativeFieldInfoPtr_ScaleDuration = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "ScaleDuration");
		TravelBuffSpawn.NativeFieldInfoPtr_IgnoreAllCollision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "IgnoreAllCollision");
		TravelBuffSpawn.NativeFieldInfoPtr_AimYOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, "AimYOffset");
		TravelBuffSpawn.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, 100664547);
	}

	public unsafe void ApplyArithmetic(SpellModArithmetic spellMod, float value)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref spellMod;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref value;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(TravelBuffSpawn.NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<TravelBuffSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetRangeOffset;
	private static readonly IntPtr NativeFieldInfoPtr_MinRange;
	private static readonly IntPtr NativeFieldInfoPtr_MaxRange;
	private static readonly IntPtr NativeFieldInfoPtr_RandomOffsetRadius;
	private static readonly IntPtr NativeFieldInfoPtr_MinDuration;
	private static readonly IntPtr NativeFieldInfoPtr_MaxDuration;
	private static readonly IntPtr NativeFieldInfoPtr_TravelTargetMode;
	private static readonly IntPtr NativeFieldInfoPtr_GetStartPositionFromBuffTarget;
	private static readonly IntPtr NativeFieldInfoPtr_ScaleDuration;
	private static readonly IntPtr NativeFieldInfoPtr_IgnoreAllCollision;
	private static readonly IntPtr NativeFieldInfoPtr_AimYOffset;
	private static readonly IntPtr NativeMethodInfoPtr_ApplyArithmetic_Public_Virtual_Final_New_Void_SpellModArithmetic_Single_0;

	public float TargetRangeOffset;

	public float MinRange;

	public float MaxRange;

	public float RandomOffsetRadius;

	public float MinDuration;

	public float MaxDuration;

	public TravelTargetMode TravelTargetMode;

	public bool GetStartPositionFromBuffTarget;

	public bool ScaleDuration;

	public bool IgnoreAllCollision;

	public float AimYOffset;
}
```

## Server Systems

- [Spawn_TravelBuffSystem](/systems/server/Spawn_TravelBuffSystem)
