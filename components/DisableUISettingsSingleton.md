---
nav_exclude: true
search_exclude: true
---

# DisableUISettingsSingleton

```csharp
[StructLayout(2)]
public struct DisableUISettingsSingleton
{
	static DisableUISettingsSingleton()
	{
		Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.Shared.dll", "ProjectM.UI", "DisableUISettingsSingleton");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr);
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideHUD = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideHUD");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideCharacterHUDs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideCharacterHUDs");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideMinimap = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideMinimap");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideEdgeIcons = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideEdgeIcons");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideAchievements = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideAchievements");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideClan = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideClan");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideReplay = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideReplay");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideSCT = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideSCT");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideLogs = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideLogs");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideMenuLinks = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideMenuLinks");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideWakeupMenu = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideWakeupMenu");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideVersionData = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideVersionData");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideHUDMenus = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideHUDMenus");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideCursor = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideCursor");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideItemTracker = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideItemTracker");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideAbilityBar = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideAbilityBar");
		DisableUISettingsSingleton.NativeFieldInfoPtr_HideOther = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, "HideOther");
		DisableUISettingsSingleton.NativeMethodInfoPtr_CreateFromPlayerSettings_Public_Static_DisableUISettingsSingleton_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, 100669483);
	}
	[CallerCount(2)]
	[CachedScanResults(RefRangeStart = 1118741, RefRangeEnd = 1118743, XrefRangeStart = 1118708, XrefRangeEnd = 1118741, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
	public unsafe static DisableUISettingsSingleton CreateFromPlayerSettings()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(DisableUISettingsSingleton.NativeMethodInfoPtr_CreateFromPlayerSettings_Public_Static_DisableUISettingsSingleton_0, 0, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<DisableUISettingsSingleton>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_HideHUD;
	private static readonly IntPtr NativeFieldInfoPtr_HideCharacterHUDs;
	private static readonly IntPtr NativeFieldInfoPtr_HideMinimap;
	private static readonly IntPtr NativeFieldInfoPtr_HideEdgeIcons;
	private static readonly IntPtr NativeFieldInfoPtr_HideAchievements;
	private static readonly IntPtr NativeFieldInfoPtr_HideClan;
	private static readonly IntPtr NativeFieldInfoPtr_HideReplay;
	private static readonly IntPtr NativeFieldInfoPtr_HideSCT;
	private static readonly IntPtr NativeFieldInfoPtr_HideLogs;
	private static readonly IntPtr NativeFieldInfoPtr_HideMenuLinks;
	private static readonly IntPtr NativeFieldInfoPtr_HideWakeupMenu;
	private static readonly IntPtr NativeFieldInfoPtr_HideVersionData;
	private static readonly IntPtr NativeFieldInfoPtr_HideHUDMenus;
	private static readonly IntPtr NativeFieldInfoPtr_HideCursor;
	private static readonly IntPtr NativeFieldInfoPtr_HideItemTracker;
	private static readonly IntPtr NativeFieldInfoPtr_HideAbilityBar;
	private static readonly IntPtr NativeFieldInfoPtr_HideOther;
	private static readonly IntPtr NativeMethodInfoPtr_CreateFromPlayerSettings_Public_Static_DisableUISettingsSingleton_0;
	[FieldOffset(0)]
	[MarshalAs(4)]
	public bool HideHUD;
	[FieldOffset(1)]
	[MarshalAs(4)]
	public bool HideCharacterHUDs;
	[FieldOffset(2)]
	[MarshalAs(4)]
	public bool HideMinimap;
	[FieldOffset(3)]
	[MarshalAs(4)]
	public bool HideEdgeIcons;
	[FieldOffset(4)]
	[MarshalAs(4)]
	public bool HideAchievements;
	[FieldOffset(5)]
	[MarshalAs(4)]
	public bool HideClan;
	[FieldOffset(6)]
	[MarshalAs(4)]
	public bool HideReplay;
	[FieldOffset(7)]
	[MarshalAs(4)]
	public bool HideSCT;
	[FieldOffset(8)]
	[MarshalAs(4)]
	public bool HideLogs;
	[FieldOffset(9)]
	[MarshalAs(4)]
	public bool HideMenuLinks;
	[FieldOffset(10)]
	[MarshalAs(4)]
	public bool HideWakeupMenu;
	[FieldOffset(11)]
	[MarshalAs(4)]
	public bool HideVersionData;
	[FieldOffset(12)]
	[MarshalAs(4)]
	public bool HideHUDMenus;
	[FieldOffset(13)]
	[MarshalAs(4)]
	public bool HideCursor;
	[FieldOffset(14)]
	[MarshalAs(4)]
	public bool HideItemTracker;
	[FieldOffset(15)]
	[MarshalAs(4)]
	public bool HideAbilityBar;
	[FieldOffset(16)]
	[MarshalAs(4)]
	public bool HideOther;
}
