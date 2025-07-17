---
nav_exclude: true
search_exclude: true
---

# ResolvedSectionEntity

```csharp
public struct ResolvedSectionEntity
{
	static ResolvedSectionEntity()
	{
		Il2CppClassPointerStore<ResolvedSectionEntity>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "ResolvedSectionEntity");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<ResolvedSectionEntity>.NativeClassPtr);
		ResolvedSectionEntity.NativeFieldInfoPtr_SectionEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<ResolvedSectionEntity>.NativeClassPtr, "SectionEntity");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<ResolvedSectionEntity>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_SectionEntity;

	public Entity SectionEntity;
}
```
