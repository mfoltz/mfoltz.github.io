---
nav_exclude: true
search_exclude: true
---

```csharp
public struct LoadSubSceneOnStartup
{
	static LoadSubSceneOnStartup()
	{
		Il2CppClassPointerStore<LoadSubSceneOnStartup>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.Terrain", "LoadSubSceneOnStartup");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<LoadSubSceneOnStartup>.NativeClassPtr);
		LoadSubSceneOnStartup.NativeFieldInfoPtr_LoadFullScene = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadSubSceneOnStartup>.NativeClassPtr, "LoadFullScene");
		LoadSubSceneOnStartup.NativeFieldInfoPtr_WaitForSceneLoadOnStartup = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<LoadSubSceneOnStartup>.NativeClassPtr, "WaitForSceneLoadOnStartup");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<LoadSubSceneOnStartup>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_LoadFullScene;
	private static readonly IntPtr NativeFieldInfoPtr_WaitForSceneLoadOnStartup;

	public bool LoadFullScene;

	public bool WaitForSceneLoadOnStartup;
}
```
