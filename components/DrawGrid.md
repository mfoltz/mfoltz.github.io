---
nav_exclude: true
search_exclude: true
---

# DrawGrid

```csharp
[StructLayout(2)]
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
	[FieldOffset(0)]
	public BoundsMinMax BoundsTileSpace;
	[FieldOffset(16)]
	public float3 Position;
	[FieldOffset(28)]
	public float3 FadeOutPosition;
	[FieldOffset(40)]
	public float FadeOutRadius;
	[FieldOffset(44)]
	public TileShaderSettings CustomSettings;
	[FieldOffset(88)]
	[MarshalAs(4)]
	public bool HasCustomSettings;
	[FieldOffset(89)]
	[MarshalAs(4)]
	public bool UseFadeOut;
	[FieldOffset(90)]
	[MarshalAs(4)]
	public bool DisableGrid;
	[FieldOffset(91)]
	[MarshalAs(4)]
	public bool SnapToHeightLevel;
}
