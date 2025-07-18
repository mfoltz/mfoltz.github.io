---
nav_exclude: true
search_exclude: true
---

# RecalculateSurfaceTypesEvent

```csharp
public struct RecalculateSurfaceTypesEvent
{
	static RecalculateSurfaceTypesEvent()
	{
		Il2CppClassPointerStore<RecalculateSurfaceTypesEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "RecalculateSurfaceTypesEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecalculateSurfaceTypesEvent>.NativeClassPtr);
		RecalculateSurfaceTypesEvent.NativeFieldInfoPtr_TargetChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecalculateSurfaceTypesEvent>.NativeClassPtr, "TargetChunk");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecalculateSurfaceTypesEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetChunk;

	public TerrainChunk TargetChunk;
}
```

## Client Systems

- [SurfaceTypeUpdateSystem](/systems/client/SurfaceTypeUpdateSystem)
