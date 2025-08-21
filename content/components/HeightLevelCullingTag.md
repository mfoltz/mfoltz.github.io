---
nav_exclude: true
search_exclude: true
---

```csharp
public struct HeightLevelCullingTag
{
	static HeightLevelCullingTag()
	{
		Il2CppClassPointerStore<HeightLevelCullingTag>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "HeightLevelCullingTag");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<HeightLevelCullingTag>.NativeClassPtr);
		HeightLevelCullingTag.NativeFieldInfoPtr_HeightOffset = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<HeightLevelCullingTag>.NativeClassPtr, "HeightOffset");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<HeightLevelCullingTag>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeightOffset;

	public int HeightOffset;
}
```
