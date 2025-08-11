---
nav_exclude: true
search_exclude: true
---

# WallpaperWallSelection

```csharp
public struct WallpaperWallSelection
{
	static WallpaperWallSelection()
	{
		Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr = IL2CPP.GetIl2CppClass("ProjectM.HUD.dll", "ProjectM.UI", "WallpaperWallSelection");
		IL2CPP.il2cpp_runtime_class_init(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr);
		WallpaperWallSelection.NativeFieldInfoPtr_Block = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr, "Block");
		WallpaperWallSelection.NativeFieldInfoPtr_Direction = IL2CPP.GetIl2CppField(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr, "Direction");
		WallpaperWallSelection.NativeMethodInfoPtr__ctor_Public_Void_CastleWallBlock_CardinalDirection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr, 100665736);
		WallpaperWallSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WallpaperWallSelection_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr, 100665737);
		WallpaperWallSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr, 100665738);
		WallpaperWallSelection.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0 = IL2CPP.GetIl2CppMethodByToken(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr, 100665739);
	}

	public unsafe WallpaperWallSelection(CastleWallBlock block, CardinalDirection direction)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)2) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref block;
		ptr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr)) / (UIntPtr)sizeof(IntPtr)] = ref direction;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperWallSelection.NativeMethodInfoPtr__ctor_Public_Void_CastleWallBlock_CardinalDirection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
	}

	public unsafe bool Equals(WallpaperWallSelection other)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = ref other;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperWallSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WallpaperWallSelection_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override bool Equals(Object obj)
	{
		IntPtr* ptr = stackalloc IntPtr[checked(unchecked((UIntPtr)1) * (UIntPtr)sizeof(IntPtr))];
		*ptr = IL2CPP.Il2CppObjectBaseToPtr(obj);
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperWallSelection.NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}

	public unsafe override int GetHashCode()
	{
		IntPtr* ptr = null;
		IntPtr intPtr2;
		IntPtr intPtr = IL2CPP.il2cpp_runtime_invoke(WallpaperWallSelection.NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0, ref this, (void**)ptr, ref intPtr2);
		Il2CppException.RaiseExceptionIfNecessary(intPtr2);
		return *IL2CPP.il2cpp_object_unbox(intPtr);
	}
	public Object BoxIl2CppObject()
	{
		return new Object(IL2CPP.il2cpp_value_box(Il2CppClassPointerStore<WallpaperWallSelection>.NativeClassPtr, ref this));
	}
	private static readonly IntPtr NativeFieldInfoPtr_Block;
	private static readonly IntPtr NativeFieldInfoPtr_Direction;
	private static readonly IntPtr NativeMethodInfoPtr__ctor_Public_Void_CastleWallBlock_CardinalDirection_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Final_New_Boolean_WallpaperWallSelection_0;
	private static readonly IntPtr NativeMethodInfoPtr_Equals_Public_Virtual_Boolean_Object_0;
	private static readonly IntPtr NativeMethodInfoPtr_GetHashCode_Public_Virtual_Int32_0;

	public CastleWallBlock Block;

	public CardinalDirection Direction;
}
```

## Client Systems

- [BuildMenuWallpaperOperationSystem_Destroy](/systems/client/BuildMenuWallpaperOperationSystem_Destroy)
