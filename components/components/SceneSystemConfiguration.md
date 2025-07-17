---
nav_exclude: true
search_exclude: true
---

# SceneSystemConfiguration

```csharp
[StructLayout(2)]
public struct SceneSystemConfiguration
{
	static SceneSystemConfiguration()
	{
		Il2CppClassPointerStore<SceneSystemConfiguration>.NativeClassPtr = IL2CPP.GetIl2CppClass("Unity.Scenes.dll", "Unity.Scenes", "SceneSystemConfiguration");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<SceneSystemConfiguration>.NativeClassPtr);
		SceneSystemConfiguration.NativeFieldInfoPtr_AsyncStreamingWorldCount = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSystemConfiguration>.NativeClassPtr, "AsyncStreamingWorldCount");
		SceneSystemConfiguration.NativeFieldInfoPtr_EnableSynchronousStreaming = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSystemConfiguration>.NativeClassPtr, "EnableSynchronousStreaming");
		SceneSystemConfiguration.NativeFieldInfoPtr_AsynchronousStreamingWorldAllocationConfig = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSystemConfiguration>.NativeClassPtr, "AsynchronousStreamingWorldAllocationConfig");
		SceneSystemConfiguration.NativeFieldInfoPtr_SynchronousStreamingWorldAllocationConfig = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<SceneSystemConfiguration>.NativeClassPtr, "SynchronousStreamingWorldAllocationConfig");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<SceneSystemConfiguration>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_AsyncStreamingWorldCount;
	private static readonly IntPtr NativeFieldInfoPtr_EnableSynchronousStreaming;
	private static readonly IntPtr NativeFieldInfoPtr_AsynchronousStreamingWorldAllocationConfig;
	private static readonly IntPtr NativeFieldInfoPtr_SynchronousStreamingWorldAllocationConfig;
	[FieldOffset(0)]
	public int AsyncStreamingWorldCount;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool EnableSynchronousStreaming;
	[FieldOffset(8)]
	public WorldAllocationConfig AsynchronousStreamingWorldAllocationConfig;
	[FieldOffset(20)]
	public WorldAllocationConfig SynchronousStreamingWorldAllocationConfig;
}
