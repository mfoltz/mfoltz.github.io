---
nav_exclude: true
search_exclude: false
---

# SpellMovement

```csharp
public struct SpellMovement
{
	static SpellMovement()
	{
		Il2CppClassPointerStore<SpellMovement>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "SpellMovement");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr);
		SpellMovement.NativeFieldInfoPtr_StartPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "StartPosition");
		SpellMovement.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "TargetPosition");
		SpellMovement.NativeFieldInfoPtr_CurveXLoops = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveXLoops");
		SpellMovement.NativeFieldInfoPtr_XScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "XScale");
		SpellMovement.NativeFieldInfoPtr_YScale = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "YScale");
		SpellMovement.NativeFieldInfoPtr_CurrentY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurrentY");
		SpellMovement.NativeFieldInfoPtr_CurveY = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveY");
		SpellMovement.NativeFieldInfoPtr_CurveX = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveX");
		SpellMovement.NativeFieldInfoPtr_CurveZ = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "CurveZ");
		SpellMovement.NativeFieldInfoPtr_SetRotationEveryFrame = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "SetRotationEveryFrame");
		SpellMovement.NativeFieldInfoPtr_Disabled = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "Disabled");
		SpellMovement.NativeFieldInfoPtr_DisabledPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, "DisabledPosition");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SpellMovement>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_StartPosition;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_CurveXLoops;
	private static readonly IntPtr NativeFieldInfoPtr_XScale;
	private static readonly IntPtr NativeFieldInfoPtr_YScale;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentY;
	private static readonly IntPtr NativeFieldInfoPtr_CurveY;
	private static readonly IntPtr NativeFieldInfoPtr_CurveX;
	private static readonly IntPtr NativeFieldInfoPtr_CurveZ;
	private static readonly IntPtr NativeFieldInfoPtr_SetRotationEveryFrame;
	private static readonly IntPtr NativeFieldInfoPtr_Disabled;
	private static readonly IntPtr NativeFieldInfoPtr_DisabledPosition;

	public float3 StartPosition;

	public float3 TargetPosition;

	public float CurveXLoops;

	public float XScale;

	public float YScale;

	public float CurrentY;

	public CurveReference CurveY;

	public CurveReference CurveX;

	public CurveReference CurveZ;

	public bool SetRotationEveryFrame;

	public bool Disabled;

	public float3 DisabledPosition;
}
```

## Server Systems

- [DropItemThrowSystem_Destroy](/systems/server/DropItemThrowSystem_Destroy)
- [SpellMovementSystem_Spawn](/systems/server/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/server/SpellMovementSystem_Update)

## Client Systems

- [SpellMovementSystem_Spawn](/systems/client/SpellMovementSystem_Spawn)
- [SpellMovementSystem_Update](/systems/client/SpellMovementSystem_Update)
