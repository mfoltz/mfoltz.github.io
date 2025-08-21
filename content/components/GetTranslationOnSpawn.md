---
nav_exclude: true
search_exclude: true
---

```csharp
public struct GetTranslationOnSpawn
{
	static GetTranslationOnSpawn()
	{
		Il2CppClassPointerStore<GetTranslationOnSpawn>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "GetTranslationOnSpawn");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<GetTranslationOnSpawn>.NativeClassPtr);
		GetTranslationOnSpawn.NativeFieldInfoPtr_TranslationSource = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTranslationOnSpawn>.NativeClassPtr, "TranslationSource");
		GetTranslationOnSpawn.NativeFieldInfoPtr_SnapToGround = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<GetTranslationOnSpawn>.NativeClassPtr, "SnapToGround");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<GetTranslationOnSpawn>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TranslationSource;
	private static readonly IntPtr NativeFieldInfoPtr_SnapToGround;

	public GetTranslationSource TranslationSource;

	public bool SnapToGround;
}
```

## Server Systems

- [GetTranslationOnSpawnSystem]({{% relref "systems/server/GetTranslationOnSpawnSystem.md" %}})

## Client Systems

- [GetTranslationOnSpawnSystem_TravelBuff_Client]({{% relref "systems/client/GetTranslationOnSpawnSystem_TravelBuff_Client.md" %}})
