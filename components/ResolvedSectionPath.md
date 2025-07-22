---
nav_exclude: true
search_exclude: true
---

# ResolvedSectionPath

```csharp
public struct ResolvedSectionPath
{
	static ResolvedSectionPath()
	{
		Il2CppClassPointerStore<ResolvedSectionPath>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "ResolvedSectionPath");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResolvedSectionPath>.NativeClassPtr);
		ResolvedSectionPath.NativeFieldInfoPtr_ScenePath = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResolvedSectionPath>.NativeClassPtr, "ScenePath");
		ResolvedSectionPath.NativeFieldInfoPtr_HybridReferenceId = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResolvedSectionPath>.NativeClassPtr, "HybridReferenceId");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResolvedSectionPath>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ScenePath;
	private static readonly IntPtr NativeFieldInfoPtr_HybridReferenceId;

	public FixedString512Bytes ScenePath;

	public UntypedWeakReferenceId HybridReferenceId;
}
```

## Server Systems

- [SceneSectionStreamingSystem](/systems/server/SceneSectionStreamingSystem)

## Client Systems

- [SceneSectionStreamingSystem](/systems/client/SceneSectionStreamingSystem)
