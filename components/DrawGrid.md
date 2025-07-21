---
nav_exclude: true
search_exclude: false
---

# DrawGrid

```csharp
public struct DrawGrid
{
	static DrawGrid()
	{
		Il2CppClassPointerStore<DrawGrid>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "DrawGrid");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr);
		DrawGrid.NativeFieldInfoPtr_BoundsTileSpace = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "BoundsTileSpace");
		DrawGrid.NativeFieldInfoPtr_Position = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "Position");
		DrawGrid.NativeFieldInfoPtr_FadeOutPosition = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "FadeOutPosition");
		DrawGrid.NativeFieldInfoPtr_FadeOutRadius = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "FadeOutRadius");
		DrawGrid.NativeFieldInfoPtr_CustomSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "CustomSettings");
		DrawGrid.NativeFieldInfoPtr_HasCustomSettings = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "HasCustomSettings");
		DrawGrid.NativeFieldInfoPtr_UseFadeOut = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "UseFadeOut");
		DrawGrid.NativeFieldInfoPtr_DisableGrid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "DisableGrid");
		DrawGrid.NativeFieldInfoPtr_SnapToHeightLevel = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, "SnapToHeightLevel");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DrawGrid>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_BoundsTileSpace;
	private static readonly IntPtr NativeFieldInfoPtr_Position;
	private static readonly IntPtr NativeFieldInfoPtr_FadeOutPosition;
	private static readonly IntPtr NativeFieldInfoPtr_FadeOutRadius;
	private static readonly IntPtr NativeFieldInfoPtr_CustomSettings;
	private static readonly IntPtr NativeFieldInfoPtr_HasCustomSettings;
	private static readonly IntPtr NativeFieldInfoPtr_UseFadeOut;
	private static readonly IntPtr NativeFieldInfoPtr_DisableGrid;
	private static readonly IntPtr NativeFieldInfoPtr_SnapToHeightLevel;

	public BoundsMinMax BoundsTileSpace;

	public float3 Position;

	public float3 FadeOutPosition;

	public float FadeOutRadius;

	public TileShaderSettings CustomSettings;

	public bool HasCustomSettings;

	public bool UseFadeOut;

	public bool DisableGrid;

	public bool SnapToHeightLevel;
}
```

## Client Systems

- [DrawColoredGridSystem](/systems/client/DrawColoredGridSystem)
- [ShowBuildGridSystem](/systems/client/ShowBuildGridSystem)
- [ShowTileCollisionHistorySystem](/systems/client/ShowTileCollisionHistorySystem)
- [ShowTileCollisionHistorySystem_Client](/systems/client/ShowTileCollisionHistorySystem_Client)
