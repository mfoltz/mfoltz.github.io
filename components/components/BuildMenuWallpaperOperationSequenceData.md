---
nav_exclude: true
search_exclude: true
---

# BuildMenuWallpaperOperationSequenceData

```csharp
[StructLayout(2)]
public struct BuildMenuWallpaperOperationSequenceData
{
	static BuildMenuWallpaperOperationSequenceData()
	{
		Il2CppClassPointerStore<BuildMenuWallpaperOperationSequenceData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "BuildMenuWallpaperOperationSequenceData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildMenuWallpaperOperationSequenceData>.NativeClassPtr);
		BuildMenuWallpaperOperationSequenceData.NativeFieldInfoPtr_TargetEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperationSequenceData>.NativeClassPtr, "TargetEntity");
		BuildMenuWallpaperOperationSequenceData.NativeFieldInfoPtr_Orientation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperationSequenceData>.NativeClassPtr, "Orientation");
		BuildMenuWallpaperOperationSequenceData.NativeFieldInfoPtr_IsValid = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperationSequenceData>.NativeClassPtr, "IsValid");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildMenuWallpaperOperationSequenceData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_TargetEntity;
	private static readonly IntPtr NativeFieldInfoPtr_Orientation;
	private static readonly IntPtr NativeFieldInfoPtr_IsValid;
	[FieldOffset(0)]
	public Entity TargetEntity;
	[FieldOffset(8)]
	public WallpaperOrientation Orientation;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool IsValid;
}
