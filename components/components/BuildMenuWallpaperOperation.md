---
nav_exclude: true
search_exclude: true
---

# BuildMenuWallpaperOperation

```csharp
[StructLayout(2)]
public struct BuildMenuWallpaperOperation
{
	static BuildMenuWallpaperOperation()
	{
		Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "BuildMenuWallpaperOperation");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr);
		BuildMenuWallpaperOperation.NativeFieldInfoPtr_ParentWallpaperBlueprint = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr, "ParentWallpaperBlueprint");
		BuildMenuWallpaperOperation.NativeFieldInfoPtr_CurrentPreviewedEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr, "CurrentPreviewedEntity");
		BuildMenuWallpaperOperation.NativeFieldInfoPtr_CurrentPreviewedOrientation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr, "CurrentPreviewedOrientation");
		BuildMenuWallpaperOperation.NativeFieldInfoPtr_Issues = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr, "Issues");
		BuildMenuWallpaperOperation.NativeFieldInfoPtr_VariationIndex = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr, "VariationIndex");
		BuildMenuWallpaperOperation.NativeFieldInfoPtr_Active = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr, "Active");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<BuildMenuWallpaperOperation>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_ParentWallpaperBlueprint;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentPreviewedEntity;
	private static readonly IntPtr NativeFieldInfoPtr_CurrentPreviewedOrientation;
	private static readonly IntPtr NativeFieldInfoPtr_Issues;
	private static readonly IntPtr NativeFieldInfoPtr_VariationIndex;
	private static readonly IntPtr NativeFieldInfoPtr_Active;
	[FieldOffset(0)]
	public PrefabGUID ParentWallpaperBlueprint;
	[FieldOffset(4)]
	public Entity CurrentPreviewedEntity;
	[FieldOffset(12)]
	public WallpaperOrientation CurrentPreviewedOrientation;
	[FieldOffset(16)]
	public BuildMenuWallpaperOperationIssues Issues;
	[FieldOffset(20)]
	public byte VariationIndex;
	[FieldOffset(21)]
	[MarshalAs(4)]
	public bool Active;
}
