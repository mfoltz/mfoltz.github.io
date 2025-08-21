---
nav_exclude: true
search_exclude: true
---

```csharp
public struct DisableHeightCorrectionDuringCastModificationData
{
	static DisableHeightCorrectionDuringCastModificationData()
	{
		Il2CppClassPointerStore<DisableHeightCorrectionDuringCastModificationData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "DisableHeightCorrectionDuringCastModificationData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableHeightCorrectionDuringCastModificationData>.NativeClassPtr);
		DisableHeightCorrectionDuringCastModificationData.NativeFieldInfoPtr_DisableHeightCorrectionId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableHeightCorrectionDuringCastModificationData>.NativeClassPtr, "DisableHeightCorrectionId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableHeightCorrectionDuringCastModificationData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_DisableHeightCorrectionId;

	public ModificationId DisableHeightCorrectionId;
}
```

## Server Systems

- [AbilityDisableHeightCorrectionSystem_OnDestroy]({{% relref "systems/server/AbilityDisableHeightCorrectionSystem_OnDestroy.md" %}})

## Client Systems

- [AbilityDisableHeightCorrectionSystem_OnDestroy]({{% relref "systems/client/AbilityDisableHeightCorrectionSystem_OnDestroy.md" %}})
