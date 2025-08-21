---
nav_exclude: true
search_exclude: true
---

```csharp
public struct SceneBoundingVolume
{
	static SceneBoundingVolume()
	{
		Il2CppClassPointerStore<SceneBoundingVolume>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "SceneBoundingVolume");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneBoundingVolume>.NativeClassPtr);
		SceneBoundingVolume.NativeFieldInfoPtr_Value = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneBoundingVolume>.NativeClassPtr, "Value");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneBoundingVolume>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Value;

	public MinMaxAABB Value;
}
```
