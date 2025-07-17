---
nav_exclude: true
search_exclude: true
---

# Wallpaper_Client_270

```csharp
public struct Wallpaper_Client_270
{
	static Wallpaper_Client_270()
	{
		Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Wallpaper_Client_270");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr);
		Wallpaper_Client_270.NativeFieldInfoPtr_Current = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, "Current");
		Wallpaper_Client_270.NativeFieldInfoPtr_Override = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, "Override");
		Wallpaper_Client_270.NativeFieldInfoPtr_WallpaperEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, "WallpaperEntity");
		Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Current_Private_Virtual_Final_New_get_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, 100676789);
		Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Current_Private_Virtual_Final_New_set_Void_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, 100676790);
		Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Override_Private_Virtual_Final_New_get_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, 100676791);
		Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Override_Private_Virtual_Final_New_set_Void_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, 100676792);
		Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_WallpaperEntity_Private_Virtual_Final_New_get_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, 100676793);
		Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_WallpaperEntity_Private_Virtual_Final_New_set_Void_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, 100676794);
	}
	public unsafe WallpaperDescription Current
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Current_Private_Virtual_Final_New_get_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Current_Private_Virtual_Final_New_set_Void_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe WallpaperDescription Override
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Override_Private_Virtual_Final_New_get_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Override_Private_Virtual_Final_New_set_Void_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe Entity WallpaperEntity
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_WallpaperEntity_Private_Virtual_Final_New_get_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_270.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_WallpaperEntity_Private_Virtual_Final_New_set_Void_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Wallpaper_Client_270>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Current;
	private static readonly IntPtr NativeFieldInfoPtr_Override;
	private static readonly IntPtr NativeFieldInfoPtr_WallpaperEntity;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Current_Private_Virtual_Final_New_get_WallpaperDescription_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Current_Private_Virtual_Final_New_set_Void_WallpaperDescription_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Override_Private_Virtual_Final_New_get_WallpaperDescription_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Override_Private_Virtual_Final_New_set_Void_WallpaperDescription_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_WallpaperEntity_Private_Virtual_Final_New_get_Entity_0;
	private static readonly IntPtr NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_WallpaperEntity_Private_Virtual_Final_New_set_Void_Entity_0;

	public WallpaperDescription Current;

	public WallpaperDescription Override;

	public Entity WallpaperEntity;
}
```
