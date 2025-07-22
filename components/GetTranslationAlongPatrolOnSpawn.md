---
nav_exclude: true
search_exclude: false
---

# GetTranslationAlongPatrolOnSpawn

```csharp
public struct GetTranslationAlongPatrolOnSpawn
{
	static GetTranslationAlongPatrolOnSpawn()
	{
		Il2CppClassPointerStore<GetTranslationAlongPatrolOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GetTranslationAlongPatrolOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetTranslationAlongPatrolOnSpawn>.NativeClassPtr);
		GetTranslationAlongPatrolOnSpawn.NativeFieldInfoPtr_Source = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTranslationAlongPatrolOnSpawn>.NativeClassPtr, "Source");
		GetTranslationAlongPatrolOnSpawn.NativeFieldInfoPtr_Distance = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTranslationAlongPatrolOnSpawn>.NativeClassPtr, "Distance");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetTranslationAlongPatrolOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Source;
	private static readonly IntPtr NativeFieldInfoPtr_Distance;

	public GetTranslationAlongPatrolOnSpawn.SourceEnum Source;

	public float Distance;
	public enum SourceEnum
	{
		Owner,
		Creator,
		BuffTarget,
		SpellTarget
	}
}
```

## Server Systems

- [GetTranslationAlongPatrolOnSpawnSystem](/systems/server/GetTranslationAlongPatrolOnSpawnSystem)
