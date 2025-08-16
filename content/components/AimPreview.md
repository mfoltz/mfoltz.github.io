---
nav_exclude: true
search_exclude: true
---

# AimPreview

```csharp
public struct AimPreview
{
	static AimPreview()
	{
		Il2CppClassPointerStore<AimPreview>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "AimPreview");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<AimPreview>.NativeClassPtr);
		AimPreview.NativeFieldInfoPtr_Ability = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreview>.NativeClassPtr, "Ability");
		AimPreview.NativeFieldInfoPtr_Target = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<AimPreview>.NativeClassPtr, "Target");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<AimPreview>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Ability;
	private static readonly IntPtr NativeFieldInfoPtr_Target;

	public Entity Ability;

	public Entity Target;
}
```

## Client Systems

- [AimPreviewDashSystem]({{< relref "systems/client/AimPreviewDashSystem.md" >}})
- [AimPreviewGeneralSystem]({{< relref "systems/client/AimPreviewGeneralSystem.md" >}})
- [AimPreviewMeleeSystem]({{< relref "systems/client/AimPreviewMeleeSystem.md" >}})
- [AimPreviewMeshGenSystem]({{< relref "systems/client/AimPreviewMeshGenSystem.md" >}})
- [AimPreviewProjectileCursorSystem]({{< relref "systems/client/AimPreviewProjectileCursorSystem.md" >}})
- [AimPreviewProjectileSystem]({{< relref "systems/client/AimPreviewProjectileSystem.md" >}})
- [AimPreviewTargetAoeSystem]({{< relref "systems/client/AimPreviewTargetAoeSystem.md" >}})
- [AimPreviewTravelBuffSystem]({{< relref "systems/client/AimPreviewTravelBuffSystem.md" >}})
- [SpawnAimPreviewSystem]({{< relref "systems/client/SpawnAimPreviewSystem.md" >}})
