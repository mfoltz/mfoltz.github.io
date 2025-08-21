---
nav_exclude: true
search_exclude: true
---

```csharp
public struct RecalculateSurfaceColorsEvent
{
	static RecalculateSurfaceColorsEvent()
	{
		Il2CppClassPointerStore<RecalculateSurfaceColorsEvent>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Terrain.dll", "ProjectM.Terrain", "RecalculateSurfaceColorsEvent");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<RecalculateSurfaceColorsEvent>.NativeClassPtr);
		RecalculateSurfaceColorsEvent.NativeFieldInfoPtr_TargetChunk = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecalculateSurfaceColorsEvent>.NativeClassPtr, "TargetChunk");
		RecalculateSurfaceColorsEvent.NativeFieldInfoPtr_UpdateHeights = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecalculateSurfaceColorsEvent>.NativeClassPtr, "UpdateHeights");
		RecalculateSurfaceColorsEvent.NativeFieldInfoPtr_UpdateControlAndIndexMap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<RecalculateSurfaceColorsEvent>.NativeClassPtr, "UpdateControlAndIndexMap");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<RecalculateSurfaceColorsEvent>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetChunk;
	private static readonly IntPtr NativeFieldInfoPtr_UpdateHeights;
	private static readonly IntPtr NativeFieldInfoPtr_UpdateControlAndIndexMap;

	public TerrainChunk TargetChunk;

	public bool UpdateHeights;

	public bool UpdateControlAndIndexMap;
}
```

## Client Systems

- [UpdateSurfaceTextureSystem]({{% relref "systems/client/UpdateSurfaceTextureSystem.md" %}})
