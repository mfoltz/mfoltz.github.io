---
nav_exclude: true
search_exclude: true
---

# Translation

```csharp
public struct Translation
{
	static Translation()
	{
		Il2CppClassPointerStore<Translation>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Entities.dll", "Unity.Transforms", "Translation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Translation>.NativeClassPtr);
		Translation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Translation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Translation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```

## Server Systems

- [ProjectM.Gameplay.Systems.GetTranslationAlongPatrolOnSpawnSystem](/systems/ProjectM.Gameplay.Systems.GetTranslationAlongPatrolOnSpawnSystem)
- [ProjectM.Gameplay.Systems.OffsetTranslationOnSpawnSystem](/systems/ProjectM.Gameplay.Systems.OffsetTranslationOnSpawnSystem)
- [ProjectM.HeightCorrectionSystem](/systems/ProjectM.HeightCorrectionSystem)
- [ProjectM.MountBuffSpawnSystem_Server](/systems/ProjectM.MountBuffSpawnSystem_Server)
- [ProjectM.ProjectileSystem](/systems/ProjectM.ProjectileSystem)
- [ProjectM.SpellMovementSystem_Spawn](/systems/ProjectM.SpellMovementSystem_Spawn)
- [ProjectM.SpellMovementSystem_Update](/systems/ProjectM.SpellMovementSystem_Update)
