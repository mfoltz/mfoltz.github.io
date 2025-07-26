---
nav_exclude: true
search_exclude: true
---

# LastTranslation

```csharp
public struct LastTranslation
{
	static LastTranslation()
	{
		Il2CppClassPointerStore<LastTranslation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "LastTranslation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LastTranslation>.NativeClassPtr);
		LastTranslation.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LastTranslation>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LastTranslation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public float3 Value;
}
```

## Server Systems

- [DashUpdateLastTranslationSystem](/systems/server/DashUpdateLastTranslationSystem)
- [GetTranslationAlongPatrolOnSpawnSystem](/systems/server/GetTranslationAlongPatrolOnSpawnSystem)
- [OffsetTranslationOnSpawnSystem](/systems/server/OffsetTranslationOnSpawnSystem)
- [ProjectileSystem](/systems/server/ProjectileSystem)
- [TravelBuffUpdateLastTranslationSystem](/systems/server/TravelBuffUpdateLastTranslationSystem)

## Client Systems

- [NetworkInterpolationSystem_Client](/systems/client/NetworkInterpolationSystem_Client)
- [ProjectileSystem](/systems/client/ProjectileSystem)
