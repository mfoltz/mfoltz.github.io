---
nav_exclude: true
search_exclude: false
---

# Wallpaper_Client_0

```csharp
public struct Wallpaper_Client_0
{
	static Wallpaper_Client_0()
	{
		Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Wallpaper_Client_0");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr);
		Wallpaper_Client_0.NativeFieldInfoPtr_Current = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, "Current");
		Wallpaper_Client_0.NativeFieldInfoPtr_Override = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, "Override");
		Wallpaper_Client_0.NativeFieldInfoPtr_WallpaperEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, "WallpaperEntity");
		Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Current_Private_Virtual_Final_New_get_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, 100676771);
		Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Current_Private_Virtual_Final_New_set_Void_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, 100676772);
		Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Override_Private_Virtual_Final_New_get_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, 100676773);
		Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Override_Private_Virtual_Final_New_set_Void_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, 100676774);
		Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_WallpaperEntity_Private_Virtual_Final_New_get_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, 100676775);
		Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_WallpaperEntity_Private_Virtual_Final_New_set_Void_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, 100676776);
	}
	public unsafe WallpaperDescription Current
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Current_Private_Virtual_Final_New_get_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Current_Private_Virtual_Final_New_set_Void_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe WallpaperDescription Override
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Override_Private_Virtual_Final_New_get_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Override_Private_Virtual_Final_New_set_Void_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe Entity WallpaperEntity
	{

		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_WallpaperEntity_Private_Virtual_Final_New_get_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}

		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_0.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_WallpaperEntity_Private_Virtual_Final_New_set_Void_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Wallpaper_Client_0>.NativeClassPtr, ref this));
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

## Client Systems

- [DestroyWallpaperChildrenSystem](/systems/client/DestroyWallpaperChildrenSystem)
