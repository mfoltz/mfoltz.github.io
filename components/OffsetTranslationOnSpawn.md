---
nav_exclude: true
search_exclude: true
---

# OffsetTranslationOnSpawn

```csharp
public struct OffsetTranslationOnSpawn
{
	static OffsetTranslationOnSpawn()
	{
		Il2CppClassPointerStore<OffsetTranslationOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "OffsetTranslationOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<OffsetTranslationOnSpawn>.NativeClassPtr);
		OffsetTranslationOnSpawn.NativeFieldInfoPtr_Offset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<OffsetTranslationOnSpawn>.NativeClassPtr, "Offset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<OffsetTranslationOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Offset;

	public float3 Offset;
}
```

## Server Systems

- [OffsetTranslationOnSpawnSystem](/systems/server/OffsetTranslationOnSpawnSystem)
