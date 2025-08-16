---
nav_exclude: true
search_exclude: true
---

# AimPreviewProjectile

```csharp
public struct AimPreviewProjectile
{
	static AimPreviewProjectile()
	{
		Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreviewProjectile");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr);
		AimPreviewProjectile.NativeFieldInfoPtr_LineSequenceGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "LineSequenceGUID");
		AimPreviewProjectile.NativeFieldInfoPtr_LineSequenceState = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "LineSequenceState");
		AimPreviewProjectile.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "Position");
		AimPreviewProjectile.NativeFieldInfoPtr_TargetPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "TargetPosition");
		AimPreviewProjectile.NativeFieldInfoPtr_FirstControlOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "FirstControlOffset");
		AimPreviewProjectile.NativeFieldInfoPtr_SecondControlOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "SecondControlOffset");
		AimPreviewProjectile.NativeFieldInfoPtr_Radius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "Radius");
		AimPreviewProjectile.NativeFieldInfoPtr_IsOnCooldown = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "IsOnCooldown");
		AimPreviewProjectile.NativeFieldInfoPtr_HasData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, "HasData");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreviewProjectile>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceGUID;
	private static readonly IntPtr NativeFieldInfoPtr_LineSequenceState;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_TargetPosition;
	private static readonly IntPtr NativeFieldInfoPtr_FirstControlOffset;
	private static readonly IntPtr NativeFieldInfoPtr_SecondControlOffset;
	private static readonly IntPtr NativeFieldInfoPtr_Radius;
	private static readonly IntPtr NativeFieldInfoPtr_IsOnCooldown;
	private static readonly IntPtr NativeFieldInfoPtr_HasData;

	public SequenceGUID LineSequenceGUID;

	public SequenceState LineSequenceState;

	public float3 Position;

	public float3 TargetPosition;

	public float2 FirstControlOffset;

	public float2 SecondControlOffset;

	public float Radius;

	public bool IsOnCooldown;

	public bool HasData;
}
```

## Client Systems

- [AimPreviewProjectileSystem]({{< relref "systems/client/AimPreviewProjectileSystem.md" >}})
- [SpawnAimPreviewProjectileSystem]({{< relref "systems/client/SpawnAimPreviewProjectileSystem.md" >}})
