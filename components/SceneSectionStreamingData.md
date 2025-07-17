---
nav_exclude: true
search_exclude: true
---

# SceneSectionStreamingData

```csharp
[StructLayout(2)]
public struct SceneSectionStreamingData
{
	static SceneSectionStreamingData()
	{
		Il2CppClassPointerStore<SceneSectionStreamingData>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "SceneSectionStreamingData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneSectionStreamingData>.NativeClassPtr);
		SceneSectionStreamingData.NativeFieldInfoPtr_m_NestedScenes = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionStreamingData>.NativeClassPtr, "m_NestedScenes");
		SceneSectionStreamingData.NativeFieldInfoPtr_m_SceneFilter = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSectionStreamingData>.NativeClassPtr, "m_SceneFilter");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneSectionStreamingData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_m_NestedScenes;
	private static readonly IntPtr NativeFieldInfoPtr_m_SceneFilter;
	[FieldOffset(0)]
	public EntityQuery m_NestedScenes;
	[FieldOffset(16)]
	public EntityQuery m_SceneFilter;
}
