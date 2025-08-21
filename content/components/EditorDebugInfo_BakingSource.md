---
nav_exclude: true
search_exclude: true
---

```csharp
public struct EditorDebugInfo_BakingSource
{
	static EditorDebugInfo_BakingSource()
	{
		Il2CppClassPointerStore<EditorDebugInfo_BakingSource>.NativeClassPtr = IL2CPP.GetIl2CppClass("Stunlock.Core.dll", "Stunlock.Core", "EditorDebugInfo_BakingSource");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<EditorDebugInfo_BakingSource>.NativeClassPtr);
		EditorDebugInfo_BakingSource.NativeFieldInfoPtr_BakedFromScene = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<EditorDebugInfo_BakingSource>.NativeClassPtr, "BakedFromScene");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<EditorDebugInfo_BakingSource>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BakedFromScene;

	public AssetGuid BakedFromScene;
}
```
