---
nav_exclude: true
search_exclude: true
---

```csharp
public struct BuildMode
{
	static BuildMode()
	{
		Il2CppClassPointerStore<BuildMode>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM.CastleBuilding", "BuildMode");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildMode>.NativeClassPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildMode>.NativeClassPtr, ref this));
	}
}
```

## Client Systems

- [AdaptiveTriggerSystem]({{% relref "systems/client/AdaptiveTriggerSystem.md" %}})
- [AimDirectionPreviewSystem]({{% relref "systems/client/AimDirectionPreviewSystem.md" %}})
- [AimWorldTargetPreviewSystem]({{% relref "systems/client/AimWorldTargetPreviewSystem.md" %}})
- [ArenaSummaryHUDSystem]({{% relref "systems/client/ArenaSummaryHUDSystem.md" %}})
- [BuildModeSystem]({{% relref "systems/client/BuildModeSystem.md" %}})
- [GameplayInputSystem]({{% relref "systems/client/GameplayInputSystem.md" %}})
- [PickingSystem]({{% relref "systems/client/PickingSystem.md" %}})
- [PreviewPlacementBuffSystem]({{% relref "systems/client/PreviewPlacementBuffSystem.md" %}})
- [SetCharacterHUDSystem]({{% relref "systems/client/SetCharacterHUDSystem.md" %}})
- [TargetInfoParentSystem]({{% relref "systems/client/TargetInfoParentSystem.md" %}})
