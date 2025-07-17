---
nav_exclude: true
search_exclude: true
---

# SceneSystemData

```csharp
[StructLayout(2)]
public struct SceneSystemData
{
	static SceneSystemData()
	{
		Il2CppClassPointerStore<SceneSystemData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "SceneSystemData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneSystemData>.NativeClassPtr);
		SceneSystemData.NativeFieldInfoPtr_BuildConfigurationGUID = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSystemData>.NativeClassPtr, "BuildConfigurationGUID");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneSystemData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BuildConfigurationGUID;
	[FieldOffset(0)]
	public Hash128 BuildConfigurationGUID;
}
