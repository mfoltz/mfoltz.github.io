---
nav_exclude: true
search_exclude: true
---

# Wallpaper_Synced_180

```csharp
[StructLayout(2)]
public struct Wallpaper_Synced_180
{
	static Wallpaper_Synced_180()
	{
		Il2CppClassPointerStore<Wallpaper_Synced_180>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Wallpaper_Synced_180");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Wallpaper_Synced_180>.NativeClassPtr);
		Wallpaper_Synced_180.NativeFieldInfoPtr_Server = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Synced_180>.NativeClassPtr, "Server");
		Wallpaper_Synced_180.NativeMethodInfoPtr_ProjectM_IServerWallpaper_get_Server_Private_Virtual_Final_New_get_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Synced_180>.NativeClassPtr, 100676769);
	}
	public unsafe WallpaperDescription Server
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Synced_180.NativeMethodInfoPtr_ProjectM_IServerWallpaper_get_Server_Private_Virtual_Final_New_get_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Wallpaper_Synced_180>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Server;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IServerWallpaper_get_Server_Private_Virtual_Final_New_get_WallpaperDescription_0;
	[FieldOffset(0)]
	public WallpaperDescription Server;
}
