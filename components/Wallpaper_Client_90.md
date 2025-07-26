# Wallpaper_Client_90

```csharp
[StructLayout(2)]
public struct Wallpaper_Client_90
{
	static Wallpaper_Client_90()
	{
		Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.dll", "ProjectM", "Wallpaper_Client_90");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr);
		Wallpaper_Client_90.NativeFieldInfoPtr_Current = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, "Current");
		Wallpaper_Client_90.NativeFieldInfoPtr_Override = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, "Override");
		Wallpaper_Client_90.NativeFieldInfoPtr_WallpaperEntity = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, "WallpaperEntity");
		Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Current_Private_Virtual_Final_New_get_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, 100676777);
		Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Current_Private_Virtual_Final_New_set_Void_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, 100676778);
		Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Override_Private_Virtual_Final_New_get_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, 100676779);
		Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Override_Private_Virtual_Final_New_set_Void_WallpaperDescription_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, 100676780);
		Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_WallpaperEntity_Private_Virtual_Final_New_get_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, 100676781);
		Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_WallpaperEntity_Private_Virtual_Final_New_set_Void_Entity_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, 100676782);
	}
	public unsafe WallpaperDescription Current
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Current_Private_Virtual_Final_New_get_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(834)]
		[CachedScanResults(RefRangeStart = 194498, RefRangeEnd = 195332, XrefRangeStart = 194498, XrefRangeEnd = 195332, MetadataInitTokenRva = 0L, MetadataInitFlagRva = 0L)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Current_Private_Virtual_Final_New_set_Void_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe WallpaperDescription Override
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_Override_Private_Virtual_Final_New_get_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_Override_Private_Virtual_Final_New_set_Void_WallpaperDescription_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public unsafe Entity WallpaperEntity
	{
		[CallerCount(0)]
		get
		{
			IntPtr* ptr = null;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_get_WallpaperEntity_Private_Virtual_Final_New_get_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
			return *IL2CPP.il2cpp_object_unbox(intPtr);
		}
		[CallerCount(0)]
		set
		{
			IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
			*ptr = ref value;
			IntPtr intPtr2;
			IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(Wallpaper_Client_90.NativeMethodInfoPtr_ProjectM_IClientWallpaper_set_WallpaperEntity_Private_Virtual_Final_New_set_Void_Entity_0, ref this, (void**)ptr, ref intPtr2);
			Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		}
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<Wallpaper_Client_90>.NativeClassPtr, ref this));
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
	[FieldOffset(0)]
	public WallpaperDescription Current;
	[FieldOffset(2)]
	public WallpaperDescription Override;
	[FieldOffset(4)]
	public Entity WallpaperEntity;
}
