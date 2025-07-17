---
nav_exclude: true
search_exclude: true
---

# MapIconData

```csharp
[StructLayout(2)]
public struct MapIconData
{
	static MapIconData()
	{
		Il2CppClassPointerStore<MapIconData>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM", "MapIconData");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<MapIconData>.NativeClassPtr);
		MapIconData.NativeFieldInfoPtr_HeaderLocalizedKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "HeaderLocalizedKey");
		MapIconData.NativeFieldInfoPtr_SubHeaderLocalizedKey = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "SubHeaderLocalizedKey");
		MapIconData.NativeFieldInfoPtr_RenderOrder = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "RenderOrder");
		MapIconData.NativeFieldInfoPtr_TargetUser = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "TargetUser");
		MapIconData.NativeFieldInfoPtr_IsSiegeWeapon = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "IsSiegeWeapon");
		MapIconData.NativeFieldInfoPtr_ShowOnMinimap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "ShowOnMinimap");
		MapIconData.NativeFieldInfoPtr_ClampOnMinimap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "ClampOnMinimap");
		MapIconData.NativeFieldInfoPtr_ShowOutsideVision = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "ShowOutsideVision");
		MapIconData.NativeFieldInfoPtr_RequiresReveal = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "RequiresReveal");
		MapIconData.NativeFieldInfoPtr_CustomImplementation = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "CustomImplementation");
		MapIconData.NativeFieldInfoPtr_AllySetting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "AllySetting");
		MapIconData.NativeFieldInfoPtr_EnemySetting = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, "EnemySetting");
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<MapIconData>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HeaderLocalizedKey;
	private static readonly IntPtr NativeFieldInfoPtr_SubHeaderLocalizedKey;
	private static readonly IntPtr NativeFieldInfoPtr_RenderOrder;
	private static readonly IntPtr NativeFieldInfoPtr_TargetUser;
	private static readonly IntPtr NativeFieldInfoPtr_IsSiegeWeapon;
	private static readonly IntPtr NativeFieldInfoPtr_ShowOnMinimap;
	private static readonly IntPtr NativeFieldInfoPtr_ClampOnMinimap;
	private static readonly IntPtr NativeFieldInfoPtr_ShowOutsideVision;
	private static readonly IntPtr NativeFieldInfoPtr_RequiresReveal;
	private static readonly IntPtr NativeFieldInfoPtr_CustomImplementation;
	private static readonly IntPtr NativeFieldInfoPtr_AllySetting;
	private static readonly IntPtr NativeFieldInfoPtr_EnemySetting;
	[FieldOffset(0)]
	public LocalizationKey HeaderLocalizedKey;
	[FieldOffset(16)]
	public LocalizationKey SubHeaderLocalizedKey;
	[FieldOffset(32)]
	public int RenderOrder;
	[FieldOffset(36)]
	public Entity TargetUser;
	[FieldOffset(44)]
	[MarshalAs(4)]
	public bool IsSiegeWeapon;
	[FieldOffset(45)]
	[MarshalAs(4)]
	public bool ShowOnMinimap;
	[FieldOffset(46)]
	[MarshalAs(4)]
	public bool ClampOnMinimap;
	[FieldOffset(47)]
	[MarshalAs(4)]
	public bool ShowOutsideVision;
	[FieldOffset(48)]
	[MarshalAs(4)]
	public bool RequiresReveal;
	[FieldOffset(49)]
	[MarshalAs(4)]
	public bool CustomImplementation;
	[FieldOffset(50)]
	public MapIconShowSettings AllySetting;
	[FieldOffset(51)]
	public MapIconShowSettings EnemySetting;
}
